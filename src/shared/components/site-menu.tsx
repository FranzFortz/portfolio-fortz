"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { LayoutGrid } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import type { SocialLink } from "@/features/social/types";
import { primaryNav } from "@/shared/site-navigation";
import { ThemeToggle } from "@/shared/components/theme-toggle";
import { Button } from "@/shared/components/ui/button";
import { cn } from "@/shared/cn";

type SiteMenuProps = {
  resourceLinks: SocialLink[];
};

function hashFromNavHref(href: string): string | null {
  const i = href.indexOf("#");
  return i >= 0 ? href.slice(i) : null;
}

export function SiteMenu({ resourceLinks }: SiteMenuProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [hash, setHash] = React.useState("");

  React.useEffect(() => {
    const update = () => setHash(window.location.hash);
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);

  return (
    <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          type="button"
          className={cn(
            "h-10 w-10 rounded-md text-foreground",
            "hover:bg-transparent hover:opacity-70",
            "focus-visible:ring-offset-background",
          )}
          aria-label="Open menu"
        >
          <LayoutGrid className="h-5 w-5 stroke-[1.5]" aria-hidden />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          align="end"
          sideOffset={10}
          className={cn(
            "z-50 w-[min(calc(100vw-2rem),20rem)] rounded-xl border border-border bg-card p-2 shadow-soft outline-none",
          )}
        >
          <nav aria-label="Primary">
            {primaryNav.map((item) => {
              const itemHash = hashFromNavHref(item.href);
              const active =
                pathname === "/" && itemHash != null && itemHash === hash;
              return (
                <DropdownMenuItem key={item.href} asChild>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "relative flex cursor-pointer select-none rounded-lg px-3 py-2.5 text-lg font-medium tracking-tight outline-none transition-colors",
                      "data-[highlighted]:bg-muted-bg",
                      active ? "text-foreground" : "text-muted",
                    )}
                  >
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              );
            })}
          </nav>
          <DropdownMenuSeparator className="my-2 h-px bg-border" />
          <div className="px-3 pb-1 pt-0.5">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
              Resources
            </p>
            <ul className="flex flex-col gap-1">
              {resourceLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-md px-1 py-1 text-sm text-muted outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <DropdownMenuSeparator className="my-2 h-px bg-border" />
          <div className="flex items-center justify-between gap-2 px-2 py-1">
            <span className="text-xs text-muted">Appearance</span>
            <ThemeToggle />
          </div>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
}
