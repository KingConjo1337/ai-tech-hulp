import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, role, phone, interestedPackage, source } = body;

    // Validate required fields
    if (!email || !name) {
      return NextResponse.json(
        { error: "E-mail en naam zijn verplicht" },
        { status: 400 }
      );
    }

    // Check if email already exists
    const { data: existing } = await supabase
      .from("waitlist")
      .select("id")
      .eq("email", email.toLowerCase())
      .single();

    if (existing) {
      return NextResponse.json(
        { error: "Dit e-mailadres staat al op de wachtlijst" },
        { status: 409 }
      );
    }

    // Insert new waitlist entry
    const { error } = await supabase.from("waitlist").insert({
      email: email.toLowerCase(),
      name,
      role: role || null,
      phone: phone || null,
      interested_package: interestedPackage || null,
      source: source || "other",
      created_at: new Date().toISOString(),
    });

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Er ging iets mis bij het opslaan" },
        { status: 500 }
      );
    }

    // Send to Make.com webhook (fire and forget)
    const webhookUrl = process.env.MAKE_WEBHOOK_URL;
    if (webhookUrl) {
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.toLowerCase(),
          name,
          role: role || null,
          phone: phone || null,
          interested_package: interestedPackage || null,
          source: source || "other",
          timestamp: new Date().toISOString(),
        }),
      }).catch((err) => console.error("Make.com webhook error:", err));
    }

    return NextResponse.json(
      { success: true, message: "Je staat op de wachtlijst!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Er ging iets mis" },
      { status: 500 }
    );
  }
}
