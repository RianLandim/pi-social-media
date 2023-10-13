import MainLayout, { getMainLayout } from "~/layout/MainLayout";
import { NextPageWithLayout } from "../_app";
import Link from "next/link";

const Settings: NextPageWithLayout = () => {
  return (
    <div className="flex h-full w-full bg-black text-white">
      <div className="my-32 flex w-2/5 flex-col items-center border-2">
        <span className="w-4/5 rounded-md bg-red-500 py-3 pl-10	">Conta</span>
      </div>

      <div className="my-32 flex justify-center w-full flex-col border-2 pl-28">
        <h1 className=" text-3xl mb-7">Sua conta</h1>

        <div className="flex w-full">
          {/* IMG DO USER */}
          <img
            src=""
            alt=""
            className="h-64 aspect-square rounded-full bg-red-500"
          />
          <div className="ml-10 flex flex-col text-xl">
            {/* INFORMAÇOES DO USER */}
            <ul>
              <li className="mb-5">
                <h2 className="mb-3">Nome</h2>
                <span className="ml-10">JOHN CENA</span>
              </li>
              <li>
                <h2 className="mb-3">Email</h2>
                <span className="ml-10">johncenaaaaa@smoke.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex self-end mr-32 gap-20 mt-5">
          <Link className="px-8 py-2 bg-red-700 rounded-lg"
            href={'/profile/edit_profile'}>
            <h1>Editar Perfil</h1>
          </Link>
          <Link className="underline self-center"
            href={'/profile/change_password'}>
            <h1>Mudar Senha</h1>
          </Link>
        </div>

      </div>
    </div>
  );
};

Settings.getLayout = getMainLayout;
export default Settings;
