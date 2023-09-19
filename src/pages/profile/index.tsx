import { useRouter } from "next/router";
import { api } from "~/utils/api";
import { NextPageWithLayout } from "../_app";
import { getLayout } from "~/layout/main";
import { match } from "ts-pattern";
import LoadingIndicator from "~/components/ui/LoadingIndicator";
import { Avatar } from "~/components/Avatar";
import { useSession } from "next-auth/react";

const Perfil: NextPageWithLayout = () => {
  const session = useSession();

  return (
    <main>
      {match(session)
        .with({ status: "loading" }, () => (
          <div className="flex items-center justify-center">
            <LoadingIndicator />
          </div>
        ))
        .with({ status: "unauthenticated" }, () => (
          <div>
            <span>Erro ao carregar dados...</span>
          </div>
        ))
        .otherwise(({ data }) => (
          <ul className="flex items-center justify-center">
            <Avatar name={data?.user.name ?? ""} url={data?.user.image} />
            <li>Nome: {data?.user.name}</li>
            <li>Email: {data?.user.email}</li>
          </ul>
        ))}
    </main>
  );
};

Perfil.getLayout = getLayout;

export default Perfil;
