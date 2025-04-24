# **Whisperer – Transcribe Audio with Hugging Face Whisper API**
# [Try Whisperer Live](https://chatbotw3.vercel.app/)

---
## Overview:
<img width="1408" alt="Screenshot 2025-04-25 at 4 54 49 AM" src="https://github.com/user-attachments/assets/40d5b426-316a-48ca-bf48-e4c075856fd8" />


---
[GitHub Repository Link](https://github.com/BeingSeight/whisperer)

## **Introduction**

Welcome to **Whisperer**! This lightweight app lets you upload audio files and get back text transcriptions with zero local models—leveraging the free Hugging Face Whisper Inference API. No signup, no heavy downloads, just a simple, privacy-preserving transcription bot built with Next.js, TypeScript, and Tailwind CSS.

---

## **Features**

- **Effortless Transcription**: Upload `.wav` or `.mp3` files and get text back instantly.  
- **No Local Models**: Uses Hugging Face’s hosted Whisper, so no need to download gigabytes of data.  
- **Privacy-Friendly**: No user accounts or data storage—your audio and text stay in your session.  
- **Modern Stack**: Built with Next.js App Router, TypeScript for safety, and Tailwind CSS for styling.  
- **Easy Deployment**: Deployed on Vercel with a single command.

---

## **How It Works**

1. **Frontend**  
   - Built using **Next.js**, **TypeScript**, and **Tailwind CSS**.  
   - Presents a file picker and displays the returned transcription in a clean UI.  
2. **API Route**  
   - Receives the uploaded file in `src/app/api/transcribe/route.ts`.  
   - Calls the **Hugging Face Whisper API** (`openai/whisper-small`) with your token.  
   - Returns `{ text: "..." }` JSON to the frontend.  
3. **No Centralized Storage**  
   - No database or persistent storage—each request is ephemeral and privacy-first.  
4. **Deployment**  
   - Hosted on **Vercel**, leveraging serverless functions for the API route.

---

## **Tech Stack**

- **Next.js**: Framework for React apps with built-in API routes.  
- **TypeScript**: Strongly-typed code for reliability and auto-completion.  
- **Tailwind CSS**: Utility-first CSS for rapid styling.  
- **Hugging Face Whisper API**: Free hosted inference for speech-to-text.  
- **Vercel**: Zero-config deployment and global CDN.

---

## **How I Built It**

1. **Project Setup**  
   - `npx create-next-app@latest` with TypeScript, Tailwind, App Router.  
   - Installed `dotenv` to manage the API token.  
2. **Layout & Styling**  
   - Configured `globals.css`, `tailwind.config.js`, and the Inter font in `layout.tsx`.  
3. **Frontend Development**  
   - Created `src/app/page.tsx` with a file input, upload button, and result box.  
   - Used React hooks (`useState`) and client-side rendering (`'use client'`).  
4. **API Integration**  
   - Added `src/app/api/transcribe/route.ts`.  
   - Fetched audio bytes and forwarded to `https://api-inference.huggingface.co/models/openai/whisper-small`.  
   - Returned transcription JSON.  
5. **Testing & Deployment**  
   - Tested locally with `npm run dev`.  
   - Pushed to GitHub and deployed on Vercel, setting `HF_API_TOKEN` in environment variables.

---

## **Why This Project Stands Out**

Whisperer demonstrates how to build a **serverless**, **privacy-first** transcription service without incurring hosting costs for large models. By leveraging Hugging Face’s community inference endpoints, users enjoy high-quality speech-to-text without any local resource burden.

---

## **Installation & Setup**

To run Whisperer locally:

1. **Clone** the repository:
```bash
  git clone https://github.com/BeingSeight/whisperer.git
  cd whisperer
```
2. Install dependencies:
```bash
  npm install
```
3. Configure your Hugging Face token:
Create .env.local:
``` env
  HF_API_TOKEN="hf_your_token_here"
```
4. Start the development server:
``` bash
  npm run dev
```
5. Open http://localhost:3000 in your browser.

---
## Deployment
1. Commit all changes (exclude .env.local) and push to GitHub.
2. Add the HF_API_TOKEN env var in your Vercel project settings.
3. Deploy—Vercel will build and serve your app, with the API route calling Hugging Face.

---
## Acknowledgments
Hugging Face for providing free inference endpoints for Whisper models.

Next.js, TypeScript, and Tailwind CSS for an amazing developer experience.

Feel free to explore, fork, and contribute!
