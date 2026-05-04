"use client";

import * as React from "react";
import type { PortfolioRole, PortfolioRoleId } from "@/features/roles/types";
import { ProjectsSection } from "@/features/landing/components/projects-section";
import { StrengthsSection } from "@/features/landing/components/strengths-section";
import { cn } from "@/shared/cn";

type RoleScopedLandingProps = {
  roles: PortfolioRole[];
  defaultRoleId: PortfolioRoleId;
};

export function RoleScopedLanding({ roles, defaultRoleId }: RoleScopedLandingProps) {
  const [selectedId, setSelectedId] = React.useState<PortfolioRoleId>(defaultRoleId);

  const active = React.useMemo(
    () => roles.find((r) => r.id === selectedId) ?? roles[0],
    [roles, selectedId],
  );

  const selectIndex = React.useCallback(
    (index: number) => {
      const role = roles[index];
      if (role) setSelectedId(role.id);
    },
    [roles],
  );

  const handleTabListKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const i = roles.findIndex((r) => r.id === selectedId);
    if (i < 0) return;
    const next =
      e.key === "ArrowRight"
        ? (i + 1) % roles.length
        : (i - 1 + roles.length) % roles.length;
    selectIndex(next);
  };

  if (!active) return null;

  return (
    <>
      <div className="pt-12 pb-6 sm:pt-16 sm:pb-8">
        <p
          id="role-lens-label"
          className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted"
        >
          Focus
        </p>
        <div
          role="tablist"
          aria-labelledby="role-lens-label"
          aria-orientation="horizontal"
          onKeyDown={handleTabListKeyDown}
          className="flex flex-wrap gap-2"
        >
          {roles.map((role) => {
            const isSelected = role.id === selectedId;
            return (
              <button
                key={role.id}
                type="button"
                role="tab"
                id={`tab-${role.id}`}
                aria-selected={isSelected}
                aria-controls="role-lens-panel"
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setSelectedId(role.id)}
                className={cn(
                  "min-h-11 rounded-full border px-3.5 py-2 text-sm font-medium transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  isSelected
                    ? "border-foreground bg-foreground text-background dark:border-white dark:bg-white dark:text-black"
                    : "border-border bg-transparent text-muted hover:border-foreground/25 hover:text-foreground",
                )}
              >
                {role.label}
              </button>
            );
          })}
        </div>
      </div>

      <div
        role="tabpanel"
        id="role-lens-panel"
        aria-labelledby={`tab-${active.id}`}
        className="divide-y divide-border"
      >
        <StrengthsSection
          strengths={active.strengths}
          intro={active.strengthsIntro}
        />
        <ProjectsSection projects={active.projects} intro={active.projectsIntro} />
      </div>
    </>
  );
}
