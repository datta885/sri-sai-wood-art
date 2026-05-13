export const metadata = {
  title: "Sri Sai Wood Art",
  description: "Premium CNC Cutting, Wood Art and Custom Designs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
