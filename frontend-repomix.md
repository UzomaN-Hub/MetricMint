This file is a merged representation of the entire codebase, combined into a single document by Repomix.

<file_summary>
This section contains a summary of this file.

<purpose>
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.
</purpose>

<file_format>
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  - File path as an attribute
  - Full contents of the file
</file_format>

<usage_guidelines>
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.
</usage_guidelines>

<notes>
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)
</notes>

</file_summary>

<directory_structure>
.gitignore
app/(dashboard)/dashboard/campaigns/page.tsx
app/(dashboard)/dashboard/customers/page.tsx
app/(dashboard)/dashboard/error.tsx
app/(dashboard)/dashboard/loading.tsx
app/(dashboard)/dashboard/not-found.tsx
app/(dashboard)/dashboard/overview/page.tsx
app/(dashboard)/dashboard/page.tsx
app/(dashboard)/dashboard/products/page.tsx
app/(dashboard)/dashboard/record-detail/page.tsx
app/(dashboard)/dashboard/reports/page.tsx
app/(dashboard)/dashboard/revenue/page.tsx
app/(dashboard)/dashboard/saved-view/page.tsx
app/(dashboard)/dashboard/settings/page.tsx
app/(dashboard)/layout.tsx
app/(marketing)/layout.tsx
app/(marketing)/page.tsx
app/favicon.ico
app/globals.css
app/layout.tsx
components.json
components/data-display/chart-card.tsx
components/data-display/data-table-toolbar.tsx
components/data-display/data-table.tsx
components/data-display/kpi-card.tsx
components/feedback/no-results.tsx
components/feedback/panel-error.tsx
components/feedback/panel-loading.tsx
components/layout/app-sidebar.tsx
components/layout/content-shell.tsx
components/layout/dashboard-shell.tsx
components/layout/mobile-sidebar.tsx
components/layout/topbar.tsx
components/navigation/breadcrumbs.tsx
components/navigation/sidebar-nav.tsx
components/navigation/top-nav-actions.tsx
components/shared/empty-state.tsx
components/shared/error-state.tsx
components/shared/loading-skeleton.tsx
components/shared/page-header.tsx
components/shared/page-reveal.tsx
components/shared/section-shell.tsx
components/shared/stat-card.tsx
components/shared/theme-toggle.tsx
components/ui/avatar.tsx
components/ui/badge.tsx
components/ui/button.tsx
components/ui/calendar.tsx
components/ui/card.tsx
components/ui/dialog.tsx
components/ui/dropdown-menu.tsx
components/ui/input.tsx
components/ui/popover.tsx
components/ui/select.tsx
components/ui/separator.tsx
components/ui/sheet.tsx
components/ui/skeleton.tsx
components/ui/table.tsx
components/ui/tabs.tsx
components/ui/tooltip.tsx
docs/.gitkeep
eslint.config.mjs
features/campaigns/components/campaign-performance-grid.tsx
features/campaigns/components/campaign-source-breakdown.tsx
features/campaigns/components/campaign-table.tsx
features/charts/components/breakdown-chart.tsx
features/charts/components/comparison-chart.tsx
features/charts/components/sparkline.tsx
features/charts/components/trend-chart.tsx
features/charts/config/chart-colors.ts
features/charts/config/chart-metrics.ts
features/charts/lib/chart-formatters.ts
features/charts/types/chart-types.ts
features/customers/components/customer-device-breakdown.tsx
features/customers/components/customer-list.tsx
features/customers/components/customer-retention-card.tsx
features/dashboard-shell/components/dashboard-content.tsx
features/dashboard-shell/components/dashboard-sidebar.tsx
features/dashboard-shell/components/dashboard-topbar.tsx
features/drill-down/components/record-detail-mini-chart.tsx
features/drill-down/components/record-detail-panel.tsx
features/drill-down/components/record-detail-summary.tsx
features/drill-down/hooks/use-record-detail.ts
features/drill-down/types/record-detail-types.ts
features/filters/components/date-range-filter.tsx
features/filters/components/filter-chip-bar.tsx
features/filters/components/saved-view-selector.tsx
features/filters/components/segment-filter.tsx
features/filters/hooks/use-dashboard-filters.ts
features/filters/hooks/use-filter-chips.ts
features/filters/lib/filter-defaults.ts
features/filters/lib/filter-options.ts
features/filters/schemas/filter-schema.ts
features/filters/types/filter-types.ts
features/kpis/components/metric-card.tsx
features/kpis/components/metric-grid.tsx
features/kpis/lib/metric-formatters.ts
features/kpis/types/metric-types.ts
features/overview/components/overview-insights-panel.tsx
features/overview/components/overview-kpi-strip.tsx
features/overview/components/overview-top-movers.tsx
features/overview/components/overview-trend-section.tsx
features/overview/hooks/use-overview-top-movers.ts
features/products/components/declining-products-card.tsx
features/products/components/product-performance-table.tsx
features/products/components/top-products-card.tsx
features/reports-table/columns/report-columns.tsx
features/reports-table/components/reports-table-column-toggle.tsx
features/reports-table/components/reports-table-pagination.tsx
features/reports-table/components/reports-table-toolbar.tsx
features/reports-table/components/reports-table.tsx
features/reports-table/hooks/use-reports-table.ts
features/reports-table/lib/table-formatters.ts
features/reports-table/types/report-row.ts
features/reports/components/report-presets-grid.tsx
features/reports/components/reports-export-panel.tsx
features/reports/components/reports-header.tsx
features/revenue/components/channel-breakdown-section.tsx
features/revenue/components/refund-trend-section.tsx
features/revenue/components/revenue-trend-section.tsx
features/saved-views/components/export-history-list.tsx
features/saved-views/components/save-view-dialog.tsx
features/saved-views/components/saved-view-card.tsx
features/saved-views/hooks/use-saved-views.ts
features/saved-views/lib/saved-view-mappers.ts
features/saved-views/schemas/saved-view-schema.ts
features/saved-views/types/saved-view-types.ts
features/settings/components/integration-settings-panel.tsx
features/settings/components/notification-settings-form.tsx
features/settings/components/workspace-settings-form.tsx
features/settings/schemas/settings-schema.ts
hooks/use-breakpoint.ts
hooks/use-debounce.ts
lib/api/breakdowns.ts
lib/api/client.ts
lib/api/metrics.ts
lib/api/reports.ts
lib/api/saved-views.ts
lib/api/trends.ts
lib/constants/navigation.ts
lib/constants/routes.ts
lib/formatters/currency.ts
lib/formatters/date.ts
lib/formatters/percentage.ts
lib/mappers/dashboard.ts
lib/mock-data/campaigns.ts
lib/mock-data/customers.ts
lib/mock-data/overview.ts
lib/mock-data/products.ts
lib/mock-data/reports.ts
lib/mock-data/revenue.ts
lib/mock-data/settings.ts
lib/query/query-client.ts
lib/utils.ts
lib/utils/cn.ts
next.config.ts
package.json
postcss.config.mjs
providers/app-provider.tsx
providers/dashboard-filters-provider.tsx
providers/query-provider.tsx
providers/theme-provider.tsx
public/file.svg
public/globe.svg
public/next.svg
public/vercel.svg
public/window.svg
README.md
styles/charts.css
styles/tokens.css
tests/integration/.gitkeep
tests/unit/.gitkeep
tsconfig.json
types/api.ts
types/common.ts
types/dashboard.ts
</directory_structure>

<files>
This section contains the contents of the repository's files.

<file path="app/(dashboard)/dashboard/not-found.tsx">
import Link from "next/link";

import { ContentShell } from "@/components/layout/content-shell";
import { SectionShell } from "@/components/shared/section-shell";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/constants/routes";

export default function DashboardNotFound() {
  return (
    <ContentShell>
      <SectionShell>
        <div className="rounded-[1.35rem] border border-dashed border-border/80 bg-card/95 p-8 shadow-[0_10px_26px_-18px_rgba(30,41,59,0.16)]">
          <p className="text-sm font-semibold text-foreground">Page not found</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
            The dashboard page you tried to open does not exist or may have been moved.
          </p>

          <div className="mt-5 flex items-center gap-3">
            <Link href={routes.overview}>
              <Button>Back to overview</Button>
            </Link>
            <Link href={routes.reports}>
              <Button variant="outline">Open reports</Button>
            </Link>
          </div>
        </div>
      </SectionShell>
    </ContentShell>
  );
}
</file>

<file path="components/layout/mobile-sidebar.tsx">
"use client";

import Link from "next/link";
import { Menu, ChartNoAxesCombined } from "lucide-react";
import { usePathname } from "next/navigation";

import { dashboardNavItems } from "@/lib/constants/navigation";
import { routes } from "@/lib/constants/routes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MobileSidebar() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon-sm"
          aria-label="Open navigation"
          className="lg:hidden"
        >
          <Menu className="size-4" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-[290px] p-0">
        <SheetHeader className="border-b border-border/70 px-4 py-4">
          <SheetTitle asChild>
            <Link href={routes.home} className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                <ChartNoAxesCombined className="size-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">MetricMint</p>
                <p className="text-xs text-muted-foreground">Analytics Workspace</p>
              </div>
            </Link>
          </SheetTitle>
        </SheetHeader>

        <div className="space-y-1.5 p-4">
          {dashboardNavItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "cursor-pointer flex items-center gap-3 rounded-[1rem] px-3 py-3 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/18"
                    : "text-muted-foreground hover:bg-primary/8 hover:text-foreground"
                )}
              >
                <Icon className="size-4" />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
}
</file>

<file path="components/shared/page-reveal.tsx">
"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

export function PageReveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
</file>

<file path="components/shared/theme-toggle.tsx">
"use client";

import * as React from "react";
import { Laptop, Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const icon = !mounted ? (
    <SunMedium className="size-4" />
  ) : resolvedTheme === "dark" ? (
    <Moon className="size-4" />
  ) : (
    <SunMedium className="size-4" />
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon-sm" aria-label="Toggle theme">
          {icon}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <SunMedium className="size-4" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="size-4" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Laptop className="size-4" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
</file>

<file path="components/ui/avatar.tsx">
"use client"

import * as React from "react"
import { Avatar as AvatarPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Avatar({
  className,
  size = "default",
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root> & {
  size?: "default" | "sm" | "lg"
}) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={cn(
        "group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6 dark:after:mix-blend-lighten",
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn(
        "aspect-square size-full rounded-full object-cover",
        className
      )}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs",
        className
      )}
      {...props}
    />
  )
}

function AvatarBadge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        "absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground bg-blend-color ring-2 ring-background select-none",
        "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden",
        "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2",
        "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        "group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroupCount({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        "relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3",
        className
      )}
      {...props}
    />
  )
}

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarBadge,
}
</file>

<file path="components/ui/badge.tsx">
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        secondary:
          "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
        destructive:
          "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
        outline:
          "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
        ghost:
          "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
</file>

<file path="components/ui/calendar.tsx">
"use client"

import * as React from "react"
import {
  DayPicker,
  getDefaultClassNames,
  type DayButton,
  type Locale,
} from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon } from "lucide-react"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  locale,
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
}) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "group/calendar bg-background p-2 [--cell-radius:var(--radius-md)] [--cell-size:--spacing(7)] in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      locale={locale}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString(locale?.code, { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "relative flex flex-col gap-4 md:flex-row",
          defaultClassNames.months
        ),
        month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
        nav: cn(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "relative rounded-(--cell-radius)",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "absolute inset-0 bg-popover opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "font-medium select-none",
          captionLayout === "label"
            ? "text-sm"
            : "flex items-center gap-1 rounded-(--cell-radius) text-sm [&>svg]:size-3.5 [&>svg]:text-muted-foreground",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "flex-1 rounded-(--cell-radius) text-[0.8rem] font-normal text-muted-foreground select-none",
          defaultClassNames.weekday
        ),
        week: cn("mt-2 flex w-full", defaultClassNames.week),
        week_number_header: cn(
          "w-(--cell-size) select-none",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "text-[0.8rem] text-muted-foreground select-none",
          defaultClassNames.week_number
        ),
        day: cn(
          "group/day relative aspect-square h-full w-full rounded-(--cell-radius) p-0 text-center select-none [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius)",
          props.showWeekNumber
            ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-(--cell-radius)"
            : "[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius)",
          defaultClassNames.day
        ),
        range_start: cn(
          "relative isolate z-0 rounded-l-(--cell-radius) bg-muted after:absolute after:inset-y-0 after:right-0 after:w-4 after:bg-muted",
          defaultClassNames.range_start
        ),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn(
          "relative isolate z-0 rounded-r-(--cell-radius) bg-muted after:absolute after:inset-y-0 after:left-0 after:w-4 after:bg-muted",
          defaultClassNames.range_end
        ),
        today: cn(
          "rounded-(--cell-radius) bg-muted text-foreground data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn(
          "text-muted-foreground opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          )
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon className={cn("size-4", className)} {...props} />
            )
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon className={cn("size-4", className)} {...props} />
            )
          }

          return (
            <ChevronDownIcon className={cn("size-4", className)} {...props} />
          )
        },
        DayButton: ({ ...props }) => (
          <CalendarDayButton locale={locale} {...props} />
        ),
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-(--cell-size) items-center justify-center text-center">
                {children}
              </div>
            </td>
          )
        },
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  locale,
  ...props
}: React.ComponentProps<typeof DayButton> & { locale?: Partial<Locale> }) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString(locale?.code)}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "relative isolate z-10 flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 border-0 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-middle=true]:rounded-none data-[range-middle=true]:bg-muted data-[range-middle=true]:text-foreground data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground dark:hover:text-foreground [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }
</file>

<file path="components/ui/card.tsx">
import * as React from "react"

import { cn } from "@/lib/utils"

function Card({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & { size?: "default" | "sm" }) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        "group/card flex flex-col gap-4 overflow-hidden rounded-xl bg-card py-4 text-sm text-card-foreground ring-1 ring-foreground/10 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-4 group-data-[size=sm]/card:px-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "font-heading text-base leading-snug font-medium group-data-[size=sm]/card:text-sm",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-4 group-data-[size=sm]/card:px-3", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center rounded-b-xl border-t bg-muted/50 p-4 group-data-[size=sm]/card:p-3",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
</file>

<file path="components/ui/dialog.tsx">
"use client"

import * as React from "react"
import { Dialog as DialogPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { XIcon } from "lucide-react"

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-sm text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close data-slot="dialog-close" asChild>
            <Button
              variant="ghost"
              className="absolute top-2 right-2"
              size="icon-sm"
            >
              <XIcon
              />
              <span className="sr-only">Close</span>
            </Button>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  showCloseButton?: boolean
}) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close asChild>
          <Button variant="outline">Close</Button>
        </DialogPrimitive.Close>
      )}
    </div>
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn(
        "font-heading text-base leading-none font-medium",
        className
      )}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn(
        "text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
</file>

<file path="components/ui/dropdown-menu.tsx">
"use client"

import * as React from "react"
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { CheckIcon, ChevronRightIcon } from "lucide-react"

function DropdownMenu({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  )
}

function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  )
}

