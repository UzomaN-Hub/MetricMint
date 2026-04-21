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