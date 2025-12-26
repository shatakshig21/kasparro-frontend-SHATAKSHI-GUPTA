export default function PlatformPage() {
  return (
    <div className="p-10 space-y-8">
      <h1 className="text-3xl font-bold">Platform Overview</h1>

      <section>
        <h2 className="text-xl font-semibold mb-2">How Kasparro Works</h2>
        <p className="text-gray-700">
          Kasparro ingests brand data, analyzes it through multiple AI-driven
          modules, and produces actionable insights for improving visibility
          across AI search platforms.
        </p>
      </section>

      <section>
        <h3 className="font-semibold mb-2">Input</h3>
        <ul className="list-disc pl-6">
          <li>Website content</li>
          <li>Brand metadata</li>
          <li>Search & LLM signals</li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold mb-2">Processing</h3>
        <ul className="list-disc pl-6">
          <li>Entity extraction</li>
          <li>Semantic mapping</li>
          <li>Trust & authority evaluation</li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold mb-2">Output</h3>
        <ul className="list-disc pl-6">
          <li>AI visibility score</li>
          <li>Optimization recommendations</li>
          <li>Priority action roadmap</li>
        </ul>
      </section>
    </div>
  );
}
