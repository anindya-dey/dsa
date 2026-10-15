export type DsaPhaseNumber = 1 | 2 | 3 | 4;

export interface DsaPatternMeta {
  slug: string;
  title: string;
  phase: DsaPhaseNumber;
  summary: string;
  variants?: string[];
}

export type SystemDesignTrack = "fundamentals" | "lld" | "hld";

export type SystemDesignTrackGroup = string;

export interface SystemDesignTopicMeta {
  slug: string;
  title: string;
  track: SystemDesignTrack;
  summary: string;
  group?: SystemDesignTrackGroup;
}

export type AiMlTrack = "concepts" | "systems";

export type AiMlTrackGroup = string;

export interface AiMlTopicMeta {
  slug: string;
  title: string;
  track: AiMlTrack;
  summary: string;
  group?: AiMlTrackGroup;
}

export interface CppEntryMeta {
  slug: string;
  title: string;
  summary: string;
}

export type Tier = "foundational" | "intermediate" | "advanced";
