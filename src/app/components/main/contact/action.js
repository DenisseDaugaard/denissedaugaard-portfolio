import { z } from "zod";
import { contactSchema } from "@/app/lib/zodValidation";
import toast from "react-hot-toast";

export async function handleSubmit(_, formData) {
  const values = {
    name: formData.get("name")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
    subject: formData.get("subject")?.toString() ?? "",
    message: formData.get("message")?.toString() ?? "",
  };

  const result = contactSchema.safeParse(values);

  if (!result.success) {
    return {
      values,
      errors: z.flattenError(result.error).fieldErrors,
    };
  }

  try {
    const response = await fetch("https://hifi-mail.onrender.com/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(result.data),
    });

    const responseData = await response.json().catch(() => null);

    if (!response.ok) {
      const message =
        responseData?.error ||
        "There was a problem sending your message. Please try again later.";

      toast.error(message);

      return {
        values,
        errors: {},
        serverMessage: {
          error: message,
        },
      };
    }

    toast.success("Your message was sent successfully!");

    return {
      success: true,
      status: 200,
      values: {},
      serverMessage: {
        success: "Your message was sent successfully!",
      },
    };
  } catch {
    const message =
      "There was a problem submitting the form. Please try again later.";

    toast.error(message);

    return {
      values,
      errors: {},
      serverMessage: {
        error: message,
      },
    };
  }
}
