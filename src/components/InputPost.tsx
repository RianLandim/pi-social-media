import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { z } from "zod";
import { api } from "~/utils/api";
import { uploadFileToS3 } from "~/utils/uploadToS3";
import { Toggle } from "./ui/toggle";
import { Switch } from "./ui/switch";

const formSchema = z.object({
  description: z.string(),
  file:
    typeof window !== "undefined"
      ? z.custom<File>().optional()
      : z.instanceof(File).optional(),
});
type formSchemaProps = z.infer<typeof formSchema>;

export function InputPost() {
  const [showFile, setShowFile] = useState(false);

  const { register, handleSubmit, reset, control } = useForm<formSchemaProps>({
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
      className={`flex h-full ${
        showFile && "min-h-[14rem]"
      } w-full flex-col space-y-4 rounded-md bg-white p-2`}
    >
      <textarea
        placeholder="No que está pensando?"
        className="h-2/3 w-full resize-none rounded-md p-2"
        {...register("description")}
      />

      <div className="flex w-full flex-row space-x-2">
        <p>Enviar foto</p>
        <Switch
          checked={showFile}
          onCheckedChange={(value) => setShowFile(value)}
        />
      </div>

      {showFile && (
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
      )}
    </form>
  );
}
