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
    <div className="flex w-full max-w-3xl flex-col justify-center rounded-md bg-[#ffffff] p-4 text-zinc-500">
      <div className="flex w-full justify-center p-2">
        <div className="flex w-full flex-col justify-between">
          <div className="flex w-full flex-col">
            <div className="flex  w-full space-x-4">
              

              <div className="flex w-full flex-row  justify-between space-x-4">
                  <div className="flex items-center space-x-3">
                    <Avatar url={profilePhoto} name={username} size={48} />
                    <p className="">Posted By {username}</p>
                  </div>
                <p className="justify-self-end text-xs text-zinc-500">
                  {formatDistanceToNow(createdAt)}
                </p>
              </div>
            </div>

            <div>
              <p className="ml-16 mb-4">{content}</p>
            </div>

            {files &&
              files.length > 0 &&
              files.map((url) => <Image src={url} alt="post-image" />)}

            <div className="flex items-center justify-normal ml-16 space-x-5">
              <p className="flex gap-1 items-center p-1 rounded-sm hover:bg-[#e6e6e6] cursor-pointer">
                <ThumbsUp size={22} /> 200
              </p>
              <p className="flex gap-1 items-center p-1 rounded-sm hover:bg-[#e6e6e6] cursor-pointer">
                <ArrowsCounterClockwise size={22} />
                200
              </p>
              <p className="flex gap-1 items-center p-1 rounded-sm hover:bg-[#e6e6e6] cursor-pointer">
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
