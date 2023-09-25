import { Gear, PaperPlaneTilt, Bell, House } from "@phosphor-icons/react";

export default function Aside() {
  return (
    <div className="flex h-screen w-1/5 flex-col justify-center bg-black text-white ">
      <div className="mb-12 mt-40 flex justify-center">
        <h1>LOGO</h1>
      </div>

      <div className="mx-auto flex w-56 items-center justify-center rounded-md bg-[#808080] py-2">
        <div className="mr-6 flex items-center rounded-full bg-red-500 p-6 "></div>
        <div>
          <div className="text-xl font-medium" id="user-name">
            <p>John Cena</p>
          </div>
          <div className="font-light opacity-80">
            <p>@xxxxxx_xx</p>
          </div>
        </div>
      </div>

      <div className="justify-left m-auto mt-12 flex w-56">
        <ul className="list-none">
          <li className="mb-5 flex	items-center text-lg">
            <House size={20} className="mr-2.5" />
            Página Inicial
          </li>
          <li className="mb-5 flex	items-center text-lg">
            <Bell size={20} className="mr-2.5" />
            Notificações
          </li>
          <li className="mb-5 flex	items-center text-lg">
            <PaperPlaneTilt size={20} className="mr-2.5" />
            Mensagens
          </li>
          <li className="mb-24 flex	items-center text-lg">
            <Gear size={20} className="mr-2.5" />
            Configurações
          </li>
        </ul>
      </div>
      
      <div className="flex justify-center mb-20">
        <a className="border-solid border-2 border-[#808080] hover:bg-[#808080]	px-6 py-2 br rounded-md" href="">
          Sair
        </a>
      </div>

    </div>
  );
}
