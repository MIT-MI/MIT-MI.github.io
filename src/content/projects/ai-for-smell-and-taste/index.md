---
name: "AI for Smell and Taste"
description: "SmellNet is a foundational step toward bringing olfactory perception into AI—and we believe it will unlock new applications across health, industry, and multisensory computing."
tags: []
people: [dewei, paul]
publication: {
    venue: "arXiv preprint",
    link: "https://arxiv.org/abs/2506.00239v1"
}
image: "./cover.png"
---

Advancements in AI have revolutionized how machines perceive and interact with the world. However, almost all current progress has been limited to the text, visual, and auditory modalities. Our group is revolutionizing  AI to perceive smell like humans can. Smell is crucial in environmental perception, social interaction, and regulating well-being. Similarly, AI that can recognize smell can enhance entertainment, gaming, and marketing and for quality control in the chemical, food and beverage, and manufacturing industries. More ambitiously, smell-based diagnostics can help in early disease detection, (e.g., COVID-19), and even ‘smelling’ hormones and indicators of emotional states, stress, and early prognosis of cancer. Undoubtedly, fundamental advances in AI for smell can immensely impact the world.

Of course, smell is a completely new data modality for AI, with virtually no progress compared to vision and language. We believe that large-scale data and modern AI models are the key to learning rich smell representations that enable robust sensing, transmission, and fusion with other sensory signals. This contrasts with prior work, which has relied on domain-specific feature engineering, small datasets, and simple classifiers. Our research introduces **SmellNet**, the first large-scale dataset of real-world smells collected using portable gas sensors across 50 food and plant-based substances (nuts, spices, herbs, fruits, and vegetables). With over 180,000 time steps and 50 hours of data, we train deep learning models that classify substances based on smell alone. Our approach includes novel temporal preprocessing (e.g., First-Order Temporal Differences) and cross-modal learning using high-resolution GC-MS data. We demonstrate real-time substance classification and validate our system with a practical case study: detecting allergens such as gluten or peanuts in food.

This data-driven approach enables robust smell classification under diverse real-world conditions and paves the way for AI systems that operate effectively outside controlled lab settings. **SmellNet** is a foundational step toward bringing olfactory perception into AI—and we believe it will unlock new applications across health, industry, and multisensory computing. All code and data are [openly available](https://github.com/MIT-MI/SmellNet), and we hope this work catalyzes a new wave of AI systems that can truly understand the world through smell.