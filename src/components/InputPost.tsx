import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { z } from "zod";
import { api } from "~/utils/api";
import { uploadFileToS3 } from "~/utils/uploadToS3";

const formSchema = z.object({
  description: z.string(),
  file:
    typeof window !== "undefined"
      ? z.custom<File>().optional()
      : z.instanceof(File).optional(),
});
type formSchemaProps = z.infer<typeof formSchema>;

export function InputPost() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<formSchemaProps>({
    resolver: zodResolver(formSchema),
    defaultValues: { description: "" },
  });

  const utils = api.useContext();
  const postSubmitMutation = api.post.create.useMutation();
  const submit: SubmitHandler<formSchemaProps> = (data) => {
    postSubmitMutation.mutate(
      {
        communityId: "clnrvuhce000089r40bijaxln",
        content: data.description,
        file: data.file
          ? { filename: data.file.name, mimetype: data.file.type }
          : undefined,
      },
      {
        onSuccess: (presignedPost) => {
          if (presignedPost && data.file) {
            uploadFileToS3(data.file, presignedPost);
          }
          void utils.post.list.invalidate();
          reset();
        },
      }
    );
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="h-full min-h-min w-full rounded-md bg-white"
    >
      <input
        placeholder="No que está pensando?"
        className="h-full w-full resize-none rounded-md p-2"
        {...register("description")}
      />
      <Controller
        control={control}
        name="file"
        render={({ field: { onChange } }) => (
          <input
            type="file"
            onChange={({ target }) => onChange(target.files?.[0])}
          />
        )}
      />
    </form>
  );
}
