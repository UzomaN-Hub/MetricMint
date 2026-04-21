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