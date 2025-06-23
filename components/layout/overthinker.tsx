"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type React from "react";
import { useState } from "react";
import { Loader } from "lucide-react";
import { useChat } from "@ai-sdk/react";

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
    handleSubmit(e);
  };

  // Get the latest assistant message
  const latestResponse =
    messages.filter((m) => m.role === "assistant").pop()?.content ?? "";

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 space-y-16">
        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-medium mb-4">OverthinkerAI</h1>
          <p className="text-muted-foreground">
            Turn your simple questions into dramatic, philosophical spirals.
            Because sometimes you need to externalize your inner anxious
            thoughts.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Input Section */}
          <div className="backdrop-blur-sm">
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="input"
                  className="block text-muted-foreground mb-2"
                >
                  What are you overthinking today?
                </label>
                <Input
                  id="input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Should I go to this party? Should I text them back? Should I quit my job?"
                />
              </div>

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
            </form>
          </div>

          {/* Response Section */}
          {showResponse && (latestResponse || error) && (
            <div className="backdrop-blur-sm">
              <div className="border text-muted-foreground bg-input/30 p-4">
                <p className="leading-relaxed">
                  {error
                    ? "Sorry, I got lost in my own thoughts and couldn't generate a response. Please try again!"
                    : latestResponse}
                </p>
              </div>
            </div>
          )}

          <div className="mt-8 fixed bottom-10">
            <div>
              <h3 className="text-base font-medium mb-2">Daily Overthinker</h3>
              <p className="text-muted-foreground italic">
                "What if the real question isn't whether you're overthinking,
                but whether you're thinking enough?"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
