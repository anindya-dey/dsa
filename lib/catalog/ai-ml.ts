import type { AiMlTopicMeta, AiMlTrack } from "./types";

export const aiMlTrackTitles: Record<AiMlTrack, string> = {
  concepts: "ML Concepts",
  systems: "ML Systems",
};

export const aiMlTrackDescriptions: Record<AiMlTrack, string> = {
  concepts:
    "How the models actually work, conceptually — neural networks, architectures, and the ideas behind modern AI. Intuition and diagrams, not mathematics.",
  systems:
    "The engineering of ML: data, features, serving, evaluation, MLOps, and the GenAI-era machinery that turns models into products.",
};

export const aiMlTopics: AiMlTopicMeta[] = [
  // Systems — The Learning Problem
  {
    slug: "ml-system-design-basics",
    title: "ML System Design Basics",
    track: "systems",
    group: "The Learning Problem",
    summary: "The train → deploy → monitor lifecycle, and where systems engineering enters machine learning.",
  },
  {
    slug: "supervised-unsupervised-rl",
    title: "Supervised, Unsupervised & Reinforcement Learning",
    track: "systems",
    group: "The Learning Problem",
    summary: "The three learning families and what each asks of the data and the system.",
  },
  {
    slug: "offline-vs-online-inference",
    title: "Offline vs Online Inference",
    track: "systems",
    group: "The Learning Problem",
    summary: "Batch scoring of everything versus millisecond scoring of one request, and their opposite infrastructures.",
  },
  {
    slug: "batch-vs-real-time-prediction",
    title: "Batch vs Real-Time Prediction",
    track: "systems",
    group: "The Learning Problem",
    summary: "Scoring on a schedule versus scoring in the request path, and the feature freshness each implies.",
  },
  {
    slug: "training-data-pipelines",
    title: "Training Data Pipelines",
    track: "systems",
    group: "Data",
    summary: "The ETL-for-ML: collecting, joining, and curating the examples a model learns from.",
  },
  {
    slug: "data-labeling-annotation",
    title: "Data Labeling & Annotation",
    track: "systems",
    group: "Data",
    summary: "Where ground truth comes from: humans, heuristics, and the weak-supervision machinery.",
  },
  {
    slug: "data-versioning-lineage",
    title: "Data Versioning & Lineage",
    track: "systems",
    group: "Data",
    summary: "Which data trained which model, reproducible after the fact.",
  },
  {
    slug: "feature-engineering-basics",
    title: "Feature Engineering Basics",
    track: "systems",
    group: "Data",
    summary: "Turning raw events into model inputs, and the leakage traps that corrupt evaluation.",
  },
  {
    slug: "feature-stores",
    title: "Feature Stores",
    track: "systems",
    group: "Serving State",
    summary: "Precomputed model inputs, shared between training and serving, with the freshness contract.",
  },
  {
    slug: "embeddings-vector-representations",
    title: "Embeddings & Vector Representations",
    track: "systems",
    group: "Serving State",
    summary: "Meaning as geometry: representing items as vectors so similarity becomes distance.",
  },
  {
    slug: "similarity-search-ann",
    title: "Similarity Search & ANN",
    track: "systems",
    group: "Serving State",
    summary: "HNSW, IVF, and product quantization: finding nearest neighbors without comparing to all of them.",
  },
  {
    slug: "vector-databases",
    title: "Vector Databases",
    track: "systems",
    group: "Serving State",
    summary: "The store built for embeddings: ANN indexes, hybrid search, and filtered queries.",
  },
  {
    slug: "evaluation-metrics",
    title: "Evaluation Metrics for ML",
    track: "systems",
    group: "Evaluation & Operations",
    summary: "Precision, recall, ROC-AUC, NDCG, calibration: what each metric measures and when it lies.",
  },
  {
    slug: "offline-vs-online-evaluation",
    title: "Offline vs Online Evaluation",
    track: "systems",
    group: "Evaluation & Operations",
    summary: "Why a good offline metric does not guarantee a good product, and how the gap is measured.",
  },
  {
    slug: "ab-testing-experimentation",
    title: "A/B Testing & Experimentation",
    track: "systems",
    group: "Evaluation & Operations",
    summary: "Randomized experiments for models: assignment, guardrail metrics, and the traps that invalidate results.",
  },
  {
    slug: "model-monitoring-drift",
    title: "Model Monitoring & Data Drift",
    track: "systems",
    group: "Evaluation & Operations",
    summary: "Watching inputs and outputs for the shift that precedes every model regression.",
  },
  {
    slug: "concept-drift-retraining",
    title: "Concept Drift & Retraining",
    track: "systems",
    group: "Evaluation & Operations",
    summary: "When the relationship itself changes, and how fast the model must be replaced.",
  },
  {
    slug: "bias-fairness-explainability",
    title: "Bias, Fairness & Explainability",
    track: "systems",
    group: "Evaluation & Operations",
    summary: "Measuring disparate impact, and making a model's decisions legible to the people they affect.",
  },
  {
    slug: "privacy-preserving-ml",
    title: "Privacy-Preserving ML & Federated Learning",
    track: "systems",
    group: "Evaluation & Operations",
    summary: "Training and serving without centralizing raw data: differential privacy and federated learning.",
  },
  {
    slug: "responsible-ai-safety",
    title: "Responsible AI & Safety",
    track: "systems",
    group: "Evaluation & Operations",
    summary: "The engineering practices that keep a deployed model within acceptable behavior.",
  },
  {
    slug: "model-serving-architectures",
    title: "Model Serving Architectures",
    track: "systems",
    group: "Serving & Inference",
    summary: "How a trained model becomes an endpoint: the serving tier, its shapes, and its contracts.",
  },
  {
    slug: "inference-optimization",
    title: "Inference Optimization",
    track: "systems",
    group: "Serving & Inference",
    summary: "Quantization, pruning, and distillation: making a model cheaper without retraining from scratch.",
  },
  {
    slug: "batching-and-latency",
    title: "Batching & Latency",
    track: "systems",
    group: "Serving & Inference",
    summary: "Dynamic batching, the throughput/latency trade, and tail latency under a queue.",
  },
  {
    slug: "gpu-accelerator-management",
    title: "GPU & Accelerator Management",
    track: "systems",
    group: "Serving & Inference",
    summary: "Sharing scarce accelerators: scheduling, memory, and the utilization problem.",
  },
  {
    slug: "model-runtimes-compilation",
    title: "Model Runtimes & Compilation",
    track: "systems",
    group: "Serving & Inference",
    summary: "ONNX, TensorRT, and ahead-of-time compilation: turning a graph into fast kernels.",
  },
  {
    slug: "multi-model-serving-routing",
    title: "Multi-Model Serving & Routing",
    track: "systems",
    group: "Serving & Inference",
    summary: "Serving many models (or many versions) from one fleet, and routing each request to the right one.",
  },
  {
    slug: "edge-on-device-inference",
    title: "Edge / On-Device Inference",
    track: "systems",
    group: "Serving & Inference",
    summary: "Running the model on the phone: privacy, offline tolerance, and tiny footprints.",
  },
  {
    slug: "serverless-inference",
    title: "Serverless Inference & Cold Starts",
    track: "systems",
    group: "Serving & Inference",
    summary: "Scale-to-zero for models, and the multi-gigabyte cold start that fights it.",
  },
  {
    slug: "model-caching-warm-pools",
    title: "Model Caching & Warm Pools",
    track: "systems",
    group: "Serving & Inference",
    summary: "Keeping the right model loaded where it is needed, so no request pays the load cost.",
  },
  {
    slug: "autoscaling-inference",
    title: "Autoscaling for Inference",
    track: "systems",
    group: "Serving & Inference",
    summary: "Scaling a serving fleet on the right signal, when the unit of work is a slow, expensive request.",
  },
  {
    slug: "llm-serving",
    title: "LLM Serving Basics",
    track: "systems",
    group: "GenAI / LLM Systems",
    summary: "Tokens, the KV cache, and context windows: what makes serving an LLM different from serving a classifier.",
  },
  {
    slug: "prompt-engineering-systems",
    title: "Prompt Engineering as a System Concern",
    track: "systems",
    group: "GenAI / LLM Systems",
    summary: "Prompts as versioned artifacts: templates, evaluation, and the discipline of changing them safely.",
  },
  {
    slug: "rag",
    title: "Retrieval-Augmented Generation (RAG)",
    track: "systems",
    group: "GenAI / LLM Systems",
    summary: "Grounding generation in retrieved context: the retrieval/generation pipeline and where it fails.",
  },
  {
    slug: "chunking-indexing-strategies",
    title: "Chunking & Indexing Strategies",
    track: "systems",
    group: "GenAI / LLM Systems",
    summary: "How documents become retrievable chunks, and why chunking decides RAG's quality.",
  },
  {
    slug: "fine-tuning-vs-prompting-vs-rag",
    title: "Fine-Tuning vs Prompting vs RAG",
    track: "systems",
    group: "GenAI / LLM Systems",
    summary: "The three ways to change a model's behavior, their costs, and how to choose.",
  },
  {
    slug: "lora-peft",
    title: "Parameter-Efficient Fine-Tuning (LoRA)",
    track: "systems",
    group: "GenAI / LLM Systems",
    summary: "Adapting large models cheaply: adapters, LoRA, and serving many fine-tunes from one base.",
  },
  {
    slug: "agents-and-tool-use",
    title: "Agents & Tool Use",
    track: "systems",
    group: "GenAI / LLM Systems",
    summary: "Models that call tools and take multi-step actions: the loop, the sandbox, and the failure modes.",
  },
  {
    slug: "llm-guardrails-validation",
    title: "Guardrails & Output Validation",
    track: "systems",
    group: "GenAI / LLM Systems",
    summary: "Constrain and verify model outputs: schema enforcement, injection defense, and the refusal path.",
  },
  {
    slug: "evaluating-llm-systems",
    title: "Evaluating LLM Systems",
    track: "systems",
    group: "GenAI / LLM Systems",
    summary: "LLM-as-judge, groundedness checks, and the honest measurement of open-ended generation.",
  },
  {
    slug: "cost-token-budgets",
    title: "Cost & Token Budget Management",
    track: "systems",
    group: "GenAI / LLM Systems",
    summary: "Tokens are money: budgeting, routing, and the economics of context and generation.",
  },
  {
    slug: "llm-caching",
    title: "Caching for LLMs",
    track: "systems",
    group: "GenAI / LLM Systems",
    summary: "Prompt caching and semantic caching: reusing computation across requests.",
  },
  {
    slug: "llm-gateways",
    title: "LLM Gateways & Routing",
    track: "systems",
    group: "GenAI / LLM Systems",
    summary: "One front door for many models: routing, fallback, quotas, and observability.",
  },
  {
    slug: "mlops-cicd",
    title: "MLOps & CI/CD for Models",
    track: "systems",
    group: "MLOps & Platform",
    summary: "The pipeline that takes a training run to production, and keeps it reproducible.",
  },
  {
    slug: "model-registry",
    title: "Model Registry & Versioning",
    track: "systems",
    group: "MLOps & Platform",
    summary: "The catalog of models: versions, stages, metadata, and provenance.",
  },
  {
    slug: "experiment-tracking",
    title: "Experiment Tracking",
    track: "systems",
    group: "MLOps & Platform",
    summary: "Recording every training run's inputs, parameters, and results so they can be compared.",
  },
  {
    slug: "reproducibility-metadata",
    title: "Reproducibility & Metadata",
    track: "systems",
    group: "MLOps & Platform",
    summary: "Making a model rebuildable months later: seeds, environments, and the metadata that pins them.",
  },
  {
    slug: "distributed-training",
    title: "Distributed Training",
    track: "systems",
    group: "MLOps & Platform",
    summary: "Data, model, and pipeline parallelism: training a model that does not fit one machine.",
  },
  {
    slug: "hyperparameter-tuning",
    title: "Hyperparameter Tuning at Scale",
    track: "systems",
    group: "MLOps & Platform",
    summary: "Searching the training configuration space without wasting the compute budget.",
  },
  {
    slug: "automl",
    title: "AutoML",
    track: "systems",
    group: "MLOps & Platform",
    summary: "Automating model and pipeline selection, and where it actually helps.",
  },
  {
    slug: "model-governance-compliance",
    title: "Model Governance & Compliance",
    track: "systems",
    group: "MLOps & Platform",
    summary: "Audit trails, approval workflows, and the records regulators and reviewers ask for.",
  },
  {
    slug: "cost-optimization-ml",
    title: "Cost Optimization for ML",
    track: "systems",
    group: "MLOps & Platform",
    summary: "The training and serving bill: where it goes and how to spend less.",
  },
  {
    slug: "multi-tenant-ml-platforms",
    title: "Multi-Tenant ML Platforms",
    track: "systems",
    group: "MLOps & Platform",
    summary: "Sharing training and serving infrastructure across teams and customers, safely.",
  },
  {
    slug: "feature-model-backfills",
    title: "Feature/Model Backfills & Migrations",
    track: "systems",
    group: "MLOps & Platform",
    summary: "Recomputing history and migrating models without breaking production.",
  },
  {
    slug: "rag-chat-system",
    title: "Design a RAG / Chat-With-Your-Docs System",
    track: "systems",
    group: "Case Studies",
    summary: "A full retrieval-augmented assistant: ingestion, retrieval, generation, and evaluation.",
  },
  {
    slug: "semantic-vector-search",
    title: "Design a Semantic / Vector Search",
    track: "systems",
    group: "Case Studies",
    summary: "Meaning-based search at scale: embedding, indexing, hybrid ranking, and latency.",
  },
  {
    slug: "model-serving-platform",
    title: "Design a Model Serving Platform",
    track: "systems",
    group: "Case Studies",
    summary: "A multi-tenant platform that serves many models and versions reliably.",
  },
  {
    slug: "feature-platform",
    title: "Design a Feature Platform",
    track: "systems",
    group: "Case Studies",
    summary: "A feature store as a platform: ingestion, online/offline consistency, and governance.",
  },
  {
    slug: "ctr-ad-ranking",
    title: "Design a CTR / Ad Ranking System",
    track: "systems",
    group: "Case Studies",
    summary: "Predicting click-through at bidding time: features, latency, and calibration.",
  },
  {
    slug: "content-moderation",
    title: "Design a Content Moderation System",
    track: "systems",
    group: "Case Studies",
    summary: "Classifying user content at scale, with human review and appeal in the loop.",
  },
  {
    slug: "llm-gateway-system",
    title: "Design an LLM Gateway",
    track: "systems",
    group: "Case Studies",
    summary: "A production gateway in front of many models: routing, caching, quotas, and safety.",
  },
  {
    slug: "anomaly-detection-system",
    title: "Design a Real-Time Anomaly Detection System",
    track: "systems",
    group: "Case Studies",
    summary: "Spotting the unusual in a firehose, with low latency and a bounded false-positive budget.",
  },
  {
    slug: "ml-training-platform",
    title: "Design an ML Training Platform",
    track: "systems",
    group: "Case Studies",
    summary: "Orchestrating distributed training jobs, data, and GPUs for many teams.",
  },
  {
    slug: "feature-store-lld",
    title: "Design a Feature Store (Code-Level)",
    track: "systems",
    group: "Low-Level Design",
    summary: "The online/offline feature store as a library: interfaces, consistency, and lookups.",
  },
  {
    slug: "model-registry-lld",
    title: "Design a Model Registry (Code-Level)",
    track: "systems",
    group: "Low-Level Design",
    summary: "Versioning, metadata, and stage transitions as a code-level design.",
  },
  {
    slug: "tokenizer-lld",
    title: "Design a Tokenizer (BPE)",
    track: "systems",
    group: "Low-Level Design",
    summary: "Byte-pair encoding from scratch: vocabulary construction and encoding.",
  },
  {
    slug: "embedding-cache-lld",
    title: "Design an Embedding Cache",
    track: "systems",
    group: "Low-Level Design",
    summary: "Caching embeddings by content: keys, invalidation, and the model-era problem.",
  },
  {
    slug: "vector-index-lld",
    title: "Design a Vector Index (Code-Level)",
    track: "systems",
    group: "Low-Level Design",
    summary: "A minimal ANN index from scratch: build, search, and the recall/speed dial.",
  },
  {
    slug: "feature-transform-pipeline",
    title: "Design a Feature Transform Pipeline",
    track: "systems",
    group: "Low-Level Design",
    summary: "Composable feature transforms as code: definitions, execution, and consistency.",
  },

  // Concepts — (see below)
  // Concepts — Foundations of Learning
  { slug: "what-is-machine-learning", title: "What Machine Learning Is", track: "concepts", group: "Foundations of Learning", summary: "Learning a function from examples, and how it differs from writing rules." },
  { slug: "loss-functions-and-risk", title: "Loss Functions & Empirical Risk", track: "concepts", group: "Foundations of Learning", summary: "Scoring how wrong a prediction is, and why the choice of loss shapes everything." },
  { slug: "gradient-descent", title: "Gradient Descent", track: "concepts", group: "Foundations of Learning", summary: "Walking downhill on the loss surface: the core optimization loop, conceptually." },
  { slug: "overfitting-and-bias-variance", title: "Overfitting, Underfitting & Bias-Variance", track: "concepts", group: "Foundations of Learning", summary: "Memorizing vs. generalizing, and the trade-off at the heart of model choice." },
  { slug: "regularization", title: "Regularization", track: "concepts", group: "Foundations of Learning", summary: "Penalizing complexity to generalize better: L1, L2, dropout, and early stopping." },
  { slug: "train-validation-test", title: "Train, Validation & Test", track: "concepts", group: "Foundations of Learning", summary: "The three splits, why they must be separate, and cross-validation." },
  { slug: "curse-of-dimensionality", title: "The Curse of Dimensionality", track: "concepts", group: "Foundations of Learning", summary: "Why high-dimensional space behaves strangely, and what it means for models." },

  // Concepts — Classical Models
  { slug: "linear-and-logistic-regression", title: "Linear & Logistic Regression", track: "concepts", group: "Classical Models", summary: "The two simplest models, and why they remain baselines worth knowing." },
  { slug: "decision-trees-and-ensembles", title: "Decision Trees, Bagging & Random Forests", track: "concepts", group: "Classical Models", summary: "Splitting on features, and averaging many trees to reduce variance." },
  { slug: "gradient-boosting", title: "Gradient Boosting", track: "concepts", group: "Classical Models", summary: "Building an ensemble one corrective tree at a time: the tabular-data workhorse." },
  { slug: "support-vector-machines", title: "Support Vector Machines", track: "concepts", group: "Classical Models", summary: "Finding the widest separating margin, and the kernel trick, conceptually." },
  { slug: "clustering-and-knn", title: "Clustering & k-Nearest Neighbors", track: "concepts", group: "Classical Models", summary: "Grouping by similarity, and predicting from the nearest examples." },

  // Concepts — Neural Networks
  { slug: "perceptrons-and-mlps", title: "Perceptrons & Multilayer Perceptrons", track: "concepts", group: "Neural Networks", summary: "From a single neuron to stacked layers that learn non-linear functions." },
  { slug: "activation-functions", title: "Activation Functions", track: "concepts", group: "Neural Networks", summary: "Why non-linearity is essential, and the ReLU-era choices." },
  { slug: "backpropagation", title: "Backpropagation", track: "concepts", group: "Neural Networks", summary: "The chain rule, applied efficiently: how networks assign credit to weights." },
  { slug: "optimizers", title: "Optimizers: SGD, Momentum & Adam", track: "concepts", group: "Neural Networks", summary: "Smarter descent: momentum, adaptive learning rates, and why Adam dominates." },
  { slug: "normalization-and-initialization", title: "Normalization & Initialization", track: "concepts", group: "Neural Networks", summary: "BatchNorm, LayerNorm, and weight init: keeping deep networks trainable." },

  // Concepts — Architectures
  { slug: "convolutional-neural-networks", title: "Convolutional Neural Networks (CNN)", track: "concepts", group: "Architectures", summary: "Sliding filters that exploit spatial structure: the vision architecture." },
  { slug: "recurrent-neural-networks", title: "Recurrent Neural Networks (RNN)", track: "concepts", group: "Architectures", summary: "Networks with memory over sequences, and why they are hard to train." },
  { slug: "lstm-and-gru", title: "LSTMs & GRUs", track: "concepts", group: "Architectures", summary: "Gated recurrences that learn long-range dependencies in sequences." },
  { slug: "sequence-to-sequence", title: "Sequence-to-Sequence & Encoder–Decoder", track: "concepts", group: "Architectures", summary: "Mapping one sequence to another: translation, summarization, and their shape." },
  { slug: "attention-mechanism", title: "The Attention Mechanism", track: "concepts", group: "Architectures", summary: "Letting a model look back at the most relevant parts of its input." },
  { slug: "transformers", title: "Transformers", track: "concepts", group: "Architectures", summary: "Self-attention, multi-head, and positional encoding: the architecture behind modern AI." },
  { slug: "autoencoders", title: "Autoencoders", track: "concepts", group: "Architectures", summary: "Compressing to a bottleneck and reconstructing: representation learning and more." },
  { slug: "generative-adversarial-networks", title: "Generative Adversarial Networks (GANs)", track: "concepts", group: "Architectures", summary: "A generator and a discriminator in competition, and why training them is delicate." },
  { slug: "diffusion-models", title: "Diffusion Models", track: "concepts", group: "Architectures", summary: "Learning to denoise: the generative approach behind modern image synthesis." },
  { slug: "graph-neural-networks", title: "Graph Neural Networks", track: "concepts", group: "Architectures", summary: "Learning on graphs by passing messages between connected nodes." },
  { slug: "mixture-of-experts", title: "Mixture of Experts", track: "concepts", group: "Architectures", summary: "Scaling model capacity without scaling compute, by routing to expert sub-networks." },

  // Concepts — NLP
  { slug: "word-embeddings", title: "Word Embeddings", track: "concepts", group: "NLP", summary: "Words as vectors: how meaning became geometry, from Word2Vec onward." },
  { slug: "language-models-and-scaling", title: "Language Models & Scaling Laws", track: "concepts", group: "NLP", summary: "Predicting the next token, and the empirical laws behind bigger models." },
  { slug: "transfer-learning", title: "Transfer Learning", track: "concepts", group: "NLP", summary: "Pretrain once, adapt everywhere: why modern ML starts from a foundation model." },

  // Concepts — Computer Vision
  { slug: "image-classification", title: "Image Classification", track: "concepts", group: "Computer Vision", summary: "Assigning a label to an image: the vision task, and its evolution." },
  { slug: "object-detection-and-segmentation", title: "Object Detection & Segmentation", track: "concepts", group: "Computer Vision", summary: "Finding and outlining objects, from bounding boxes to per-pixel masks." },

  // Concepts — Speech & Multimodal
  { slug: "speech-recognition-and-synthesis", title: "Speech Recognition & Synthesis", track: "concepts", group: "Speech & Multimodal", summary: "Turning audio into text and text into audio, and the models that do it." },
  { slug: "vision-language-models", title: "Vision–Language Models", track: "concepts", group: "Speech & Multimodal", summary: "Models that connect images and text: CLIP, captioning, and multimodal LLMs." },

  // Concepts — Reinforcement Learning & Safety
  { slug: "reinforcement-learning-basics", title: "Reinforcement Learning Basics", track: "concepts", group: "Reinforcement Learning & Safety", summary: "Agents, environments, and rewards: learning from interaction rather than labels." },
  { slug: "rlhf", title: "Reinforcement Learning from Human Feedback (RLHF)", track: "concepts", group: "Reinforcement Learning & Safety", summary: "Aligning models to human preferences: the training method behind instruction-following LLMs." },
  { slug: "interpretability", title: "Interpretability", track: "concepts", group: "Reinforcement Learning & Safety", summary: "Understanding what a model learned, and why it made a decision." },
  { slug: "alignment-and-safety", title: "Alignment & Safety", track: "concepts", group: "Reinforcement Learning & Safety", summary: "Keeping capable models helpful, honest, and harmless, conceptually." },
];

export function getAiMlTopic(
  track: AiMlTrack,
  slug: string,
): AiMlTopicMeta | undefined {
  return aiMlTopics.find(
    (topic) => topic.track === track && topic.slug === slug,
  );
}

export function getAiMlTopicsByTrack(track: AiMlTrack): AiMlTopicMeta[] {
  return aiMlTopics.filter((topic) => topic.track === track);
}

export interface AiMlTopicGroup {
  group: string;
  topics: AiMlTopicMeta[];
}

export function getAiMlGroupsByTrack(track: AiMlTrack): AiMlTopicGroup[] {
  const groups: AiMlTopicGroup[] = [];
  for (const topic of getAiMlTopicsByTrack(track)) {
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
