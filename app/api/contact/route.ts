import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Send the form data to the Cloudflare Worker
    const response = await fetch("https://your-cloudflare-worker-url.workers.dev", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone || "Not provided",
        subject: data.subject,
        message: data.message,
        jobTitle: data.jobTitle || null, // For job applications
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}