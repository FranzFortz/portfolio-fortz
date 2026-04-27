"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { primaryNav } from "@/shared/site-navigation";
import { ThemeToggle } from "@/shared/components/theme-toggle";
import { Button } from "@/shared/components/ui/button";
import { cn } from "@/shared/cn";

export function SiteMenu() {
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          type="button"
          className="rounded-lg border border-border bg-card/90 shadow-soft backdrop-blur-sm"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5 text-foreground" aria-hidden />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          align="end"
          sideOffset={8}
          className="z-50 min-w-[12rem] rounded-lg border border-border bg-card p-1 shadow-soft outline-none"
        >
          {primaryNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <DropdownMenuItem key={item.href} asChild>
                <Link
                  href={item.href}
                  className={cn(
                    "relative flex cursor-pointer select-none rounded-md px-3 py-2 text-sm outline-none transition-colors",
                    "data-[highlighted]:bg-muted-bg",
                    active ? "font-medium text-accent" : "text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuSeparator className="my-1 h-px bg-border" />
          <div className="flex items-center justify-between gap-2 px-2 py-1.5">
            <span className="text-xs text-muted">Appearance</span>
            <ThemeToggle />
          </div>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
}
