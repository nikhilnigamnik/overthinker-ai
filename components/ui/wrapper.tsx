import React from "react";

export function Wrapper({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative  grid grid-cols-[1fr_minmax(auto,2.5rem)_minmax(auto,800px)_minmax(auto,2.5rem)_1fr] grid-rows-[1fr_1px_auto_1px_1fr] bg-background [--pattern-fg:var(--color-white)]/10">
      <div className="col-start-3 row-start-3 flex flex-col px-4">
        {children}
      </div>
      <div className="relative -right-px col-start-2 row-span-full row-start-1 border-x-[0.5px] border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
      <div className="relative -left-px col-start-4 row-span-full row-start-1 border-x-[0.5px] border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
      <div className="relative -top-px col-span-full col-start-1 row-start-4 h-[0.5px] bg-(--pattern-fg)"></div>
    </div>
  );
}
