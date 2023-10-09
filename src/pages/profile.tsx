import React, { useState } from 'react';

function ProfilePage() {

  const [creatingPost, setCreatingPost] = useState(false);

  
  const [postContent, setPostContent] = useState('');

  
  const handleCreatePost = () => {
    setCreatingPost(true);
  };

  
  const handleSubmitPost = () => {
    // Lógica para enviar a publicação (conteúdo do postContent) aqui

    // Após enviar a publicação, redefinir o estado
    setCreatingPost(false);
    setPostContent('');
  };

  return (
    <div className="flex bg-black">
      <Aside />

      <div className="w-3/4 p-4 bg-black">
        
        <div className="text-xl font-bold mb-2">Perfil by 'John Cena'</div>

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
          <h1 className="text-2xl font-bold">John Cena</h1>
          <p className="text-gray-500">@xxxxxx_xx</p>
        </div>

        <hr className="my-8 border-t-2 border-gray-300" />

        <div className="mt-8">

        </div>
      </div>

      <div className="w-1/4 p-4 bg-gray-100">
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
        </div>

      
        <div className="mb-4"></div>

        <button
          onClick={handleCreatePost}
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Criar Publicação
        </button>

        {creatingPost && (
          <div className="mt-4 p-4 bg-white rounded-md shadow-md">
            <textarea
              placeholder="Digite aqui..."
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              className="w-full h-20 p-2 mb-2 border border-gray-300 rounded-md resize-none"
            ></textarea>
            <div className="flex justify-between">
              <label className="text-blue-500 cursor-pointer">
                Anexar Foto
                <input type="file" accept="image/*" style={{ display: 'none' }} />
              </label>
              <label className="text-blue-500 cursor-pointer">
                Anexar Vídeo
                <input type="file" accept="video/*" style={{ display: 'none' }} />
              </label>
              <label className="text-blue-500 cursor-pointer">
                Anexar Documento
                <input type="file" accept=".pdf,.doc,.docx" style={{ display: 'none' }} />
              </label>
            </div>
            <button
              onClick={handleSubmitPost}
              className="w-full mt-2 bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600"
            >
              Publicar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
