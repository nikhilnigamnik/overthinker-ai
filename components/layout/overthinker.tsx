"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type React from "react";
import { useState } from "react";
import { Loader, AlertCircle } from "lucide-react";
import { useChat } from "@ai-sdk/react";
import { RenderIf } from "@/lib/render-if";
import { GithubLink } from "../ui/github-link";

export function Overthinker() {
  const { messages, input, setInput, handleSubmit, error, isLoading } = useChat(
    {
      api: "/api/generate",
    }
  );

  const [showResponse, setShowResponse] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setShowResponse(true);
    const currentInput = input;
    handleSubmit(e);
    setTimeout(() => setInput(currentInput), 0);
  };

  const handleClear = () => {
    setInput("");
    setShowResponse(false);
  };

  const getErrorMessage = (error: any): string => {
    if (!error) return "";

    let errorMessage = "Please try again!";

    try {
      if (error.message?.startsWith("{")) {
        const parsedError = JSON.parse(error.message);
        errorMessage = parsedError.error ?? errorMessage;
      } else {
        errorMessage = error.message ?? errorMessage;
      }
    } catch {
      errorMessage = error.message ?? errorMessage;
    }

    return `Sorry, I got lost in my own thoughts and couldn't generate a response. ${errorMessage}`;
  };

  const latestResponse =
    messages.filter((m) => m.role === "assistant").pop()?.content ?? "";

  return (
    <div className="py-16 h-[calc(100dvh-2px)] space-y-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-medium">OverthinkerAI</h1>
          <GithubLink />
        </div>
        <p className="text-muted-foreground">
          Turn your simple questions into dramatic, philosophical spirals.
          Because sometimes you need to externalize your inner anxious thoughts.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label htmlFor="input" className="block text-muted-foreground mb-2">
              What are you overthinking today?
            </label>
            <Input
              id="input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Should I quit my job?"
            />
          </div>

          <div className="flex gap-3">
            <Button type="submit" disabled={!input.trim() || isLoading}>
              {isLoading ? (
                <>
                  <Loader className="w-5 h-5 mr-2 animate-spin" />
                  Thinking...
                </>
              ) : (
                <>Overthink</>
              )}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={handleClear}
              disabled={!input.trim() && !showResponse}
            >
              Clear
            </Button>
          </div>
        </form>

        <RenderIf
          condition={showResponse && (!!latestResponse || Boolean(error))}
        >
          <RenderIf condition={Boolean(error)}>
            <div className="border p-4 bg-input/30">
              <div className="flex items-center space-x-3">
                <AlertCircle className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-muted-foreground leading-relaxed">
                    {getErrorMessage(error)}
                  </p>
                </div>
              </div>
            </div>
          </RenderIf>

          <RenderIf condition={!Boolean(error) && !!latestResponse}>
            <div className="border text-muted-foreground bg-input/30 p-4 leading-relaxed">
              <p className="leading-relaxed">{latestResponse}</p>
            </div>
          </RenderIf>
        </RenderIf>

        <div className="mt-8 fixed bottom-10 max-w-[800px]">
          <div>
            <h3 className="font-medium mb-2">Daily Overthinker</h3>
            <p className="text-muted-foreground italic">
              "What if the real question isn't whether you're overthinking, but
              whether you're thinking enough?"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
