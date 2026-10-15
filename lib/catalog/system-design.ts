import type { SystemDesignTopicMeta, SystemDesignTrack } from "./types";

export const systemDesignTrackTitles: Record<SystemDesignTrack, string> = {
  fundamentals: "Fundamentals",
  lld: "Low-Level Design",
  hld: "High-Level Design",
  "ai-ml": "AI/ML Systems",
};

export const systemDesignTrackDescriptions: Record<SystemDesignTrack, string> = {
  fundamentals:
    "The building blocks every distributed system is made of — scalability, caching, consistency, and the vocabulary you need before designing anything bigger.",
  lld: "Object-oriented, code-level design for self-contained systems — class diagrams, design patterns, and a working sketch.",
  hld: "Build the components distributed systems are made of, then apply them in full case studies with trade-offs and capacity estimates.",
  "ai-ml":
    "The systems side of machine learning — data pipelines, features, serving, evaluation, and the GenAI-era machinery that turns models into products. Engineering, not theory.",
};

export const systemDesignTopics: SystemDesignTopicMeta[] = [
  // Fundamentals — Scalability & Performance
  {
    slug: "scalability",
    title: "Scalability",
    track: "fundamentals",
    group: "Scalability & Performance",
    summary: "Vertical vs. horizontal scaling and when each one breaks down.",
  },
  {
    slug: "capacity-planning-and-estimation",
    title: "Capacity Planning & Estimation",
    track: "fundamentals",
    group: "Scalability & Performance",
    summary: "Back-of-the-envelope math for storage, bandwidth, QPS, and machine counts.",
  },
  {
    slug: "latency-vs-throughput",
    title: "Latency vs. Throughput",
    track: "fundamentals",
    group: "Scalability & Performance",
    summary: "Why optimizing one can quietly hurt the other.",
  },
  {
    slug: "load-balancing",
    title: "Load Balancing",
    track: "fundamentals",
    group: "Scalability & Performance",
    summary: "Algorithms and layers for distributing traffic across servers.",
  },
  {
    slug: "caching",
    title: "Caching",
    track: "fundamentals",
    group: "Scalability & Performance",
    summary: "Cache placement, eviction policies, and invalidation strategies.",
  },
  {
    slug: "cdn",
    title: "Content Delivery Networks",
    track: "fundamentals",
    group: "Scalability & Performance",
    summary: "Edge caching and routing traffic closer to the user.",
  },

  // Fundamentals — Data & Storage
  {
    slug: "database-fundamentals",
    title: "Database Fundamentals",
    track: "fundamentals",
    group: "Data & Storage",
    summary: "Indexing, replication, sharding, and SQL vs. NoSQL trade-offs.",
  },
  {
    slug: "olap-vs-oltp",
    title: "OLAP vs. OLTP & Data Warehousing",
    track: "fundamentals",
    group: "Data & Storage",
    summary: "Transactional vs. analytical workloads, columnar stores, and data lakes.",
  },
  {
    slug: "object-storage",
    title: "Object Storage",
    track: "fundamentals",
    group: "Data & Storage",
    summary: "Blob storage, metadata services, and durability at S3-like scale.",
  },
  {
    slug: "search-and-inverted-index",
    title: "Search & Inverted Index",
    track: "fundamentals",
    group: "Data & Storage",
    summary: "Inverted indexes, tokenization, ranking, and full-text search engines.",
  },
  {
    slug: "geospatial-indexing",
    title: "Geospatial Indexing",
    track: "fundamentals",
    group: "Data & Storage",
    summary: "Geohash, quadtrees, and S2 for answering proximity queries at scale.",
  },
  {
    slug: "consistent-hashing",
    title: "Consistent Hashing",
    track: "fundamentals",
    group: "Data & Storage",
    summary: "Distributing keys across nodes without a full remap on resize.",
  },
  {
    slug: "stream-vs-batch-processing",
    title: "Stream vs. Batch Processing",
    track: "fundamentals",
    group: "Data & Storage",
    summary: "Windowing, watermarks, and exactly-once semantics in data pipelines.",
  },

  // Fundamentals — Communication & APIs
  {
    slug: "networking-basics",
    title: "Networking Basics",
    track: "fundamentals",
    group: "Communication & APIs",
    summary: "DNS, TCP/UDP, HTTP/HTTPS, and WebSockets — the layers underneath everything.",
  },
  {
    slug: "proxies",
    title: "Proxies",
    track: "fundamentals",
    group: "Communication & APIs",
    summary: "Forward proxies vs. reverse proxies and what each one is for.",
  },
  {
    slug: "api-design",
    title: "API Design",
    track: "fundamentals",
    group: "Communication & APIs",
    summary: "REST, GraphQL, gRPC, and idempotency in practice.",
  },
  {
    slug: "serialization-and-schema-evolution",
    title: "Serialization & Schema Evolution",
    track: "fundamentals",
    group: "Communication & APIs",
    summary: "Protobuf/Avro, and keeping producers and consumers compatible over time.",
  },
  {
    slug: "api-gateway-and-service-mesh",
    title: "API Gateway & Service Mesh",
    track: "fundamentals",
    group: "Communication & APIs",
    summary: "Centralized routing, auth, and observability for service-to-service traffic.",
  },
  {
    slug: "message-queues-and-pubsub",
    title: "Message Queues & Pub/Sub",
    track: "fundamentals",
    group: "Communication & APIs",
    summary: "Decoupling producers and consumers with queues and topics.",
  },
  {
    slug: "idempotency-and-exactly-once",
    title: "Idempotency & Exactly-Once Delivery",
    track: "fundamentals",
    group: "Communication & APIs",
    summary: "Idempotency keys, deduplication, and why at-least-once is the usual reality.",
  },

  // Fundamentals — Distributed Systems
  {
    slug: "cap-theorem-and-consistency-models",
    title: "CAP Theorem & Consistency Models",
    track: "fundamentals",
    group: "Distributed Systems",
    summary: "Strong vs. eventual consistency, and what CAP actually constrains.",
  },
  {
    slug: "consensus-and-leader-election",
    title: "Consensus & Leader Election",
    track: "fundamentals",
    group: "Distributed Systems",
    summary: "Raft, Paxos, quorums, and how a cluster agrees on a single leader.",
  },
  {
    slug: "clock-synchronization-and-logical-time",
    title: "Clock Synchronization & Logical Time",
    track: "fundamentals",
    group: "Distributed Systems",
    summary: "NTP, Lamport clocks, and vector clocks for ordering events across machines.",
  },
  {
    slug: "multi-region-and-active-active",
    title: "Multi-Region & Active-Active",
    track: "fundamentals",
    group: "Distributed Systems",
    summary: "Replication topology, conflict resolution, and failover across regions.",
  },
  {
    slug: "distributed-transactions",
    title: "Distributed Transactions",
    track: "fundamentals",
    group: "Distributed Systems",
    summary: "Two-phase commit, the saga pattern, and the transactional outbox.",
  },
  {
    slug: "event-sourcing-and-cqrs",
    title: "Event Sourcing & CQRS",
    track: "fundamentals",
    group: "Distributed Systems",
    summary: "Storing state as an event log and separating read from write models.",
  },
  {
    slug: "backpressure-and-flow-control",
    title: "Backpressure & Flow Control",
    track: "fundamentals",
    group: "Distributed Systems",
    summary: "Keeping producers from overwhelming slower consumers without dropping work.",
  },
  {
    slug: "microservices-vs-monolith",
    title: "Microservices vs. Monolith",
    track: "fundamentals",
    group: "Distributed Systems",
    summary: "The real trade-offs behind splitting a system into services.",
  },

  // Fundamentals — Reliability & Operations
  {
    slug: "availability-and-reliability",
    title: "Availability & Reliability",
    track: "fundamentals",
    group: "Reliability & Operations",
    summary: "Replication, failover, and designing for component failure.",
  },
  {
    slug: "reliability-engineering",
    title: "Reliability Engineering (SLOs & Error Budgets)",
    track: "fundamentals",
    group: "Reliability & Operations",
    summary: "Defining SLOs and SLIs, spending error budgets, and running incident response.",
  },
  {
    slug: "observability",
    title: "Observability",
    track: "fundamentals",
    group: "Reliability & Operations",
    summary: "Logs, metrics, and tracing — and how they catch what tests don't.",
  },
  {
    slug: "rate-limiting",
    title: "Rate Limiting",
    track: "fundamentals",
    group: "Reliability & Operations",
    summary: "Token bucket, leaky bucket, and sliding window limiting strategies.",
  },
  {
    slug: "concurrency-and-parallelism",
    title: "Concurrency & Parallelism",
    track: "fundamentals",
    group: "Reliability & Operations",
    summary: "Threads, locks, and race conditions: what happens when two requests touch the same data.",
  },

  // Fundamentals — Security
  {
    slug: "auth-basics",
    title: "Authentication & Authorization Basics",
    track: "fundamentals",
    group: "Security",
    summary: "Sessions, tokens, and OAuth at the level a system designer needs.",
  },
  {
    slug: "security-fundamentals",
    title: "Security Fundamentals",
    track: "fundamentals",
    group: "Security",
    summary: "TLS, encryption at rest and in transit, secrets management, and authz models.",
  },
  {
    slug: "multi-tenancy-and-data-residency",
    title: "Multi-Tenancy & Data Residency",
    track: "fundamentals",
    group: "Security",
    summary: "Isolating tenant data and meeting rules about where it may physically live.",
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
  {
    slug: "movie-ticket-booking",
    title: "Design a Movie Ticket Booking",
    track: "lld",
    summary: "Seat holds, concurrency, and locking for a ticketing system.",
  },
  {
    slug: "task-scheduler-lld",
    title: "Design a Task Scheduler (Code-Level)",
    track: "lld",
    summary: "Priority queues, dependencies, and retries in a single-process scheduler.",
  },
  {
    slug: "in-memory-file-system",
    title: "Design an In-Memory File System",
    track: "lld",
    summary: "Composite tree structure, path resolution, and directory operations.",
  },
  {
    slug: "splitwise",
    title: "Design Splitwise (Expense Sharing)",
    track: "lld",
    summary: "Modeling debts as a graph and settling balances with minimal transfers.",
  },
  {
    slug: "tic-tac-toe",
    title: "Design Tic-Tac-Toe / Snake & Ladder",
    track: "lld",
    summary: "Compact game state machines with win detection and turn management.",
  },
  {
    slug: "atm",
    title: "Design an ATM",
    track: "lld",
    summary: "State machine, cash dispensation, and transaction safety.",
  },
  {
    slug: "hotel-management-system",
    title: "Design a Hotel Management System",
    track: "lld",
    summary: "Rooms, reservations, pricing, and availability across a date range.",
  },
  {
    slug: "car-rental-system",
    title: "Design a Car Rental System",
    track: "lld",
    summary: "Inventory, reservations, and dynamic pricing for a rental fleet.",
  },
  {
    slug: "text-editor-undo-redo",
    title: "Design a Text Editor (Undo/Redo)",
    track: "lld",
    summary: "Command pattern, edit history, and reversible operations.",
  },
  {
    slug: "pubsub-broker-lld",
    title: "Design a Pub/Sub Broker (Code-Level)",
    track: "lld",
    summary: "In-memory topics, subscribers, and delivery as a reusable library.",
  },
  {
    slug: "bank-ledger-system",
    title: "Design a Bank / Ledger System",
    track: "lld",
    summary: "Double-entry accounting, transactions, and concurrency-safe balances.",
  },
  {
    slug: "shopping-cart",
    title: "Design an Online Shopping Cart",
    track: "lld",
    summary: "Line items, pricing rules, discounts, and inventory holds.",
  },

  // High-Level Design — Infrastructure Components
  {
    slug: "load-balancer-system",
    title: "Design a Load Balancer",
    track: "hld",
    group: "Infrastructure Components",
    summary: "Health checks, algorithms, and consistent routing at the edge.",
  },
  {
    slug: "cdn-service",
    title: "Design a CDN",
    track: "hld",
    group: "Infrastructure Components",
    summary: "Edge caching, request routing, and cache invalidation across PoPs.",
  },
  {
    slug: "distributed-id-generator",
    title: "Design a Distributed ID Generator",
    track: "hld",
    group: "Infrastructure Components",
    summary: "Snowflake-style unique IDs: ordering, clock skew, and coordination.",
  },
  {
    slug: "distributed-message-queue",
    title: "Design a Distributed Message Queue",
    track: "hld",
    group: "Infrastructure Components",
    summary: "Building the broker itself: partitions, replication, and consumer groups.",
  },
  {
    slug: "distributed-cache",
    title: "Design a Distributed Cache",
    track: "hld",
    group: "Infrastructure Components",
    summary: "Sharding, replication, and eviction for a Redis/Memcached-style cache.",
  },
  {
    slug: "key-value-store",
    title: "Design a Key-Value Store",
    track: "hld",
    group: "Infrastructure Components",
    summary: "Partitioning, replication, and tunable consistency, DynamoDB-style.",
  },
  {
    slug: "object-storage-system",
    title: "Design S3 / Object Storage",
    track: "hld",
    group: "Infrastructure Components",
    summary: "Durable, scalable blob storage with a metadata service and erasure coding.",
  },
  {
    slug: "distributed-file-storage",
    title: "Design a Distributed File Storage System",
    track: "hld",
    group: "Infrastructure Components",
    summary: "Chunking, replication, and metadata management at Dropbox scale.",
  },
  {
    slug: "metrics-monitoring-system",
    title: "Design a Metrics & Monitoring System",
    track: "hld",
    group: "Infrastructure Components",
    summary: "Time-series ingestion, aggregation, and alerting, Prometheus-style.",
  },
  {
    slug: "log-aggregation-system",
    title: "Design a Log Aggregation System",
    track: "hld",
    group: "Infrastructure Components",
    summary: "Collecting, indexing, and querying logs across a fleet, ELK-style.",
  },
  {
    slug: "web-crawler",
    title: "Design a Web Crawler",
    track: "hld",
    group: "Infrastructure Components",
    summary: "Politeness, deduplication, and frontier management at scale.",
  },
  {
    slug: "search-autocomplete",
    title: "Design a Search Autocomplete",
    track: "hld",
    group: "Infrastructure Components",
    summary: "Low-latency prefix matching and ranking for typeahead search.",
  },

  // High-Level Design — Product Case Studies
  {
    slug: "url-shortener",
    title: "Design a URL Shortener (System-Level)",
    track: "hld",
    group: "Product Case Studies",
    summary: "TinyURL at scale: storage, caching, and redirect latency.",
  },
  {
    slug: "rate-limiter-distributed",
    title: "Design a Distributed Rate Limiter",
    track: "hld",
    group: "Product Case Studies",
    summary: "Enforcing limits consistently across many servers.",
  },
  {
    slug: "chat-application",
    title: "Design a Chat Application",
    track: "hld",
    group: "Product Case Studies",
    summary: "Real-time delivery, presence, and message persistence at scale.",
  },
  {
    slug: "news-feed",
    title: "Design a News Feed",
    track: "hld",
    group: "Product Case Studies",
    summary: "Fan-out strategies for a social feed under heavy read load.",
  },
  {
    slug: "notification-system",
    title: "Design a Notification System",
    track: "hld",
    group: "Product Case Studies",
    summary: "Multi-channel delivery, retries, and user preferences at scale.",
  },
  {
    slug: "ride-sharing-app",
    title: "Design a Ride-Sharing App",
    track: "hld",
    group: "Product Case Studies",
    summary: "Matching riders and drivers in real time with geospatial indexing.",
  },
  {
    slug: "video-streaming-service",
    title: "Design a Video Streaming Service",
    track: "hld",
    group: "Product Case Studies",
    summary: "Encoding pipelines, CDN delivery, and adaptive bitrate streaming.",
  },
  {
    slug: "payment-system",
    title: "Design a Payment System",
    track: "hld",
    group: "Product Case Studies",
    summary: "Idempotency, consistency, and reconciliation for money movement.",
  },
  {
    slug: "distributed-job-scheduler",
    title: "Design a Distributed Job Scheduler",
    track: "hld",
    group: "Product Case Studies",
    summary: "Cron at scale: reliable dispatch, retries, and worker coordination.",
  },
  {
    slug: "collaborative-editing",
    title: "Design Google Docs (Collaborative Editing)",
    track: "hld",
    group: "Product Case Studies",
    summary: "Real-time multi-user editing with operational transforms or CRDTs.",
  },
  {
    slug: "google-maps",
    title: "Design Google Maps",
    track: "hld",
    group: "Product Case Studies",
    summary: "Routing, map tiles, and location updates at global scale.",
  },
  {
    slug: "stock-exchange",
    title: "Design a Stock Exchange",
    track: "hld",
    group: "Product Case Studies",
    summary: "A matching engine with strict ordering and low-latency guarantees.",
  },
  {
    slug: "e-commerce-flash-sale",
    title: "Design an E-commerce / Flash Sale",
    track: "hld",
    group: "Product Case Studies",
    summary: "Inventory consistency, idempotent checkout, and hot-key contention.",
  },
  {
    slug: "proximity-service",
    title: "Design a Proximity Service",
    track: "hld",
    group: "Product Case Studies",
    summary: "Nearby search over a geospatial index, Yelp-style.",
  },
  {
    slug: "video-conferencing",
    title: "Design Zoom / Video Conferencing",
    track: "hld",
    group: "Product Case Studies",
    summary: "Real-time audio/video mixing and selective forwarding for many participants.",
  },
  {
    slug: "leaderboard",
    title: "Design a Leaderboard",
    track: "hld",
    group: "Product Case Studies",
    summary: "Real-time ranking at scale with sorted sets and periodic snapshots.",
  },
  {
    slug: "recommendation-system",
    title: "Design a Recommendation System",
    track: "hld",
    group: "Product Case Studies",
    summary: "Candidate generation, ranking, and serving personalized feeds.",
  },
  {
    slug: "fraud-detection",
    title: "Design a Fraud Detection System",
    track: "hld",
    group: "Product Case Studies",
    summary: "Streaming feature extraction and low-latency scoring on transactions.",
  },
  {
    slug: "ad-click-aggregator",
    title: "Design an Ad Click Aggregator",
    track: "hld",
    group: "Product Case Studies",
    summary: "Exactly-once counting, deduplication, and windowed aggregation of clicks.",
  },
  {
    slug: "webhook-delivery",
    title: "Design a Webhook / Event Delivery System",
    track: "hld",
    group: "Product Case Studies",
    summary: "Reliable delivery, retries with backoff, ordering, and payload signing.",
  },
  {
    slug: "large-scale-migration",
    title: "Design a Large-Scale Migration (Strangler Fig)",
    track: "hld",
    group: "Product Case Studies",
    summary: "Moving a live monolith to new services, piece by piece, without downtime.",
  },

  // AI/ML — The Learning Problem
  {
    slug: "ml-system-design-basics",
    title: "ML System Design Basics",
    track: "ai-ml",
    group: "The Learning Problem",
    summary: "The train → deploy → monitor lifecycle, and where systems engineering enters machine learning.",
  },
  {
    slug: "supervised-unsupervised-rl",
    title: "Supervised, Unsupervised & Reinforcement Learning",
    track: "ai-ml",
    group: "The Learning Problem",
    summary: "The three learning families and what each asks of the data and the system.",
  },
  {
    slug: "offline-vs-online-inference",
    title: "Offline vs Online Inference",
    track: "ai-ml",
    group: "The Learning Problem",
    summary: "Batch scoring of everything versus millisecond scoring of one request, and their opposite infrastructures.",
  },
  {
    slug: "batch-vs-real-time-prediction",
    title: "Batch vs Real-Time Prediction",
    track: "ai-ml",
    group: "The Learning Problem",
    summary: "Scoring on a schedule versus scoring in the request path, and the feature freshness each implies.",
  },

  // AI/ML — Data
  {
    slug: "training-data-pipelines",
    title: "Training Data Pipelines",
    track: "ai-ml",
    group: "Data",
    summary: "The ETL-for-ML: collecting, joining, and curating the examples a model learns from.",
  },
  {
    slug: "data-labeling-annotation",
    title: "Data Labeling & Annotation",
    track: "ai-ml",
    group: "Data",
    summary: "Where ground truth comes from: humans, heuristics, and the weak-supervision machinery.",
  },
  {
    slug: "data-versioning-lineage",
    title: "Data Versioning & Lineage",
    track: "ai-ml",
    group: "Data",
    summary: "Which data trained which model, reproducible after the fact.",
  },
  {
    slug: "feature-engineering-basics",
    title: "Feature Engineering Basics",
    track: "ai-ml",
    group: "Data",
    summary: "Turning raw events into model inputs, and the leakage traps that corrupt evaluation.",
  },

  // AI/ML — Serving State
  {
    slug: "feature-stores",
    title: "Feature Stores",
    track: "ai-ml",
    group: "Serving State",
    summary: "Precomputed model inputs, shared between training and serving, with the freshness contract.",
  },
  {
    slug: "embeddings-vector-representations",
    title: "Embeddings & Vector Representations",
    track: "ai-ml",
    group: "Serving State",
    summary: "Meaning as geometry: representing items as vectors so similarity becomes distance.",
  },
  {
    slug: "similarity-search-ann",
    title: "Similarity Search & ANN",
    track: "ai-ml",
    group: "Serving State",
    summary: "HNSW, IVF, and product quantization: finding nearest neighbors without comparing to all of them.",
  },
  {
    slug: "vector-databases",
    title: "Vector Databases",
    track: "ai-ml",
    group: "Serving State",
    summary: "The store built for embeddings: ANN indexes, hybrid search, and filtered queries.",
  },

  // AI/ML — Evaluation & Operations
  {
    slug: "evaluation-metrics",
    title: "Evaluation Metrics for ML",
    track: "ai-ml",
    group: "Evaluation & Operations",
    summary: "Precision, recall, ROC-AUC, NDCG, calibration: what each metric measures and when it lies.",
  },
  {
    slug: "offline-vs-online-evaluation",
    title: "Offline vs Online Evaluation",
    track: "ai-ml",
    group: "Evaluation & Operations",
    summary: "Why a good offline metric does not guarantee a good product, and how the gap is measured.",
  },
  {
    slug: "ab-testing-experimentation",
    title: "A/B Testing & Experimentation",
    track: "ai-ml",
    group: "Evaluation & Operations",
    summary: "Randomized experiments for models: assignment, guardrail metrics, and the traps that invalidate results.",
  },
  {
    slug: "model-monitoring-drift",
    title: "Model Monitoring & Data Drift",
    track: "ai-ml",
    group: "Evaluation & Operations",
    summary: "Watching inputs and outputs for the shift that precedes every model regression.",
  },
  {
    slug: "concept-drift-retraining",
    title: "Concept Drift & Retraining",
    track: "ai-ml",
    group: "Evaluation & Operations",
    summary: "When the relationship itself changes, and how fast the model must be replaced.",
  },
  {
    slug: "bias-fairness-explainability",
    title: "Bias, Fairness & Explainability",
    track: "ai-ml",
    group: "Evaluation & Operations",
    summary: "Measuring disparate impact, and making a model's decisions legible to the people they affect.",
  },
  {
    slug: "privacy-preserving-ml",
    title: "Privacy-Preserving ML & Federated Learning",
    track: "ai-ml",
    group: "Evaluation & Operations",
    summary: "Training and serving without centralizing raw data: differential privacy and federated learning.",
  },
  {
    slug: "responsible-ai-safety",
    title: "Responsible AI & Safety",
    track: "ai-ml",
    group: "Evaluation & Operations",
    summary: "The engineering practices that keep a deployed model within acceptable behavior.",
  },

  // AI/ML — Serving & Inference
  {
    slug: "model-serving-architectures",
    title: "Model Serving Architectures",
    track: "ai-ml",
    group: "Serving & Inference",
    summary: "How a trained model becomes an endpoint: the serving tier, its shapes, and its contracts.",
  },
  {
    slug: "inference-optimization",
    title: "Inference Optimization",
    track: "ai-ml",
    group: "Serving & Inference",
    summary: "Quantization, pruning, and distillation: making a model cheaper without retraining from scratch.",
  },
  {
    slug: "batching-and-latency",
    title: "Batching & Latency",
    track: "ai-ml",
    group: "Serving & Inference",
    summary: "Dynamic batching, the throughput/latency trade, and tail latency under a queue.",
  },
  {
    slug: "gpu-accelerator-management",
    title: "GPU & Accelerator Management",
    track: "ai-ml",
    group: "Serving & Inference",
    summary: "Sharing scarce accelerators: scheduling, memory, and the utilization problem.",
  },
  {
    slug: "model-runtimes-compilation",
    title: "Model Runtimes & Compilation",
    track: "ai-ml",
    group: "Serving & Inference",
    summary: "ONNX, TensorRT, and ahead-of-time compilation: turning a graph into fast kernels.",
  },
  {
    slug: "multi-model-serving-routing",
    title: "Multi-Model Serving & Routing",
    track: "ai-ml",
    group: "Serving & Inference",
    summary: "Serving many models (or many versions) from one fleet, and routing each request to the right one.",
  },
  {
    slug: "edge-on-device-inference",
    title: "Edge / On-Device Inference",
    track: "ai-ml",
    group: "Serving & Inference",
    summary: "Running the model on the phone: privacy, offline tolerance, and tiny footprints.",
  },
  {
    slug: "serverless-inference",
    title: "Serverless Inference & Cold Starts",
    track: "ai-ml",
    group: "Serving & Inference",
    summary: "Scale-to-zero for models, and the multi-gigabyte cold start that fights it.",
  },
  {
    slug: "model-caching-warm-pools",
    title: "Model Caching & Warm Pools",
    track: "ai-ml",
    group: "Serving & Inference",
    summary: "Keeping the right model loaded where it is needed, so no request pays the load cost.",
  },
  {
    slug: "autoscaling-inference",
    title: "Autoscaling for Inference",
    track: "ai-ml",
    group: "Serving & Inference",
    summary: "Scaling a serving fleet on the right signal, when the unit of work is a slow, expensive request.",
  },

  // AI/ML — GenAI / LLM Systems
  {
    slug: "llm-serving",
    title: "LLM Serving Basics",
    track: "ai-ml",
    group: "GenAI / LLM Systems",
    summary: "Tokens, the KV cache, and context windows: what makes serving an LLM different from serving a classifier.",
  },
  {
    slug: "prompt-engineering-systems",
    title: "Prompt Engineering as a System Concern",
    track: "ai-ml",
    group: "GenAI / LLM Systems",
    summary: "Prompts as versioned artifacts: templates, evaluation, and the discipline of changing them safely.",
  },
  {
    slug: "rag",
    title: "Retrieval-Augmented Generation (RAG)",
    track: "ai-ml",
    group: "GenAI / LLM Systems",
    summary: "Grounding generation in retrieved context: the retrieval/generation pipeline and where it fails.",
  },
  {
    slug: "chunking-indexing-strategies",
    title: "Chunking & Indexing Strategies",
    track: "ai-ml",
    group: "GenAI / LLM Systems",
    summary: "How documents become retrievable chunks, and why chunking decides RAG's quality.",
  },
  {
    slug: "fine-tuning-vs-prompting-vs-rag",
    title: "Fine-Tuning vs Prompting vs RAG",
    track: "ai-ml",
    group: "GenAI / LLM Systems",
    summary: "The three ways to change a model's behavior, their costs, and how to choose.",
  },
  {
    slug: "lora-peft",
    title: "Parameter-Efficient Fine-Tuning (LoRA)",
    track: "ai-ml",
    group: "GenAI / LLM Systems",
    summary: "Adapting large models cheaply: adapters, LoRA, and serving many fine-tunes from one base.",
  },
  {
    slug: "agents-and-tool-use",
    title: "Agents & Tool Use",
    track: "ai-ml",
    group: "GenAI / LLM Systems",
    summary: "Models that call tools and take multi-step actions: the loop, the sandbox, and the failure modes.",
  },
  {
    slug: "llm-guardrails-validation",
    title: "Guardrails & Output Validation",
    track: "ai-ml",
    group: "GenAI / LLM Systems",
    summary: "Constrain and verify model outputs: schema enforcement, injection defense, and the refusal path.",
  },
  {
    slug: "evaluating-llm-systems",
    title: "Evaluating LLM Systems",
    track: "ai-ml",
    group: "GenAI / LLM Systems",
    summary: "LLM-as-judge, groundedness checks, and the honest measurement of open-ended generation.",
  },
  {
    slug: "cost-token-budgets",
    title: "Cost & Token Budget Management",
    track: "ai-ml",
    group: "GenAI / LLM Systems",
    summary: "Tokens are money: budgeting, routing, and the economics of context and generation.",
  },
  {
    slug: "llm-caching",
    title: "Caching for LLMs",
    track: "ai-ml",
    group: "GenAI / LLM Systems",
    summary: "Prompt caching and semantic caching: reusing computation across requests.",
  },
  {
    slug: "llm-gateways",
    title: "LLM Gateways & Routing",
    track: "ai-ml",
    group: "GenAI / LLM Systems",
    summary: "One front door for many models: routing, fallback, quotas, and observability.",
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

export interface SystemDesignTopicGroup {
  group: string;
  topics: SystemDesignTopicMeta[];
}

export function getSystemDesignGroupsByTrack(
  track: SystemDesignTrack,
): SystemDesignTopicGroup[] {
  const groups: SystemDesignTopicGroup[] = [];

  for (const topic of getSystemDesignTopicsByTrack(track)) {
    const name = topic.group ?? "";
    let bucket = groups.find((entry) => entry.group === name);
    if (!bucket) {
      bucket = { group: name, topics: [] };
      groups.push(bucket);
    }
    bucket.topics.push(topic);
  }

  return groups;
}
