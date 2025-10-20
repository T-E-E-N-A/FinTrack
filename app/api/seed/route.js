import { seedTransactions } from "@/actions/seed";
import arcjet, { detectBot } from "@arcjet/next";

export const runtime = "nodejs";

const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    detectBot({
      mode: "LIVE",
      allow: [
        "CATEGORY:SEARCH_ENGINE", // Google, Bing, etc
        "GO_HTTP", // Inngest/Go clients if any
      ],
    }),
  ],
});

export async function GET(req) {
  const decision = await aj.protect(req);
  if (decision.isDenied()) {
    return Response.json({ error: "Request blocked" }, { status: 403 });
  }

  const result = await seedTransactions();
  return Response.json(result);
}
