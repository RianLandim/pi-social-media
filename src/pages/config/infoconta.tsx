import { signOut, useSession } from "next-auth/react";
import Avatar from "boring-avatars";
import { SignOut } from "@phosphor-icons/react";
import { api } from "~/utils/api";
import { InputPost } from "~/components/InputPost";
import { match } from "ts-pattern";
import LoadingIndicator from "~/components/ui/LoadingIndicator";
import { getMainLayout } from "~/layout/MainLayout";
import { NextPageWithLayout } from "../_app";

const Config: NextPageWithLayout = () => {
  const postsQuery = api.post.listAll.useQuery();

  return (
    <>
        <section className="flex flex-col justify-center bg-black text-white">
  <h1 className="flex justify-center">Informaçoes da Conta</h1>
  <div className="">
    <hr />

    <ul className="justify-center">
      <li className="ml-5">
        <h2 className="font-black">nome de usuario</h2>
        <p className="pb-2 font-light">@batma</p>
      </li>

      <li className="ml-5">
        <h2 className="font-black">celular</h2>
        <p className="pb-2 font-light">(99)000000000</p>
      </li>

      <li className="ml-5">
        <h2 className="font-black">E-Mail</h2>
        <p className="font-light">bat@mail.com</p>
      </li>
    </ul>
    <hr />
  </div>

  <div className="flex">
    <ul>
      <li className="ml-5">
        <h2 className="font-black">País</h2>
        <p className="font-light">Brasil</p>
      </li>

      <li className="ml-5">
        <h2 className="font-black">Idiomas</h2>
        <p className="font-light">Potuguês, inglês</p>
      </li>

      <li className="ml-5">
        <h2 className="font-black">Gênero</h2>
        <p className="font-light">Masculino</p>
      </li>

      <li className="ml-5">
        <h2 className="font-black">Data De Nascimento</h2>
        <p className="font-light">22/06/1999</p>
      </li>
    </ul>
    <hr />
  </div>
</section>

    </>
  );
};

Config.getLayout = getMainLayout;

export default Config;
