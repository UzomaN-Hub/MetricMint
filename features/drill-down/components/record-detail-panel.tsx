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