import { Inter } from "next/font/google";
import "./equix/style.css"
import { Box } from "./equix/components";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Box as="body" className={inter.className} css="background: hsl(260, 100%, 90%); color: hsl(260, 100%, 20%);">{children}</Box>
    </html>
  );
}
