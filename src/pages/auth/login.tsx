import { z } from "zod"
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from "react"
import { Eye } from "@phosphor-icons/react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

type LoginFormSchemaProps = z.infer<typeof loginFormSchema>

export default function Login() {
  const [showPass, setShowPass] = useState(false)

  const router = useRouter()

  const { register, formState: { errors }, handleSubmit } =
    useForm<LoginFormSchemaProps>({ resolver: zodResolver(loginFormSchema) })

  const submit: SubmitHandler<LoginFormSchemaProps> = async ({ email, password }) => {
    await signIn('credentials', {
      email,
      password,
      callbackUrl: router.query?.callbackUrl?.toString()
    })
  }

  return (
    <main className="h-screen w-screen flex items-center justify-center">
      <form
        className="p-12 bg-slate-500 items-center justify-center flex flex-col space-y-4 w-1/3 h-2/3 rounded-lg"
        onSubmit={handleSubmit(submit)}>
        <h3 className="text-3xl text-white font-bold">Login</h3>
        <div className="w-full flex flex-row bg-white items-center justify-center rounded-md p-1">
          <input
            className="p-2 w-full"
            placeholder="Email"
            type="email"
            {...register('email')}
          />

        </div>
        <div className="w-full flex flex-row bg-white items-center justify-center rounded-md p-1">
          <input
            className="w-full p-2 rounded-md"
            placeholder="Senha"
            type='password'
            {...register('password')}
          />
          <Eye size={28} onClick={() => setShowPass(!showPass)} />
        </div>
        <button className="w-full p-2 bg-blue-400 rounded-md hover:bg-blue-700">
          <span className="text-white font-bold">Entrar</span>
        </button>
      </form>
    </main>
  )
}