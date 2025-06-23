import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

export const rateLimiter = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "24 h"),
  analytics: true,
  prefix: "@upstash/ratelimit",
});

export function getClientIP(req: Request): string {
  return (
    req.headers.get("x-forwarded-for") ??
    req.headers.get("x-real-ip") ??
    "127.0.0.1"
  );
}

export async function checkRateLimit(ip: string) {
  return await rateLimiter.limit(ip);
}
