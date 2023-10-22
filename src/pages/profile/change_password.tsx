import MainLayout, { getMainLayout } from "~/layout/MainLayout";
import { NextPageWithLayout } from "../_app";
import Link from "next/link";

const Settings: NextPageWithLayout = () => {
  return (
    <div className="flex h-full w-full bg-black text-white">
      <div className="my-32 flex w-2/5	 flex-col items-center border-2 text-lg font-medium">
        <p className="w-4/5 rounded-md bg-red-500 py-2 pl-10	">Conta</p>
      </div>

      <div className="my-32 flex w-full flex-col justify-center border-2 pl-28">
        <div className="flex w-full">
          <form
            action="submit"
            method="post"
            name="signupForm"
            id="signupForm"
            className="flex w-2/5 flex-col gap-8 text-lg"
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="password">Nova Senha</label>
                <input
                  className="border-1 h-10 rounded-md border border-solid border-white bg-transparent"
                  type="password"
                  id="password"
                  name="password"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="confirmPassword">
                  Digite novamente a Senha
                </label>
                <input
                  className="border-1 h-10 rounded-md border border-solid border-white bg-transparent"
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                />
              </div>
            </div>

            <div className="flex gap-5 self-end">
              <Link
                className="w-32 rounded-md border-2 border-solid border-red-700 py-1 text-center"
                href={"/profile/settings"}
              >
                <p>Cancelar</p>
              </Link>
              <button
                className="w-32 rounded-md bg-red-700 py-1 text-center"
                type="submit"
                id="submitButton"
              >
                <p>Confirmar</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Settings.getMainLayout = getMainLayout;
export default Settings;
