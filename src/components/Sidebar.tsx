import { Gear, PaperPlaneTilt, Bell, House } from "@phosphor-icons/react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Sidebar() {
  const { data: session } = useSession();

  return (
    <div className="flex h-screen w-1/5 flex-col justify-center bg-black p-2 text-white">
      <div className="mb-12 mt-40 flex justify-center">
        <img
          className="w-3/4 rounded-md"
          src="/img/1f758d35-8ead-43c4-aa20-2d0cba26fbea.jpg"
          alt="Minha Imagem"
        />
      </div>

      <div className="mx-auto flex w-56 items-center justify-center rounded-md bg-[#808080] p-2">
        <img
          src={session?.user.image ?? ""}
          className="mr-6 flex items-center rounded-full bg-red-500 p-6 "
        />
        <div>
          <div className="text-xl font-medium" id="user-name">
            <p>{session?.user.name}</p>
          </div>
          <div className="font-light opacity-80">
            <p>@{session?.user.name}</p>
          </div>
        </div>
      </div>

      <div className="justify-left m-auto mt-12 flex w-56">
        <ul className="list-none">
          <Link
            href={"/"}
            className="mb-5 flex	items-center rounded-md p-2 text-lg hover:bg-slate-800"
          >
            <House size={20} className="mr-2.5" />
            Página Inicial
          </Link>
          <Link
            href={"/"}
            className="mb-5 flex	items-center rounded-md  p-2 text-lg hover:bg-slate-800"
          >
            <Bell size={20} className="mr-2.5" />
            Notificações
          </Link>
          <Link
            href={"/"}
            className="mb-5 flex	items-center rounded-md  p-2 text-lg hover:bg-slate-800"
          >
            <PaperPlaneTilt size={20} className="mr-2.5" />
            Mensagens
          </Link>
          <Link
            href={"profile/settings"}
            className="mb-24 flex	items-center rounded-md  p-2 text-lg hover:bg-slate-800"
          >
            <Gear size={20} className="mr-2.5" />
            Configurações
          </Link>
        </ul>
      </div>

      <div className="mb-20 flex justify-center">
        <button
          onClick={() => signOut()}
          className="br rounded-md border-2 border-solid	border-[#808080] px-6 py-2 hover:bg-[#808080]"
        >
          Sair
        </button>
      </div>
    </div>
  );
}
