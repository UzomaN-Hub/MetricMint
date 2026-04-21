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