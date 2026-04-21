import {
  BarChart3,
  ChartNoAxesCombined,
  Megaphone,
  Package,
  ReceiptText,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";

import { routes } from "@/lib/constants/routes";

export const dashboardNavItems = [
  {
    title: "Overview",
    href: routes.overview,
    icon: ChartNoAxesCombined,
  },
  {
    title: "Revenue",
    href: routes.revenue,
    icon: ReceiptText,
  },
  {
    title: "Customers",
    href: routes.customers,
    icon: Users,
  },
  {
    title: "Products",
    href: routes.products,
    icon: Package,
  },
  {
    title: "Campaigns",
    href: routes.campaigns,
    icon: Megaphone,
  },
  {
    title: "Reports",
    href: routes.reports,
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: routes.settings,
    icon: Settings,
  },
] as const;

export const marketingPrimaryCta = {
  label: "Open Dashboard",
  href: routes.dashboard,
};

export const marketingSecondaryCta = {
  label: "View Reports",
  href: routes.reports,
};

export const dashboardQuickActions = [
  { label: "Export", href: routes.reports },
  { label: "Saved Views", href: routes.savedView },
  { label: "Orders", href: routes.revenue },
  { label: "Customers", href: routes.customers },
  { label: "Products", href: routes.products },
  { label: "Campaigns", href: routes.campaigns },
  { label: "Checkout", href: routes.revenue },
  { label: "Storefront", href: routes.home },
] as const;