import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { InputFile } from "~/components/InputFile";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { api } from "~/utils/api";
import { uploadFileToS3 } from "~/utils/uploadToS3";

const editUserSchema = z.object({
  name: z.string(),
  email: z.string(),
  avatar: typeof window !== "undefined" ? z.custom<File>() : z.instanceof(File),
});

type EditUserSchemaProps = z.infer<typeof editUserSchema>;

interface EditUserDialogProps {
  userId?: string;
  onChangeUser(user?: string): void;
}

export default function EditUserDialog({
  userId,
  onChangeUser,
}: EditUserDialogProps) {
  const { data } = api.user.listMe.useQuery();

  const { register, handleSubmit, control } = useForm<EditUserSchemaProps>({
    resolver: zodResolver(editUserSchema),
    defaultValues: {
      name: data?.name ?? undefined,
      email: data?.email ?? undefined,
    },
  });

  const editUserMutation = api.user.update.useMutation();

  const submit: SubmitHandler<EditUserSchemaProps> = (data) =>
    editUserMutation.mutate(
      {
        ...data,
        id: userId ?? "",
        avatar: {
          filename: data.avatar.name,
          mimetype: data.avatar.type,
        },
      },
      {
        onSuccess: (presignedPost) => {
          if (presignedPost) {
            uploadFileToS3(data.avatar, presignedPost);
          }
        },
      }
    );

  return (
    <Dialog
      open={!!userId}
      onOpenChange={(open) => {
        if (!open) {
          onChangeUser(undefined);
        }
      }}
    >
      <DialogContent className="bg-black">
        <DialogHeader>
          <DialogTitle className="text-white">Editar Informações</DialogTitle>
          <DialogDescription>
            Altere aqui suas informações pessoais
          </DialogDescription>
        </DialogHeader>
        <form className="flex w-full flex-col items-center justify-center space-y-4">
          <div className="flex w-full flex-row space-x-4">
            <div className="w-full space-y-2">
              <label className="text-white">Nome</label>
              <input
                {...register("name")}
                className="w-full rounded-md bg-white p-2"
              />
            </div>
            <div className="w-full space-y-2">
              <label className="text-white">Email</label>
              <input
                {...register("email")}
                type="email"
                className="w-full rounded-md bg-white p-2"
              />
            </div>
          </div>
          <Controller
            control={control}
            name="avatar"
            render={({ field: { value, onChange } }) => (
              <InputFile
                placeholder="Anexe o avatar"
                value={value}
                onChange={onChange}
                name="avatar"
                avatarFrame
              />
            )}
          />

          <Button onClick={handleSubmit(submit)}>Salvar</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
