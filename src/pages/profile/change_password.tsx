import MainLayout, { getMainLayout } from "~/layout/MainLayout";
import { NextPageWithLayout } from "../_app";

const Settings: NextPageWithLayout = () => {
  return (
    <div className="flex h-full w-full bg-black text-white">
      <div className="my-32 flex w-2/5 flex-col items-center border-2">
        <span className="w-4/5 rounded-md bg-red-500 py-3 pl-10	">Conta</span>
      </div>

      <div className="my-32 flex w-full flex-col justify-center border-2 pl-28">

        <div className="flex w-full">
          <form action="" method="post" name="signupForm" id="signupForm" className="w-2/5 text-lg flex flex-col gap-8">

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="password">Nova Senha</label>
                <input className="rounded-md" type="password" id="password" name="password" required />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="confirmPassword">Digite novamente a Senha</label>
                <input className="rounded-md"
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                />
              </div>
            </div>

            <div className="flex gap-5 self-end ">
              <button className="w-32 py-1 bg-red-400 rounded-md" type="submit" id="submitButton">
                <span>Cancelar</span>
              </button>
              <button className="w-32 py-1 bg-red-400 rounded-md" type="submit" id="submitButton">
                <span>Confirmar</span>
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
