export type DsaPhaseNumber = 1 | 2 | 3 | 4;

export interface DsaPatternMeta {
  slug: string;
  title: string;
  phase: DsaPhaseNumber;
  summary: string;
  variants?: string[];
}

export type SystemDesignTrack = "fundamentals" | "lld" | "hld" | "ai-ml";

export type SystemDesignTrackGroup = string;

export interface SystemDesignTopicMeta {
  slug: string;
  title: string;
  track: SystemDesignTrack;
  summary: string;
  group?: SystemDesignTrackGroup;
}
