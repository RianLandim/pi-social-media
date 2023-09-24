import React from 'react';

function SocialMediaFeed() {
  return (
    <div className="flex">
      <nav className="w-1/6 p-4">
        <ul>
          <li><a href="#" className="block py-2 px-4">Perfil</a></li>
          <li><a href="#" className="block py-2 px-4">Página Inicial</a></li>
          <li><a href="#" className="block py-2 px-4">Notificações</a></li>
          <li><a href="#" className="block py-2 px-4">Mensagens</a></li>
          <li><a href="#" className="block py-2 px-4">Salvos</a></li>
          <li><a href="#" className="block py-2 px-4">Configurações</a></li>
        </ul>
      </nav>
      <div className="w-1/2 p-4">
        {/* Aqui vamos mapear as postagens */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          {/* Conteúdo da postagem */}
        </div>
        {/* Vamos repetir esse bloco a cada */}
      </div>
      <div className="w-1/3 p-4">
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Pesquisar..."
              className="border-2 border-gray-300 rounded-full w-full py-2 px-4 pl-10 focus:outline-none focus:border-blue-500"
            />
            <svg
              className="h-6 w-6 text-gray-400 absolute left-3 top-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.783-4.783M9 14a5 5 0 100-10 5 5 0 000 10z"
              />
            </svg>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          {/* Componente ou botão para criar uma nova postagem */}
        </div>
      </div>
    </div>
  );
}

export default SocialMediaFeed;
