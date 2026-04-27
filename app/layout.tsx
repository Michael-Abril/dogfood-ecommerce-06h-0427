export const metadata = { title: "Dogfood E-commerce", description: "Regression test: E-commerce with payments placeholder" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
