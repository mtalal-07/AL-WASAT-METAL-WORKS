"use client";

import { useState } from "react";
import { Button } from "./ui/Button";
import { contactPage } from "@/content/site-data";

const field =
  "w-full rounded-[4px] border border-hairline bg-white px-4 py-3 text-[13px] leading-[1.6] text-ink placeholder:text-body-muted focus:border-ink focus:outline-none";
const labelCls = "text-[12px] font-medium text-ink";

/** Contact form UI — not wired to a backend (plan requirement 5). */
export function ContactForm() {
  const { form } = contactPage;
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="flex flex-col gap-5"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="cf-name" className={labelCls}>
          {form.fields.name}
        </label>
        <input id="cf-name" name="name" type="text" required className={field} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="cf-email" className={labelCls}>
          {form.fields.email}
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          required
          className={field}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="cf-message" className={labelCls}>
          {form.fields.message}
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          required
          className={`${field} resize-y`}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button label={form.submit} variant="dark" type="submit" />
        <span className="text-[11px] text-body-muted" role="status">
          {sent ? "Thanks — this demo form isn’t connected yet." : form.note}
        </span>
      </div>
    </form>
  );
}
