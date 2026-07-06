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

    const res = await fetch("https://api.buttondown.com/v1/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Token ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, type: "regular" }),
    });

    if (!res.ok && res.status !== 409) {
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
