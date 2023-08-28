import React from "react";
import * as Menubar from "@radix-ui/react-menubar";
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
} from "@radix-ui/react-icons";

const RADIO_ITEMS = ["Andy", "Benoît", "Luis"];
const CHECK_ITEMS = ["Always Show Bookmarks Bar", "Always Show Full URLs"];

const MenubarDemo = () => {
  const [checkedSelection, setCheckedSelection] = React.useState([
    CHECK_ITEMS[1],
  ]);
  const [radioSelection, setRadioSelection] = React.useState(RADIO_ITEMS[2]);

  return (
    <Menubar.Root className="shadow-blackA7 flex rounded-md bg-white p-[3px] shadow-[0_2px_10px]">
      <Menubar.Menu>
        <Menubar.Trigger className="text-violet11 data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4 flex select-none items-center justify-between gap-[2px] rounded px-3 py-2 text-[13px] font-medium leading-none outline-none">
          File
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content
            className="min-w-[220px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[transform,opacity] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)]"
            align="start"
            sideOffset={5}
            alignOffset={-3}
          >
            <Menubar.Item className="text-violet11 data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 group relative flex h-[25px] select-none items-center rounded px-[10px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gradient-to-br">
              New Tab{" "}
              <div className="text-mauve9 group-data-[disabled]:text-mauve8 ml-auto pl-5 group-data-[highlighted]:text-white">
                ⌘ T
              </div>
            </Menubar.Item>
            <Menubar.Item className="text-violet11 data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 group relative flex h-[25px] select-none items-center rounded px-[10px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gradient-to-br">
              New Window{" "}
              <div className="text-mauve9 group-data-[disabled]:text-mauve8 ml-auto pl-5 group-data-[highlighted]:text-white">
                ⌘ N
              </div>
            </Menubar.Item>
            <Menubar.Item
              className="text-violet11 data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 relative flex h-[25px] select-none items-center rounded px-[10px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gradient-to-br"
              disabled
            >
              New Incognito Window
            </Menubar.Item>
            <Menubar.Separator className="bg-violet6 m-[5px] h-[1px]" />
            <Menubar.Sub>
              <Menubar.SubTrigger className="text-violet11 data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 group relative flex h-[25px] select-none items-center rounded px-[10px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gradient-to-br">
                Share
                <div className="text-mauve9 group-data-[disabled]:text-mauve8 ml-auto pl-5 group-data-[highlighted]:text-white">
                  <ChevronRightIcon />
                </div>
              </Menubar.SubTrigger>
              <Menubar.Portal>
                <Menubar.SubContent
                  className="min-w-[220px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[transform,opacity] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)]"
                  alignOffset={-5}
                >
                  <Menubar.Item className="text-violet11 data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]::to-violet10 data-[state=open]:text-violet1 data-[disabled]:text-mauve8 relative flex h-[25px] select-none items-center rounded px-[10px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gradient-to-br">
                    Email Link
                  </Menubar.Item>
                  <Menubar.Item className="text-violet11 data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]::to-violet10 data-[state=open]:text-violet1 data-[disabled]:text-mauve8 relative flex h-[25px] select-none items-center rounded px-[10px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gradient-to-br">
                    Messages
                  </Menubar.Item>
                  <Menubar.Item className="text-violet11 data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]::to-violet10 data-[state=open]:text-violet1 data-[disabled]:text-mauve8 relative flex h-[25px] select-none items-center rounded px-[10px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gradient-to-br">
                    Notes
                  </Menubar.Item>
                </Menubar.SubContent>
              </Menubar.Portal>
            </Menubar.Sub>
            <Menubar.Separator className="bg-violet6 m-[5px] h-[1px]" />
            <Menubar.Item className="text-violet11 data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[disabled]:text-mauve8 group relative flex h-[25px] select-none items-center rounded px-[10px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gradient-to-br">
              Print…{" "}
              <div className="text-mauve9 group-data-[disabled]:text-mauve8 ml-auto pl-5 group-data-[highlighted]:text-white">
                ⌘ P
              </div>
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Trigger className="text-violet11 data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4 flex select-none items-center justify-between gap-[2px] rounded px-3 py-2 text-[13px] font-medium leading-none outline-none">
          Edit
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content
            className="min-w-[220px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[transform,opacity] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)]"
            align="start"
            sideOffset={5}
            alignOffset={-3}
          >
            <Menubar.Item className="text-violet11 data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 group relative flex h-[25px] select-none items-center rounded px-[10px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gradient-to-br">
              Undo{" "}
              <div className="text-mauve9 group-data-[disabled]:text-mauve8 ml-auto pl-5 group-data-[highlighted]:text-white">
                ⌘ Z
              </div>
            </Menubar.Item>
            <Menubar.Item className="text-violet11 data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 group relative flex h-[25px] select-none items-center rounded px-[10px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gradient-to-br">
              Redo{" "}
              <div className="text-mauve9 group-data-[disabled]:text-mauve8 ml-auto pl-5 group-data-[highlighted]:text-white">
                ⇧ ⌘ Z
              </div>
            </Menubar.Item>
            <Menubar.Separator className="bg-violet6 m-[5px] h-[1px]" />
            <Menubar.Sub>
              <Menubar.SubTrigger className="text-violet11 data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 group relative flex h-[25px] select-none items-center rounded px-[10px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gradient-to-br">
                Find
                <div className="text-mauve9 group-data-[disabled]:text-mauve8 ml-auto pl-5 group-data-[highlighted]:text-white">
                  <ChevronRightIcon />
                </div>
              </Menubar.SubTrigger>

              <Menubar.Portal>
                <Menubar.SubContent
                  className="min-w-[220px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[transform,opacity] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)]"
                  alignOffset={-5}
                >
                  <Menubar.Item className="text-violet11 data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]::to-violet10 data-[state=open]:text-violet1 data-[disabled]:text-mauve8 group relative flex h-[25px] select-none items-center rounded px-[10px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gradient-to-br">
                    Search the web…
                  </Menubar.Item>
                  <Menubar.Separator className="bg-violet6 m-[5px] h-[1px]" />
                  <Menubar.Item className="text-violet11 data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]::to-violet10 data-[state=open]:text-violet1 data-[disabled]:text-mauve8 relative flex h-[25px] select-none items-center rounded px-[10px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gradient-to-br">
                    Find…
                  </Menubar.Item>
                  <Menubar.Item className="text-violet11 data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]::to-violet10 data-[state=open]:text-violet1 data-[disabled]:text-mauve8 relative flex h-[25px] select-none items-center rounded px-[10px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gradient-to-br">
                    Find Next
                  </Menubar.Item>
                  <Menubar.Item className="text-violet11 data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]::to-violet10 data-[state=open]:text-violet1 data-[disabled]:text-mauve8 relative flex h-[25px] select-none items-center rounded px-[10px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gradient-to-br">
                    Find Previous
                  </Menubar.Item>
                </Menubar.SubContent>
              </Menubar.Portal>
            </Menubar.Sub>
            <Menubar.Separator className="bg-violet6 m-[5px] h-[1px]" />
            <Menubar.Item className="text-violet11 data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 relative flex h-[25px] select-none items-center rounded px-[10px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gradient-to-br">
              Cut
            </Menubar.Item>
            <Menubar.Item className="text-violet11 data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 relative flex h-[25px] select-none items-center rounded px-[10px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gradient-to-br">
              Copy
            </Menubar.Item>
            <Menubar.Item className="text-violet11 data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 relative flex h-[25px] select-none items-center rounded px-[10px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gradient-to-br">
              Paste
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Trigger className="text-violet11 data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4 flex select-none items-center justify-between gap-[2px] rounded px-3 py-2 text-[13px] font-medium leading-none outline-none">
          View
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content
            className="min-w-[220px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[transform,opacity] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)]"
            align="start"
            sideOffset={5}
            alignOffset={-14}
          >
            {CHECK_ITEMS.map((item) => (
              <Menubar.CheckboxItem
                className="text-violet11 data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[disabled]:text-mauve8 relative flex h-[25px] select-none items-center rounded px-[10px] pl-5 text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gradient-to-br"
                key={item}
                checked={checkedSelection.includes(item)}
                onCheckedChange={() =>
                  setCheckedSelection((current) =>
                    current.includes(item)
                      ? current.filter((el) => el !== item)
                      : current.concat(item)
                  )
                }
              >
                <Menubar.ItemIndicator className="absolute left-0 inline-flex w-5 items-center justify-center">
                  <CheckIcon />
                </Menubar.ItemIndicator>
                {item}
              </Menubar.CheckboxItem>
            ))}
            <Menubar.Separator className="bg-violet6 m-[5px] h-[1px]" />
            <Menubar.Item className="text-violet11 data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 group relative flex h-[25px] select-none items-center rounded px-[10px] pl-5 text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gradient-to-br">
              Reload{" "}
              <div className="text-mauve9 group-data-[disabled]:text-mauve8 ml-auto pl-5 group-data-[highlighted]:text-white">
                ⌘ R
              </div>
            </Menubar.Item>
            <Menubar.Item
              className="text-violet11 data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 group relative flex h-[25px] select-none items-center rounded px-[10px] pl-5 text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gradient-to-br"
              disabled
            >
              Force Reload{" "}
              <div className="text-mauve9 group-data-[disabled]:text-mauve8 ml-auto pl-5 group-data-[highlighted]:text-white">
                ⇧ ⌘ R
              </div>
            </Menubar.Item>
            <Menubar.Separator className="bg-violet6 m-[5px] h-[1px]" />
            <Menubar.Item className="text-violet11 data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 relative flex h-[25px] select-none items-center rounded px-[10px] pl-5 text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gradient-to-br">
              Toggle Fullscreen
            </Menubar.Item>
            <Menubar.Separator className="bg-violet6 m-[5px] h-[1px]" />
            <Menubar.Item className="text-violet11 data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 relative flex h-[25px] select-none items-center rounded px-[10px] pl-5 text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gradient-to-br">
              Hide Sidebar
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Trigger className="text-violet11 data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4 flex select-none items-center justify-between gap-[2px] rounded px-3 py-2 text-[13px] font-medium leading-none outline-none">
          Profiles
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content
            className="min-w-[220px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[transform,opacity] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)]"
            align="start"
            sideOffset={5}
            alignOffset={-14}
          >
            <Menubar.RadioGroup
              value={radioSelection}
              onValueChange={setRadioSelection}
            >
              {RADIO_ITEMS.map((item) => (
                <Menubar.RadioItem
                  className="text-violet11 data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[disabled]:text-mauve8 relative flex h-[25px] select-none items-center rounded px-[10px] pl-5 text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gradient-to-br"
                  key={item}
                  value={item}
                >
                  <Menubar.ItemIndicator className="absolute left-0 inline-flex w-5 items-center justify-center">
                    <DotFilledIcon />
                  </Menubar.ItemIndicator>
                  {item}
                </Menubar.RadioItem>
              ))}
              <Menubar.Separator className="bg-violet6 m-[5px] h-[1px]" />
              <Menubar.Item className="text-violet11 data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 relative flex h-[25px] select-none items-center rounded px-[10px] pl-5 text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gradient-to-br">
                Edit…
              </Menubar.Item>
              <Menubar.Separator className="bg-violet6 m-[5px] h-[1px]" />
              <Menubar.Item className="text-violet11 data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 relative flex h-[25px] select-none items-center rounded px-[10px] pl-5 text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gradient-to-br">
                Add Profile…
              </Menubar.Item>
            </Menubar.RadioGroup>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  );
};

export default MenubarDemo;
