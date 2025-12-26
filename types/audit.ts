export interface AuditModule {
  id: string;
  name: string;
  score: number;
  insights: string[];
  issues: string[];
  recommendations: string[];
}

export interface Brand {
  id: string;
  name: string;
  aiVisibilityScore: number;
  trustScore: number;
  keywordCoverage: number;
  lastAudit: string;
}
