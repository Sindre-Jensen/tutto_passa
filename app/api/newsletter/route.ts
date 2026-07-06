import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required." }, { status: 400 });
    }

    const apiKey = process.env.BUTTONDOWN_API_KEY;
    const devMode = process.env.NEWSLETTER_DEV_MODE === "true";
    const isProduction = process.env.NODE_ENV === "production";

    if (!apiKey) {
      if (isProduction) {
        return NextResponse.json(
          { error: "Newsletter is not configured yet. Please try again later." },
          { status: 503 }
        );
      }
      if (!devMode) {
        return NextResponse.json(
          {
            error:
              "Newsletter not configured locally. Add BUTTONDOWN_API_KEY to .env.local or set NEWSLETTER_DEV_MODE=true.",
          },
          { status: 503 }
        );
      }
      return NextResponse.json({
        message: "Dev mode — email not saved. Configure Buttondown for real signups.",
      });
    }

    const forwarded = request.headers.get("x-forwarded-for");
    const ipAddress =
      forwarded?.split(",")[0]?.trim() ?? request.headers.get("x-real-ip") ?? undefined;

    const res = await fetch("https://api.buttondown.com/v1/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Token ${apiKey}`,
        "Content-Type": "application/json",
        "X-Buttondown-Collision-Behavior": "overwrite",
      },
      body: JSON.stringify({
        email_address: email,
        type: "regular",
        ...(ipAddress ? { ip_address: ipAddress } : {}),
      }),
    });

    if (!res.ok) {
      const errorBody = await res.json().catch(() => null);
      const errorCode =
        errorBody && typeof errorBody === "object" && "code" in errorBody
          ? String(errorBody.code)
          : null;

      // Already subscribed — treat as success for the visitor
      if (res.status === 409 || errorCode === "subscriber_already_exists") {
        return NextResponse.json({
          message: "Welcome aboard — slow living updates heading your way.",
        });
      }

      if (errorCode === "subscriber_blocked") {
        return NextResponse.json(
          {
            error:
              "Subscription could not be completed. If this keeps happening, check Buttondown → Settings → Firewall.",
          },
          { status: 503 }
        );
      }

      return NextResponse.json(
        { error: "Could not subscribe. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Welcome aboard — slow living updates heading your way.",
    });
  } catch {
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
