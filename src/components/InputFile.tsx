import { useLayoutEffect, useMemo } from "react";
import Image from "next/image";
import { cn } from "~/utils/libs";
import { Avatar } from "./Avatar";

type Props = {
  placeholder: string;
  Icon?: (props: { className: string }) => JSX.Element;
  name?: string;
  error?: boolean;
  className?: string;
  value?: File;
  onChange?: (value: File | undefined) => void;
};

export const InputFile = ({
  placeholder,
  Icon,
  name,
  value,
  onChange,
  error = false,
  className,
}: Props) => {
  const inputId = useMemo(
    () => (name ? `file-input-${name}` : "file-input"),
    [name]
  );

  useLayoutEffect(() => {
    const elementExists = document.querySelectorAll(`#${inputId}`);

    if (elementExists.length > 1) {
      console.error(
        "Já existe um InputFile nessa página com o mesmo id. Por favor defina o parâmetro name em todos " +
          "os componentes InputFile desta página, caso contrário o seletor de arquivo não funcionará corretamente"
      );
    }
  }, [inputId]);

  return (
    <div
      className={cn(
        `flex h-[7rem] w-[14rem] flex-col items-center rounded-md bg-white p-2`,
        className
      )}
    >
      <div className="flex gap-3">
        {Icon && <Icon className={`h-6 w-6 `} />}

        <label>Anexar imagem</label>
        <div className="rounded-full border px-2">
          <button
            className={`cursor-pointer`}
            onClick={() => onChange?.(undefined)}
            type="button"
          >
            X
          </button>
        </div>
      </div>

      {value ? (
        <label
          htmlFor={inputId}
          className="flex h-3/4 w-full cursor-pointer flex-row justify-center"
        >
          <Avatar name="" url={URL.createObjectURL(value)} />
        </label>
      ) : (
        <label
          htmlFor={inputId}
          className={`flex h-[7rem] w-[10rem] cursor-pointer items-center pt-4 text-center text-xs`}
        >
          {placeholder}
        </label>
      )}

      <input
        id={inputId}
        type="file"
        className={`bg-secondary-default z-10 h-[7rem] w-[19rem] cursor-pointer border opacity-0 file:border-dashed file:bg-transparent`}
        onChange={(event) => {
          const files = event.target.files;
          if (files) {
            onChange?.(files?.[0]);
          }
        }}
      />
    </div>
  );
};
