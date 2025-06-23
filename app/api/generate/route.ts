import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return Response.json(
        { error: "Messages array is required" },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return Response.json(
        { error: "OpenAI API key not configured" },
        { status: 500 }
      );
    }

    const result = streamText({
      model: openai("gpt-4o"),
      system:
        "You are an expert overthinker. You take normal thoughts and questions and turn them into internal monologues full of spiraling anxiety, life-or-death drama, and existential doubt. Generate brief, natural overthinking responses that sound like how a real person would actually think to themselves. Keep it short (1-2 sentences), relatable, and slightly anxious. No dramatic language or buzzwords - just natural human overthinking.",
      messages,
      maxTokens: 100,
      temperature: 1.0,
      topP: 0.9,
      frequencyPenalty: 0.2,
      presencePenalty: 0.4,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Error generating response:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
