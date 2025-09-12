---
title: "Embedded AI Chat - RAG Chatbots"
excerpt: "Developed retrieval-augmented generation (RAG) chatbots integrated into local business websites to answer customer queries with context-aware responses."
collection: portfolio
---

## Embedded AI Chat - RAG-Enabled Chatbots for SMB Websites

**Timeline:** Fall 2024
**Type:** Personal Project

### Overview
Developed retrieval-augmented generation (RAG) chatbots integrated into local business websites to answer customer queries with context-aware responses, helping small and medium businesses provide 24/7 customer support.

### Technical Implementation
- **Data Pipeline:** Designed data pipelines in n8n to scrape business FAQs, policies, and product catalogs
- **Vector Storage:** Chunked and embedded documents using OpenAI embeddings and stored in Pinecone vector database
- **RAG Workflow:** Built retrieval-augmented generation workflows that combined vector search with GPT-4 completions
- **Context-Aware Responses:** Ensured chatbot answers were grounded in business-specific data for accuracy

### Tech Stack
- **Automation:** n8n (workflow automation)
- **AI/ML:** OpenAI API (GPT-4, text-embedding-ada-002)
- **Vector Database:** Pinecone
- **Backend:** Node.js, TypeScript
- **Integration:** Webhooks for real-time updates

### Key Features
- Real-time document ingestion and embedding
- Context-aware response generation
- Business-specific knowledge grounding
- Seamless website integration
- Scalable vector search capabilities

### Impact
Successfully demonstrated the ability to create intelligent, context-aware chatbots that could be deployed across multiple business websites, providing accurate customer support based on each business's specific information and policies.

[Read more about this project →](/posts/2024/09/embedded-ai-chat/)
