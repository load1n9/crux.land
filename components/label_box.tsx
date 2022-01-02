/** @jsx h */
import { ComponentChildren, h, JSX, tw } from "../deps.ts";
import { BORDER_CLASSES } from "./layout.tsx";

export function LabelBox(
  { children, ...props }: {
    children: ComponentChildren;
    props?: JSX.HTMLAttributes<HTMLLabelElement>;
  },
) {
  return (
    <label
      {...props}
      class={tw`
        w-full
        flex 
        justify-center
        py-2 px-4
        ${BORDER_CLASSES}
        font-medium
        text-gray-700
        bg-gray-100
        transition
        duration-150
        ease-in-out
        select-none
        hover:(text-gray-500 bg-gray-50)
        active:(bg-gray-100 text-gray-700)
        focus:(outline-none shadow border-blue-300)`}
    >
      {children}
    </label>
  );
}
