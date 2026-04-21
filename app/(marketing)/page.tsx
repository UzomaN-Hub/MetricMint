"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  ChartNoAxesCombined,
  Layers3,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { routes } from "@/lib/constants/routes";

const featureItems = [
  {
    title: "Revenue visibility",
    description:
      "Track top-line movement, compare periods, and identify the channels contributing most to growth.",
    icon: TrendingUp,
  },
  {
    title: "Readable reporting",
    description:
      "Move from overview to deeper analysis with filterable tables, saved views, and clearer chart storytelling.",
    icon: BarChart3,
  },
  {
    title: "Reusable workflows",
    description:
      "Keep recurring analysis faster with saved views and a cleaner reporting path for operators and managers.",
    icon: Layers3,
  },
  {
    title: "Control without clutter",
    description:
      "Built to stay fast, scannable, and structured even as dashboards become information-dense.",
    icon: ShieldCheck,
  },
];

const audienceItems = [
  "Founders checking revenue quickly",
  "Product teams reviewing trend changes",
  "Operators investigating detailed rows",
  "Marketing teams comparing campaign performance",
];

const stats = [
  { label: "Revenue tracked", value: "$245.8K" },
  { label: "Orders monitored", value: "1,384" },
  { label: "Saved views", value: "3" },
  { label: "Active report rows", value: "12" },
];

export default function MarketingPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-10 sm:px-6 lg:px-8">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href={routes.home} className="w-fit">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
              <ChartNoAxesCombined className="size-5" />
            </div>
            <div>
              <p className="text-3xl font-semibold tracking-tight text-foreground">
                MetricMint
              </p>
              <p className="text-sm text-muted-foreground">
                Analytics workspace for revenue, products, and customer performance
              </p>
            </div>
          </div>
        </Link>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
          <Link href={routes.reports} className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto">
              Reports
            </Button>
          </Link>
          <Link href={routes.dashboard} className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto">
              Open Dashboard
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </header>

      <section className="grid flex-1 items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.34, ease: "easeOut" }}
          className="space-y-6"
        >
          <span className="inline-flex rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
            Bright analytics SaaS
          </span>

          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Monitor revenue, customer behavior, and product performance in one clean workspace.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              MetricMint helps teams spot changes quickly, compare performance,
              and move from overview to detail without getting lost in cluttered analytics.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href={routes.dashboard}>
              <Button size="lg">
                Launch dashboard
                <ArrowRight className="size-4" />
              </Button>
            </Link>
            <Link href={routes.reports}>
              <Button size="lg" variant="outline">
                View reports
              </Button>
            </Link>
          </div>

          <div className="grid gap-3 pt-2 sm:grid-cols-2">
            {audienceItems.map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -2 }}
                className="inline-flex items-center gap-2 rounded-xl border bg-card px-4 py-3 text-sm text-foreground transition-colors duration-200 hover:border-primary/20 hover:bg-primary/6 dark:hover:bg-primary/10"
              >
                <Users className="size-4 text-primary" />
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.36, ease: "easeOut", delay: 0.05 }}
          className="rounded-[2rem] border border-border/80 bg-card/95 p-5 shadow-[0_22px_60px_-26px_rgba(46,66,120,0.28)]"
        >
          <div className="rounded-[1.5rem] border border-border/70 bg-background p-5">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-linear-to-br from-primary/10 to-chart-2/10 p-4">
                <p className="text-xs text-muted-foreground">Revenue</p>
                <p className="mt-2 text-2xl font-semibold">$245.8K</p>
                <p className="mt-2 text-xs text-emerald-600 dark:text-emerald-400">
                  +7.6% vs previous period
                </p>
              </div>
              <div className="rounded-2xl bg-linear-to-br from-chart-2/10 to-chart-3/10 p-4">
                <p className="text-xs text-muted-foreground">Orders</p>
                <p className="mt-2 text-2xl font-semibold">1,384</p>
                <p className="mt-2 text-xs text-emerald-600 dark:text-emerald-400">
                  +5.5% vs previous period
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-2xl bg-muted p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">Performance overview</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Understand what changed before drilling down.
                  </p>
                </div>
                <Sparkles className="size-4 text-primary" />
              </div>

              <div className="mt-5 grid gap-3">
                <div className="h-3 rounded-full bg-background" />
                <div className="h-3 w-11/12 rounded-full bg-background" />
                <div className="h-24 rounded-2xl bg-background" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="pb-10">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.24, delay: index * 0.04 }}
              whileHover={{ y: -3 }}
              className="rounded-[1.35rem] border border-border/80 bg-card/95 p-5 transition-colors duration-200 hover:border-primary/20 hover:bg-primary/6 dark:hover:bg-primary/10"
            >
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <p className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="pb-12">
        <div className="mb-6 max-w-2xl">
          <p className="text-sm font-medium text-primary">Why MetricMint</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
            Designed for real analysis, not decorative dashboards.
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            The product is built to help users understand what changed, why it changed,
            and where to inspect next without overwhelming the screen.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featureItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28, delay: index * 0.04 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-border/80 bg-card/95 p-5 transition-colors duration-200 hover:border-primary/20 hover:bg-primary/6 dark:hover:bg-primary/10"
              >
                <div className="flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <footer className="border-t border-border/70 py-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-foreground">MetricMint</p>
            <p className="text-sm text-muted-foreground">
              Bright analytics workspace for revenue, products, and customers.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link href={routes.dashboard}>
              <Button variant="outline">Open Dashboard</Button>
            </Link>
            <Link href={routes.reports}>
              <Button>Reports</Button>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}