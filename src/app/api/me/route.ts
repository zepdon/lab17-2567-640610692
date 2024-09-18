import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Poonnapat Panumonwatee",
    studentId: "640610692",
  });
};
