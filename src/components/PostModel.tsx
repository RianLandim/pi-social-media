import {
  ThumbsUp,
  ChatsCircle,
  ArrowsCounterClockwise,
} from "@phosphor-icons/react";
import { Avatar } from "./Avatar";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";

type PostModelProps = {
  username: string;
  profilePhoto?: string;
  files?: string[];
  content: string;
  createdAt: Date;
};

export default function PostModel({
  content,
  files,
  username,
  profilePhoto,
  createdAt,
}: PostModelProps) {
  return (
    <div className="flex w-full flex-col justify-center rounded-md bg-black p-4 text-white">
      <div className="flex w-full justify-center p-2">
        <div className="flex w-full flex-col justify-between">
          <div className="flex w-full flex-col">
            <div className="flex  w-full space-x-4">
              <div>
                <Avatar url={profilePhoto} name={username} size={48} />
              </div>

              <div className="flex w-full flex-row  justify-between space-x-4">
                <div className="flex flex-col">
                  <p>{username}</p>
                  <p className="text-xs text-zinc-500">@{username}</p>
                </div>
                <p className="justify-self-end text-xs text-zinc-500">
                  {formatDistanceToNow(createdAt)}
                </p>
              </div>
            </div>

            <div>
              <p>{content}</p>
            </div>

            {files &&
              files.length > 0 &&
              files.map((url) => <Image src={url} alt="post-image" />)}

            <div className="flex items-center justify-around">
              <p className="flex gap-3">
                <ThumbsUp size={22} /> 200
              </p>
              <p className="flex gap-3">
                <ArrowsCounterClockwise size={22} />
                200
              </p>
              <p className="flex gap-3">
                <ChatsCircle size={22} />
                200
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
