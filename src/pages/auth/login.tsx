import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Eye } from "@phosphor-icons/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type LoginFormSchemaProps = z.infer<typeof loginFormSchema>;

export default function Login() {
  const [showPass, setShowPass] = useState(false);

  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormSchemaProps>({ resolver: zodResolver(loginFormSchema) });

  const submit: SubmitHandler<LoginFormSchemaProps> = async ({
    email,
    password,
  }) => {
    await signIn("credentials", {
      email,
      password,
      callbackUrl: router.query?.callbackUrl?.toString(),
    });
  };

  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <form
        className="flex h-2/3 w-1/3 flex-col items-center justify-center space-y-4 rounded-lg bg-slate-500 p-12"
        onSubmit={handleSubmit(submit)}
      >
        <h3 className="text-3xl font-bold text-white">Login</h3>
        <div className="flex w-full flex-row items-center justify-center rounded-md bg-white p-1">
          <input
            className="w-full p-2"
            placeholder="Email"
            type="email"
            {...register("email")}
          />
        </div>
        <div className="flex w-full flex-row items-center justify-center rounded-md bg-white p-1">
          <input
            className="w-full rounded-md p-2"
            placeholder="Senha"
            type="password"
            {...register("password")}
          />
          <Eye size={28} onClick={() => setShowPass(!showPass)} />
        </div>
        <button className="w-full rounded-md bg-blue-400 p-2 hover:bg-blue-700">
          <span className="font-bold text-white">Entrar</span>
        </button>
      </form>
    </main>
  );
}
