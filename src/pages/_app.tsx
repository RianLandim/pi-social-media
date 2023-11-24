import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { setDefaultOptions } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Toaster } from "~/components/ui/toaster";

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getMainLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps<{ session: Session | null }> & {
  Component: NextPageWithLayout;
};

setDefaultOptions({
  locale: ptBR,
});

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getMainLayout = Component.getMainLayout ?? ((page) => page);

  return (
    <SessionProvider>
      {getMainLayout(<Component {...pageProps} />)}
      <Toaster />
    </SessionProvider>
  );
}

export default api.withTRPC(MyApp);
