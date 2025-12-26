export default function ArchitecturePage() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold">System Architecture</h1>

      
      <Section
        title="1. Input Layer"
        items={[
          "Website URLs",
          "Brand Metadata",
          "Content Pages",
          "Search Queries",
          "SERP & LLM Signals",
        ]}
      />

      
      <Section
        title="2. Context Builder"
        items={[
          "Entity Extraction",
          "Topic Clustering",
          "Brand Context Graph",
          "Query Intent Mapping",
        ]}
      />

    
      <Section
        title="3. Audit & Intelligence Layer"
        items={[
          "Entity Understanding Module",
          "Content Authority Module",
          "Trust & EEAT Module",
          "AI Visibility Analysis",
        ]}
      />

    
      <Section
        title="4. Output Layer"
        items={[
          "AI Visibility Score",
          "Actionable Recommendations",
          "Priority Fixes",
          "Optimization Roadmap",
        ]}
      />
    </div>
  );
}

function Section({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="border rounded-lg p-5">
      <h2 className="font-semibold text-lg mb-3">{title}</h2>
      <ul className="list-disc pl-6 space-y-1 text-gray-700">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
