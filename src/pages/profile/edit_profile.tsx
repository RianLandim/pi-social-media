import MainLayout, { getMainLayout } from "~/layout/MainLayout";
import { NextPageWithLayout } from "../_app";
import Link from "next/link";
import React, { useState, ChangeEvent } from "react";

const Settings: NextPageWithLayout = () => {
  // Colocar estados do USER logado.
  const [image, setImage] = useState("");
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
  };

  return (
    <div className="flex h-full w-full bg-black text-white">
      <div className="my-32 flex w-2/5	 flex-col items-center border-2 text-lg font-medium">
        <p className="w-4/5 rounded-md bg-red-500 py-2 pl-10	">Conta</p>
      </div>

      <div className="my-32 flex w-4/6 flex-col justify-center border-2 px-4">
        <div className="ali mb-7 flex justify-between">
          <h1 className=" text-3xl">Editar Informações</h1>
        </div>

        <form className="flex flex-col">
          <div className="flex ">
            {/* IMG DO USER */}
            <label
              htmlFor="imageInput"
              className="aspect-square h-64 cursor-pointer rounded-full"
            >
              <img
                src={
                  image ||
                  "https://isobarscience-1bfd8.kxcdn.com/wp-content/uploads/2020/09/default-profile-picture1.jpg"
                }
                alt=""
                className="aspect-square h-64 rounded-full bg-red-500"
              />
            </label>
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />

            <div className="ml-10 flex w-2/4 flex-col justify-center">
              {/* INFORMAÇOES DO USER */}
              <div className="mb-5 flex flex-col gap-5 justify-self-end text-xl">
                <div className="flex grow flex-col">
                  <label className="mb-3" htmlFor="name">
                    Nome
                  </label>
                  <input
                    id="name"
                    className="border-1 ml-10 flex h-10 w-auto rounded-md border border-solid border-white bg-transparent"
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Nome"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-3" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    className="ml-10 h-10 w-auto rounded-md border border-white bg-transparent"
                    type="text"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="mt-5 flex gap-4 self-end justify-self-center">
                <button
                  type="submit"
                  className="rounded-lg bg-red-700 px-8 py-2"
                >
                  Salvar
                </button>
                <Link
                  className="rounded-lg border-2 border-solid border-red-700 px-8 py-2"
                  href={"/profile/settings"}
                >
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
