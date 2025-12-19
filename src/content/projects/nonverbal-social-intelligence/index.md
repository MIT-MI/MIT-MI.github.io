---
name: "Towards Socially-Intelligent Nonverbal Foundation Models"
description: "While today’s multimodal AI excel at language-based social tasks, can they understand humans without words?"
tags: []
people: [hengzhi, megan, paul]
publication: {
    venue: "arXiv preprint",
    link: "https://arxiv.org/abs/2502.16671"
}
image: "./cover.png"
---

## Abstract
If we want AI to engage with us naturally—in classrooms, therapy, eldercare, and beyond—it needs to understand us, with or without words. While today’s multimodal AI excel at language-based social tasks, **can they understand humans without words?**

In this project, we aim to address a limitation in current works in artificial social reasoning, which all rely on language-only, or language-dominant approaches to benchmark and training models, resulting in systems that are improving in verbal communication but struggle with nonverbal social understanding. To address this limitation, we tap into a novel source of data rich in nonverbal and social interactions – mime videos. 

Why mime videos? Mimes refer to the art of expression through gesture and movement without spoken words, requiring the AI to interpret expressive and nuanced gestures, emotions, and intent without relying on language. Prior works have shown that mime understanding correlates with causal reasoning, working memory, and theory of mind capabilities. Thus, mimes present unique challenges and opportunities in examining **non-verbal social intelligence** in current AI models.

We contribute a new dataset called **MimeQA**, a video question-answering dataset consisting of mime videos. Our analysis of state-of-the-art multimodal large language models reveal that they exhibit low performance, often failing to ground imagined objects and over-rely on the text prompt while ignoring subtle nonverbal interactions. 

We release our data resources to inspire future work in foundation models that embody true social intelligence capable of interpreting non-verbal human interactions.

## Links
* [Data](https://github.com/MIT-MI/MimeQA)