import { zodResolver } from "@hookform/resolvers/zod";
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
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-slate-800 p-8 text-white">
       <form
        onSubmit={handleSubmit(submit)}
        className="p-12 bg-black items-center flex flex-col space-y-4 w-96 h-2/3 rounded-lg"
      >
        <img className="rounded-md w-96" src="https://i.imgur.com/BhWGMn1.jpg" alt="logo" />
        <h3 className="text-3xl font-bold">Registre-se em Paperland</h3>
        <div className="w-full">
          <input
            {...register("name")}
            className="w-full rounded-md bg-black p-2 border border-[#8f8f8f]"
            placeholder="Nome"
          />
        </div>
        <div className="w-full">
          <input
            {...register("email")}
            className="w-full rounded-md bg-black p-2 border border-[#8f8f8f]"
            placeholder="Email"
          />
        </div>
        <div className="w-full">
          <input
            {...register("password")}
            className="mb-3 w-full rounded-md bg-black p-2 border border-[#8f8f8f]"
            placeholder="Senha"
            type="password"
          ></input>
        </div>
        <button type="submit" className="w-52 rounded-md bg-[#B20DFF] p-2">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
