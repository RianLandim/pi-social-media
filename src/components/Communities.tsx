import {
  Gear,
  PaperPlaneTilt,
  Bell,
  House,
  GameController,
  Book,
  Newspaper,
  Television,
  TelevisionSimple,
} from "@phosphor-icons/react";
import { BookBookmark, BookOpen, PenNibStraight, Smiley } from "@phosphor-icons/react/dist/ssr";
import { BookIcon, Pen, PenBox, PenLineIcon, Pencil, Search } from "lucide-react";
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
        <div className="flex w-fit items-center space-x-4 rounded-md p-2 hover:bg-slate-800">
          <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-[#ff0000]">
            <GameController />
          </div>
          <li>Games</li>
        </div>

        <div className="flex w-fit items-center space-x-4 rounded-md p-2 hover:bg-slate-800">
          <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-[#ffaa00]">
            <Book />
          </div>
          <li>Educacional</li>
        </div>

        <div className="flex w-fit items-center space-x-4 rounded-md p-2 hover:bg-slate-800">
          <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-[#46a56a]">
            <Smiley />
          </div>
          <li>Humor</li>
        </div>

        <div className="flex w-fit items-center space-x-4 rounded-md p-2 hover:bg-slate-800">
          <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-[#0077ff]">
            <Newspaper />
          </div>
          <li>Notícias</li>
        </div>

        <div className="flex w-fit items-center space-x-4 rounded-md p-2 hover:bg-slate-800">
          <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-[#a200ff]">
            <Television />
          </div>
          <li>Séries e Filmes</li>
        </div>

        <div className="flex w-fit items-center space-x-4 rounded-md p-2 hover:bg-slate-800">
          <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-[#ff00dd]">
            <PenLineIcon />
          </div>
          <li>Literatura</li>
        </div>
      </div>
    </section>
  );
}
