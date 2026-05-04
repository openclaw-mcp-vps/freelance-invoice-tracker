import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FreelanceInvoice — Track Unpaid Invoices with Automated Follow-Ups",
  description: "Monitor invoice status, send automated payment reminders, track payment patterns, and calculate late fees. Built for freelancers and consultants."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2735528d-52f1-4743-ae9d-0be083e46220"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
