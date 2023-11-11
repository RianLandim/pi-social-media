import MainLayout, { getMainLayout } from "~/layout/MainLayout";
import { NextPageWithLayout } from "../_app";
import Link from "next/link";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from '../../components/Button';
import { api } from "~/utils/api";
import { Input } from "~/components/Input";


const ChangePasswordValidationSchema = z.object({
  password: z.string().min(1, 'Senha Obrigatória'),
  password_confirm: z.string().min(1, 'Senha Obrigatória')
}).superRefine((val, ctx) => {
  if (val.password !== val.password_confirm) {
    ctx.addIssue({
      code: 'custom',
      message: 'As senhas diferem!',
      path: ['password_confirm']
    })
  }
})

type Change_PasswordFormData = z.infer<typeof ChangePasswordValidationSchema>

const Settings: NextPageWithLayout = () => {

  const { handleSubmit, register, formState: { errors } } =
    useForm<Change_PasswordFormData>({
      resolver: zodResolver(ChangePasswordValidationSchema),
      defaultValues: {
        password: '',
        password_confirm: ''
      }
    })

  const ChangePasswordMutation = api.user.update.useMutation()

  function submit(data: Change_PasswordFormData) {
    const { password } = data
    
    try {
      ChangePasswordMutation.mutate({id: '', password: data.password})
      console.log("OK")
      
        // Console log para testes
        console.log(data)

      } catch (error) {
        console.log(error)
      }
    }

  return (
    <div className="flex h-full w-full bg-black text-white">
      <div className="my-32 flex w-2/5	 flex-col items-center border-2 text-lg font-medium">
        <p className="w-4/5 rounded-md bg-red-500 py-2 pl-10">Conta</p>
      </div>

      <div className="my-32 flex w-full flex-col justify-center border-2 pl-28">
        <div className="flex w-full">
          <form
            onSubmit={handleSubmit(submit)}
            name="signupForm"
            id="signupForm"
            className="flex w-2/5 flex-col gap-8 text-lg"
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="password">Nova Senha</label>
                <input
                  className="border-1 pl-2 h-10 rounded-md border border-solid border-white bg-transparent"
                  type="password"
                  id="password"
                  required
                  {...register('password')}
                />
                {!!errors.password &&
                  <span className="text-red-500 text-sm">
                    {errors.password.message}
                    </span>}

              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="confirmPassword">
                  Digite novamente a Senha
                </label>
                <input
                  className="border-1 pl-2 h-10 rounded-md border border-solid border-white bg-transparent"
                  type="password"
                  id="confirmPassword"
                  required
                  {...register('password_confirm')}
                />
                {!!errors.password_confirm &&
                  <span className="text-red-500 text-sm">
                    {errors.password_confirm.message}
                  </span>}

              </div>
            </div>

            <div className="flex gap-5 self-end">
              <Link
                className="w-32 rounded-md border-2 border-solid border-red-700 py-1 text-center"
                href={"/profile/settings"}
              >
                <p>Cancelar</p>
              </Link>
              <Button
                className="w-32 rounded-md bg-red-700 py-1 text-center"
                type="submit"
                id="submitButton">
                Confirmar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Settings.getMainLayout = getMainLayout;
export default Settings;
