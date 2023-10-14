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
      <div className="my-32 flex w-2/5 flex-col items-center border-2">
        <span className="w-4/5 rounded-md bg-red-500 py-3 pl-10	">Conta</span>
      </div>

      <div className="my-32 flex justify-center w-full flex-col border-2 pl-28">
        <div className="flex mb-7 justify-between ali">
          <h1 className=" text-3xl">Editar Informações</h1>
        </div>

        <form action="submit" className="flex flex-col">
          <div className="flex w-full">
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

            <div className="ml-10 flex flex-col text-xl w-full">
              {/* INFORMAÇOES DO USER */}
              <ul>
                <li className="mb-5">
                  <h2 className="mb-3">Nome</h2>
                  <label htmlFor="text"></label>
                  <input className="ml-10 bg-transparent border border-solid border-white border-1 rounded-md w-2/4"
                    type="text" value={name}
                    onChange={handleNameChange}
                    placeholder="Nome" />
                </li>
                <li>
                  <h2 className="mb-3">Email</h2>
                  <label htmlFor="text"></label>
                  <input className="ml-10 border border-white bg-transparent rounded-md w-2/4"
                    type="text" value={email}
                    onChange={handleEmailChange}
                    placeholder="Email" />
                </li>
              </ul>
            </div>
          </div>
          <div className="flex self-end mr-44 gap-4 mt-5">
            <button type="submit" className="px-8 py-2 bg-red-700 rounded-lg">
              <p>Salvar</p>
            </button>
            <Link className="px-8 py-2 border-solid border-2 border-red-700 rounded-lg"
              href={'/profile/settings'}>
              <p>Voltar</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

Settings.getLayout = getMainLayout
export default Settings