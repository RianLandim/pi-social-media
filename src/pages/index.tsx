import { useSession } from "next-auth/react";
import { api } from "~/utils/api";
import { InputPost } from "~/components/InputPost";
import { match } from "ts-pattern";

import { NextPageWithLayout } from "./_app";
import { getMainLayout } from "~/layout/MainLayout";
import PostModel from "~/components/PostModel";
import autoAnimate from "@formkit/auto-animate";
import { useEffect, useRef, useState } from "react";
import { Skeleton } from "~/components/ui/skeleton";

const Feed: NextPageWithLayout = () => {
  useSession({ required: true });

  const parent = useRef(null);

  useEffect(() => {
    parent.current &&
      autoAnimate(parent.current, {
        duration: 650,
        easing: "ease-out",
      });
  }, [parent]);

  const postsQuery = api.post.list.useQuery(
    { tab: "followeds" },
    { keepPreviousData: true }
  );

  const [activeTab, setActiveTab] = useState<string>("following");
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="flex flex-col space-y-6">
        {/* <h1 className="text-left text-2xl font-bold">Página Inicial</h1>{" "}

        <div className="flex space-x-12">
          <button
            className={`tab-button ${
              activeTab === "following"
                ? "active text-orange-500 underline"
                : ""
            }`}
            onClick={() => handleTabChange("following")}
          >
            Seguindo
          </button>
          <button
            className={`tab-button ${
              activeTab === "communities"
                ? "active text-orange-500 underline"
                : ""
            }`}
            onClick={() => handleTabChange("communities")}
          >
            Comunidades
          </button>
        </div>
        <div className="border-b border-gray-300"></div> */}
      </div>
      <div className="mb-4 flex w-3/4 flex-col items-center justify-center p-4">
        <InputPost />
      </div>
      <div
        ref={parent}
        className="flex w-full flex-col items-center justify-center"
      >
        {match(postsQuery)
          .with({ isLoading: true }, () =>
            new Array(5).map(() => (
              <ul className="flex w-3/4 flex-col items-center justify-center p-4">
                <Skeleton className="h-[31rem] w-full rounded-md" />
              </ul>
            ))
          )
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
