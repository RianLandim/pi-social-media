import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "~/hooks/use-toast";
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

  const { toast } = useToast();
  const router = useRouter();

  const createUserMutation = api.user.create.useMutation({
    onSuccess: () => {
      toast({
        title: "Sucesso",
        description: "Usuário cadastrado com sucesso",
      });

      void router.push("/auth/entrar");
    },
    onError: (error) => {
      toast({
        title: "Erro",
        description: error.message
          ? error.message
          : "Ocorreu um erro ao cadastrar usuário",
        variant: "destructive",
      });
    },
  });

  const submit: SubmitHandler<UserFormSchemaProps> = (data) =>
    createUserMutation.mutate(data);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-slate-800 p-4">
      <h1 className="text-2xl font-bold uppercase text-white">Registre-se</h1>
      <form
        onSubmit={handleSubmit(submit)}
        className="flex w-2/6 flex-col items-center justify-center space-y-4 rounded-md bg-black p-8"
      >
        <div className="w-full">
          <label className="text-white">Nome</label>
          <input
            {...register("name")}
            className="w-full rounded-md bg-white p-2"
          />
        </div>
        <div className="w-full">
          <label className="text-white">Email</label>
          <input
            {...register("email")}
            className="w-full rounded-md bg-white p-2"
          />
        </div>
        <div className="w-full">
          <label className="text-white">Senha</label>
          <input
            {...register("password")}
            className="w-full rounded-md bg-white p-2"
            type="password"
          ></input>
        </div>
        <button type="submit" className="w-full rounded-md bg-blue-500 p-3">
          Cadastrar
        </button>
        <span className="text-sm text-white">
          Já possui cadastro?{" "}
          <Link className="text-sm text-blue-400" href="/auth/entrar">
            Entrar
          </Link>
        </span>
      </form>
    </div>
  );
}
