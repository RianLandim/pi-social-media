import MainLayout, { getMainLayout } from "~/layout/MainLayout";
import { NextPageWithLayout } from "../_app";
import Link from "next/link";

const Settings: NextPageWithLayout = () => {
  return (
    <div className="flex h-full w-full bg-black text-white">
      <div className="my-32 flex w-2/5	 flex-col items-center border-2 text-lg font-medium">
        <p className="w-4/5 rounded-md bg-red-500 py-2 pl-10	">Conta</p>
      </div>

      <div className="my-32 flex w-full flex-col justify-center border-2 pl-28">
        <h1 className=" mb-7 text-3xl">Sua conta</h1>

        <div className="flex w-full">
          {/* IMG DO USER */}
          <img
            src=""
            alt=""
            className="aspect-square h-64 rounded-full bg-red-500"
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
        <div className="mr-32 mt-5 flex gap-20 self-end">
          <Link
            className="rounded-lg bg-red-700 px-8 py-2"
            href={"/profile/edit_profile"}
          >
            <h1>Editar Perfil</h1>
          </Link>
          <Link
            className="self-center underline"
            href={"/profile/change_password"}
          >
            <h1>Mudar Senha</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

Settings.getMainLayout = getMainLayout;
export default Settings;
