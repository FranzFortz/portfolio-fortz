import {
  DEFAULT_PORTFOLIO_ROLE_ID,
  PORTFOLIO_ROLES,
} from "./data/portfolio-roles";
import type { PortfolioRole, PortfolioRoleId } from "./types";

export function getPortfolioRoles(): PortfolioRole[] {
  return PORTFOLIO_ROLES;
}

export function getDefaultPortfolioRoleId(): PortfolioRoleId {
  return DEFAULT_PORTFOLIO_ROLE_ID;
}
