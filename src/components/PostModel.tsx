import {
  ThumbsUp,
  ChatsCircle,
  ArrowsCounterClockwise,
} from "@phosphor-icons/react";
import { Avatar } from "./Avatar";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import { RouterOutputs } from "~/utils/api";

type PostModel = NonNullable<RouterOutputs["post"]["list"][number]>;

type PostModelProps = {
  post: PostModel;
};

export default function PostModel({ post }: PostModelProps) {
  return (
    <div className="flex w-full flex-col justify-center rounded-md bg-black p-4 text-white">
      <div className="flex w-full justify-center p-2">
        <div className="flex w-full flex-col justify-between">
          <div className="flex w-full flex-col">
            <div className="flex  w-full space-x-4">
              <div>
                <Avatar
                  url={post.user.image ?? undefined}
                  name={post.user.name ?? ""}
                  size={48}
                />
              </div>

              <div className="flex w-full flex-row  justify-between space-x-4">
                <div className="flex flex-col">
                  <p>{post.user.name ?? ""}</p>
                  <p className="text-xs text-zinc-500">
                    @{post.user.name ?? ""}
                  </p>
                </div>
                <p className="justify-self-end text-xs text-zinc-500">
                  {formatDistanceToNow(post.createdAt)}
                </p>
              </div>
            </div>

            <div>
              <p>{post.content}</p>
            </div>

            {post.file &&
              post.file.length > 0 &&
              post.file.map(({ url }) => <Image src={url} alt="post-image" />)}

            <div className="flex items-center justify-around">
              <p className="flex gap-3">
                <ThumbsUp size={22} /> {post.likes}
              </p>
              <p className="flex gap-3">
                <ArrowsCounterClockwise size={22} />
                {}
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
