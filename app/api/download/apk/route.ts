import { NextResponse } from "next/server";

export async function GET() {
  // Redirect to official APK or APK preview page
  return NextResponse.redirect("https://github.com/hamzaovet/almarawani/releases", 302);
}
