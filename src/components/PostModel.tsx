import {
  ThumbsUp,
  ChatsCircle,
  ArrowsCounterClockwise,
} from "@phosphor-icons/react";



export default function PostModel() {
  return (
    <div className="flex w-full flex-col justify-center bg-black py-7 text-white">
      <div className="flex max-w-full mx-10 justify-end text-lg">
        <p>&#x2022; &#x2022; &#x2022;</p>
      </div>
      <div className="flex justify-center max-w-full">
        <div className="flex max-w-[75%] flex-col justify-between">
          <div className="flex w-full flex-col">
            <div className="mb-3 flex w-full">
              <div>
                <img
                  src=''
                  alt=""
                  className="mr-7 flex items-center rounded-full bg-red-500 p-6"
                />
              </div>
              {/* Name and @ of user here */}
              <div className="flex flex-col ">
                <div className="mb-1.5 flex justify-between ">
                  <p>John Cena</p>
                  <div className="flex gap-4 opacity-75">
                    <p>@John do balde</p>
                    <p>&#x2022; 2h</p>
                  </div>
                </div>
                {/* here */}
                <div className="mb-5">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora earum dignissimos consequuntur porro autem
                    laboriosam, sequi sunt quidem adipisci vitae, reiciendis,
                    quaerat voluptas quo. Voluptatibus blanditiis reprehenderit
                    quasi consequuntur repellat?
                  </p>
                </div>
              </div>
            </div>
            {/* IMAGE_POST */}
            <div className="mb-5">
              <img
                src=""
                alt=""
                className="h-[20rem] w-[20rem] rounded-md bg-red-500 mx-auto"
              />
            </div>
            {/* STATISTICS */}
            <div className=" ml-10  flex gap-[6rem]">
              <p className="flex gap-3">
                <ThumbsUp size={22} /> 200
              </p>
              <p className="flex gap-3">
                {" "}
                <ArrowsCounterClockwise size={22} />
                200
              </p>
              <p className="flex gap-3">
                {" "}
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
