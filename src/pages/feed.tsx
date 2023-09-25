import React from 'react';
import Aside from './auth/aside';

function SocialMediaFeed() {
  const stories = [
    { id: 1, username: 'user1', image: 'story1.jpg' },
    { id: 2, username: 'user2', image: 'story2.jpg' },
    { id: 3, username: 'user3', image: 'story3.jpg' },
    // Adicione mais storys conforme necessário
  ];

  return (
    <div className="flex">
      <Aside />
      {/*<nav className="bg-black text-white text-center flex flex-col items-center justify-center w-1/5 h-screen p-4">
        <ul>
          <li><a href="#" className="block py-2 px-4 hover:underline focus:outline-none">Perfil</a></li>
          <li><a href="#" className="block py-2 px-4 hover:underline focus:outline-none">Página Inicial</a></li>
          <li><a href="#" className="block py-2 px-4 hover:underline focus:outline-none">Notificações</a></li>
          <li><a href="#" className="block py-2 px-4 hover:underline focus:outline-none">Mensagens</a></li>
          <li><a href="#" className="block py-2 px-4 hover:underline focus:outline-none">Salvos</a></li>
          <li><a href="#" className="block py-2 px-4 hover:underline focus:outline-none">Configurações</a></li>
          <li><a href="#" className="block py-2 px-4 hover:underline focus:outline-none">Sair</a></li>
        </ul>
  </nav>*/}
      <div className="w-1/2 p-4">
        {/* Aqui vamos mapear as postagens */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          {/* Conteúdo da postagem */}
        </div>
        {/* Vamos repetir esse bloco a cada */}
      </div>
      <div className="w-1/3 p-4">
        <div className="mb-4">
         
          <div className="bg-white rounded-lg shadow-md p-4 space-y-2">
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
          <button
           /* onClick={""}*/
            className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Pesquisar
          </button>
        </div>
          
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
        <textarea
          placeholder="Digite sua publicação aqui..."
          className="w-full resize-none border rounded-md py-2 px-3 mb-3 focus:outline-none focus:ring focus:ring-blue-200"
        ></textarea>
        <div className="flex items-center justify-between">
          <button
            /*onClick={}*/
            className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Publicar
          </button>
          <div className="space-x-2">
            <label htmlFor="file-upload" className="cursor-pointer">
              <span className="text-gray-500">Anexar:</span>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                accept="image/*, video/*"
                /*onChange={}*/
              />
              <span className="text-blue-500 hover:underline focus:outline-none">Foto/Vídeo</span>
            </label>
            <span className="text-gray-500">ou</span>
            <button
              /*onClick={handleAttachFile}*/
              className="text-blue-500 hover:underline focus:outline-none"
            >
              Escolher arquivo
            </button>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
}

export default SocialMediaFeed;