function DropdownMenuContent({
  className,
  align = "start",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        align={align}
        className={cn("z-50 max-h-(--radix-dropdown-menu-content-available-height) w-(--radix-dropdown-menu-trigger-width) min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:overflow-hidden data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
}

function DropdownMenuGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  )
}

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "group/dropdown-menu-item relative flex cursor-pointer items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      data-inset={inset}
      className={cn(
        "relative flex cursor-pointer items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span
        className="pointer-events-none absolute right-2 flex items-center justify-center"
        data-slot="dropdown-menu-checkbox-item-indicator"
      >
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon
          />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
}

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  )
}

function DropdownMenuRadioItem({
  className,
  children,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      data-inset={inset}
      className={cn(
        "relative flex cursor-pointer items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <span
        className="pointer-events-none absolute right-2 flex items-center justify-center"
        data-slot="dropdown-menu-radio-item-indicator"
      >
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon
          />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        "px-1.5 py-1 text-xs font-medium text-muted-foreground data-inset:pl-7",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("-mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  )
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "flex cursor-pointer items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-open:bg-accent data-open:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto" />
    </DropdownMenuPrimitive.SubTrigger>
  )
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn("z-50 min-w-[96px] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className )}
      {...props}
    />
  )
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}
</file>

<file path="components/ui/input.tsx">
import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

export { Input }
</file>

<file path="components/ui/popover.tsx">
"use client"

import * as React from "react"
import { Popover as PopoverPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Popover({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />
}

function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
}

function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "z-50 flex w-72 origin-(--radix-popover-content-transform-origin) flex-col gap-2.5 rounded-lg bg-popover p-2.5 text-sm text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-hidden duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
}

function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />
}

function PopoverHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="popover-header"
      className={cn("flex flex-col gap-0.5 text-sm", className)}
      {...props}
    />
  )
}

function PopoverTitle({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <div
      data-slot="popover-title"
      className={cn("font-heading font-medium", className)}
      {...props}
    />
  )
}

function PopoverDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="popover-description"
      className={cn("text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
}
</file>

<file path="components/ui/select.tsx">
"use client"

import * as React from "react"
import { Select as SelectPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { ChevronDownIcon, CheckIcon, ChevronUpIcon } from "lucide-react"

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return (
    <SelectPrimitive.Group
      data-slot="select-group"
      className={cn("scroll-my-1 p-1", className)}
      {...props}
    />
  )
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default"
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "cursor-pointer flex w-fit items-center justify-between gap-1.5 rounded-lg border border-input bg-transparent py-2 pr-2 pl-2.5 text-sm whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="pointer-events-none size-4 text-muted-foreground" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = "item-aligned",
  align = "center",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        data-align-trigger={position === "item-aligned"}
        className={cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-36 origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[align-trigger=true]:animate-none data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", position ==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className )}
        position={position}
        align={align}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          data-position={position}
          className={cn(
            "data-[position=popper]:h-(--radix-select-trigger-height) data-[position=popper]:w-full data-[position=popper]:min-w-(--radix-select-trigger-width)",
            position === "popper" && ""
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("px-1.5 py-1 text-xs text-muted-foreground", className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "relative flex w-full cursor-pointer items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="pointer-events-none" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("pointer-events-none -mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "z-10 flex cursor-pointer items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <ChevronUpIcon
      />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "z-10 flex cursor-pointer items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <ChevronDownIcon
      />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
</file>

<file path="components/ui/separator.tsx">
"use client"

import * as React from "react"
import { Separator as SeparatorPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
</file>

<file path="components/ui/sheet.tsx">
"use client"

import * as React from "react"
import { Dialog as SheetPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { XIcon } from "lucide-react"

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left"
  showCloseButton?: boolean
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        data-side={side}
        className={cn(
          "fixed z-50 flex flex-col gap-4 bg-popover bg-clip-padding text-sm text-popover-foreground shadow-lg transition duration-200 ease-in-out data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-[side=bottom]:data-open:slide-in-from-bottom-10 data-[side=left]:data-open:slide-in-from-left-10 data-[side=right]:data-open:slide-in-from-right-10 data-[side=top]:data-open:slide-in-from-top-10 data-closed:animate-out data-closed:fade-out-0 data-[side=bottom]:data-closed:slide-out-to-bottom-10 data-[side=left]:data-closed:slide-out-to-left-10 data-[side=right]:data-closed:slide-out-to-right-10 data-[side=top]:data-closed:slide-out-to-top-10",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <SheetPrimitive.Close data-slot="sheet-close" asChild>
            <Button
              variant="ghost"
              className="absolute top-3 right-3"
              size="icon-sm"
            >
              <XIcon
              />
              <span className="sr-only">Close</span>
            </Button>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-0.5 p-4", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  )
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn(
        "font-heading text-base font-medium text-foreground",
        className
      )}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
</file>

<file path="components/ui/skeleton.tsx">
import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
</file>

<file path="components/ui/table.tsx">
"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted",
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0",
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0",
        className
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("mt-4 text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
</file>

<file path="components/ui/tabs.tsx">
"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Tabs as TabsPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={cn(
        "group/tabs flex gap-2 data-horizontal:flex-col",
        className
      )}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  "group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-horizontal/tabs:h-8 group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        default: "bg-muted",
        line: "gap-1 bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TabsList({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> &
  VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-1.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 dark:text-muted-foreground dark:hover:text-foreground group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent",
        "data-active:bg-background data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground",
        "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 text-sm outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
</file>

<file path="components/ui/tooltip.tsx">
"use client"

import * as React from "react"
import { Tooltip as TooltipPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "z-50 inline-flex w-fit max-w-xs origin-(--radix-tooltip-content-transform-origin) items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs text-background has-data-[slot=kbd]:pr-1.5 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger }
</file>

<file path="features/overview/components/overview-trend-section.tsx">
"use client";

import { useQuery } from "@tanstack/react-query";

import { ChartCard } from "@/components/data-display/chart-card";
import { TrendChart } from "@/features/charts/components/trend-chart";
import { useDashboardFilters } from "@/features/filters/hooks/use-dashboard-filters";
import { getTrends } from "@/lib/api/trends";
import { buildTrendSeries } from "@/features/charts/lib/chart-formatters";
import { Button } from "@/components/ui/button";

export function OverviewTrendSection() {
  const { filters, setCompare } = useDashboardFilters();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["trends", "revenue", filters],
    queryFn: () => getTrends("revenue", filters),
  });

  if (isLoading) {
    return <div className="h-[360px] animate-pulse rounded-[1.35rem] bg-muted" />;
  }

  if (isError || !data) {
    return (
      <div className="rounded-[1.35rem] border border-dashed bg-card p-5 text-sm text-muted-foreground">
        Unable to load trend data right now.
      </div>
    );
  }

  const chartData = buildTrendSeries(data.points, data.comparison_points);

  return (
    <ChartCard
      title="How has revenue moved over time?"
      description="Track the current period and compare it with the previous period when needed."
      actions={
        <Button
          variant={filters.compare ? "default" : "outline"}
          onClick={() => setCompare(!filters.compare)}
        >
          {filters.compare ? "Comparison On" : "Enable Compare"}
        </Button>
      }
    >
      <TrendChart data={chartData} metricName="revenue" />
    </ChartCard>
  );
}
</file>

<file path="features/overview/hooks/use-overview-top-movers.ts">
"use client";

import { useQuery } from "@tanstack/react-query";

import { getReports } from "@/lib/api/reports";
import { useDashboardFilters } from "@/features/filters/hooks/use-dashboard-filters";

export function useOverviewTopMovers() {
  const { filters } = useDashboardFilters();

  return useQuery({
    queryKey: ["overview-top-movers", filters],
    queryFn: () =>
      getReports({
        filters,
        sortBy: "revenue",
        sortOrder: "desc",
        page: 1,
        pageSize: 5,
      }),
  });
}
</file>

<file path="lib/api/breakdowns.ts">
import { apiGet } from "@/lib/api/client";
import type {
  BreakdownMetricName,
  BreakdownsResponse,
  DashboardFilters,
} from "@/types/api";

export async function getBreakdowns(
  metricName: BreakdownMetricName,
  filters: DashboardFilters
): Promise<BreakdownsResponse> {
  return apiGet<BreakdownsResponse>("/breakdowns/", {
    query: {
      metric_name: metricName,
      start_date: filters.start_date,
      end_date: filters.end_date,
      segment: filters.segment,
      channel: filters.channel,
      device: filters.device,
      compare: filters.compare,
    },
  });
}
</file>

<file path="lib/api/trends.ts">
import { apiGet } from "@/lib/api/client";
import type {
  DashboardFilters,
  TrendMetricName,
  TrendsResponse,
} from "@/types/api";

export async function getTrends(
  metricName: TrendMetricName,
  filters: DashboardFilters
): Promise<TrendsResponse> {
  return apiGet<TrendsResponse>("/trends/", {
    query: {
      metric_name: metricName,
      start_date: filters.start_date,
      end_date: filters.end_date,
      segment: filters.segment,
      channel: filters.channel,
      device: filters.device,
      compare: filters.compare,
    },
  });
}
</file>

<file path="providers/dashboard-filters-provider.tsx">
"use client";

import * as React from "react";

import {
  dashboardFilterDefaults,
  type DashboardFilterState,
} from "@/features/filters/lib/filter-defaults";
import type {
  ChannelType,
  DeviceType,
  SegmentType,
} from "@/features/filters/types/filter-types";

type DashboardFiltersContextValue = {
  filters: DashboardFilterState;
  setDateRange: (startDate: string | null, endDate: string | null) => void;
  setSegment: (segment: SegmentType) => void;
  setChannel: (channel: ChannelType) => void;
  setDevice: (device: DeviceType) => void;
  setCompare: (compare: boolean) => void;
  applySavedView: (nextFilters: DashboardFilterState) => void;
  resetFilters: () => void;
};

const DashboardFiltersContext =
  React.createContext<DashboardFiltersContextValue | null>(null);

type Action =
  | { type: "set-date-range"; payload: { startDate: string | null; endDate: string | null } }
  | { type: "set-segment"; payload: SegmentType }
  | { type: "set-channel"; payload: ChannelType }
  | { type: "set-device"; payload: DeviceType }
  | { type: "set-compare"; payload: boolean }
  | { type: "apply-saved-view"; payload: DashboardFilterState }
  | { type: "reset" };

function reducer(
  state: DashboardFilterState,
  action: Action
): DashboardFilterState {
  switch (action.type) {
    case "set-date-range":
      return {
        ...state,
        start_date: action.payload.startDate,
        end_date: action.payload.endDate,
      };
    case "set-segment":
      return { ...state, segment: action.payload };
    case "set-channel":
      return { ...state, channel: action.payload };
    case "set-device":
      return { ...state, device: action.payload };
    case "set-compare":
      return { ...state, compare: action.payload };
    case "apply-saved-view":
      return action.payload;
    case "reset":
      return dashboardFilterDefaults;
    default:
      return state;
  }
}

export function DashboardFiltersProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [filters, dispatch] = React.useReducer(reducer, dashboardFilterDefaults);

  const value = React.useMemo<DashboardFiltersContextValue>(
    () => ({
      filters,
      setDateRange: (startDate, endDate) =>
        dispatch({
          type: "set-date-range",
          payload: { startDate, endDate },
        }),
      setSegment: (segment) => dispatch({ type: "set-segment", payload: segment }),
      setChannel: (channel) => dispatch({ type: "set-channel", payload: channel }),
      setDevice: (device) => dispatch({ type: "set-device", payload: device }),
      setCompare: (compare) => dispatch({ type: "set-compare", payload: compare }),
      applySavedView: (nextFilters) =>
        dispatch({ type: "apply-saved-view", payload: nextFilters }),
      resetFilters: () => dispatch({ type: "reset" }),
    }),
    [filters]
  );

  return (
    <DashboardFiltersContext.Provider value={value}>
      {children}
    </DashboardFiltersContext.Provider>
  );
}

export function useDashboardFiltersContext() {
  const context = React.useContext(DashboardFiltersContext);

  if (!context) {
    throw new Error(
      "useDashboardFiltersContext must be used inside DashboardFiltersProvider"
    );
  }

  return context;
}
</file>

<file path="providers/theme-provider.tsx">
"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
</file>

<file path=".gitignore">
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

#Agent
AGENTS.md
CLAUDE.md
</file>

<file path="app/(dashboard)/dashboard/campaigns/page.tsx">
import { ContentShell } from "@/components/layout/content-shell";
import { PageHeader } from "@/components/shared/page-header";
import { SectionShell } from "@/components/shared/section-shell";
import { PageReveal } from "@/components/shared/page-reveal";
import { Button } from "@/components/ui/button";
import { CampaignPerformanceGrid } from "@/features/campaigns/components/campaign-performance-grid";
import { CampaignSourceBreakdown } from "@/features/campaigns/components/campaign-source-breakdown";
import { CampaignTable } from "@/features/campaigns/components/campaign-table";
import { DateRangeFilter } from "@/features/filters/components/date-range-filter";
import { FilterChipBar } from "@/features/filters/components/filter-chip-bar";
import { SegmentFilter } from "@/features/filters/components/segment-filter";

export default function CampaignsPage() {
  return (
    <ContentShell>
      <SectionShell>
        <PageReveal>
          <PageHeader
            title="Campaigns"
            description="Inspect campaign contribution, source breakdown, and the detailed rows behind campaign performance."
            actions={<Button>Export Campaigns</Button>}
          />
        </PageReveal>

        <PageReveal delay={0.03}>
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <DateRangeFilter />
              <SegmentFilter />
            </div>
            <FilterChipBar />
          </div>
        </PageReveal>

        <PageReveal delay={0.06}>
          <CampaignPerformanceGrid />
        </PageReveal>

        <PageReveal delay={0.09}>
          <CampaignSourceBreakdown />
        </PageReveal>

        <PageReveal delay={0.12}>
          <CampaignTable />
        </PageReveal>
      </SectionShell>
    </ContentShell>
  );
}
</file>

<file path="app/(dashboard)/dashboard/customers/page.tsx">
import { ContentShell } from "@/components/layout/content-shell";
import { PageHeader } from "@/components/shared/page-header";
import { SectionShell } from "@/components/shared/section-shell";
import { PageReveal } from "@/components/shared/page-reveal";
import { Button } from "@/components/ui/button";
import { DateRangeFilter } from "@/features/filters/components/date-range-filter";
import { FilterChipBar } from "@/features/filters/components/filter-chip-bar";
import { SegmentFilter } from "@/features/filters/components/segment-filter";
import { CustomerDeviceBreakdown } from "@/features/customers/components/customer-device-breakdown";
import { CustomerList } from "@/features/customers/components/customer-list";
import { CustomerRetentionCard } from "@/features/customers/components/customer-retention-card";

export default function CustomersPage() {
  return (
    <ContentShell>
      <SectionShell>
        <PageReveal>
          <PageHeader
            title="Customers"
            description="Inspect returning behavior, device distribution, and the rows behind customer activity."
            actions={<Button>Export Customers</Button>}
          />
        </PageReveal>

        <PageReveal delay={0.03}>
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <DateRangeFilter />
              <SegmentFilter />
            </div>
            <FilterChipBar />
          </div>
        </PageReveal>

        <div className="grid gap-4 xl:grid-cols-[1fr_1.4fr]">
          <PageReveal delay={0.06}>
            <CustomerRetentionCard />
          </PageReveal>
          <PageReveal delay={0.09}>
            <CustomerDeviceBreakdown />
          </PageReveal>
        </div>

        <PageReveal delay={0.12}>
          <CustomerList />
        </PageReveal>
      </SectionShell>
    </ContentShell>
  );
}
</file>

<file path="app/(dashboard)/dashboard/error.tsx">
"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { ContentShell } from "@/components/layout/content-shell";
import { SectionShell } from "@/components/shared/section-shell";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ContentShell>
      <SectionShell>
        <div className="rounded-[1.35rem] border border-dashed border-border/80 bg-card/95 p-8 shadow-[0_10px_26px_-18px_rgba(30,41,59,0.16)]">
          <p className="text-sm font-semibold text-foreground">
            Something went wrong
          </p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
            This dashboard screen could not finish loading. Try again and, if it
            still fails, we can trace the exact panel next.
          </p>

          <div className="mt-5">
            <Button onClick={reset}>Try again</Button>
          </div>
        </div>
      </SectionShell>
    </ContentShell>
  );
}
</file>

<file path="app/(dashboard)/dashboard/loading.tsx">
import { ContentShell } from "@/components/layout/content-shell";
import { SectionShell } from "@/components/shared/section-shell";

export default function DashboardLoading() {
  return (
    <ContentShell>
      <SectionShell>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="h-[138px] animate-pulse rounded-[1.35rem] border border-border/70 bg-card/95 shadow-[0_10px_24px_-18px_rgba(30,41,59,0.16)]"
            />
          ))}
        </div>

        <div className="grid gap-4 xl:grid-cols-[1.6fr_1fr]">
          <div className="h-[320px] animate-pulse rounded-[1.35rem] border border-border/70 bg-card/95 shadow-[0_10px_24px_-18px_rgba(30,41,59,0.16)]" />
          <div className="h-[320px] animate-pulse rounded-[1.35rem] border border-border/70 bg-card/95 shadow-[0_10px_24px_-18px_rgba(30,41,59,0.16)]" />
        </div>

        <div className="h-[420px] animate-pulse rounded-[1.35rem] border border-border/70 bg-card/95 shadow-[0_10px_24px_-18px_rgba(30,41,59,0.16)]" />
      </SectionShell>
    </ContentShell>
  );
}
</file>

<file path="app/(dashboard)/dashboard/overview/page.tsx">
import { ContentShell } from "@/components/layout/content-shell";
import { PageHeader } from "@/components/shared/page-header";
import { SectionShell } from "@/components/shared/section-shell";
import { PageReveal } from "@/components/shared/page-reveal";
import { Button } from "@/components/ui/button";
import { DateRangeFilter } from "@/features/filters/components/date-range-filter";
import { FilterChipBar } from "@/features/filters/components/filter-chip-bar";
import { SavedViewSelector } from "@/features/filters/components/saved-view-selector";
import { SegmentFilter } from "@/features/filters/components/segment-filter";
import { OverviewInsightsPanel } from "@/features/overview/components/overview-insights-panel";
import { OverviewKpiStrip } from "@/features/overview/components/overview-kpi-strip";
import { OverviewTopMovers } from "@/features/overview/components/overview-top-movers";
import { OverviewTrendSection } from "@/features/overview/components/overview-trend-section";

export default function OverviewPage() {
  return (
    <ContentShell>
      <SectionShell>
        <PageReveal>
          <PageHeader
            title="Overview"
            description="Monitor top-line performance, compare periods, and move into deeper analysis without losing context."
            actions={
              <>
                <SavedViewSelector />
                <Button>Export</Button>
              </>
            }
          />
        </PageReveal>

        <PageReveal delay={0.03}>
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <DateRangeFilter />
              <SegmentFilter />
            </div>
            <FilterChipBar />
          </div>
        </PageReveal>

        <PageReveal delay={0.06}>
          <OverviewKpiStrip />
        </PageReveal>

        <div className="grid gap-4 xl:grid-cols-[1.6fr_1fr]">
          <PageReveal delay={0.09}>
            <OverviewTrendSection />
          </PageReveal>
          <PageReveal delay={0.12}>
            <OverviewInsightsPanel />
          </PageReveal>
        </div>

        <PageReveal delay={0.15}>
          <OverviewTopMovers />
        </PageReveal>
      </SectionShell>
    </ContentShell>
  );
}
</file>

<file path="app/(dashboard)/dashboard/page.tsx">
import { redirect } from "next/navigation";

import { routes } from "@/lib/constants/routes";

export default function DashboardPage() {
  redirect(routes.overview);
}
</file>

<file path="app/(dashboard)/dashboard/products/page.tsx">
import { ContentShell } from "@/components/layout/content-shell";
import { PageHeader } from "@/components/shared/page-header";
import { SectionShell } from "@/components/shared/section-shell";
import { PageReveal } from "@/components/shared/page-reveal";
import { Button } from "@/components/ui/button";
import { DateRangeFilter } from "@/features/filters/components/date-range-filter";
import { FilterChipBar } from "@/features/filters/components/filter-chip-bar";
import { SegmentFilter } from "@/features/filters/components/segment-filter";
import { DecliningProductsCard } from "@/features/products/components/declining-products-card";
import { ProductPerformanceTable } from "@/features/products/components/product-performance-table";
import { TopProductsCard } from "@/features/products/components/top-products-card";

export default function ProductsPage() {
  return (
    <ContentShell>
      <SectionShell>
        <PageReveal>
          <PageHeader
            title="Products"
            description="Review strongest products, weaker movement, and product-related rows in one workspace."
            actions={<Button>Export Products</Button>}
          />
        </PageReveal>

        <PageReveal delay={0.03}>
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <DateRangeFilter />
              <SegmentFilter />
            </div>
            <FilterChipBar />
          </div>
        </PageReveal>

        <div className="grid gap-4 xl:grid-cols-2">
          <PageReveal delay={0.06}>
            <TopProductsCard />
          </PageReveal>
          <PageReveal delay={0.09}>
            <DecliningProductsCard />
          </PageReveal>
        </div>

        <PageReveal delay={0.12}>
          <ProductPerformanceTable />
        </PageReveal>
      </SectionShell>
    </ContentShell>
  );
}
</file>

<file path="app/(dashboard)/dashboard/record-detail/page.tsx">
import { ContentShell } from "@/components/layout/content-shell";
import { PageHeader } from "@/components/shared/page-header";
import { SectionShell } from "@/components/shared/section-shell";
import { PageReveal } from "@/components/shared/page-reveal";
import { Button } from "@/components/ui/button";
import { RecordDetailPanel } from "@/features/drill-down/components/record-detail-panel";

export default function RecordDetailPage() {
  return (
    <ContentShell>
      <SectionShell>
        <PageReveal>
          <PageHeader
            title="Record Detail"
            description="Inspect the selected row in more detail without losing the broader reporting context."
            actions={<Button variant="outline">Back to reports</Button>}
          />
        </PageReveal>

        <PageReveal delay={0.04}>
          <RecordDetailPanel />
        </PageReveal>
      </SectionShell>
    </ContentShell>
  );
}
</file>

<file path="app/(dashboard)/dashboard/reports/page.tsx">
import { ContentShell } from "@/components/layout/content-shell";
import { SectionShell } from "@/components/shared/section-shell";
import { PageReveal } from "@/components/shared/page-reveal";
import { DateRangeFilter } from "@/features/filters/components/date-range-filter";
import { FilterChipBar } from "@/features/filters/components/filter-chip-bar";
import { SegmentFilter } from "@/features/filters/components/segment-filter";
import { ReportPresetsGrid } from "@/features/reports/components/report-presets-grid";
import { ReportsExportPanel } from "@/features/reports/components/reports-export-panel";
import { ReportsHeader } from "@/features/reports/components/reports-header";
import { ReportsTable } from "@/features/reports-table/components/reports-table";

export default function ReportsPage() {
  return (
    <ContentShell>
      <SectionShell>
        <PageReveal>
          <ReportsHeader />
        </PageReveal>

        <PageReveal delay={0.03}>
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <DateRangeFilter />
              <SegmentFilter />
            </div>
            <FilterChipBar />
          </div>
        </PageReveal>

        <div className="grid gap-4 xl:grid-cols-[1.5fr_1fr]">
          <PageReveal delay={0.06}>
            <ReportPresetsGrid />
          </PageReveal>
          <PageReveal delay={0.09}>
            <ReportsExportPanel />
          </PageReveal>
        </div>

        <PageReveal delay={0.12}>
          <ReportsTable />
        </PageReveal>
      </SectionShell>
    </ContentShell>
  );
}
</file>

<file path="app/(dashboard)/dashboard/revenue/page.tsx">
import { ContentShell } from "@/components/layout/content-shell";
import { PageHeader } from "@/components/shared/page-header";
import { SectionShell } from "@/components/shared/section-shell";
import { PageReveal } from "@/components/shared/page-reveal";
import { Button } from "@/components/ui/button";
import { DateRangeFilter } from "@/features/filters/components/date-range-filter";
import { FilterChipBar } from "@/features/filters/components/filter-chip-bar";
import { SegmentFilter } from "@/features/filters/components/segment-filter";
import { ChannelBreakdownSection } from "@/features/revenue/components/channel-breakdown-section";
import { RefundTrendSection } from "@/features/revenue/components/refund-trend-section";
import { RevenueTrendSection } from "@/features/revenue/components/revenue-trend-section";
import { ReportsTable } from "@/features/reports-table/components/reports-table";

export default function RevenuePage() {
  return (
    <ContentShell>
      <SectionShell>
        <PageReveal>
          <PageHeader
            title="Revenue"
            description="Inspect revenue movement, channel contribution, and the rows driving performance."
            actions={<Button>Export Report</Button>}
          />
        </PageReveal>

        <PageReveal delay={0.03}>
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <DateRangeFilter />
              <SegmentFilter />
            </div>
            <FilterChipBar />
          </div>
        </PageReveal>

        <div className="grid gap-4 xl:grid-cols-[1.6fr_1fr]">
          <PageReveal delay={0.06}>
            <RevenueTrendSection />
          </PageReveal>
          <PageReveal delay={0.09}>
            <RefundTrendSection />
          </PageReveal>
        </div>

        <PageReveal delay={0.12}>
          <ChannelBreakdownSection />
        </PageReveal>

        <PageReveal delay={0.15}>
          <ReportsTable />
        </PageReveal>
      </SectionShell>
    </ContentShell>
  );
}
</file>

<file path="app/(dashboard)/dashboard/saved-view/page.tsx">
"use client";

import { ContentShell } from "@/components/layout/content-shell";
import { PageHeader } from "@/components/shared/page-header";
import { SectionShell } from "@/components/shared/section-shell";
import { PageReveal } from "@/components/shared/page-reveal";
import { ExportHistoryList } from "@/features/saved-views/components/export-history-list";
import { SaveViewDialog } from "@/features/saved-views/components/save-view-dialog";
import { SavedViewCard } from "@/features/saved-views/components/saved-view-card";
import { useSavedViews } from "@/features/saved-views/hooks/use-saved-views";

export default function SavedViewPage() {
  const { data, isLoading, isError } = useSavedViews();

  return (
    <ContentShell>
      <SectionShell>
        <PageReveal>
          <PageHeader
            title="Saved Views"
            description="Reuse common filter states and preserve recurring reporting workflows."
            actions={<SaveViewDialog />}
          />
        </PageReveal>

        <PageReveal delay={0.03}>
          {isLoading ? (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="h-[156px] animate-pulse rounded-2xl border bg-card"
                />
              ))}
            </div>
          ) : isError || !data ? (
            <div className="rounded-2xl border border-dashed bg-card p-5 text-sm text-muted-foreground">
              Unable to load saved views right now.
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {data.items.map((item) => (
                <SavedViewCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </PageReveal>

        <PageReveal delay={0.06}>
          <ExportHistoryList />
        </PageReveal>
      </SectionShell>
    </ContentShell>
  );
}
</file>

<file path="app/(dashboard)/dashboard/settings/page.tsx">
import { ContentShell } from "@/components/layout/content-shell";
import { PageHeader } from "@/components/shared/page-header";
import { SectionShell } from "@/components/shared/section-shell";
import { PageReveal } from "@/components/shared/page-reveal";
import { Button } from "@/components/ui/button";
import { IntegrationSettingsPanel } from "@/features/settings/components/integration-settings-panel";
import { NotificationSettingsForm } from "@/features/settings/components/notification-settings-form";
import { WorkspaceSettingsForm } from "@/features/settings/components/workspace-settings-form";

export default function SettingsPage() {
  return (
    <ContentShell>
      <SectionShell>
        <PageReveal>
          <PageHeader
            title="Settings"
            description="Manage workspace preferences, notification rules, and integration defaults."
            actions={<Button>Save all</Button>}
          />
        </PageReveal>

        <div className="grid gap-4 xl:grid-cols-[1.2fr_1fr]">
          <PageReveal delay={0.03}>
            <WorkspaceSettingsForm />
          </PageReveal>
          <PageReveal delay={0.06}>
            <NotificationSettingsForm />
          </PageReveal>
        </div>

        <PageReveal delay={0.09}>
          <IntegrationSettingsPanel />
        </PageReveal>
      </SectionShell>
    </ContentShell>
  );
}
</file>

<file path="app/(dashboard)/layout.tsx">
import type { ReactNode } from "react";

import { DashboardShell } from "@/components/layout/dashboard-shell";
import { DashboardFiltersProvider } from "@/providers/dashboard-filters-provider";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <DashboardFiltersProvider>
      <DashboardShell>{children}</DashboardShell>
    </DashboardFiltersProvider>
  );
}
</file>

<file path="app/(marketing)/layout.tsx">
import type { ReactNode } from "react";

export default function MarketingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="min-h-screen bg-background">{children}</div>;
}
</file>

