import type { SystemDesignTopicMeta, SystemDesignTrack } from "./types";

export const systemDesignTrackTitles: Record<SystemDesignTrack, string> = {
  fundamentals: "Fundamentals",
  lld: "Low-Level Design",
  hld: "High-Level Design",
};

export const systemDesignTrackDescriptions: Record<SystemDesignTrack, string> = {
  fundamentals:
    "The building blocks every distributed system is made of — scalability, caching, consistency, and the vocabulary you need before designing anything bigger.",
  lld: "Object-oriented, code-level design for self-contained systems — class diagrams, design patterns, and a working sketch.",
  hld: "Full distributed-system case studies — requirements, architecture, trade-offs, and capacity estimates for systems at scale.",
};

export const systemDesignTopics: SystemDesignTopicMeta[] = [
  // Fundamentals
  {
    slug: "scalability",
    title: "Scalability",
    track: "fundamentals",
    summary: "Vertical vs. horizontal scaling and when each one breaks down.",
  },
  {
    slug: "availability-and-reliability",
    title: "Availability & Reliability",
    track: "fundamentals",
    summary: "Replication, failover, and designing for component failure.",
  },
  {
    slug: "cap-theorem-and-consistency-models",
    title: "CAP Theorem & Consistency Models",
    track: "fundamentals",
    summary: "Strong vs. eventual consistency, and what CAP actually constrains.",
  },
  {
    slug: "latency-vs-throughput",
    title: "Latency vs. Throughput",
    track: "fundamentals",
    summary: "Why optimizing one can quietly hurt the other.",
  },
  {
    slug: "load-balancing",
    title: "Load Balancing",
    track: "fundamentals",
    summary: "Algorithms and layers for distributing traffic across servers.",
  },
  {
    slug: "caching",
    title: "Caching",
    track: "fundamentals",
    summary: "Cache placement, eviction policies, and invalidation strategies.",
  },
  {
    slug: "cdn",
    title: "Content Delivery Networks",
    track: "fundamentals",
    summary: "Edge caching and routing traffic closer to the user.",
  },
  {
    slug: "database-fundamentals",
    title: "Database Fundamentals",
    track: "fundamentals",
    summary: "Indexing, replication, sharding, and SQL vs. NoSQL trade-offs.",
  },
  {
    slug: "consistent-hashing",
    title: "Consistent Hashing",
    track: "fundamentals",
    summary: "Distributing keys across nodes without a full remap on resize.",
  },
  {
    slug: "message-queues-and-pubsub",
    title: "Message Queues & Pub/Sub",
    track: "fundamentals",
    summary: "Decoupling producers and consumers with queues and topics.",
  },
  {
    slug: "rate-limiting",
    title: "Rate Limiting",
    track: "fundamentals",
    summary: "Token bucket, leaky bucket, and sliding window limiting strategies.",
  },
  {
    slug: "api-design",
    title: "API Design",
    track: "fundamentals",
    summary: "REST, GraphQL, gRPC, and idempotency in practice.",
  },
  {
    slug: "proxies",
    title: "Proxies",
    track: "fundamentals",
    summary: "Forward proxies vs. reverse proxies and what each one is for.",
  },
  {
    slug: "microservices-vs-monolith",
    title: "Microservices vs. Monolith",
    track: "fundamentals",
    summary: "The real trade-offs behind splitting a system into services.",
  },
  {
    slug: "networking-basics",
    title: "Networking Basics",
    track: "fundamentals",
    summary: "DNS, TCP/UDP, HTTP/HTTPS, and WebSockets — the layers underneath everything.",
  },
  {
    slug: "auth-basics",
    title: "Authentication & Authorization Basics",
    track: "fundamentals",
    summary: "Sessions, tokens, and OAuth at the level a system designer needs.",
  },
  {
    slug: "observability",
    title: "Observability",
    track: "fundamentals",
    summary: "Logs, metrics, and tracing — and how they catch what tests don't.",
  },

  // Low-Level Design
  {
    slug: "parking-lot",
    title: "Design a Parking Lot",
    track: "lld",
    summary: "A classic OOP exercise in modeling entities, capacity, and pricing rules.",
  },
  {
    slug: "elevator-system",
    title: "Design an Elevator System",
    track: "lld",
    summary: "Scheduling, state machines, and request dispatch for a bank of elevators.",
  },
  {
    slug: "library-management-system",
    title: "Design a Library Management System",
    track: "lld",
    summary: "Modeling members, catalogs, holds, and checkouts.",
  },
  {
    slug: "chess-game",
    title: "Design a Chess Game",
    track: "lld",
    summary: "Board state, piece movement rules, and turn management.",
  },
  {
    slug: "vending-machine",
    title: "Design a Vending Machine",
    track: "lld",
    summary: "A compact state machine for inventory, payment, and dispensing.",
  },
  {
    slug: "lru-lfu-cache",
    title: "Design an LRU/LFU Cache",
    track: "lld",
    summary: "In-memory eviction policies implemented from scratch.",
  },
  {
    slug: "rate-limiter-lld",
    title: "Design a Rate Limiter (Code-Level)",
    track: "lld",
    summary: "Implementing a limiting algorithm as a reusable class.",
  },
  {
    slug: "url-shortener-lld",
    title: "Design a URL Shortener (Code-Level)",
    track: "lld",
    summary: "Encoding schemes and storage for a single-service shortener.",
  },
  {
    slug: "logging-framework",
    title: "Design a Logging Framework",
    track: "lld",
    summary: "Log levels, sinks, and formatting as a pluggable library.",
  },

  // High-Level Design
  {
    slug: "url-shortener",
    title: "Design a URL Shortener (System-Level)",
    track: "hld",
    summary: "TinyURL at scale: storage, caching, and redirect latency.",
  },
  {
    slug: "rate-limiter-distributed",
    title: "Design a Distributed Rate Limiter",
    track: "hld",
    summary: "Enforcing limits consistently across many servers.",
  },
  {
    slug: "chat-application",
    title: "Design a Chat Application",
    track: "hld",
    summary: "Real-time delivery, presence, and message persistence at scale.",
  },
  {
    slug: "news-feed",
    title: "Design a News Feed",
    track: "hld",
    summary: "Fan-out strategies for a social feed under heavy read load.",
  },
  {
    slug: "notification-system",
    title: "Design a Notification System",
    track: "hld",
    summary: "Multi-channel delivery, retries, and user preferences at scale.",
  },
  {
    slug: "search-autocomplete",
    title: "Design a Search Autocomplete",
    track: "hld",
    summary: "Low-latency prefix matching and ranking for typeahead search.",
  },
  {
    slug: "ride-sharing-app",
    title: "Design a Ride-Sharing App",
    track: "hld",
    summary: "Matching riders and drivers in real time with geospatial indexing.",
  },
  {
    slug: "video-streaming-service",
    title: "Design a Video Streaming Service",
    track: "hld",
    summary: "Encoding pipelines, CDN delivery, and adaptive bitrate streaming.",
  },
  {
    slug: "distributed-file-storage",
    title: "Design a Distributed File Storage System",
    track: "hld",
    summary: "Chunking, replication, and metadata management at Dropbox scale.",
  },
  {
    slug: "web-crawler",
    title: "Design a Web Crawler",
    track: "hld",
    summary: "Politeness, deduplication, and frontier management at scale.",
  },
  {
    slug: "payment-system",
    title: "Design a Payment System",
    track: "hld",
    summary: "Idempotency, consistency, and reconciliation for money movement.",
  },
  {
    slug: "key-value-store",
    title: "Design a Key-Value Store",
    track: "hld",
    summary: "Partitioning, replication, and tunable consistency, DynamoDB-style.",
  },
  {
    slug: "distributed-cache",
    title: "Design a Distributed Cache",
    track: "hld",
    summary: "Sharding, replication, and eviction for a Redis/Memcached-style cache.",
  },
];

export function getSystemDesignTopic(
  track: SystemDesignTrack,
  slug: string,
): SystemDesignTopicMeta | undefined {
  return systemDesignTopics.find(
    (topic) => topic.track === track && topic.slug === slug,
  );
}

export function getSystemDesignTopicsByTrack(
  track: SystemDesignTrack,
): SystemDesignTopicMeta[] {
  return systemDesignTopics.filter((topic) => topic.track === track);
}
