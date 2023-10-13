import MainLayout, { getMainLayout } from "~/layout/MainLayout";
import { NextPageWithLayout } from "../_app";
import Link from "next/link";

const Settings: NextPageWithLayout = () => {
  return (
    <div className="flex h-full w-full bg-black text-white">
      <div className="my-32 flex w-2/5 flex-col items-center border-2">
        <span className="w-4/5 rounded-md bg-red-500 py-3 pl-10	">Conta</span>
      </div>

      <div className="my-32 flex w-full flex-col justify-center border-2 pl-28">

        <div className="flex w-full">
          <form action="submit" method="post" name="signupForm" id="signupForm" className="w-2/5 text-lg flex flex-col gap-8">

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="password">Nova Senha</label>
                <input className="h-10 rounded-md bg-transparent border border-solid border-white border-1" type="password" id="password" name="password" required />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="confirmPassword">Digite novamente a Senha</label>
                <input className="h-10 rounded-md bg-transparent border border-solid border-white border-1"
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                />
              </div>
            </div>

            <div className="flex gap-5 self-end">
              <Link className="w-32 py-1 bg-red-700 rounded-md text-center"
                href={'/profile/settings'}>
                <p>Cancelar</p>
              </Link>
              <button className="w-32 py-1 bg-red-700 rounded-md text-center"
                type="submit" id="submitButton">
                <p>Confirmar</p>
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

Settings.getLayout = getMainLayout;
export default Settings;
