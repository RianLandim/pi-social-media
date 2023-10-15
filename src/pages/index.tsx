import { useSession } from "next-auth/react";

import { api } from "~/utils/api";
import { InputPost } from "~/components/InputPost";
import { match } from "ts-pattern";
import LoadingIndicator from "~/components/ui/LoadingIndicator";
import { NextPageWithLayout } from "./_app";
import { getMainLayout } from "~/layout/MainLayout";

const Feed: NextPageWithLayout = () => {
  useSession({ required: true });

  const postsQuery = api.post.listAll.useQuery();

  return (
    <>
      <InputPost />
      <div className="flex flex-col items-center justify-center">
        {match(postsQuery)
          .with({ isLoading: true }, () => <LoadingIndicator />)
          .with({ isError: true }, () => (
            <span className="text-2xl font-bold">Erro ao carregar posts</span>
          ))
          .otherwise(({ data }) => {
            return data.map((item) => (
              <ul className="flex flex-col items-center justify-center">
                <li>{item.content}</li>
              </ul>
            ));
          })}
      </div>
    </>
  );
};

Feed.getMainLayout = getMainLayout;

export default Feed;
