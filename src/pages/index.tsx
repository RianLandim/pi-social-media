import { useSession } from "next-auth/react";

import { api } from "~/utils/api";
import { InputPost } from "~/components/InputPost";
import { match } from "ts-pattern";
import LoadingIndicator from "~/components/ui/LoadingIndicator";
import { NextPageWithLayout } from "./_app";
import { getMainLayout } from "~/layout/MainLayout";
import PostModel from "~/components/PostModel";

const Feed: NextPageWithLayout = () => {
  useSession({ required: true });

  const postsQuery = api.post.list.useQuery();

  return (
    <>
      <InputPost />
      <div className="flex w-full flex-col items-center justify-center">
        {match(postsQuery)
          .with({ isLoading: true }, () => <LoadingIndicator />)
          .with({ isError: true }, () => (
            <span className="text-2xl font-bold">Erro ao carregar posts</span>
          ))
          .otherwise(({ data }) => {
            return data.map((item) => (
              <ul className="flex w-3/4 flex-col items-center justify-center p-4">
                <PostModel post={item} />
              </ul>
            ));
          })}
      </div>
    </>
  );
};

Feed.getMainLayout = getMainLayout;

export default Feed;
