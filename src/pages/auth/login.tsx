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
    <main className="h-screen bg-slate-800 w-screen flex items-center justify-center">
      <form
        className="p-12 bg-black items-center flex flex-col space-y-4 w-1/3 h-2/3 rounded-lg"
        onSubmit={handleSubmit(submit)}>
        <img src="https://i.imgur.com/BhWGMn1.jpg" alt="" />
        <div className="flex flex-col space-y-4">
        <h3 className="text-3xl text-white font-bold">Entrar em Paperland</h3>
        <div className="w-96 flex flex-row bg-white items-center justify-center rounded-md p-1">
          <input
            className="p-2 w-full"
            placeholder="Email"
            type="email"
            {...register('email')}
          />

        </div>
        <div className="w-96 flex flex-row bg-white items-center justify-center rounded-md p-1">
          <input
            className="w-full p-2 rounded-md"
            placeholder="Senha"
            type='password'
            {...register('password')}
          />
          <Eye size={28} onClick={() => setShowPass(!showPass)} />
        </div>
        <button className="w-96 p-2 bg-[#B20DFF] rounded-md hover:bg-[#f719be]" >
          <span className="text-white font-bold">Entrar</span>
        </button>
        <button className="w-96 p-2 bg- rounded-md border-solid border hover:bg-[#333333]" >
          <span className="text-white font-bold">Esqueceu a senha?</span>
        </button>
        <span className="text-white"> 
          Criar conta? <a className="text-blue-400" href="">Inscreva-se</a> 
        </span>
        </div>
      </form>
    </main>
  )
}