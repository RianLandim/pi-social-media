import { Gear, PaperPlaneTilt, Bell, House } from "@phosphor-icons/react";
import { Search } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Communities() {
  const { data: session } = useSession();

  return (
    <section className="h-screem flex w-3/12 list-none flex-col items-center space-y-4 bg-black p-4 py-5 text-white">
      <div className="flex w-full items-center justify-center rounded-md bg-zinc-800 px-2">
        <Search />
        <input
          placeholder="Buscar"
          type="text"
          id="name"
          name="Comnidade"
          className="flex w-full rounded-sm bg-zinc-800 p-2 text-white"
        />
      </div>
      <div
        className="flex w-full
      flex-col rounded-md bg-zinc-800 p-4"
      >
        <div className="mb-2 text-xl font-bold">Comunidades</div>
        <div className="flex w-fit items-center space-x-2 rounded-md p-2 hover:cursor-pointer hover:bg-slate-800">
          <div className="h-5 w-5 rounded-sm bg-[#ff0000]"></div>
          <li className="">Games</li>
        </div>

        <div className="flex w-fit items-center space-x-2 rounded-md p-2 hover:cursor-pointer hover:bg-slate-800">
          <div className="h-5 w-5 rounded-sm bg-[#ffaa00]"></div>
          <li>Educacional</li>
        </div>

        <div className="flex w-fit items-center space-x-2 rounded-md p-2 hover:cursor-pointer hover:bg-slate-800">
          <div className="h-5 w-5 rounded-sm bg-[#00ff62]"></div>
          <li>Humor</li>
        </div>

        <div className="flex w-fit items-center space-x-2 rounded-md p-2 hover:cursor-pointer hover:bg-slate-800">
          <div className="h-5 w-5 rounded-sm bg-[#00ffee]"></div>
          <li>Notícias</li>
        </div>

        <div className="flex w-fit items-center space-x-2 rounded-md p-2 hover:cursor-pointer hover:bg-slate-800">
          <div className="h-5 w-5 rounded-sm bg-[#a200ff]"></div>
          <li>Séries e Filmes</li>
        </div>

        <div className="flex w-fit items-center space-x-2 rounded-md p-2 hover:cursor-pointer hover:bg-slate-800">
          <div className="h-5 w-5 rounded-sm bg-[#ff00dd]"></div>
          <li>Literatura</li>
        </div>
      </div>
    </section>
  );
}
