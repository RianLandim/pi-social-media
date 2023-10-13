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
      <section className="flex w-1/2 bg-black justify-center flex-col rounded-t-lg" >
        <div className="flex justify-center bg-black hover:bg-slate-600 p-4 rounded-md text-white ">
          <a href="#" className="">
            Conta
          </a>
        </div>
        <div className="flex justify-center bg-black hover:bg-slate-600 p-4 rounded-md text-white ">
          <a href="#">Privacidade e segurança</a>
        </div>
        <div className="flex justify-center bg-black hover:bg-slate-600 p-4 rounded-md text-white ">
          <a href="#">Notificações</a>
        </div>
        <div className="flex justify-center bg-black hover:bg-slate-600 p-4 rounded-md text-white ">
          <a href="#">Acessibilidade</a>
        </div>
      </section>
    </>
  );
};

Config.getLayout = getMainLayout;

export default Config;
