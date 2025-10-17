import { seedTransactions } from "@/actions/seed";
import arcjet, { shield } from "@arcjet/next";

export const runtime = "nodejs";

const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    shield({
      mode: "LIVE",
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
