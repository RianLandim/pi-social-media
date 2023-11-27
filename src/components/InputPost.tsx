import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { text } from "stream/consumers";
import { z } from "zod";
import { api } from "~/utils/api";
import { ToggleGroup } from "./ui/toggle-group";
import { Toggle } from "./ui/toggle";
import { Paperclip } from "@phosphor-icons/react";

const formSchema = z.object({ description: z.string() });
type formSchemaProps = z.infer<typeof formSchema>;

export function InputPost() {
  const { register, handleSubmit, reset } = useForm<formSchemaProps>({
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
    <div className="h-full min-h-min w-full rounded-md bg-white">
      <textarea
        placeholder="No que está pensando?"
        className="h-full w-full resize-none rounded-md p-2"
      />
      <input type="file" />
    </div>
  );
}