<file path="app/(marketing)/page.tsx">
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
</file>

<file path="app/layout.tsx">
import type { Metadata } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";

import { AppProvider } from "@/providers/app-provider";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MetricMint",
  description: "Modern analytics dashboard for product and revenue insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
</file>

<file path="components.json">
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "radix-nova",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "rtl": false,
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "menuColor": "default",
  "menuAccent": "subtle",
  "registries": {}
}
</file>

<file path="components/data-display/chart-card.tsx">
"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

type ChartCardProps = {
  title: string;
  description?: string;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function ChartCard({
  title,
  description,
  actions,
  children,
  className,
}: ChartCardProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      whileHover={{ y: -2 }}
      className={cn(
        "min-w-0 rounded-[1.35rem] border border-border/80 bg-card/95 p-5 shadow-[0_10px_30px_-18px_rgba(22,28,45,0.18)] transition-colors duration-200 hover:border-primary/25 hover:bg-accent/40 dark:hover:bg-accent/20",
        className
      )}
    >
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-foreground">{title}</p>
          {description ? (
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          ) : null}
        </div>
        {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
      </div>

      <div className="min-w-0">{children}</div>
    </motion.section>
  );
}
</file>

<file path="components/data-display/data-table-toolbar.tsx">

</file>

<file path="components/data-display/data-table.tsx">

</file>

<file path="components/data-display/kpi-card.tsx">
"use client";

import { TrendingDown, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import type { MetricCard as MetricCardType } from "@/types/api";

export function KpiCard({
  metric,
  className,
}: {
  metric: MetricCardType;
  className?: string;
}) {
  const isPositive = (metric.comparison?.change ?? 0) >= 0;

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={cn(
        "group rounded-[1.4rem] border border-border/80 bg-card/95 p-5 shadow-[0_12px_30px_-18px_rgba(42,57,90,0.2)] transition-colors duration-200 hover:border-primary/25 hover:bg-linear-to-br hover:from-primary/6 hover:to-chart-2/8 dark:hover:from-primary/10 dark:hover:to-chart-2/10",
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground/90">
            {metric.label}
          </p>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
            {metric.display_value}
          </p>
        </div>

        <div className="rounded-2xl bg-primary/10 px-3 py-2 text-xs font-semibold text-primary">
          {metric.key.replaceAll("_", " ")}
        </div>
      </div>

      {metric.comparison ? (
        <div
          className={cn(
            "mt-4 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium",
            isPositive
              ? "bg-emerald-500/12 text-emerald-700 dark:text-emerald-400"
              : "bg-rose-500/12 text-rose-700 dark:text-rose-400"
          )}
        >
          {isPositive ? (
            <TrendingUp className="size-3.5" />
          ) : (
            <TrendingDown className="size-3.5" />
          )}
          {Math.abs(metric.comparison.change_percent).toFixed(1)}%
        </div>
      ) : null}
    </motion.div>
  );
}
</file>

<file path="components/feedback/no-results.tsx">
import { EmptyState } from "@/components/shared/empty-state";

export function NoResults() {
  return (
    <EmptyState
      title="No matching results"
      description="Try adjusting your filters, search term, or date range to widen the result set."
    />
  );
}
</file>

<file path="components/feedback/panel-error.tsx">
import { ErrorState } from "@/components/shared/error-state";

export function PanelError({ description }: { description: string }) {
  return (
    <ErrorState
      title="Unable to load panel"
      description={description}
    />
  );
}
</file>

<file path="components/feedback/panel-loading.tsx">
import { LoadingSkeleton } from "@/components/shared/loading-skeleton";

export function PanelLoading() {
  return <LoadingSkeleton lines={6} className="min-h-[220px]" />;
}
</file>

<file path="components/layout/app-sidebar.tsx">
import Link from "next/link";
import { ChartNoAxesCombined } from "lucide-react";

import { SidebarNav } from "@/components/navigation/sidebar-nav";
import { routes } from "@/lib/constants/routes";

export function AppSidebar() {
  return (
    <aside className="hidden h-screen w-76 shrink-0 border-r border-sidebar-border/80 bg-sidebar/90 backdrop-blur-xl lg:block">
      <div className="flex h-full flex-col px-4 py-5">
        <Link
          href={routes.home}
          className="relative overflow-hidden rounded-[1.4rem] border border-sidebar-border/80 bg-card/80 px-3 py-3"
        >
          <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/12 via-transparent to-chart-2/10" />
          <div className="relative flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
              <ChartNoAxesCombined className="size-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-sidebar-foreground">
                MetricMint
              </p>
              <p className="text-xs text-muted-foreground">Analytics Workspace</p>
            </div>
          </div>
        </Link>

        <div className="mt-6 flex-1">
          <SidebarNav />
        </div>

        <div className="rounded-[1.2rem] border border-sidebar-border/80 bg-card/70 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            Daily brief
          </p>
          <p className="mt-2 text-sm font-medium text-foreground">
            Revenue is up, but conversion still needs closer inspection.
          </p>
          <p className="mt-2 text-xs leading-5 text-muted-foreground">
            Use the Overview filters to narrow by segment and confirm what changed.
          </p>
        </div>
      </div>
    </aside>
  );
}
</file>

<file path="components/layout/content-shell.tsx">
import * as React from "react";

import { cn } from "@/lib/utils";

export function ContentShell({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <main
      className={cn(
        "min-w-0 flex-1 overflow-x-hidden px-4 py-6 sm:px-6 lg:px-8 lg:py-8",
        className
      )}
    >
      <div className="mx-auto w-full max-w-7xl min-w-0">{children}</div>
    </main>
  );
}
</file>

<file path="components/layout/dashboard-shell.tsx">
import * as React from "react";

import { AppSidebar } from "@/components/layout/app-sidebar";
import { Topbar } from "@/components/layout/topbar";

export function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex min-h-screen min-w-0">
        <AppSidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <Topbar />
          {children}
        </div>
      </div>
    </div>
  );
}
</file>

<file path="components/layout/topbar.tsx">
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { TopNavActions } from "@/components/navigation/top-nav-actions";
import { MobileSidebar } from "@/components/layout/mobile-sidebar";

export function Topbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-background/72 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.4rem] w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <MobileSidebar />
          <div>
            <p className="text-sm font-semibold text-foreground">MetricMint</p>
            <p className="text-xs text-muted-foreground">
              Revenue, product, and customer analytics
            </p>
          </div>
        </div>

        <div className="hidden flex-1 px-6 lg:block">
          <Breadcrumbs />
        </div>

        <TopNavActions />
      </div>
    </header>
  );
}
</file>

<file path="components/navigation/breadcrumbs.tsx">
"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

import { dashboardNavItems } from "@/lib/constants/navigation";
import { routes } from "@/lib/constants/routes";

const labelMap: Record<string, string> = Object.fromEntries(
  dashboardNavItems.map((item) => [item.href, item.title])
);

labelMap[routes.dashboard] = "Dashboard";
labelMap[routes.savedView] = "Saved Views";
labelMap[routes.recordDetail] = "Record Detail";

function formatSegment(segment: string) {
  return segment
    .split("-")
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(" ");
}

