import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Eye } from "@phosphor-icons/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";

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
    <main
      className={
        "font-poppins flex h-screen w-screen items-center justify-center bg-slate-800"
      }
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="flex h-2/3 w-2/6 flex-col items-center space-y-4 rounded-lg bg-black p-4"
      >
        <img
          className="rounded-md"
          src='/img/1f758d35-8ead-43c4-aa20-2d0cba26fbea.jpg'
          alt=""
        />
        <div className="flex flex-col space-y-4">
          <h3 className="text-3xl font-bold text-white">Entrar em Paperland</h3>
          <div className="flex w-full flex-row items-center rounded-md border border-white bg-black p-1">
            <input
              className="w-full bg-black p-1 text-white"
              placeholder="Email"
              type="email"
              {...register("email")}
            />
          </div>
          <div className="flex w-full flex-row items-center rounded-md border border-white bg-black p-1">
            <input
              className="w-full rounded-md bg-black p-1 text-white"
              placeholder="Senha"
              type="password"
              {...register("password")}
            />
          </div>
          <div className="flex flex-col items-center space-y-2">
            <button className="w-full rounded-md bg-[#B20DFF] p-2 hover:bg-[#f719be]">
              <span className="font-bold text-white">Entrar</span>
            </button>
            <button className="w-full rounded-md border border-solid p-2 hover:bg-[#333333]">
              <span className="font-bold text-white">Esqueceu a senha?</span>
            </button>
            <span className="text-white">
              Criar conta?{" "}
              <Link className="text-blue-400" href="/auth/registre">
                Inscreva-se
              </Link>
            </span>
          </div>
        </div>
      </form>
    </main>
  );
}
