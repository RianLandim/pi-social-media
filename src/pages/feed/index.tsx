import { signOut, useSession } from "next-auth/react";
import Avatar from "boring-avatars";
import { SignOut } from "@phosphor-icons/react";
import { api } from "~/utils/api";
import { InputPost } from "~/components/InputPost";

export default function Feed() {
  const { status, data: session } = useSession({ required: true });

  const { data, fetchStatus } = api.post.listAll.useQuery();

  if (status === "loading" || fetchStatus === "fetching") {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-slate-300">
        <span className="text-2xl font-bold">Carregando...</span>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen w-screen flex-row items-center justify-center bg-slate-300">
      <aside className="flex h-screen min-h-screen w-1/5 flex-col items-center justify-start space-y-4 bg-slate-600 p-8">
        <div>
          <Avatar
            size={64}
            name={session.user.name ?? ""}
            variant="beam"
            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
          />
        </div>
        <p className="font-body text-2xl text-white">
          {session.user.name ?? ""}
        </p>
        <ul className="flex h-full flex-col items-center justify-evenly">
          <li className="text-center text-lg text-white hover:cursor-pointer hover:underline">
            Feed
          </li>
          <li className="text-center text-lg text-white hover:cursor-pointer hover:underline">
            Comunidades
          </li>
          <li className="text-center text-lg text-white hover:cursor-pointer hover:underline">
            Conversas
          </li>
          <li className="text-center text-lg text-white hover:cursor-pointer hover:underline">
            Trending
          </li>
          <li className="text-center text-lg text-white hover:cursor-pointer hover:underline">
            Lorem Ipsum
          </li>
          <li className="text-center text-lg text-white hover:cursor-pointer hover:underline">
            Lorem Ipsum
          </li>
          <li
            className="flex w-full flex-row justify-evenly text-center text-lg text-white hover:cursor-pointer hover:underline"
            onClick={() => signOut()}
          >
            <SignOut size={28} />
            Sair
          </li>
        </ul>
      </aside>
      <section className=" border-r-1 border-l-1 w-2/3 border-slate-600">
        <InputPost />
        {data &&
          data.map((item) => (
            <ul className="flex flex-col items-center justify-center">
              <li>{item.title}</li>
              <li>{item.content}</li>
            </ul>
          ))}
      </section>
      <aside className=" min-h-screen w-1/4 bg-slate-600"></aside>
    </main>
  );
}
