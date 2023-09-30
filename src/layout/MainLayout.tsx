import { ReactElement, ReactNode } from "react";
import Sidebar from "~/components/Sidebar";

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <main className="flex h-screen w-full flex-row ">
      <Sidebar />
      <section className="flex h-screen w-3/5 flex-col items-center justify-center bg-zinc-400 p-4">
        {children}
      </section>
      <aside className="h-screen w-1/5 bg-slate-600"></aside>
    </main>
  );
}

export function getMainLayout(children: ReactElement) {
  return <MainLayout>{children}</MainLayout>;
}
