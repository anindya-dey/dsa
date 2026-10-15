---
date: 2026-10-14
topic: ai-ml-vertical
status: proposed
---

# Proposed Fourth Vertical: AI/ML Systems

A proposed addition to the site, recorded here so the decision and the
scope are explicit. Nothing in this document is added to the catalog yet;
it is a specification for a future batch (see `content-batches.md`).

## Why (and why scoped this way)

AI/ML has moved into lead- and principal-level system-design loops: model
serving, retrieval-augmented generation, feature platforms, experimentation,
and ML infrastructure. The site already carries three ML-adjacent HLD case
studies (`recommendation-system`, `fraud-detection`, `ad-click-aggregator`)
with no fundamentals behind them.

The scope is deliberately the **engineering and systems side** of AI/ML, in
the same voice as the rest of the site. It is **not** a machine-learning
theory track: no gradient-descent math, no backpropagation derivations, no
transformer internals beyond what a system designer must reason about. Those
belong to a different audience and would dilute the "explain it completely,
then stop" bar the site holds.

Track name: **AI/ML Systems**. Suggested route prefix: `/ai-ml`.

## Level coverage

- Junior: fundamentals (lifecycle, offline vs online, metrics) and the
  simpler serving topics.
- Senior: serving, feature stores, vector search, RAG, MLOps.
- Lead: distributed training, model platforms, experimentation, cost and
  latency engineering at scale.
- Principal: platform design, governance, privacy, multi-tenant ML,
  organization-scale trade-offs, and the case studies.

## Track A — Fundamentals (20)

1. ML System Design Basics (the train → deploy → monitor lifecycle)
2. Supervised, Unsupervised & Reinforcement Learning (the system-designer's framing)
3. Offline vs Online Inference
4. Batch vs Real-Time Prediction
5. Training Data Pipelines (ETL for ML)
6. Data Labeling & Annotation
7. Data Versioning & Lineage
8. Feature Engineering Basics
9. Feature Stores
10. Embeddings & Vector Representations
11. Similarity Search & Approximate Nearest Neighbors (HNSW, IVF, product quantization)
12. Vector Databases
13. Evaluation Metrics for ML (precision/recall, ROC-AUC, NDCG, calibration)
14. Offline vs Online Evaluation
15. A/B Testing & Experimentation
16. Model Monitoring & Data Drift
17. Concept Drift & Retraining Strategies
18. Bias, Fairness & Explainability
19. Privacy-Preserving ML & Federated Learning
20. Responsible AI & Safety

## Track B — Serving & Inference (10)

1. Model Serving Architectures (real-time, batch, streaming)
2. Inference Optimization (quantization, pruning, distillation)
3. Batching & Latency (dynamic batching, tail latency)
4. GPU & Accelerator Management
5. Model Runtimes & Compilation (ONNX, TensorRT, vLLM)
6. Multi-Model Serving & Routing
7. Edge / On-Device Inference
8. Serverless Inference & Cold Starts
9. Model Caching & Warm Pools
10. Autoscaling for Inference

## Track C — GenAI / LLM Systems (12)

1. LLM Serving Basics (tokens, KV cache, context windows)
2. Prompt Engineering as a System Concern (versioning, templates)
3. Retrieval-Augmented Generation (RAG)
4. Chunking & Indexing Strategies
5. Fine-Tuning vs Prompting vs RAG
6. Parameter-Efficient Fine-Tuning (LoRA, adapters)
7. Agents & Tool Use
8. Guardrails & Output Validation
9. Evaluating LLM Systems (LLM-as-judge, hallucination detection)
10. Cost & Token Budget Management
11. Caching for LLMs (semantic cache, prompt cache)
12. LLM Gateways & Routing

## Track D — MLOps & Platform (11)

1. MLOps & CI/CD for Models
2. Model Registry & Versioning
3. Experiment Tracking
4. Reproducibility & Metadata
5. Distributed Training (data, model, and pipeline parallelism)
6. Hyperparameter Tuning at Scale
7. AutoML
8. Model Governance & Compliance (audit trails)
9. Cost Optimization for ML
10. Multi-Tenant ML Platforms
11. Feature/Model Backfills & Migrations

## Track E — Case Studies (HLD) (12)

1. Design a Recommendation System *(already in the HLD catalog)*
2. Design a RAG / Chat-With-Your-Docs System
3. Design a Semantic / Vector Search
4. Design a Model Serving Platform
5. Design a Feature Platform
6. Design a CTR / Ad Ranking System
7. Design a Content Moderation System
8. Design a Fraud Detection System *(already in the HLD catalog)*
9. Design an Ad Click Aggregator *(already in the HLD catalog)*
10. Design an LLM Gateway / Proxy
11. Design a Real-Time Anomaly Detection System
12. Design an ML Training Platform

## Track F — Low-Level Design (6)

1. Design a Feature Store (code-level)
2. Design a Model Registry (code-level)
3. Design a Tokenizer (BPE)
4. Design an Embedding Cache
5. Design a Vector Index (code-level)
6. Design a Feature Transform Pipeline

## Counts

- Fundamentals: 20
- Serving & Inference: 10
- GenAI / LLM Systems: 12
- MLOps & Platform: 11
- Case Studies (HLD): 12 (3 overlap existing HLD topics)
- Low-Level Design: 6
- **Total: 71 topics** (68 net-new, 3 shared with the existing HLD track).

## Delivery suggestion

Add as **Batch 6**, after the core DSA + System Design roadmap (batches
1-5) is complete, reusing the existing templates, grouping, and routing.
If the shared case studies stay in the System Design HLD track, they gain a
"Related concepts" link into the AI/ML fundamentals rather than being
duplicated.

## Open questions

- Is AI/ML a fourth top-level vertical, or a fourth track *inside* System
  Design? (The overlap of the three HLD case studies argues for the
  latter, but the GenAI depth argues for a top-level vertical.)
- Does the theory boundary hold for interviews, or do some principal rounds
  expect model-level reasoning (loss functions, training dynamics)?
