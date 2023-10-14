import { Gear, PaperPlaneTilt, Bell, House } from "@phosphor-icons/react";
import { Search } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Communities() {
  const { data: session } = useSession();

  return (
    <section className="h-screem flex w-3/12 list-none flex-col items-center bg-black p-4 py-5 text-white space-y-4">
      <div className="flex justify-center items-center bg-zinc-800 w-full px-2 rounded-md">
        <Search />
        <input
          placeholder="Buscar"
          type="text"
          id="name"
          name="Comnidade"
          className="flex rounded-sm bg-zinc-800 text-white w-full p-2"
        />
      </div>
      <div
        className="flex w-full
      flex-col rounded-md bg-zinc-800 p-4"
      >
        <div className="mb-2 text-xl font-bold">Comunidades</div>
        <div className="flex w-fit items-center space-x-2 rounded-md p-2 hover:bg-slate-800">
          <div className="h-5 w-5 rounded-sm bg-[#ff0000]"></div>
          <li className="">Games</li>
        </div>

        <div className="flex w-fit items-center space-x-2 rounded-md p-2 hover:bg-slate-800">
          <div className="h-5 w-5 rounded-sm bg-[#ffaa00]"></div>
          <li>Educacional</li>
        </div>

        <div className="flex w-fit items-center space-x-2 rounded-md p-2 hover:bg-slate-800">
          <div className="h-5 w-5 rounded-sm bg-[#00ff62]"></div>
          <li>Humor</li>
        </div>

        <div className="flex w-fit items-center space-x-2 rounded-md p-2 hover:bg-slate-800">
          <div className="h-5 w-5 rounded-sm bg-[#00ffee]"></div>
          <li>Notícias</li>
        </div>

        <div className="flex w-fit items-center space-x-2 rounded-md p-2 hover:bg-slate-800">
          <div className="h-5 w-5 rounded-sm bg-[#a200ff]"></div>
          <li>Séries e Filmes</li>
        </div>

        <div className="flex w-fit items-center space-x-2 rounded-md p-2 hover:bg-slate-800">
          <div className="h-5 w-5 rounded-sm bg-[#ff00dd]"></div>
          <li>Literatura</li>
        </div>
      </div>
    </section>
  );
}
