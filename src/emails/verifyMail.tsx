import { Html } from "@react-email/html";
import { Button, Tailwind } from "@react-email/components";

export default function VerifyEmail() {
  return (
    <Html>
      <Tailwind>
        <Button className="rounded-md bg-blue-500 p-2 text-white">
          Verificar
        </Button>
      </Tailwind>
    </Html>
  );
}
