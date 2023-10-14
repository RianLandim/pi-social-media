import MainLayout, { getMainLayout } from "~/layout/MainLayout";
import { NextPageWithLayout } from '../_app'
import Link from "next/link";
import React, { useState, ChangeEvent } from "react";


const Settings: NextPageWithLayout = () => {
  // Colocar estados do USER logado.
  const [image, setImage] = useState('')
  const [name, setName] = useState("John Cena");
  const [email, setEmail] = useState("johncenaaaaa@smoke.com");

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target) {
      const file = event.target.files?.[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setImage(imageUrl);
      }
    }
  }

  return (
    <div className="flex h-full w-full bg-black text-white">
      <div className="my-32 text-lg font-medium	 flex w-2/5 flex-col items-center border-2">
        <p className="w-4/5 rounded-md bg-red-500 py-2 pl-10	">Conta</p>
      </div>

      <div className="my-32 flex justify-center w-4/6 flex-col border-2 px-4">
        <div className="flex mb-7 justify-between ali">
          <h1 className=" text-3xl">Editar Informações</h1>
        </div>

        <form className="flex flex-col">
          <div className="flex ">
            {/* IMG DO USER */}
            <label htmlFor="imageInput" className="cursor-pointer h-64 aspect-square rounded-full">
              <img
                src={image ||
                  'https://isobarscience-1bfd8.kxcdn.com/wp-content/uploads/2020/09/default-profile-picture1.jpg'}
                alt=""
                className="h-64 aspect-square rounded-full bg-red-500"
              />
            </label>
            <input type="file"
              id="imageInput"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleImageChange} />

            <div className="ml-10 flex flex-col justify-center w-2/4">
              {/* INFORMAÇOES DO USER */}
              <div className="mb-5 text-xl flex flex-col gap-5 justify-self-end">
                <div className="flex-col flex grow">
                  <label className="mb-3" htmlFor="name">Nome</label>
                  <input id="name"
                    className="ml-10 h-10 flex w-auto bg-transparent border border-solid border-white border-1 rounded-md"
                    type="text" value={name}
                    onChange={handleNameChange}
                    placeholder="Nome" />
                </div>
                <div className="flex flex-col">
                  <label className="mb-3" htmlFor="email">Email</label>
                  <input id="email"
                    className="ml-10 h-10 border w-auto border-white bg-transparent rounded-md"
                    type="text" value={email}
                    onChange={handleEmailChange}
                    placeholder="Email" />
                </div>
              </div>
              <div className="flex self-end justify-self-center gap-4 mt-5">
                <button type="submit" className="px-8 py-2 bg-red-700 rounded-lg">
                  Salvar
                </button>
                <Link className="px-8 py-2 border-solid border-2 border-red-700 rounded-lg"
                  href={'/profile/settings'}>
                  <p>Voltar</p>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

Settings.getLayout = getMainLayout
export default Settings