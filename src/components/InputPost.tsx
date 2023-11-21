import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { api } from "~/utils/api";

const formSchema = z.object({ description: z.string() });
type formSchemaProps = z.infer<typeof formSchema>;

export function InputPost() {
  const { register, handleSubmit, reset } = useForm<formSchemaProps>({
    resolver: zodResolver(formSchema),
    defaultValues: { description: "" },
  });

  const utils = api.useUtils();
  const postSubmitMutation = api.post.create.useMutation();
  const submit: SubmitHandler<formSchemaProps> = (data) => {
    postSubmitMutation.mutate(
      {
        communityId: "clnrvuhce000089r40bijaxln",
        content: data.description,
      },
      {
        onSuccess: () => {
          void utils.post.list.invalidate();
          reset();
        },
      }
    );
  };

  return (
    <div className="flex w-full flex-row gap-4">
      <div className="w-full">
        <input
          className="w-full rounded-lg p-2 pl-3"
          placeholder="Escreva seu post aqui :)"
          {...register("description")}
        />
      </div>
      <button
        onClick={handleSubmit(submit)}
        className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:ring-blue-300"
      >
        Post
      </button>
    </div>
  );
}
