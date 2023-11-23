import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { InputFile } from "~/components/InputFile";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";

const editUserSchema = z.object({
  name: z.string(),
  email: z.string(),
  avatar: typeof window !== "undefined" ? z.custom<File>() : z.instanceof(File),
});

type EditUserSchemaProps = z.infer<typeof editUserSchema>;

interface EditUserDialogProps {
  open: boolean;
  onChangeUser(user?: string): void;
}

export default function EditUserDialog({
  open,
  onChangeUser,
}: EditUserDialogProps) {
  const { register, handleSubmit, control } = useForm<EditUserSchemaProps>({
    resolver: zodResolver(editUserSchema),
  });

  const submit: SubmitHandler<EditUserSchemaProps> = (data) =>
    console.log(data);

  return (
    <Dialog
      open={open}
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
              />
            )}
          />
        </form>
      </DialogContent>
    </Dialog>
  );
}
