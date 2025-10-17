import { NextResponse } from "next/server";
import { clerkMiddleware } from "@clerk/nextjs/server";

// Removed Clerk from middleware to reduce size. Auth is enforced in layouts/pages.

export default clerkMiddleware(async (auth, req) => {
  // Lazy-load Arcjet to keep static edge bundle small and cache across invocations
  if (!globalThis.__aj) {
    const { default: arcjet, detectBot } = await import("@arcjet/next");
    globalThis.__aj = arcjet({
      key: process.env.ARCJET_KEY,
      // characteristics: ["userId"], // Track based on Clerk userId
      rules: [
        // Shield protection for content and security
        // shield({
        //   mode: "DRY_RUN",
        // }),
        detectBot({
          mode: "LIVE", // will block requests. Use "DRY_RUN" to log only
          allow: [
            "CATEGORY:SEARCH_ENGINE", // Google, Bing, etc
            "GO_HTTP", // For Inngest
            // See the full list at https://arcjet.com/bot-list
          ],
        }),
      ],
    });
  }
  const aj = globalThis.__aj;
  const decision = await aj.protect(req);
  if (decision.isDenied()) {
    return NextResponse.json({ error: "Request blocked" }, { status: 403 });
  }
  return NextResponse.next();
});

// Chain middlewares - ArcJet only

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
