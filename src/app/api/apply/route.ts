import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, referral, referralOther, whyHere, hoping, physical, safe } = body;

    const referralText = referral === "other" && referralOther
      ? `${referral} — ${referralOther}`
      : referral || "Not specified";

    await resend.emails.send({
      from: "Restorative Cuddling Co. <hello@restorativecuddlingco.com>",
      to: "justin.g.holman@gmail.com",
      subject: `New Application: ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #2C2420;">
          <h1 style="color: #2D4E4C; font-size: 24px; font-weight: 300;">New Session Application</h1>
          <hr style="border: none; border-top: 1px solid #EDE4DC; margin: 20px 0;" />

          <h3 style="color: #4D7A78; font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em;">Contact Info</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Referral:</strong> ${referralText}</p>

          <hr style="border: none; border-top: 1px solid #EDE4DC; margin: 20px 0;" />

          <h3 style="color: #4D7A78; font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em;">About Them</h3>
          <p><strong>What brings them here:</strong><br/>${whyHere}</p>
          <p><strong>What they're hoping for:</strong><br/>${hoping || "Not specified"}</p>

          <hr style="border: none; border-top: 1px solid #EDE4DC; margin: 20px 0;" />

          <h3 style="color: #4D7A78; font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em;">Body & Comfort</h3>
          <p><strong>Physical considerations:</strong><br/>${physical || "None mentioned"}</p>
          <p><strong>What helps them feel at ease:</strong><br/>${safe || "None mentioned"}</p>

          <hr style="border: none; border-top: 1px solid #EDE4DC; margin: 20px 0;" />
          <p style="color: #9C8E85; font-size: 12px;">Sent from the Restorative Cuddling Co. application form</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
