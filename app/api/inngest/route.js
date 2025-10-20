import { serve } from "inngest/next";
import arcjet, { detectBot } from "@arcjet/next";

import { inngest } from "@/lib/inngest/client";
import {
  checkBudgetAlerts,
  generateMonthlyReports,
  processRecurringTransaction,
  triggerRecurringTransactions,
} from "@/lib/inngest/function";

export const runtime = "nodejs";

const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    detectBot({
      mode: "LIVE",
      allow: [
        "CATEGORY:SEARCH_ENGINE", // Google, Bing, etc
        "GO_HTTP", // For Inngest
      ],
    }),
  ],
});

const handlers = serve({
  client: inngest,
  functions: [
    processRecurringTransaction,
    triggerRecurringTransactions,
    generateMonthlyReports,
    checkBudgetAlerts,
  ],
});

export async function GET(req, ctx) {
  const decision = await aj.protect(req);
  if (decision.isDenied()) {
    return Response.json({ error: "Request blocked" }, { status: 403 });
  }
  return handlers.GET(req, ctx);
}

export async function POST(req, ctx) {
  const decision = await aj.protect(req);
  if (decision.isDenied()) {
    return Response.json({ error: "Request blocked" }, { status: 403 });
  }
  return handlers.POST(req, ctx);
}

export async function PUT(req, ctx) {
  const decision = await aj.protect(req);
  if (decision.isDenied()) {
    return Response.json({ error: "Request blocked" }, { status: 403 });
  }
  return handlers.PUT(req, ctx);
}
