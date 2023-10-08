import React from 'react';
import Aside from './auth/aside';
import Post from './auth/post';


function ProfilePage() {
  return (
    <div className="flex bg-black">
      <Aside />

      <div className="w-3/4 p-4">
        
        <div className="text-white text-xl font-bold mb-2">Perfil by 'John Cena'</div>

        <div className="relative">
          <img
            src="https://static.tumblr.com/qdabkmw/qRqmbpn2t/bd.png"
            alt="Foto de Capa"
            className="w-full h-60"
          />
        </div>

        <div className="relative -mt-20 ml-4">
          <img
            src="https://blog.appegada.com/thumb/blog/1/780/500/1a09bacc2740e0f8e3c2b10bd5bf01ae.jpg"
            alt="Foto de Perfil"
            className="w-32 h-32 rounded-full border-4 border-white"
          />
        </div>

        <div className="-mt-10 ml-44">
          <h1 className="text-white text-2xl font-bold">John Cena</h1>
          <p className="text-white">@xxxxxx_xx</p>
        </div>

        <hr className="my-8 border-t-2 border-gray-300" />

        <div className="mt-8">
        <Post />
         
          {/* Repita este bloco para cada postagem */}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
