"use client";

import LogoDarkMode from "@/public/logo/logoWhite.svg";
import LogoLightMode from "@/public/logo/logoBlack.svg";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";

import { Skeleton } from "@/components/ui/skeleton";

export default function ThemedLogo({ size }: { size: number }) {
  const { theme, resolvedTheme } = useTheme();
  const [sizeIcon, setSize] = useState(size);

  const currentTheme = useMemo(() => {
    if (theme === "system") {
      return resolvedTheme;
    } else {
      return theme;
    }
  }, [theme, resolvedTheme]);

  useEffect(() => {
    setSize(size);
  }, [size]);

  if (!currentTheme) {
    return <Skeleton />;
  }

  return (
    <div>
      <Image
        src={currentTheme === "dark" ? LogoDarkMode : LogoLightMode}
        alt="logo"
        width={sizeIcon}
        priority
        suppressHydrationWarning
        className="relative"
      />
    </div>
  );
}
