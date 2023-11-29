import { Search } from "lucide-react";
import { useCallback, useState } from "react";
import { match } from "ts-pattern";
import { api } from "~/utils/api";
import { Skeleton } from "./ui/skeleton";
import { Avatar } from "./Avatar";
import { UserPlus } from "@phosphor-icons/react";
import { useToast } from "~/hooks/use-toast";
import { useRouter } from "next/router";

export default function Communities() {
  const [userSearch, setUserSearch] = useState<string>();

  const apiContext = api.useContext();
  const { toast } = useToast();

  const usersQuery = api.user.listPossibleFolloweds.useQuery({
    search: userSearch,
  });

  const router = useRouter();
  const queryParam = router.query;

  const updateQueryParam = useCallback(
    async (param: string, value?: string) => {
      const query = new URLSearchParams();

      if (queryParam["q"]?.toString() === value) {
        await router.push({
          pathname: router.pathname,
          query: {},
        });

        return;
      }

      if (value !== undefined && value !== "") {
        query.set(param, value);
      } else {
        query.delete(param);
      }

      await router.push({
        pathname: router.pathname,
        query: query.toString(),
      });
    },
    [router]
  );

  const followUserMutation = api.user.follow.useMutation({
    onSuccess: () => {
      toast({
        title: "Sucesso",
        description: "Usuário seguido com sucesso",
        variant: "success",
      });
      void apiContext.user.listPossibleFolloweds.invalidate();
      void apiContext.post.list.invalidate();
    },
  });

  return (
    <aside className="h-screem flex w-3/12 list-none flex-col items-center space-y-4 bg-black p-4 py-5 text-white">
      <div className="flex w-full flex-col rounded-md bg-zinc-800 p-4">
        <div className="mb-2 text-xl font-bold">Comunidades</div>
        <div className="flex w-fit items-center space-x-2 rounded-md p-2 hover:cursor-pointer hover:bg-slate-800">
          <div className="h-5 w-5 rounded-sm bg-[#ff0000]"></div>
          <li onClick={() => updateQueryParam("q", "games")}>Games</li>
        </div>

        <div className="flex w-fit items-center space-x-2 rounded-md p-2 hover:cursor-pointer hover:bg-slate-800">
          <div className="h-5 w-5 rounded-sm bg-[#ffaa00]"></div>
          <li onClick={() => updateQueryParam("q", "educacional")}>
            Educacional
          </li>
        </div>

        <div className="flex w-fit items-center space-x-2 rounded-md p-2 hover:cursor-pointer hover:bg-slate-800">
          <div className="h-5 w-5 rounded-sm bg-[#00ff62]"></div>
          <li onClick={() => updateQueryParam("q", "humor")}>Humor</li>
        </div>

        <div className="flex w-fit items-center space-x-2 rounded-md p-2 hover:cursor-pointer hover:bg-slate-800">
          <div className="h-5 w-5 rounded-sm bg-[#00ffee]"></div>
          <li onClick={() => updateQueryParam("q", "noticias")}>Notícias</li>
        </div>

        <div className="flex w-fit items-center space-x-2 rounded-md p-2 hover:cursor-pointer hover:bg-slate-800">
          <div className="h-5 w-5 rounded-sm bg-[#a200ff]"></div>
          <li onClick={() => updateQueryParam("q", "movies")}>
            Séries e Filmes
          </li>
        </div>

        <div className="flex w-fit items-center space-x-2 rounded-md p-2 hover:cursor-pointer hover:bg-slate-800">
          <div className="h-5 w-5 rounded-sm bg-[#ff00dd]"></div>
          <li onClick={() => updateQueryParam("q", "books")}>Literatura</li>
        </div>
      </div>
      <div className="flex w-full items-center justify-center rounded-md bg-zinc-800 px-2">
        <Search />
        <input
          placeholder="Buscar"
          type="text"
          className="flex w-full rounded-sm bg-zinc-800 p-2 text-white"
          value={userSearch}
          onChange={({ target }) => setUserSearch(target.value)}
        />
      </div>
      <div className="flex w-full flex-col items-center justify-center rounded-md bg-zinc-800 p-2">
        <div className="ml-2 self-start text-xl font-bold">Usuários</div>

        {match(usersQuery)
          .with({ isLoading: true }, () => (
            <Skeleton className="min-h-[4rem] w-full" />
          ))
          .with({ isError: true }, ({ error }) => (
            <div>
              {error.message ? error.message : "Erro ao buscar usuário"}
            </div>
          ))
          .otherwise(({ data }) =>
            data.map((user) => (
              <div className="flex w-full flex-row items-center justify-center p-2">
                <div className="flex w-full flex-row items-center justify-start space-x-4">
                  <Avatar name={user.name ?? ""} url={user.image} size={22} />
                  <p>{user.name}</p>
                </div>
                <div
                  className="justify-self-end rounded-full p-2 hover:cursor-pointer hover:bg-slate-600"
                  onClick={() => followUserMutation.mutate({ userId: user.id })}
                >
                  <UserPlus size={22} />
                </div>
              </div>
            ))
          )}
      </div>
    </aside>
  );
}
