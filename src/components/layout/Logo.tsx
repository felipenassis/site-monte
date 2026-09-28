import Image from "next/image";

const ICON_WIDTH = 96;
const ICON_HEIGHT = 30;

export function Logo() {
  return (
    <span className="flex items-center gap-2">
      <Image
        src="/logo-icon.png"
        alt=""
        width={ICON_WIDTH}
        height={ICON_HEIGHT}
        priority
        className="h-6 w-auto dark:hidden"
      />
      <Image
        src="/logo-icon-dark.png"
        alt=""
        width={ICON_WIDTH}
        height={ICON_HEIGHT}
        priority
        className="hidden h-6 w-auto dark:block"
      />
      <span className="font-display text-lg font-bold uppercase tracking-wide">
        Monte
      </span>
    </span>
  );
}
