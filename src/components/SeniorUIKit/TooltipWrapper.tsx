import * as Tooltip from "@radix-ui/react-tooltip";
import React from "react";

interface TooltipWrapperProps {
  label: string;
  children: React.ReactNode;
}

export const TooltipWrapper = ({ label, children }: TooltipWrapperProps) => (
  <Tooltip.Provider>
    <Tooltip.Root>
      <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
      <Tooltip.Content side="top" className="bg-black text-white px-3 py-2 rounded shadow-lg z-50">
        {label}
        <Tooltip.Arrow className="fill-black" />
      </Tooltip.Content>
    </Tooltip.Root>
  </Tooltip.Provider>
);
