import { useSession } from "next-auth/react";
import { api } from "~/utils/api";
import { InputPost } from "~/components/InputPost";
import { match } from "ts-pattern";
import LoadingIndicator from "~/components/ui/LoadingIndicator";
import { NextPageWithLayout } from "./_app";
import { getMainLayout } from "~/layout/MainLayout";
import { useState } from "react";

const Feed: NextPageWithLayout = () => {
  useSession({ required: true });

  const postsQuery = api.post.list.useQuery();

  const [activeTab, setActiveTab] = useState<string>('following');
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="flex flex-col space-y-4">
        <h1 className="text-2xl font-bold text-left">Página Inicial</h1> {/* Alinhe o texto à esquerda */}
        <div className="flex space-x-12">
          <button
            className={`tab-button ${activeTab === 'following' ? 'active underline text-orange-500' : ''}`}
            onClick={() => handleTabChange('following')}
          >
            Seguindo
          </button>
          <button
            className={`tab-button ${activeTab === 'communities' ? 'active underline text-orange-500' : ''}`}
            onClick={() => handleTabChange('communities')}
          >
            Comunidades
          </button>
        </div>
        <div className="border-b border-gray-300"></div> {/* Linha divisória */}
      </div>

      <InputPost />

      <div className="flex flex-col items-center justify-center">
        {match(postsQuery)
          .with({ isLoading: true }, () => <LoadingIndicator />)
          .with({ isError: true }, () => (
            <span className="text-2xl font-bold">Erro ao carregar posts</span>
          ))
          .otherwise(({ data }) => (
            <>
              {activeTab === 'following' &&
                data.map((item) => (
                  <ul key={item.id} className="flex flex-col items-center justify-center">
                    <li>{item.content}</li>
                  </ul>
                ))
              }
              {activeTab === 'communities' &&
                /* Renderize aqui as publicações das comunidades */
                <div>Placeholder para as publicações das comunidades</div>
              }
            </>
          ))}
      </div>
    </>
  );
};

Feed.getMainLayout = getMainLayout;

export default Feed;
