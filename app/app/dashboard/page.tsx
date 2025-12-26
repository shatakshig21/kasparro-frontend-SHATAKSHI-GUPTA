"use client";

import { brands } from "@/data/brands";
import { useAppStore } from "@/store/useAppStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  const { selectedBrandId, setBrand } = useAppStore();

  const selectedBrand = brands.find(
    (b) => b.id === selectedBrandId
  );

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="flex items-center gap-4">
        <label className="font-medium">Select Brand:</label>
        <select
          className="border rounded-md px-3 py-2"
          value={selectedBrandId}
          onChange={(e) => setBrand(e.target.value)}
        >
          {brands.map((brand) => (
            <option key={brand.id} value={brand.id}>
              {brand.name}
            </option>
          ))}
        </select>
      </div>

      {selectedBrand && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <MetricCard
            title="AI Visibility"
            value={`${selectedBrand.aiVisibilityScore}%`}
          />
          <MetricCard
            title="Trust / EEAT"
            value={`${selectedBrand.trustScore}%`}
          />
          <MetricCard
            title="Keyword Coverage"
            value={`${selectedBrand.keywordCoverage}%`}
          />
          <MetricCard
            title="Last Audit"
            value={selectedBrand.lastAudit}
          />
        </div>
      )}
    </div>
  );
}

function MetricCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm text-gray-500">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{value}</p>
      </CardContent>
    </Card>
  );
}
