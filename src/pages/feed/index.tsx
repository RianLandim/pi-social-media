import { useSession } from "next-auth/react"

export default function Feed() {
  const { status } = useSession({ required: true })

  return (
    <main className="w-screen flex flex-col bg-slate-300">

    </main>
  )
}