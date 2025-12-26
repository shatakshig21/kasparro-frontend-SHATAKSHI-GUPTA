"use client";

import { auditModules } from "@/data/auditData";
import { useAppStore } from "@/store/useAppStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AuditPage() {
  const { selectedModuleId, setModule } = useAppStore();

  const activeModule =
    auditModules.find((m) => m.id === selectedModuleId) ||
    auditModules[0];

  return (
    <div className="flex h-full">
      <div className="w-64 border-r p-4 space-y-2">
        <h2 className="font-semibold text-lg mb-4">Audit Modules</h2>

        {auditModules.map((module) => (
          <button
            key={module.id}
            onClick={() => setModule(module.id)}
            className={`w-full text-left px-3 py-2 rounded-md text-sm ${
              selectedModuleId === module.id
                ? "bg-black text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {module.name}
          </button>
        ))}
      </div>

      <div className="flex-1 p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold">{activeModule.name}</h1>
          <p className="text-gray-500">
            Score:{" "}
            <span className="font-semibold">
              {activeModule.score}/100
            </span>
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Key Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1">
              {activeModule.insights.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Issues</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1 text-red-600">
              {activeModule.issues.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1 text-green-600">
              {activeModule.recommendations.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
