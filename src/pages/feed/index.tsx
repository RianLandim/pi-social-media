import { signOut, useSession } from "next-auth/react"
import Avatar from 'boring-avatars'

export default function Feed() {
  const { status, data } = useSession({ required: true })

  if (status === 'loading') {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-slate-300">
        <span className="text-2xl font-bold">Carregando...</span>
      </div>
    )
  }

  return (
    <main className="w-screen min-h-screen flex items-center justify-center flex-row bg-slate-300">
      <aside className=" w-1/4 min-h-screen flex items-center justify-start flex-col space-y-4 bg-slate-600 p-8">
        <div>
          <Avatar
            size={64}
            name={data.user.name ?? ''}
            variant="marble"
            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
          />
        </div>
        <p className="text-white text-2xl font-body">{data.user.name ?? ''}</p>
        <ul className="space-y-4">
          <li className="hover:cursor-pointer hover:underline text-center text-lg text-white">
            Feed
          </li>
          <li className="hover:cursor-pointer hover:underline text-center text-lg text-white">
            Comunidades
          </li>
          <li
            className="hover:cursor-pointer hover:underline text-center text-lg text-white"
            onClick={() => signOut()}
          >
            Sair
          </li>
        </ul>
      </aside>
      <section className=" w-2/3 border-r-1 border-l-1 border-slate-600"></section>
      <aside className=" w-1/4 min-h-screen bg-slate-600"></aside>
    </main>
  )
}