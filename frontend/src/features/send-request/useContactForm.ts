import { FormEvent, useState } from "react";
import {API_URL} from "@/shared";

interface ContactFormData {
  name: string;
  contact: string;
  message: string;
}

export function useContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const submit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    setIsSubmitting(true);
    setIsSuccess(false);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data: ContactFormData = {
      name: String(formData.get("name") ?? "").trim(),
      contact: String(formData.get("contact") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Не удалось отправить заявку");
      }

      setIsSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      setError("Не удалось отправить заявку. Попробуйте ещё раз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submit,
    isSubmitting,
    isSuccess,
    error,
  };
}