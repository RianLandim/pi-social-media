import MainLayout, { getMainLayout } from "~/layout/MainLayout";
import { NextPageWithLayout } from "../_app";
import Link from "next/link";
import React, { useState, ChangeEvent } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { api } from "~/utils/api";


const EditProfileValidationSchema = z.object({
  name: z.string().min(1, 'Insira um nome'),
  email: z.string().min(1, 'Insira um email'),
  image: z
    .custom((file) => {
      if (!(file instanceof File)) {
        return 'O arquivo deve ser uma imagem (JPEG, PNG, GIF)';
      }

      const allowedImageTypes = ["image/jpeg", "image/png"]

      if (!allowedImageTypes.includes(file.type)) {
        return 'O arquivo deve ser uma imagem (JPEG, PNG, GIF)'
      }

      return true;
    }, { message: 'O arquivo deve ser uma imagem (JPEG, PNG)' })
})

type Edit_ProfileFormData = z.infer<typeof EditProfileValidationSchema>

// Colocar estados do USER logado.
const Settings: NextPageWithLayout = () => {
  const { handleSubmit,
    register,
    formState: { errors },
    setValue
  } =
    useForm<Edit_ProfileFormData>({
      resolver: zodResolver(EditProfileValidationSchema),
      defaultValues: {
        name: '',
        email: '',
        image: ''
      }
    })

  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target) {
      const file = event.target.files?.[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setImage(imageUrl);
        await setValue('image', file);
      }
    }
  };

  const Edit_ProfileMutation = api.user.updata_profile_infos.useMutation()

  function edit_submit(data: Edit_ProfileFormData) {
    // ROTA CRIADA NO BACK
    try {
      Edit_ProfileMutation.mutate
        ({
          id: '', name: data.name,
          email: data.email,
          image: data.image
        })

      console.log("OK")

      // Console log para testes
      console.log(data)

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="flex h-full w-full bg-black text-white px-10">
      <div className="my-32 text-lg font-medium	 flex w-2/5 flex-col items-center border-r">
        <p className="w-4/5 rounded-md bg-red-500 py-2 pl-10	">Conta</p>
      </div>

      <div className="my-32 flex justify-center w-full flex-col pl-28">
        <div className="flex mb-7 justify-between ali">
          <h1 className=" text-3xl">Editar Informações</h1>
        </div>

        <form onSubmit={handleSubmit(edit_submit)}
          className="flex flex-col"
          name="edit_profile"
          id="edit_profile">

          <div className="flex">
            {/* IMG DO USER */}
            <label
              htmlFor="imageInput"
              className="aspect-square h-64 cursor-pointer rounded-full">
              <img
                src={
                  image ||
                  "https://isobarscience-1bfd8.kxcdn.com/wp-content/uploads/2020/09/default-profile-picture1.jpg"
                }
                className="object-cover h-64 rounded-full bg-red-500"
              />
            </label>
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              style={{ display: "none" }}
              {...register('image')}

            />
            {!!errors.image?.message && (
              <span className="text-red-500 text-sm">
                {typeof errors.image.message === "string"
                  ? errors.image.message
                  : `An error occurred: ${errors.image.message.message}`}
              </span>
            )}

            <div className="ml-10 flex w-2/4 flex-col justify-center">
              {/* INFORMAÇOES DO USER */}
              <div className="mb-5 text-xl flex flex-col gap-5 justify-self-end">
                <div className="flex-col flex grow">
                  <label className="mb-3" htmlFor="name">Nome</label>
                  <input id="name"
                    className="px-2 ml-10 h-10 flex w-auto bg-transparent border border-solid border-white border-1 rounded-md"
                    type="text"
                    placeholder="Nome"
                    {...register('name')}
                  />
                  {!!errors.name &&
                    <span className="text-red-500 text-sm">
                      {errors.name.message}
                    </span>}
                </div>
                <div className="flex flex-col">
                  <label className="mb-3" htmlFor="email">Email</label>
                  <input id="email"
                    className="px-2 ml-10 h-10 border w-auto border-white bg-transparent rounded-md"
                    type="text"
                    placeholder="Email"
                    {...register('email')}
                  />
                  {!!errors.email &&
                    <span className="text-red-500 text-sm">
                      {errors.email.message}
                    </span>}
                </div>
              </div>
              <div className="mt-5 flex gap-4 self-end justify-self-center">
                <button
                  type="submit"
                  className="rounded-lg bg-red-700 px-8 py-2">
                  Salvar
                </button>
                <Link
                  className="rounded-lg border-2 border-solid border-red-700 px-8 py-2"
                  href={"/profile/settings"}>
                  <p>Voltar</p>
                </Link>

              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

Settings.getMainLayout = getMainLayout;
export default Settings;
