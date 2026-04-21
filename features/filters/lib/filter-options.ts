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