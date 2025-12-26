import { AuditModule } from "@/types/audit";

export const auditModules: AuditModule[] = [
  {
    id: "entity",
    name: "Entity Understanding",
    score: 72,
    insights: ["Brand is recognized by LLMs", "Entity appears in knowledge graphs"],
    issues: ["Weak schema markup", "Low brand-entity linkage"],
    recommendations: ["Add Organization & Product schema", "Improve entity references across content"]
  },
  {
    id: "content",
    name: "Content Authority",
    score: 65,
    insights: ["Good topical depth", "Consistent publishing frequency"],
    issues: ["Low expert citations", "Thin supporting pages"],
    recommendations: ["Add expert-authored content", "Improve internal linking structure"]
  },
  {
    id: "trust",
    name: "Trust & EEAT",
    score: 58,
    insights: ["Brand mentions exist", "Some authoritative backlinks"],
    issues: ["Low author credibility", "Missing trust signals"],
    recommendations: ["Add author bios", "Improve About & Trust pages"]
  },
  {
  id: "visibility",
  name: "AI Visibility",
  score: 70,
  insights: ["Appears in LLM answers"],
  issues: ["Low recall"],
  recommendations: ["Improve topical authority"]
}

];