export function Breadcrumbs() {
  const pathname = usePathname();

  if (!pathname.startsWith("/dashboard")) {
    return null;
  }

  const segments = pathname.split("/").filter(Boolean);
  const crumbs = segments.map((_, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`;
    const label =
      labelMap[href] ??
      formatSegment(segments[index] ?? "");

    return { href, label };
  });

  return (
    <nav className="hidden items-center gap-1 text-xs text-muted-foreground md:flex">
      {crumbs.map((crumb, index) => {
        const isLast = index === crumbs.length - 1;

        return (
          <div key={crumb.href} className="flex items-center gap-1">
            {isLast ? (
              <span className="font-medium text-foreground">{crumb.label}</span>
            ) : (
              <Link
                href={crumb.href}
                className="transition-colors hover:text-foreground"
              >
                {crumb.label}
              </Link>
            )}
            {!isLast ? <ChevronRight className="size-3.5" /> : null}
          </div>
        );
      })}
    </nav>
  );
}
</file>

<file path="components/navigation/sidebar-nav.tsx">
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { dashboardNavItems } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils";

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="space-y-1.5">
      {dashboardNavItems.map((item) => {
        const isActive =
          pathname === item.href || pathname.startsWith(`${item.href}/`);
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "cursor-pointer group flex items-center gap-3 rounded-[1rem] px-3 py-3 text-sm font-medium transition-all duration-200",
              isActive
                ? "bg-primary text-primary-foreground shadow-md shadow-primary/18"
                : "text-muted-foreground hover:bg-primary/8 hover:text-foreground"
            )}
          >
            <Icon
              className={cn(
                "size-4 transition-transform duration-200",
                isActive ? "" : "group-hover:scale-105"
              )}
            />
            <span>{item.title}</span>
          </Link>
        );
      })}
    </nav>
  );
}
</file>

<file path="components/navigation/top-nav-actions.tsx">
"use client";

import { Bell, Download, Search } from "lucide-react";
import { motion } from "motion/react";

import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function TopNavActions() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative hidden w-72 xl:block">
        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search reports, channels, products..."
          className="h-10 rounded-xl border-border/70 bg-background/70 pl-9"
        />
      </div>

      <motion.div whileHover={{ y: -1 }}>
        <Button variant="outline" size="icon-sm" aria-label="Notifications">
          <Bell className="size-4" />
        </Button>
      </motion.div>

      <motion.div whileHover={{ y: -1 }}>
        <Button variant="outline" size="icon-sm" aria-label="Export current view">
          <Download className="size-4" />
        </Button>
      </motion.div>

      <ThemeToggle />

      <motion.div whileHover={{ y: -1 }}>
        <div className="hidden sm:block">
          <Avatar className="size-8">
            <AvatarFallback>MM</AvatarFallback>
          </Avatar>
        </div>
      </motion.div>
    </div>
  );
}
</file>

<file path="components/shared/empty-state.tsx">
import { Inbox } from "lucide-react";

type EmptyStateProps = {
  title: string;
  description: string;
};

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="rounded-[1.35rem] border border-dashed border-border/80 bg-card/95 p-8 text-center shadow-[0_10px_26px_-18px_rgba(30,41,59,0.16)]">
      <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Inbox className="size-5" />
      </div>
      <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
</file>

<file path="components/shared/error-state.tsx">
import { AlertTriangle } from "lucide-react";

type ErrorStateProps = {
  title: string;
  description: string;
};

export function ErrorState({ title, description }: ErrorStateProps) {
  return (
    <div className="rounded-[1.35rem] border border-dashed border-border/80 bg-card/95 p-8 text-center shadow-[0_10px_26px_-18px_rgba(30,41,59,0.16)]">
      <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-500">
        <AlertTriangle className="size-5" />
      </div>
      <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
</file>

<file path="components/shared/loading-skeleton.tsx">
type LoadingSkeletonProps = {
  lines?: number;
  className?: string;
};

export function LoadingSkeleton({
  lines = 3,
  className = "",
}: LoadingSkeletonProps) {
  return (
    <div
      className={`rounded-[1.35rem] border border-border/70 bg-card/95 p-5 shadow-[0_10px_24px_-18px_rgba(30,41,59,0.16)] ${className}`}
    >
      <div className="space-y-3">
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className="h-4 animate-pulse rounded-lg bg-muted"
          />
        ))}
      </div>
    </div>
  );
}
</file>

<file path="components/shared/page-header.tsx">
import * as React from "react";

import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  description?: string;
  actions?: React.ReactNode;
  className?: string;
};

export function PageHeader({
  title,
  description,
  actions,
  className,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-[1.35rem] border border-border/70 bg-card/75 px-5 py-5 shadow-[0_10px_24px_-18px_rgba(30,41,59,0.18)] sm:flex-row sm:items-start sm:justify-between",
        className
      )}
    >
      <div className="space-y-1.5">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          {title}
        </h1>
        {description ? (
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>

      {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
    </div>
  );
}
</file>

<file path="components/shared/section-shell.tsx">
import * as React from "react";

import { cn } from "@/lib/utils";

export function SectionShell({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <section className={cn("space-y-6", className)}>{children}</section>;
}
</file>

<file path="components/shared/stat-card.tsx">

</file>

<file path="components/ui/button.tsx">
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "cursor-pointer group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
</file>

<file path="docs/.gitkeep">

</file>

<file path="eslint.config.mjs">
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
</file>

<file path="features/campaigns/components/campaign-performance-grid.tsx">
"use client";

import { motion } from "motion/react";

const items = [
  { label: "Campaign revenue", value: "$68,950", tone: "from-primary/10 to-chart-2/10" },
  { label: "Attributed orders", value: "362", tone: "from-chart-2/10 to-chart-3/10" },
  { label: "ROAS signal", value: "4.2x", tone: "from-chart-3/10 to-chart-4/10" },
  { label: "Best channel", value: "Paid", tone: "from-chart-4/10 to-chart-5/10" },
];

export function CampaignPerformanceGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.24, delay: index * 0.04 }}
          whileHover={{ y: -3, scale: 1.01 }}
          className={`rounded-[1.35rem] border border-border/80 bg-linear-to-br ${item.tone} p-5 shadow-[0_12px_28px_-18px_rgba(30,41,59,0.2)]`}
        >
          <p className="text-sm text-muted-foreground">{item.label}</p>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
            {item.value}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
</file>

<file path="features/campaigns/components/campaign-source-breakdown.tsx">
"use client";

import { useQuery } from "@tanstack/react-query";

import { ChartCard } from "@/components/data-display/chart-card";
import { getBreakdowns } from "@/lib/api/breakdowns";
import { useDashboardFilters } from "@/features/filters/hooks/use-dashboard-filters";
import { BreakdownChart } from "@/features/charts/components/breakdown-chart";
import { formatCurrency } from "@/lib/formatters/currency";

export function CampaignSourceBreakdown() {
  const { filters } = useDashboardFilters();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["campaign-source-breakdown", filters],
    queryFn: () => getBreakdowns("revenue_by_channel", filters),
  });

  if (isLoading) {
    return <div className="h-[360px] animate-pulse rounded-[1.35rem] bg-muted" />;
  }

  if (isError || !data) {
    return (
      <div className="rounded-[1.35rem] border border-dashed bg-card p-5 text-sm text-muted-foreground">
        Unable to load campaign source breakdown right now.
      </div>
    );
  }

  return (
    <ChartCard
      title="Campaign source breakdown"
      description="Compare source performance and revenue contribution."
    >
      <BreakdownChart
        data={data.items}
        valueFormatter={(value) => formatCurrency(value)}
      />
    </ChartCard>
  );
}
</file>

<file path="features/campaigns/components/campaign-table.tsx">
import { ReportsTable } from "@/features/reports-table/components/reports-table";

export function CampaignTable() {
  return <ReportsTable />;
}
</file>

<file path="features/charts/components/breakdown-chart.tsx">
"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type { BreakdownItem } from "@/types/api";
import { formatCurrency } from "@/lib/formatters/currency";
import { chartColors } from "@/features/charts/config/chart-colors";

export function BreakdownChart({
  data,
  valueFormatter = (value: number) => formatCurrency(value),
}: {
  data: BreakdownItem[];
  valueFormatter?: (value: number) => string;
}) {
  return (
    <div className="min-w-0 h-[340px] w-full">
      <ResponsiveContainer width="100%" height="100%" minWidth={280} minHeight={320}>
        <BarChart data={data} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
          <CartesianGrid
            stroke={chartColors.mutedGrid}
            vertical={false}
            strokeDasharray="4 4"
          />
          <XAxis dataKey="label" tickLine={false} axisLine={false} fontSize={12} />
          <YAxis tickLine={false} axisLine={false} fontSize={12} />
          <Tooltip
            contentStyle={{
              borderRadius: 16,
              border: "1px solid color-mix(in oklab, var(--color-border) 100%, transparent)",
              background: "var(--color-card)",
              boxShadow: "0 10px 28px -18px rgba(15, 23, 42, 0.28)",
            }}
            formatter={(value) => {
              const numericValue =
                typeof value === "number" ? value : Number(value ?? 0);

              return [valueFormatter(numericValue), "Value"];
            }}
            labelFormatter={(label) => String(label)}
          />
          <Bar
            dataKey="value"
            radius={[10, 10, 0, 0]}
            fill={chartColors.revenue}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
</file>

<file path="features/charts/components/comparison-chart.tsx">

</file>

<file path="features/charts/components/sparkline.tsx">

</file>

<file path="features/charts/components/trend-chart.tsx">
"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { chartColors } from "@/features/charts/config/chart-colors";
import { formatCurrency } from "@/lib/formatters/currency";
import { formatShortDate } from "@/lib/formatters/date";
import { formatPercentage } from "@/lib/formatters/percentage";
import type { TrendMetricName } from "@/types/api";
import type { TrendSeriesPoint } from "@/features/charts/types/chart-types";

type TrendChartProps = {
  data: TrendSeriesPoint[];
  metricName: TrendMetricName;
};

function formatValue(metricName: TrendMetricName, value: number) {
  if (metricName === "revenue") return formatCurrency(value);
  if (metricName === "conversion_rate") return formatPercentage(value);
  return value.toLocaleString();
}

export function TrendChart({ data, metricName }: TrendChartProps) {
  const strokeColor =
    metricName === "orders"
      ? chartColors.orders
      : metricName === "conversion_rate"
        ? chartColors.conversion
        : chartColors.revenue;

  return (
    <div className="min-w-0 h-[340px] w-full">
      <ResponsiveContainer width="100%" height="100%" minWidth={280} minHeight={320}>
        <AreaChart data={data} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
          <defs>
            <linearGradient id="primaryTrendFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={strokeColor} stopOpacity={0.28} />
              <stop offset="95%" stopColor={strokeColor} stopOpacity={0.02} />
            </linearGradient>
          </defs>

          <CartesianGrid
            stroke={chartColors.mutedGrid}
            vertical={false}
            strokeDasharray="4 4"
          />
          <XAxis
            dataKey="date"
            tickFormatter={formatShortDate}
            tickLine={false}
            axisLine={false}
            fontSize={12}
          />
          <YAxis
            tickFormatter={(value) => {
              if (metricName === "revenue") return `$${Number(value) / 1000}k`;
              if (metricName === "conversion_rate") return `${value}%`;
              return String(value);
            }}
            tickLine={false}
            axisLine={false}
            fontSize={12}
          />
          <Tooltip
            contentStyle={{
              borderRadius: 16,
              border: "1px solid color-mix(in oklab, var(--color-border) 100%, transparent)",
              background: "var(--color-card)",
              boxShadow: "0 10px 28px -18px rgba(15, 23, 42, 0.28)",
            }}
            formatter={(value, name) => {
              const numericValue =
                typeof value === "number" ? value : Number(value ?? 0);

              return [
                formatValue(metricName, numericValue),
                name === "comparison" ? "Previous period" : "Current period",
              ];
            }}
            labelFormatter={(value) => formatShortDate(String(value))}
          />

          <Area
            type="monotone"
            dataKey="comparison"
            stroke={chartColors.comparison}
            fill="transparent"
            strokeWidth={2}
            strokeDasharray="6 6"
            dot={false}
            activeDot={{ r: 4 }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke={strokeColor}
            fill="url(#primaryTrendFill)"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 5 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
</file>

<file path="features/charts/config/chart-colors.ts">
export const chartColors = {
  revenue: "var(--color-chart-1)",
  comparison: "var(--color-chart-2)",
  orders: "var(--color-chart-3)",
  conversion: "var(--color-chart-4)",
  mutedGrid: "var(--color-border)",
} as const;
</file>

<file path="features/charts/config/chart-metrics.ts">

</file>

<file path="features/charts/lib/chart-formatters.ts">
import type { TrendPoint } from "@/types/api";
import type { TrendSeriesPoint } from "@/features/charts/types/chart-types";

export function buildTrendSeries(
  points: TrendPoint[],
  comparisonPoints?: TrendPoint[] | null
): TrendSeriesPoint[] {
  return points.map((point, index) => ({
    date: point.date,
    value: point.value,
    comparison: comparisonPoints?.[index]?.value ?? null,
  }));
}
</file>

<file path="features/charts/types/chart-types.ts">
export type ChartSeriesPoint = {
  label: string;
  value: number;
};

export type TrendSeriesPoint = {
  date: string;
  value: number;
  comparison?: number | null;
};
</file>

<file path="features/customers/components/customer-device-breakdown.tsx">
"use client";

import { useQuery } from "@tanstack/react-query";

import { ChartCard } from "@/components/data-display/chart-card";
import { getBreakdowns } from "@/lib/api/breakdowns";
import { useDashboardFilters } from "@/features/filters/hooks/use-dashboard-filters";
import { BreakdownChart } from "@/features/charts/components/breakdown-chart";

export function CustomerDeviceBreakdown() {
  const { filters } = useDashboardFilters();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["customers-by-device", filters],
    queryFn: () => getBreakdowns("customers_by_device", filters),
  });

  if (isLoading) {
    return <div className="h-[360px] animate-pulse rounded-[1.35rem] bg-muted" />;
  }

  if (isError || !data) {
    return (
      <div className="rounded-[1.35rem] border border-dashed bg-card p-5 text-sm text-muted-foreground">
        Unable to load customer device breakdown right now.
      </div>
    );
  }

  return (
    <ChartCard
      title="Customers by device"
      description="Review where customer activity is concentrated across devices."
    >
      <BreakdownChart
        data={data.items}
        valueFormatter={(value) => value.toLocaleString()}
      />
    </ChartCard>
  );
}
</file>

<file path="features/customers/components/customer-list.tsx">
import { ReportsTable } from "@/features/reports-table/components/reports-table";

export function CustomerList() {
  return <ReportsTable />;
}
</file>

<file path="features/customers/components/customer-retention-card.tsx">
"use client";

import { motion } from "motion/react";

export function CustomerRetentionCard() {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="rounded-[1.35rem] border border-border/80 bg-card/95 p-5 shadow-[0_12px_28px_-18px_rgba(30,41,59,0.2)] transition-colors duration-200 hover:border-primary/25 hover:bg-primary/6 dark:hover:bg-primary/10"
    >
      <p className="text-sm font-semibold text-foreground">Retention snapshot</p>
      <p className="mt-1 text-sm text-muted-foreground">
        A quick read on repeat engagement and returning customer behavior.
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-[1rem] bg-linear-to-br from-primary/10 to-chart-2/10 p-4">
          <p className="text-xs text-muted-foreground">Returning customers</p>
          <p className="mt-2 text-2xl font-semibold text-foreground">42%</p>
        </div>
        <div className="rounded-[1rem] bg-linear-to-br from-chart-2/10 to-chart-3/10 p-4">
          <p className="text-xs text-muted-foreground">Retention trend</p>
          <p className="mt-2 text-2xl font-semibold text-foreground">+6.4%</p>
        </div>
      </div>
    </motion.div>
  );
}
</file>

<file path="features/dashboard-shell/components/dashboard-content.tsx">

</file>

<file path="features/dashboard-shell/components/dashboard-sidebar.tsx">

</file>

<file path="features/dashboard-shell/components/dashboard-topbar.tsx">

</file>

<file path="features/drill-down/components/record-detail-mini-chart.tsx">
"use client";

import { motion } from "motion/react";

export function RecordDetailMiniChart() {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="rounded-[1.35rem] border border-border/80 bg-card/95 p-5 shadow-[0_12px_28px_-18px_rgba(30,41,59,0.2)] transition-colors duration-200 hover:border-primary/25 hover:bg-primary/6 dark:hover:bg-primary/10"
    >
      <p className="text-sm font-semibold text-foreground">Mini trend</p>
      <p className="mt-1 text-sm text-muted-foreground">
        A smaller drill-down chart can live here for the selected record.
      </p>

      <div className="mt-5 rounded-[1rem] bg-muted/55 p-4">
        <div className="space-y-3">
          <div className="h-3 w-1/3 rounded-full bg-background" />
          <div className="h-3 w-2/3 rounded-full bg-background" />
          <div className="h-40 rounded-2xl bg-background" />
        </div>
      </div>
    </motion.div>
  );
}
</file>

<file path="features/drill-down/components/record-detail-panel.tsx">
import { RecordDetailMiniChart } from "@/features/drill-down/components/record-detail-mini-chart";
import { RecordDetailSummary } from "@/features/drill-down/components/record-detail-summary";

export function RecordDetailPanel() {
  return (
    <div className="space-y-4">
      <RecordDetailSummary />
      <RecordDetailMiniChart />
    </div>
  );
}
</file>

<file path="features/drill-down/components/record-detail-summary.tsx">
"use client";

import { motion } from "motion/react";

export function RecordDetailSummary() {
  const items = [
    { label: "Revenue", value: "$10,350", tone: "from-primary/10 to-chart-2/10" },
    { label: "Orders", value: "60", tone: "from-chart-2/10 to-chart-3/10" },
    { label: "Channel", value: "Social", tone: "from-chart-3/10 to-chart-4/10" },
    { label: "Device", value: "Mobile", tone: "from-chart-4/10 to-chart-5/10" },
  ];

  return (
    <div className="rounded-[1.35rem] border border-border/80 bg-card/95 p-5 shadow-[0_12px_28px_-18px_rgba(30,41,59,0.2)]">
      <p className="text-sm font-semibold text-foreground">Record summary</p>
      <p className="mt-1 text-sm text-muted-foreground">
        Quick detail context for the selected row or segment.
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.24, delay: index * 0.04 }}
            whileHover={{ y: -3 }}
            className={`rounded-[1rem] bg-linear-to-br ${item.tone} p-4`}
          >
            <p className="text-xs text-muted-foreground">{item.label}</p>
            <p className="mt-2 text-xl font-semibold text-foreground">{item.value}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
</file>

<file path="features/drill-down/hooks/use-record-detail.ts">

</file>

<file path="features/drill-down/types/record-detail-types.ts">

</file>

<file path="features/filters/components/date-range-filter.tsx">
"use client";

import { CalendarRange } from "lucide-react";

import { useDashboardFilters } from "@/features/filters/hooks/use-dashboard-filters";
import { Input } from "@/components/ui/input";

export function DateRangeFilter() {
  const { filters, setDateRange } = useDashboardFilters();

  return (
    <div className="flex items-center gap-2 rounded-xl border bg-card px-3 py-2">
      <CalendarRange className="size-4 text-muted-foreground" />
      <Input
        type="date"
        value={filters.start_date ?? ""}
        onChange={(event) =>
          setDateRange(event.target.value || null, filters.end_date)
        }
        className="h-8 w-[145px] border-0 bg-transparent px-0 shadow-none focus-visible:ring-0"
      />
      <span className="text-xs text-muted-foreground">to</span>
      <Input
        type="date"
        value={filters.end_date ?? ""}
        onChange={(event) =>
          setDateRange(filters.start_date, event.target.value || null)
        }
        className="h-8 w-[145px] border-0 bg-transparent px-0 shadow-none focus-visible:ring-0"
      />
    </div>
  );
}
</file>

<file path="features/filters/components/filter-chip-bar.tsx">
"use client";

import { X } from "lucide-react";

import { useDashboardFilters } from "@/features/filters/hooks/use-dashboard-filters";
import { useFilterChips } from "@/features/filters/hooks/use-filter-chips";
import { Button } from "@/components/ui/button";

export function FilterChipBar() {
  const chips = useFilterChips();
  const {
    setSegment,
    setChannel,
    setDevice,
    setCompare,
    setDateRange,
    resetFilters,
  } = useDashboardFilters();

  if (chips.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {chips.map((chip) => (
        <div
          key={chip.key}
          className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs text-muted-foreground"
        >
          <span>{chip.label}</span>
          <button
            type="button"
            className="rounded-full text-muted-foreground transition-colors hover:text-foreground"
            onClick={() => {
              if (chip.key === "segment") setSegment("all");
              if (chip.key === "channel") setChannel("all");
              if (chip.key === "device") setDevice("all");
              if (chip.key === "compare") setCompare(false);
              if (chip.key === "date-range") setDateRange(null, null);
            }}
          >
            <X className="size-3" />
          </button>
        </div>
      ))}

      <Button variant="ghost" size="xs" onClick={resetFilters}>
        Clear all
      </Button>
    </div>
  );
}
</file>

<file path="features/filters/components/saved-view-selector.tsx">
"use client";

import { useQuery } from "@tanstack/react-query";

import { getSavedViews } from "@/lib/api/saved-views";
import { useDashboardFilters } from "@/features/filters/hooks/use-dashboard-filters";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SavedViewSelector() {
  const { applySavedView } = useDashboardFilters();

  const { data } = useQuery({
    queryKey: ["saved-views"],
    queryFn: getSavedViews,
  });

  return (
    <Select
      onValueChange={(value) => {
        const selected = data?.items.find((item) => item.id === value);
        if (!selected) return;
        applySavedView(selected.filters);
      }}
    >
      <SelectTrigger className="w-[190px]">
        <SelectValue placeholder="Saved views" />
      </SelectTrigger>
      <SelectContent>
        {data?.items.map((item) => (
          <SelectItem key={item.id} value={item.id}>
            {item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
</file>

<file path="features/filters/components/segment-filter.tsx">
"use client";

import { useDashboardFilters } from "@/features/filters/hooks/use-dashboard-filters";
import { segmentOptions } from "@/features/filters/lib/filter-options";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SegmentFilter() {
  const { filters, setSegment } = useDashboardFilters();

  return (
    <Select value={filters.segment} onValueChange={setSegment}>
      <SelectTrigger className="w-[170px]">
        <SelectValue placeholder="Segment" />
      </SelectTrigger>
      <SelectContent>
        {segmentOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
</file>

<file path="features/filters/hooks/use-dashboard-filters.ts">
import { useDashboardFiltersContext } from "@/providers/dashboard-filters-provider";

export function useDashboardFilters() {
  return useDashboardFiltersContext();
}
</file>

<file path="features/filters/hooks/use-filter-chips.ts">
import { useMemo } from "react";

import { useDashboardFilters } from "@/features/filters/hooks/use-dashboard-filters";

export type FilterChip = {
  key: "segment" | "channel" | "device" | "compare" | "date-range";
  label: string;
};

export function useFilterChips() {
  const { filters } = useDashboardFilters();

  return useMemo<FilterChip[]>(() => {
    const chips: FilterChip[] = [];

    if (filters.segment !== "all") {
      chips.push({ key: "segment", label: `Segment: ${filters.segment}` });
    }

    if (filters.channel !== "all") {
      chips.push({ key: "channel", label: `Channel: ${filters.channel}` });
    }

    if (filters.device !== "all") {
      chips.push({ key: "device", label: `Device: ${filters.device}` });
    }

    if (filters.compare) {
      chips.push({ key: "compare", label: "Compare enabled" });
    }

    if (filters.start_date || filters.end_date) {
      chips.push({
        key: "date-range",
        label: `${filters.start_date ?? "Start"} → ${filters.end_date ?? "End"}`,
      });
    }

    return chips;
  }, [filters]);
}
</file>

<file path="features/filters/lib/filter-defaults.ts">
import type {
  ChannelType,
  DeviceType,
  SegmentType,
} from "@/features/filters/types/filter-types";

export type DashboardFilterState = {
  start_date: string | null;
  end_date: string | null;
  segment: SegmentType;
  channel: ChannelType;
  device: DeviceType;
  compare: boolean;
};

export const dashboardFilterDefaults: DashboardFilterState = {
  start_date: null,
  end_date: null,
  segment: "all",
  channel: "all",
  device: "all",
  compare: false,
};
</file>

<file path="features/filters/lib/filter-options.ts">
export const segmentOptions = [
  { label: "All segments", value: "all" },
  { label: "Revenue", value: "revenue" },
  { label: "Customers", value: "customers" },
  { label: "Products", value: "products" },
  { label: "Campaigns", value: "campaigns" },
] as const;

export const channelOptions = [
  { label: "All channels", value: "all" },
  { label: "Organic", value: "organic" },
  { label: "Paid", value: "paid" },
  { label: "Email", value: "email" },
  { label: "Social", value: "social" },
  { label: "Direct", value: "direct" },
] as const;

export const deviceOptions = [
  { label: "All devices", value: "all" },
  { label: "Desktop", value: "desktop" },
  { label: "Mobile", value: "mobile" },
  { label: "Tablet", value: "tablet" },
] as const;
</file>

<file path="features/filters/schemas/filter-schema.ts">

</file>

<file path="features/filters/types/filter-types.ts">
export type SegmentType =
  | "all"
  | "revenue"
  | "customers"
  | "products"
  | "campaigns";

export type ChannelType =
  | "all"
  | "organic"
  | "paid"
  | "email"
  | "social"
  | "direct";

export type DeviceType = "all" | "desktop" | "mobile" | "tablet";
</file>

<file path="features/kpis/components/metric-card.tsx">

</file>

<file path="features/kpis/components/metric-grid.tsx">

</file>

<file path="features/kpis/lib/metric-formatters.ts">

</file>

<file path="features/kpis/types/metric-types.ts">

</file>

<file path="features/overview/components/overview-insights-panel.tsx">
"use client";

import { AlertTriangle, ArrowUpRight, TrendingDown, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

export function OverviewInsightsPanel() {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="rounded-[1.35rem] border border-border/80 bg-card/95 p-5 shadow-[0_12px_28px_-18px_rgba(30,41,59,0.2)] transition-colors duration-200 hover:border-primary/25 hover:bg-primary/6 dark:hover:bg-primary/10"
    >
      <div>
        <p className="text-sm font-semibold text-foreground">Insights and alerts</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Quick signals to help you know where to inspect next.
        </p>
      </div>

      <div className="mt-5 space-y-3">
        <div className="rounded-[1rem] border border-transparent bg-emerald-500/8 p-4 transition-colors hover:border-emerald-500/20">
          <div className="flex items-start gap-3">
            <TrendingUp className="mt-0.5 size-4 text-emerald-500" />
            <div>
              <p className="text-sm font-medium text-foreground">
                Revenue is trending up
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Revenue is outperforming the previous period, with stronger movement in the most recent days.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[1rem] border border-transparent bg-amber-500/8 p-4 transition-colors hover:border-amber-400/20">
          <div className="flex items-start gap-3">
            <TrendingDown className="mt-0.5 size-4 text-amber-500" />
            <div>
              <p className="text-sm font-medium text-foreground">
                Watch conversion consistency
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Traffic and order movement look healthy, but conversion still needs closer monitoring by segment.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[1rem] border border-transparent bg-rose-500/8 p-4 transition-colors hover:border-rose-400/20">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 size-4 text-rose-500" />
            <div>
              <p className="text-sm font-medium text-foreground">
                Drill into campaign performance
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Campaign-linked rows should be reviewed next to confirm which sources are driving stronger returns.
              </p>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
      >
        Open deeper report
        <ArrowUpRight className="size-4" />
      </button>
    </motion.div>
  );
}
</file>

<file path="features/overview/components/overview-kpi-strip.tsx">
"use client";

import { useQuery } from "@tanstack/react-query";

import { KpiCard } from "@/components/data-display/kpi-card";
import { useDashboardFilters } from "@/features/filters/hooks/use-dashboard-filters";
import { getMetrics } from "@/lib/api/metrics";

export function OverviewKpiStrip() {
  const { filters } = useDashboardFilters();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["metrics", filters],
    queryFn: () => getMetrics(filters),
  });

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="h-[138px] animate-pulse rounded-2xl border bg-card"
          />
        ))}
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="rounded-2xl border border-dashed bg-card p-5 text-sm text-muted-foreground">
        Unable to load KPI metrics right now.
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {data.metrics.map((metric) => (
        <KpiCard key={metric.key} metric={metric} />
      ))}
    </div>
  );
}
</file>

<file path="features/overview/components/overview-top-movers.tsx">
"use client";

import { motion } from "motion/react";

import { formatCurrency } from "@/lib/formatters/currency";
import { PanelError } from "@/components/feedback/panel-error";
import { PanelLoading } from "@/components/feedback/panel-loading";
import { useOverviewTopMovers } from "@/features/overview/hooks/use-overview-top-movers";

export function OverviewTopMovers() {
  const { data, isLoading, isError } = useOverviewTopMovers();

  if (isLoading) {
    return <PanelLoading />;
  }

  if (isError || !data) {
    return (
      <PanelError description="The top movers section could not be loaded right now." />
    );
  }

  return (
    <div className="rounded-[1.35rem] border border-border/80 bg-card/95 p-5 shadow-[0_10px_30px_-18px_rgba(22,28,45,0.18)]">
      <div>
        <p className="text-sm font-semibold text-foreground">Top movers</p>
        <p className="mt-1 text-sm text-muted-foreground">
          The strongest rows by revenue across the active filter scope.
        </p>
      </div>

      <div className="mt-5 space-y-3">
        {data.rows.map((row) => (
          <motion.div
            key={row.id}
            whileHover={{ y: -2 }}
            className="flex items-center justify-between rounded-[1rem] border border-transparent bg-muted/55 px-4 py-3 transition-colors duration-200 hover:border-primary/20 hover:bg-primary/6 dark:hover:bg-primary/10"
          >
            <div>
              <p className="text-sm font-medium text-foreground">
                {row.segment} · {row.channel}
              </p>
              <p className="text-xs text-muted-foreground">
                {row.device} · {row.date}
              </p>
            </div>
            <p className="text-sm font-semibold text-foreground">
              {formatCurrency(row.revenue)}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
</file>

<file path="features/products/components/declining-products-card.tsx">
"use client";

import { motion } from "motion/react";

export function DecliningProductsCard() {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="rounded-[1.35rem] border border-border/80 bg-card/95 p-5 shadow-[0_12px_28px_-18px_rgba(30,41,59,0.2)] transition-colors duration-200 hover:border-amber-400/30 hover:bg-amber-500/6 dark:hover:bg-amber-500/10"
    >
      <p className="text-sm font-semibold text-foreground">Declining products</p>
      <p className="mt-1 text-sm text-muted-foreground">
        Products needing closer attention before the next reporting cycle.
      </p>

      <div className="mt-5 space-y-3">
        <div className="rounded-[1rem] border border-transparent bg-muted/55 px-4 py-3 transition-colors hover:border-amber-400/20 hover:bg-amber-500/6 dark:hover:bg-amber-500/10">
          <p className="text-sm font-medium text-foreground">Starter Add-on</p>
          <p className="text-xs text-amber-700 dark:text-amber-400">
            -4.2% vs previous period
          </p>
        </div>
        <div className="rounded-[1rem] border border-transparent bg-muted/55 px-4 py-3 transition-colors hover:border-amber-400/20 hover:bg-amber-500/6 dark:hover:bg-amber-500/10">
          <p className="text-sm font-medium text-foreground">Legacy Package</p>
          <p className="text-xs text-amber-700 dark:text-amber-400">
            -6.1% vs previous period
          </p>
        </div>
      </div>
    </motion.div>
  );
}
</file>

<file path="features/products/components/product-performance-table.tsx">
import { ReportsTable } from "@/features/reports-table/components/reports-table";

export function ProductPerformanceTable() {
  return <ReportsTable />;
}
</file>

<file path="features/products/components/top-products-card.tsx">
"use client";

import { motion } from "motion/react";

export function TopProductsCard() {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="rounded-[1.35rem] border border-border/80 bg-card/95 p-5 shadow-[0_12px_28px_-18px_rgba(30,41,59,0.2)] transition-colors duration-200 hover:border-primary/25 hover:bg-primary/6 dark:hover:bg-primary/10"
    >
      <p className="text-sm font-semibold text-foreground">Top products</p>
      <p className="mt-1 text-sm text-muted-foreground">
        Highest-performing products across the active period.
      </p>

      <div className="mt-5 space-y-3">
        <div className="rounded-[1rem] border border-transparent bg-muted/55 px-4 py-3 transition-colors hover:border-primary/20 hover:bg-primary/6 dark:hover:bg-primary/10">
          <p className="text-sm font-medium text-foreground">Starter Plan</p>
          <p className="text-xs text-muted-foreground">$28.4k revenue</p>
        </div>
        <div className="rounded-[1rem] border border-transparent bg-muted/55 px-4 py-3 transition-colors hover:border-primary/20 hover:bg-primary/6 dark:hover:bg-primary/10">
          <p className="text-sm font-medium text-foreground">Growth Bundle</p>
          <p className="text-xs text-muted-foreground">$24.1k revenue</p>
        </div>
        <div className="rounded-[1rem] border border-transparent bg-muted/55 px-4 py-3 transition-colors hover:border-primary/20 hover:bg-primary/6 dark:hover:bg-primary/10">
          <p className="text-sm font-medium text-foreground">Premium Access</p>
          <p className="text-xs text-muted-foreground">$19.8k revenue</p>
        </div>
      </div>
    </motion.div>
  );
}
</file>

<file path="features/reports-table/columns/report-columns.tsx">
"use client";

import type { ColumnDef } from "@tanstack/react-table";

import type { ReportRow } from "@/types/api";
import { formatCurrency } from "@/lib/formatters/currency";
import { formatPercentage } from "@/lib/formatters/percentage";
import { formatShortDate } from "@/lib/formatters/date";

export const reportColumns: ColumnDef<ReportRow>[] = [
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => formatShortDate(row.original.date),
  },
  {
    accessorKey: "segment",
    header: "Segment",
  },
  {
    accessorKey: "channel",
    header: "Channel",
  },
  {
    accessorKey: "device",
    header: "Device",
  },
  {
    accessorKey: "revenue",
    header: "Revenue",
    cell: ({ row }) => formatCurrency(row.original.revenue),
  },
  {
    accessorKey: "orders",
    header: "Orders",
    cell: ({ row }) => row.original.orders.toLocaleString(),
  },
  {
    accessorKey: "conversion_rate",
    header: "Conversion",
    cell: ({ row }) => formatPercentage(row.original.conversion_rate),
  },
];
</file>

<file path="features/reports-table/components/reports-table-column-toggle.tsx">
"use client";

import type { Table } from "@tanstack/react-table";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import type { ReportRow } from "@/types/api";

export function ReportsTableColumnToggle({
  table,
}: {
  table: Table<ReportRow>;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Columns</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52">
        {table
          .getAllLeafColumns()
          .filter((column) => column.getCanHide())
          .map((column) => (
            <DropdownMenuCheckboxItem
              key={column.id}
              checked={column.getIsVisible()}
              onCheckedChange={(value) => column.toggleVisibility(!!value)}
            >
              {column.id.replaceAll("_", " ")}
            </DropdownMenuCheckboxItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
</file>

<file path="features/reports-table/components/reports-table-pagination.tsx">
"use client";

import { Button } from "@/components/ui/button";

type ReportsTablePaginationProps = {
  page: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
};

export function ReportsTablePagination({
  page,
  totalPages,
  onPrevious,
  onNext,
}: ReportsTablePaginationProps) {
  return (
    <div className="flex items-center justify-between gap-3">
      <p className="text-sm text-muted-foreground">
        Page {page} of {Math.max(totalPages, 1)}
      </p>

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={page <= 1}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          onClick={onNext}
          disabled={page >= totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
</file>

<file path="features/reports-table/components/reports-table-toolbar.tsx">
"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type ReportsTableToolbarProps = {
  search: string;
  onSearchChange: (value: string) => void;
  onReset: () => void;
};

export function ReportsTableToolbar({
  search,
  onSearchChange,
  onReset,
}: ReportsTableToolbarProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative w-full max-w-sm">
        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search segment, channel, device..."
          className="h-10 rounded-xl border-border/70 bg-background/70 pl-9"
        />
      </div>

      <Button variant="outline" className="rounded-xl" onClick={onReset}>
        Reset search
      </Button>
    </div>
  );
}
</file>

<file path="features/reports-table/components/reports-table.tsx">
"use client";

import * as React from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type VisibilityState,
} from "@tanstack/react-table";
import { motion } from "motion/react";

import { reportColumns } from "@/features/reports-table/columns/report-columns";
import { useReportsTable } from "@/features/reports-table/hooks/use-reports-table";
import { ReportsTableToolbar } from "@/features/reports-table/components/reports-table-toolbar";
import { ReportsTablePagination } from "@/features/reports-table/components/reports-table-pagination";
import { ReportsTableColumnToggle } from "@/features/reports-table/components/reports-table-column-toggle";
import { PanelLoading } from "@/components/feedback/panel-loading";
import { PanelError } from "@/components/feedback/panel-error";
import { NoResults } from "@/components/feedback/no-results";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function ReportsTable() {
  const {
    data,
    isLoading,
    isError,
    search,
    setSearch,
    setPage,
    page,
  } = useReportsTable();

  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({
      id: false,
    });

  const table = useReactTable({
    data: data?.rows ?? [],
    columns: reportColumns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnVisibility,
    },
    onColumnVisibilityChange: setColumnVisibility,
  });

  if (isLoading) {
    return <PanelLoading />;
  }

  if (isError || !data) {
    return (
      <PanelError description="The report table could not be loaded right now. Confirm the backend is running and reachable." />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="rounded-[1.4rem] border border-border/80 bg-card/95 p-5 shadow-[0_14px_34px_-20px_rgba(30,41,59,0.2)]"
    >
      <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <ReportsTableToolbar
          search={search}
          onSearchChange={setSearch}
          onReset={() => setSearch("")}
        />
        <ReportsTableColumnToggle table={table} />
      </div>

      {table.getRowModel().rows.length === 0 ? (
        <NoResults />
      ) : (
        <>
          <div className="overflow-hidden rounded-[1.1rem] border border-border/70 bg-background/60">
            <Table>
              <TableHeader className="bg-muted/55">
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id} className="hover:bg-transparent">
                    {headerGroup.headers.map((header) => (
                      <TableHead
                        key={header.id}
                        className="h-11 px-4 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-muted-foreground"
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>

              <TableBody>
                {table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    className="border-border/60 transition-colors duration-200 hover:bg-primary/6 dark:hover:bg-primary/10"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="px-4 py-3.5">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-4">
            <ReportsTablePagination
              page={page}
              totalPages={data.total_pages}
              onPrevious={() => setPage((current) => Math.max(current - 1, 1))}
              onNext={() =>
                setPage((current) =>
                  Math.min(current + 1, Math.max(data.total_pages, 1))
                )
              }
            />
          </div>
        </>
      )}
    </motion.div>
  );
}
</file>

<file path="features/reports-table/hooks/use-reports-table.ts">
"use client";

import * as React from "react";
import { useQuery } from "@tanstack/react-query";

import { getReports } from "@/lib/api/reports";
import { useDashboardFilters } from "@/features/filters/hooks/use-dashboard-filters";
import type { ReportSortField, SortOrder } from "@/types/api";

export function useReportsTable() {
  const { filters } = useDashboardFilters();

  const [search, setSearch] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [sortBy, setSortBy] = React.useState<ReportSortField>("date");
  const [sortOrder, setSortOrder] = React.useState<SortOrder>("desc");

  const query = useQuery({
    queryKey: ["reports", filters, search, page, sortBy, sortOrder],
    queryFn: () =>
      getReports({
        filters,
        search,
        page,
        pageSize: 10,
        sortBy,
        sortOrder,
      }),
  });

  React.useEffect(() => {
    setPage(1);
  }, [search, filters]);

  return {
    ...query,
    search,
    setSearch,
    page,
    setPage,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
  };
}
</file>

<file path="features/reports-table/lib/table-formatters.ts">

</file>

<file path="features/reports-table/types/report-row.ts">
export type { ReportRow } from "@/types/api";
</file>

<file path="features/reports/components/report-presets-grid.tsx">
"use client";

import { motion } from "motion/react";

const items = [
  {
    title: "Revenue Overview",
    description:
      "Monitor top-line movement with comparison enabled and a broad date range.",
  },
  {
    title: "Mobile Campaign Check",
    description:
      "Review paid mobile activity and isolate campaign-related performance.",
  },
  {
    title: "Customer Retention Slice",
    description:
      "Focus on organic desktop traffic with compare mode enabled.",
  },
];

export function ReportPresetsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.24, delay: index * 0.04 }}
          whileHover={{ y: -3 }}
          className="rounded-[1.35rem] border border-border/80 bg-card/95 p-5 shadow-[0_12px_28px_-18px_rgba(30,41,59,0.2)] transition-colors duration-200 hover:border-primary/25 hover:bg-primary/6 dark:hover:bg-primary/10"
        >
          <p className="text-sm font-semibold text-foreground">{item.title}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
</file>

<file path="features/reports/components/reports-export-panel.tsx">
"use client";

import { motion } from "motion/react";

export function ReportsExportPanel() {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="rounded-[1.35rem] border border-border/80 bg-card/95 p-5 shadow-[0_12px_28px_-18px_rgba(30,41,59,0.2)] transition-colors duration-200 hover:border-primary/25 hover:bg-primary/6 dark:hover:bg-primary/10"
    >
      <p className="text-sm font-semibold text-foreground">Export and sharing</p>
      <p className="mt-1 text-sm text-muted-foreground">
        Use export actions and saved report configurations to keep recurring reporting fast.
      </p>

      <div className="mt-5 space-y-3">
        <div className="rounded-[1rem] border border-transparent bg-muted/55 px-4 py-3 transition-colors hover:border-primary/20 hover:bg-primary/6 dark:hover:bg-primary/10">
          <p className="text-sm font-medium text-foreground">CSV export</p>
          <p className="text-xs text-muted-foreground">
            Download the currently filtered report view.
          </p>
        </div>

        <div className="rounded-[1rem] border border-transparent bg-muted/55 px-4 py-3 transition-colors hover:border-primary/20 hover:bg-primary/6 dark:hover:bg-primary/10">
          <p className="text-sm font-medium text-foreground">Share config</p>
          <p className="text-xs text-muted-foreground">
            Reuse the current filter state across the dashboard.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
</file>

<file path="features/reports/components/reports-header.tsx">
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/shared/page-header";
import { SavedViewSelector } from "@/features/filters/components/saved-view-selector";

export function ReportsHeader() {
  return (
    <PageHeader
      title="Reports"
      description="Work with saved views, export data, and inspect reusable reporting configurations."
      actions={
        <>
          <SavedViewSelector />
          <Button>Export</Button>
        </>
      }
    />
  );
}
</file>

<file path="features/revenue/components/channel-breakdown-section.tsx">
"use client";

import { useQuery } from "@tanstack/react-query";

import { ChartCard } from "@/components/data-display/chart-card";
import { getBreakdowns } from "@/lib/api/breakdowns";
import { useDashboardFilters } from "@/features/filters/hooks/use-dashboard-filters";
import { BreakdownChart } from "@/features/charts/components/breakdown-chart";
import { formatCurrency } from "@/lib/formatters/currency";

export function ChannelBreakdownSection() {
  const { filters } = useDashboardFilters();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["revenue-by-channel", filters],
    queryFn: () => getBreakdowns("revenue_by_channel", filters),
  });

  if (isLoading) {
    return <div className="h-[360px] animate-pulse rounded-[1.35rem] bg-muted" />;
  }

  if (isError || !data) {
    return (
      <div className="rounded-[1.35rem] border border-dashed bg-card p-5 text-sm text-muted-foreground">
        Unable to load channel breakdown right now.
      </div>
    );
  }

  return (
    <ChartCard
      title="Revenue by channel"
      description="Compare how each acquisition channel contributes to total revenue."
    >
      <BreakdownChart
        data={data.items}
        valueFormatter={(value) => formatCurrency(value)}
      />
    </ChartCard>
  );
}
</file>

<file path="features/revenue/components/refund-trend-section.tsx">
"use client";

import { motion } from "motion/react";

export function RefundTrendSection() {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="rounded-[1.35rem] border border-border/80 bg-card/95 p-5 shadow-[0_12px_28px_-18px_rgba(30,41,59,0.2)] transition-colors duration-200 hover:border-primary/25 hover:bg-primary/6 dark:hover:bg-primary/10"
    >
      <p className="text-sm font-semibold text-foreground">Refund trend</p>
      <p className="mt-1 text-sm text-muted-foreground">
        Refund-specific backend data is not part of the current V1 seed model, so this section stays reserved for the next pass.
      </p>

      <div className="mt-5 rounded-[1rem] bg-muted/55 p-4">
        <div className="space-y-3">
          <div className="h-3 w-1/2 rounded-full bg-background" />
          <div className="h-3 w-4/5 rounded-full bg-background" />
          <div className="h-28 rounded-2xl bg-background" />
        </div>
      </div>
    </motion.div>
  );
}
</file>

<file path="features/revenue/components/revenue-trend-section.tsx">
"use client";

import { useQuery } from "@tanstack/react-query";

import { ChartCard } from "@/components/data-display/chart-card";
import { useDashboardFilters } from "@/features/filters/hooks/use-dashboard-filters";
import { getTrends } from "@/lib/api/trends";
import { buildTrendSeries } from "@/features/charts/lib/chart-formatters";
import { TrendChart } from "@/features/charts/components/trend-chart";

export function RevenueTrendSection() {
  const { filters } = useDashboardFilters();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["revenue-trends", filters],
    queryFn: () => getTrends("revenue", filters),
  });

  if (isLoading) {
    return <div className="h-[360px] animate-pulse rounded-[1.35rem] bg-muted" />;
  }

  if (isError || !data) {
    return (
      <div className="rounded-[1.35rem] border border-dashed bg-card p-5 text-sm text-muted-foreground">
        Unable to load revenue trend right now.
      </div>
    );
  }

  return (
    <ChartCard
      title="Revenue trend"
      description="Review revenue movement across the selected period."
    >
      <TrendChart
        data={buildTrendSeries(data.points, data.comparison_points)}
        metricName="revenue"
      />
    </ChartCard>
  );
}
</file>

<file path="features/saved-views/components/export-history-list.tsx">
"use client";

import { motion } from "motion/react";

const exportItems = [
  {
    title: "Revenue Overview",
    meta: "CSV · Today",
  },
  {
    title: "Customer Retention Slice",
    meta: "CSV · Yesterday",
  },
];

export function ExportHistoryList() {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="rounded-[1.35rem] border border-border/80 bg-card/95 p-5 shadow-[0_12px_28px_-18px_rgba(30,41,59,0.2)] transition-colors duration-200 hover:border-primary/25 hover:bg-primary/6 dark:hover:bg-primary/10"
    >
      <p className="text-sm font-semibold text-foreground">Export history</p>
      <p className="mt-1 text-sm text-muted-foreground">
        Recent export activity appears here for reused reports.
      </p>

      <div className="mt-5 space-y-3">
        {exportItems.map((item) => (
          <div
            key={item.title}
            className="rounded-[1rem] border border-transparent bg-muted/55 px-4 py-3 transition-colors duration-200 hover:border-primary/20 hover:bg-primary/6 dark:hover:bg-primary/10"
          >
            <p className="text-sm font-medium text-foreground">{item.title}</p>
            <p className="text-xs text-muted-foreground">{item.meta}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
</file>

<file path="features/saved-views/components/save-view-dialog.tsx">
"use client";

import { BookmarkPlus } from "lucide-react";

import { Button } from "@/components/ui/button";

export function SaveViewDialog() {
  return (
    <Button variant="outline" className="rounded-xl">
      <BookmarkPlus className="size-4" />
      Save current view
    </Button>
  );
}
</file>

<file path="features/saved-views/components/saved-view-card.tsx">
"use client";

import { motion } from "motion/react";

import type { SavedView } from "@/types/api";

export function SavedViewCard({ item }: { item: SavedView }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-[1.35rem] border border-border/80 bg-card/95 p-5 shadow-[0_12px_28px_-18px_rgba(30,41,59,0.2)] transition-colors duration-200 hover:border-primary/25 hover:bg-primary/6 dark:hover:bg-primary/10"
    >
      <p className="text-sm font-semibold text-foreground">{item.name}</p>
      <p className="mt-2 text-sm text-muted-foreground">
        Segment: {item.filters.segment} · Channel: {item.filters.channel} · Device: {item.filters.device}
      </p>
      <p className="mt-2 inline-flex rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
        Compare: {item.filters.compare ? "Enabled" : "Disabled"}
      </p>
    </motion.div>
  );
}
</file>

<file path="features/saved-views/hooks/use-saved-views.ts">
"use client";

import { useQuery } from "@tanstack/react-query";

import { getSavedViews } from "@/lib/api/saved-views";

export function useSavedViews() {
  return useQuery({
    queryKey: ["saved-views"],
    queryFn: getSavedViews,
  });
}
</file>

<file path="features/saved-views/lib/saved-view-mappers.ts">

</file>

<file path="features/saved-views/schemas/saved-view-schema.ts">

</file>

<file path="features/saved-views/types/saved-view-types.ts">

</file>

<file path="features/settings/components/integration-settings-panel.tsx">
"use client";

import { motion } from "motion/react";

export function IntegrationSettingsPanel() {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="rounded-[1.35rem] border border-border/80 bg-card/95 p-5 shadow-[0_12px_28px_-18px_rgba(30,41,59,0.2)] transition-colors duration-200 hover:border-primary/25 hover:bg-primary/6 dark:hover:bg-primary/10"
    >
      <p className="text-sm font-semibold text-foreground">Integrations</p>
      <p className="mt-1 text-sm text-muted-foreground">
        Current data source and export configuration for the workspace.
      </p>

      <div className="mt-5 space-y-3">
        <div className="rounded-[1rem] bg-muted/55 px-4 py-3">
          <p className="text-sm font-medium text-foreground">Data source status</p>
          <p className="text-xs text-muted-foreground">mock_connected</p>
        </div>

        <div className="rounded-[1rem] bg-muted/55 px-4 py-3">
          <p className="text-sm font-medium text-foreground">Default export format</p>
          <p className="text-xs text-muted-foreground">csv</p>
        </div>
      </div>
    </motion.div>
  );
}
</file>

<file path="features/settings/components/notification-settings-form.tsx">
"use client";

import { motion } from "motion/react";

export function NotificationSettingsForm() {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="rounded-[1.35rem] border border-border/80 bg-card/95 p-5 shadow-[0_12px_28px_-18px_rgba(30,41,59,0.2)] transition-colors duration-200 hover:border-primary/25 hover:bg-primary/6 dark:hover:bg-primary/10"
    >
      <p className="text-sm font-semibold text-foreground">Notifications</p>
      <p className="mt-1 text-sm text-muted-foreground">
        Configure alerting and regular summary behavior.
      </p>

      <div className="mt-5 space-y-3">
        <div className="rounded-[1rem] bg-muted/55 px-4 py-3">
          <p className="text-sm font-medium text-foreground">Email alerts</p>
          <p className="text-xs text-muted-foreground">Enabled</p>
        </div>

        <div className="rounded-[1rem] bg-muted/55 px-4 py-3">
          <p className="text-sm font-medium text-foreground">Weekly summary</p>
          <p className="text-xs text-muted-foreground">Disabled</p>
        </div>
      </div>
    </motion.div>
  );
}
</file>

<file path="features/settings/components/workspace-settings-form.tsx">
"use client";

import { motion } from "motion/react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function WorkspaceSettingsForm() {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="rounded-[1.35rem] border border-border/80 bg-card/95 p-5 shadow-[0_12px_28px_-18px_rgba(30,41,59,0.2)] transition-colors duration-200 hover:border-primary/25 hover:bg-primary/6 dark:hover:bg-primary/10"
    >
      <p className="text-sm font-semibold text-foreground">Workspace settings</p>
      <p className="mt-1 text-sm text-muted-foreground">
        Manage the default workspace name and reporting preferences.
      </p>

      <div className="mt-5 space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Workspace name
          </label>
          <Input value="MetricMint Workspace" readOnly className="h-10 rounded-xl bg-background/70" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Default date range
          </label>
          <Input value="last_30_days" readOnly className="h-10 rounded-xl bg-background/70" />
        </div>

        <Button className="rounded-xl">Save changes</Button>
      </div>
    </motion.div>
  );
}
</file>

<file path="features/settings/schemas/settings-schema.ts">

</file>

<file path="hooks/use-breakpoint.ts">

</file>

<file path="hooks/use-debounce.ts">

</file>

<file path="lib/api/client.ts">
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://127.0.0.1:8000/api/v1";

type RequestOptions = Omit<RequestInit, "body"> & {
  query?: Record<string, string | number | boolean | null | undefined>;
};

function buildUrl(path: string, query?: RequestOptions["query"]) {
  const url = new URL(`${API_BASE_URL}${path}`);

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value === null || value === undefined || value === "") {
        return;
      }

      url.searchParams.set(key, String(value));
    });
  }

  return url.toString();
}

export async function apiGet<T>(path: string, options?: RequestOptions): Promise<T> {
  const response = await fetch(buildUrl(path, options?.query), {
    method: "GET",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers ?? {}),
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}
</file>

<file path="lib/api/metrics.ts">
import { apiGet } from "@/lib/api/client";
import type { DashboardFilters, MetricsResponse } from "@/types/api";

export async function getMetrics(filters: DashboardFilters): Promise<MetricsResponse> {
  return apiGet<MetricsResponse>("/metrics/", {
    query: {
      start_date: filters.start_date,
      end_date: filters.end_date,
      segment: filters.segment,
      channel: filters.channel,
      device: filters.device,
      compare: filters.compare,
    },
  });
}
</file>

<file path="lib/api/reports.ts">
import { apiGet } from "@/lib/api/client";
import type {
  DashboardFilters,
  ReportsResponse,
  ReportSortField,
  SortOrder,
} from "@/types/api";

type ReportsQueryOptions = {
  filters: DashboardFilters;
  search?: string;
  sortBy?: ReportSortField;
  sortOrder?: SortOrder;
  page?: number;
  pageSize?: number;
};

export async function getReports({
  filters,
  search,
  sortBy = "date",
  sortOrder = "desc",
  page = 1,
  pageSize = 10,
}: ReportsQueryOptions): Promise<ReportsResponse> {
  return apiGet<ReportsResponse>("/reports/", {
    query: {
      start_date: filters.start_date,
      end_date: filters.end_date,
      segment: filters.segment,
      channel: filters.channel,
      device: filters.device,
      compare: filters.compare,
      search,
      sort_by: sortBy,
      sort_order: sortOrder,
      page,
      page_size: pageSize,
    },
  });
}
</file>

<file path="lib/api/saved-views.ts">
import { apiGet } from "@/lib/api/client";
import type { SavedViewsResponse } from "@/types/api";

export async function getSavedViews(): Promise<SavedViewsResponse> {
  return apiGet<SavedViewsResponse>("/saved-views/");
}
</file>

<file path="lib/constants/navigation.ts">
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
</file>

<file path="lib/constants/routes.ts">
export const routes = {
  home: "/",
  dashboard: "/dashboard",
  overview: "/dashboard/overview",
  revenue: "/dashboard/revenue",
  customers: "/dashboard/customers",
  products: "/dashboard/products",
  campaigns: "/dashboard/campaigns",
  reports: "/dashboard/reports",
  savedView: "/dashboard/saved-view",
  settings: "/dashboard/settings",
  recordDetail: "/dashboard/record-detail",
} as const;
</file>

<file path="lib/formatters/currency.ts">
export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}
</file>

<file path="lib/formatters/date.ts">
export function formatShortDate(value: string) {
  const date = new Date(value);

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(date);
}
</file>

<file path="lib/formatters/percentage.ts">
export function formatPercentage(value: number, digits = 1) {
  return `${value.toFixed(digits)}%`;
}
</file>

<file path="lib/mappers/dashboard.ts">

</file>

<file path="lib/mock-data/campaigns.ts">

</file>

<file path="lib/mock-data/customers.ts">

</file>

<file path="lib/mock-data/overview.ts">

</file>

<file path="lib/mock-data/products.ts">

</file>

<file path="lib/mock-data/reports.ts">

</file>

<file path="lib/mock-data/revenue.ts">

</file>

<file path="lib/mock-data/settings.ts">

</file>

<file path="lib/query/query-client.ts">
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,
      gcTime: 5 * 60_000,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});
</file>

<file path="lib/utils.ts">
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
</file>

<file path="lib/utils/cn.ts">

</file>

<file path="next.config.ts">
import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self' data:",
      "connect-src 'self' http://127.0.0.1:8000 http://localhost:8000",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
</file>

<file path="postcss.config.mjs">
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
</file>

<file path="providers/app-provider.tsx">
"use client";

import * as React from "react";

import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryProvider } from "@/providers/query-provider";
import { ThemeProvider } from "@/providers/theme-provider";

export function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <QueryProvider>
        <TooltipProvider delayDuration={150}>{children}</TooltipProvider>
      </QueryProvider>
    </ThemeProvider>
  );
}
</file>

<file path="providers/query-provider.tsx">
"use client";

import * as React from "react";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "@/lib/query/query-client";

export function QueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
</file>

<file path="public/file.svg">
<svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z" clip-rule="evenodd" fill="#666" fill-rule="evenodd"/></svg>
</file>

<file path="public/globe.svg">
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#666"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
</file>

<file path="public/next.svg">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80"><path fill="#000" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/><path fill="#000" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/></svg>
</file>

<file path="public/vercel.svg">
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000"><path d="m577.3 0 577.4 1000H0z" fill="#fff"/></svg>
</file>

<file path="public/window.svg">
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" fill="#666"/></svg>
</file>

<file path="README.md">
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
</file>

<file path="styles/charts.css">

</file>

<file path="styles/tokens.css">

</file>

<file path="tests/integration/.gitkeep">

</file>

<file path="tests/unit/.gitkeep">

</file>

<file path="tsconfig.json">
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
</file>

<file path="types/api.ts">
export type SegmentType =
  | "all"
  | "revenue"
  | "customers"
  | "products"
  | "campaigns";

export type ChannelType =
  | "all"
  | "organic"
  | "paid"
  | "email"
  | "social"
  | "direct";

export type DeviceType = "all" | "desktop" | "mobile" | "tablet";

export type DashboardFilters = {
  start_date: string | null;
  end_date: string | null;
  segment: SegmentType;
  channel: ChannelType;
  device: DeviceType;
  compare: boolean;
};

export type ComparisonValue = {
  value: number;
  change: number;
  change_percent: number;
};

export type MetricCard = {
  key: string;
  label: string;
  value: number;
  display_value: string;
  comparison: ComparisonValue | null;
};

export type MetricsResponse = {
  filters: DashboardFilters;
  metrics: MetricCard[];
};

export type TrendMetricName = "revenue" | "orders" | "conversion_rate";

export type TrendPoint = {
  date: string;
  value: number;
};

export type TrendsResponse = {
  metric_name: TrendMetricName;
  filters: DashboardFilters;
  points: TrendPoint[];
  comparison_points: TrendPoint[] | null;
};

export type BreakdownMetricName =
  | "revenue_by_channel"
  | "orders_by_segment"
  | "customers_by_device";

export type BreakdownItem = {
  label: string;
  value: number;
  percentage: number;
};

export type BreakdownsResponse = {
  metric_name: BreakdownMetricName;
  filters: DashboardFilters;
  items: BreakdownItem[];
};

export type ReportSortField =
  | "date"
  | "segment"
  | "channel"
  | "device"
  | "revenue"
  | "orders"
  | "conversion_rate";

export type SortOrder = "asc" | "desc";

export type ReportRow = {
  id: string;
  date: string;
  segment: string;
  channel: string;
  device: string;
  revenue: number;
  orders: number;
  conversion_rate: number;
};

export type ReportsResponse = {
  filters: DashboardFilters;
  search: string | null;
  sort_by: ReportSortField;
  sort_order: SortOrder;
  page: number;
  page_size: number;
  total: number;
  total_pages: number;
  rows: ReportRow[];
};

export type SavedView = {
  id: string;
  name: string;
  filters: DashboardFilters;
};

export type SavedViewsResponse = {
  items: SavedView[];
  total: number;
};
</file>

<file path="types/common.ts">

</file>

<file path="types/dashboard.ts">

</file>

<file path="app/globals.css">
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-manrope);
  --font-mono: var(--font-jetbrains-mono);
  --font-heading: var(--font-manrope);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --radius-sm: calc(var(--radius) * 0.6);
  --radius-md: calc(var(--radius) * 0.8);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) * 1.4);
  --radius-2xl: calc(var(--radius) * 1.8);
  --radius-3xl: calc(var(--radius) * 2.2);
  --radius-4xl: calc(var(--radius) * 2.6);
}

:root {
  --background: oklch(0.985 0.007 250);
  --foreground: oklch(0.24 0.02 255);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.24 0.02 255);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.24 0.02 255);

  --primary: oklch(0.6 0.2 258);
  --primary-foreground: oklch(0.99 0.002 255);

  --secondary: oklch(0.965 0.015 245);
  --secondary-foreground: oklch(0.28 0.02 255);

  --muted: oklch(0.968 0.008 250);
  --muted-foreground: oklch(0.52 0.025 255);

  --accent: oklch(0.95 0.025 245);
  --accent-foreground: oklch(0.28 0.02 255);

  --destructive: oklch(0.64 0.23 28);
  --border: oklch(0.91 0.012 250);
  --input: oklch(0.91 0.012 250);
  --ring: oklch(0.7 0.13 258);

  --chart-1: oklch(0.63 0.19 258);
  --chart-2: oklch(0.73 0.15 195);
  --chart-3: oklch(0.76 0.16 95);
  --chart-4: oklch(0.7 0.18 35);
  --chart-5: oklch(0.7 0.16 330);

  --radius: 0.95rem;

  --sidebar: oklch(0.992 0.004 255);
  --sidebar-foreground: oklch(0.24 0.02 255);
  --sidebar-primary: oklch(0.6 0.2 258);
  --sidebar-primary-foreground: oklch(0.99 0.002 255);
  --sidebar-accent: oklch(0.962 0.014 245);
  --sidebar-accent-foreground: oklch(0.28 0.02 255);
  --sidebar-border: oklch(0.92 0.012 250);
  --sidebar-ring: oklch(0.7 0.13 258);
}

.dark {
  --background: oklch(0.18 0.012 255);
  --foreground: oklch(0.96 0.004 255);
  --card: oklch(0.22 0.012 255);
  --card-foreground: oklch(0.96 0.004 255);
  --popover: oklch(0.22 0.012 255);
  --popover-foreground: oklch(0.96 0.004 255);

  --primary: oklch(0.74 0.16 258);
  --primary-foreground: oklch(0.18 0.012 255);

  --secondary: oklch(0.28 0.014 255);
  --secondary-foreground: oklch(0.96 0.004 255);

  --muted: oklch(0.26 0.01 255);
  --muted-foreground: oklch(0.73 0.01 255);

  --accent: oklch(0.31 0.014 255);
  --accent-foreground: oklch(0.96 0.004 255);

  --destructive: oklch(0.7 0.21 28);
  --border: oklch(1 0 0 / 12%);
  --input: oklch(1 0 0 / 14%);
  --ring: oklch(0.74 0.16 258);

  --chart-1: oklch(0.74 0.16 258);
  --chart-2: oklch(0.76 0.14 195);
  --chart-3: oklch(0.79 0.15 95);
  --chart-4: oklch(0.77 0.18 35);
  --chart-5: oklch(0.77 0.14 330);

  --sidebar: oklch(0.2 0.01 255);
  --sidebar-foreground: oklch(0.96 0.004 255);
  --sidebar-primary: oklch(0.74 0.16 258);
  --sidebar-primary-foreground: oklch(0.18 0.012 255);
  --sidebar-accent: oklch(0.28 0.012 255);
  --sidebar-accent-foreground: oklch(0.96 0.004 255);
  --sidebar-border: oklch(1 0 0 / 12%);
  --sidebar-ring: oklch(0.74 0.16 258);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  html {
    @apply font-sans;
  }

  body {
    @apply bg-background text-foreground;
    background-image:
      radial-gradient(circle at top left, color-mix(in oklab, var(--color-primary) 10%, transparent) 0%, transparent 28%),
      radial-gradient(circle at top right, color-mix(in oklab, var(--color-chart-2) 12%, transparent) 0%, transparent 24%);
    background-attachment: fixed;
  }
}
</file>

<file path="package.json">
{
  "name": "metricmint-frontend",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "@hookform/resolvers": "^5.2.2",
    "@tanstack/react-query": "^5.99.0",
    "@tanstack/react-table": "^8.21.3",
    "@tanstack/react-virtual": "^3.13.23",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "date-fns": "^4.1.0",
    "lucide-react": "^1.8.0",
    "motion": "^12.38.0",
    "next": "16.2.3",
    "next-themes": "^0.4.6",
    "radix-ui": "^1.4.3",
    "react": "19.2.4",
    "react-day-picker": "^9.14.0",
    "react-dom": "19.2.4",
    "react-hook-form": "^7.72.1",
    "react-is": "^19.2.5",
    "recharts": "^3.8.1",
    "shadcn": "^4.2.0",
    "tailwind-merge": "^3.5.0",
    "tw-animate-css": "^1.4.0",
    "zod": "^4.3.6"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.2.3",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
</file>

</files>
