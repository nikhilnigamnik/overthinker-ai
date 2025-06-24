import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { getClientIP, checkRateLimit } from "@/lib/rate-limit";
import { handleError } from "@/lib/response";

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const ip = getClientIP(req);

    const { success } = await checkRateLimit(ip);

    if (!success) {
      return handleError(
        "Even overthinking needs a timeout. Come back in a bit. Take it easy, man.",
        429
      );
    }

    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return handleError("Messages array is required", 400);
    }

    if (!process.env.OPENAI_API_KEY) {
      return handleError("OpenAI API key not configured", 500);
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
    return handleError("Internal server error", 500);
  }
}
