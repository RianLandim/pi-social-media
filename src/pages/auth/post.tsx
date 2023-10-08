import React, { useState } from 'react';

function Post() {
  const [isEditingMenuOpen, setIsEditingMenuOpen] = useState(false);
  const [selectedShareOption, setSelectedShareOption] = useState<string | null>(null);

  const handleToggleEditingMenu = () => {
    setIsEditingMenuOpen(!isEditingMenuOpen);
  };

  const handleShareOptionClick = (shareOption: string) => {
    setSelectedShareOption(shareOption);
    setIsEditingMenuOpen(false);

    // Lógica para compartilhamento aqui, dependendo da opção selecionada
    switch (shareOption) {
      case 'edit':
        // Lógica para editar a postagem
        alert('Editar Postagem');
        break;
      case 'delete':
        // Lógica para excluir a postagem
        alert('Excluir Postagem');
        break;
      case 'email':
        // Lógica para compartilhar via E-mail
        alert('Compartilhar via E-mail');
        break;
      case 'whatsapp':
        // Lógica para compartilhar via WhatsApp
        alert('Compartilhar via WhatsApp');
        break;
      case 'instagram':
        // Lógica para compartilhar via Instagram
        alert('Compartilhar via Instagram');
        break;
      case 'copyLink':
        // Lógica para copiar o link da publicação
        alert('Copiar Link da Publicação');
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 relative">
      {/* Cabeçalho da postagem */}
      <div className="flex justify-between items-center mb-2">
        {/* Foto de perfil pequena no canto superior esquerdo */}
        <div className="flex items-center">
          <img
            src="https://blog.appegada.com/thumb/blog/1/780/500/1a09bacc2740e0f8e3c2b10bd5bf01ae.jpg"
            alt="Foto de Perfil"
            className="w-8 h-8 rounded-full mr-2"
          />
          <div>
            <p className="font-bold">@xxxxxx_xx</p>
            <a
              href="https://www.google.com/maps/place/Praia+de+Iracema"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Localização: Praia de Iracema
            </a>
          </div>
        </div>

        <div className="relative">
          <button className="text-gray-600 hover:text-gray-800" onClick={handleToggleEditingMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>

          {isEditingMenuOpen && (
            <div className="absolute top-0 right-0 mt-2 w-32 bg-white border border-gray-300 rounded-lg shadow-lg">
              <ul className="py-2">
                <li
                  className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                  onClick={() => handleShareOptionClick('edit')}
                >
                  Editar
                </li>
                <li
                  className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                  onClick={() => handleShareOptionClick('delete')}
                >
                  Excluir
                </li>
                <li
                  className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                  onClick={() => handleShareOptionClick('email')}
                >
                  Compartilhar via E-mail
                </li>
                <li
                  className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                  onClick={() => handleShareOptionClick('whatsapp')}
                >
                  Compartilhar via WhatsApp
                </li>
                <li
                  className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                  onClick={() => handleShareOptionClick('instagram')}
                >
                  Compartilhar via Instagram
                </li>
                <li
                  className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                  onClick={() => handleShareOptionClick('copyLink')}
                >
                  Copiar Link da Publicação
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <img
        src="https://img.freepik.com/fotos-premium/cachorro-relaxando-em-uma-cadeira-de-praia-usando-oculos-escuros-viajando-com-uma-praia-de-mar-de-estimacao-generative-ai_922357-1361.jpg"
        alt="Foto de Publicação"
        className="w-full rounded-lg mb-4"
      />

      {/* Botões de ação (Curtir, Comentar, Compartilhar) */}
      <div className="flex justify-between text-gray-600">
        <div className="flex space-x-2">
          <button className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15s2-1 5-1 5 1 5 1"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 21v-7m0 0v-7m0 7h-7m7 7h7"
              />
            </svg>
            Curtir
          </button>
          <button className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
            </svg>
            Comentar
          </button>
        </div>
        <button
          className="flex items-center space-x-1"
          onClick={handleToggleEditingMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Editar
        </button>
      </div>
    </div>
  );
}

export default Post;