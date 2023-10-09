import { ReactElement, ReactNode } from "react";
import PostModel from "~/components/PostModel";
import Sidebar from "~/components/Sidebar";

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <main className="flex h-screen w-full flex-row ">
      <Sidebar />
      <section className="flex h-screen w-full flex-col items-center bg-zinc-400 p-4 overflow-y-scroll [&::-webkit-scrollbar]:hidden">
        {children}
      </section>
    </main>
  );
}

export function getMainLayout(children: ReactElement) {
  return <MainLayout>{children}</MainLayout>;
}
