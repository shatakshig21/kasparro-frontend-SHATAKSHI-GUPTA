export default function HomePage() {
  return (
    <main className="p-10 space-y-12">
     
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">
          AI-Native SEO & Brand Intelligence
        </h1>
        <p className="text-gray-600 max-w-2xl">
          Kasparro helps brands understand how they appear inside AI-driven
          search engines like ChatGPT, Gemini, and Perplexity — and how to
          improve visibility, trust, and authority.
        </p>

        <a
          href="/platform"
          className="inline-block bg-black text-white px-6 py-3 rounded-md"
        >
          Run AI-SEO Audit →
        </a>
      </section>

     
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Why AI-SEO is Different
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Search is shifting from links to answers</li>
          <li>LLMs evaluate trust, context, and authority</li>
          <li>Traditional SEO tools can’t measure AI visibility</li>
        </ul>
      </section>

    
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Core Intelligence Modules
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            "Entity Understanding",
            "Content Authority",
            "Trust & EEAT",
            "AI Visibility",
            "Semantic Coverage",
            "Brand Mentions",
            "Query Relevance",
          ].map((item) => (
            <div
              key={item}
              className="border rounded-md p-4 text-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
      <footer className="border-t pt-6 text-sm text-gray-500">
  © 2024 Kasparro — AI Native SEO Platform
</footer>

    </main>
  );
}
