import {
  ThumbsUp,
  ChatsCircle,
  ArrowsCounterClockwise,
  UserPlus,
} from "@phosphor-icons/react";
import { Avatar } from "./Avatar";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import { RouterInputs, RouterOutputs, api } from "~/utils/api";
import { useEffect, useRef, useState } from "react";
import autoAnimate from "@formkit/auto-animate";

type PostModel = NonNullable<RouterOutputs["post"]["list"][number]>;

type PostModelProps = {
  post: PostModel;
};

export default function PostModel({ post }: PostModelProps) {
  const [liked, setLiked] = useState(false);

  const apiContext = api.useContext();

  const likePostMutation = api.post.like.useMutation({
    onSettled: () => {
      void apiContext.post.list.invalidate();
    },
  });

  const { data } = api.user.listLikedPosts.useQuery();

  useEffect(() => {
    if (data?.likedPosts) {
      const isLiked = data?.likedPosts.some((p) => p.id == post.id);

      setLiked(isLiked);
    }
  }, [data]);

  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const likePost = (data: RouterInputs["post"]["like"]) =>
    likePostMutation.mutate(data);

  return (
    <div
      ref={parent}
      className="flex w-full flex-col justify-center rounded-md bg-black p-4 text-white"
    >
      <div className="flex w-full justify-center p-2">
        <div className="flex w-full flex-col justify-between">
          <div className="flex w-full flex-col space-y-4">
            <div className="flex w-full space-x-4">
              <Avatar
                url={post.user.image ?? undefined}
                name={post.user.name ?? ""}
                size={48}
              />

              <div className="flex w-full flex-row items-center justify-between space-x-2">
                <div className="flex flex-col">
                  <p>{post.user.name ?? ""}</p>
                  <p className="text-xs text-zinc-500">
                    @{post.user.name ?? ""}
                  </p>
                </div>
                <p className="items-center justify-self-end text-xs text-zinc-500">
                  {formatDistanceToNow(post.createdAt)}
                </p>
              </div>
            </div>

            <div>
              <p>{post.content}</p>
            </div>

            {post.file &&
              post.file.length > 0 &&
              post.file.map(({ url }) => (
                <Image src={url} width={200} height={200} alt="post-image" />
              ))}

            <div className="flex items-center justify-around">
              <p
                onClick={() => likePost({ postId: post.id })}
                className="flex gap-3 hover:cursor-pointer"
              >
                <ThumbsUp
                  size={22}
                  color={liked ? "green" : undefined}
                  weight={liked ? "fill" : undefined}
                />
                {post.liked.length}
              </p>
              <p className="flex gap-3">
                <ArrowsCounterClockwise size={22} />
              </p>
              <p className="flex gap-3">
                <ChatsCircle size={22} />
                {post.reply.length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
