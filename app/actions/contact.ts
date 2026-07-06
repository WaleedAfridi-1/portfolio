"use server";

import { db } from "@/lib/db";

export const saveMessage = async (formData: FormData) => {
  // Safe extraction with fallback empty strings
  const name = (formData.get("name") as string) || "";
  const email = (formData.get("email") as string) || "";
  const message = (formData.get("message") as string) || "";

  if (!name.trim() || !email.trim() || !message.trim()) {
    return { error: "All fields are required!" };
  }

  try {
    await db.contactMessage.create({
      data: { name, email, message }
    });
    return { success: true };
  } catch (error: any) {
    console.error("Database connection failure:", error);
    return { error: "Something went wrong. Please try again." };
  }
};

