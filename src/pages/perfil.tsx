import React from 'react';
import Aside from './auth/aside';

function ProfilePage() {
  return (
    <div className="flex">
      <Aside />

      <div className="w-3/4 p-4">
        <div className="relative">
          <img
            src="https://static.tumblr.com/qdabkmw/qRqmbpn2t/bd.png"
            alt="Foto de Capa"
            className="w-full"
          />
        </div>

        <div className="relative -mt-20 ml-4">
          <img
            src="https://blog.appegada.com/thumb/blog/1/780/500/1a09bacc2740e0f8e3c2b10bd5bf01ae.jpg"
            alt="Foto de Perfil"
            className="w-32 h-32 rounded-full border-4 border-white"
          />
        </div>

        <div className="mt-4 ml-44">
          <h1 className="text-2xl font-bold">John Cena</h1>
          <p className="text-gray-500">@xxxxxx_xx</p>
        </div>

        
        <div className="mt-8">
          {/*componente para as postagens*/}
          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            {/* Conteúdo da postagem */}
          </div>
          {/* Repetir este bloco para cada postagem */}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
