import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();
    const theFile = data.get("file");
    
    if (!theFile) {
      return new Response(JSON.stringify({ error: "No file provided" }), { 
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    
    const response = await fetch(
      "https://api-inference.huggingface.co/models/openai/whisper-large-v3",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`
        },
        body: theFile
      }
    );
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Hugging Face API error:", errorText);
      return new Response(JSON.stringify({ 
        error: `API Error: ${response.status} ${response.statusText}` 
      }), { 
        status: response.status,
        headers: { "Content-Type": "application/json" }
      });
    }
    
    const result = await response.json();
    
    return Response.json({
      output: {
        text: result.text || ""
      }
    });
  } catch (error) {
    console.error("Server error:", error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}