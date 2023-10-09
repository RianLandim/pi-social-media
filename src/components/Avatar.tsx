import Image from "next/image";
import PrimitiveAvatar from "boring-avatars";

type Props = {
  url?: string | null;
  name: string;
};

export function Avatar({ name, url }: Props) {
  return url ? (
    <Image src={url} alt="avatar-img" className="h-16 w-16 rounded-full" />
  ) : (
    <PrimitiveAvatar
      size={64}
      name={name}
      variant="beam"
      colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
    />
  );
}
