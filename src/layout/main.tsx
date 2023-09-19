import { signOut, useSession } from "next-auth/react";

import { SignOut } from "@phosphor-icons/react";
import { match } from "ts-pattern";
import LoadingIndicator from "~/components/ui/LoadingIndicator";
import { ReactElement, ReactNode } from "react";
import { Avatar } from "~/components/Avatar";

type Props = {
  children: ReactNode;
};

function MainLayout({ children }: Props) {
  const session = useSession({ required: true });

  return (
    <main className="flex min-h-screen w-screen flex-row items-center justify-center bg-slate-300">
      <aside className="flex h-screen min-h-screen w-1/5 flex-col items-center justify-start space-y-4 bg-slate-600 p-8">
        {match(session)
          .with({ status: "loading" }, () => <LoadingIndicator />)
          .with({ status: "authenticated" }, ({ data }) => (
            <div className="flex flex-col items-center justify-center space-y-4">
              <div>
                <Avatar name={data?.user.name ?? ""} url={data?.user.image} />
              </div>
              <p className="font-body text-2xl text-white">
                {data.user.name ?? ""}
              </p>
            </div>
          ))
          .exhaustive()}

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
          <li
            className="flex w-full flex-row justify-evenly text-center text-lg text-white hover:cursor-pointer hover:underline"
            onClick={() => signOut()}
          >
            <SignOut size={28} />
            Sair
          </li>
        </ul>
      </aside>
      <section className=" border-r-1 border-l-1 w-2/3 border-slate-600 p-4 ">
        {children}
      </section>
      <aside className=" min-h-screen w-1/4 bg-slate-600"></aside>
    </main>
  );
}

export function getLayout(children: ReactElement) {
  return <MainLayout>{children}</MainLayout>;
}
