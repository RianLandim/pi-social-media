import { zodResolver } from "@hookform/resolvers/zod";
import { Eye } from "@phosphor-icons/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { api } from "~/utils/api";

const userFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8, "Minimo 8 caracteres"),
});

type UserFormSchemaProps = z.infer<typeof userFormSchema>;

export default function Register() {
  const { register, handleSubmit } = useForm<UserFormSchemaProps>({
    resolver: zodResolver(userFormSchema),
  });

  const createUserMutation = api.user.create.useMutation();

  const submit: SubmitHandler<UserFormSchemaProps> = (data) =>
    createUserMutation.mutate(data);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-slate-400 p-8">
      <h1 className="text-2xl font-bold uppercase text-white">Registre-se</h1>
      <form
        onSubmit={handleSubmit(submit)}
        className="flex flex-col items-center justify-center space-y-4 rounded-md bg-slate-200 p-8"
      >
        <div>
          <label>Nome</label>
          <input
            {...register("name")}
            className="w-full rounded-md bg-white p-2"
          />
        </div>
        <div>
          <label>Email</label>
          <input
            {...register("email")}
            className="w-full rounded-md bg-white p-2"
          />
        </div>
        <div>
          <label>Senha</label>
          <input
            {...register("password")}
            className="w-full rounded-md bg-white p-2"
            type="password"
          ></input>
        </div>
        <button type="submit" className="w-full rounded-md bg-blue-500 p-2">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
