import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bee Services | White-Label AI Chatbots",
  description: "Simple, No-Code AI customer support for small businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="m-0 p-0 antialiased">
        {children}
      </body>
    </html>
  );
}