import { Bar } from "./Bar";
import { Box } from "./Box";
import { Logo } from ".";

export const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col h-full bg-gray-100">
    <div className="sm:p-4 h-full flex flex-col justify-center fade-in gap-4">
      <Bar size={4} className="print:hidden mx-auto rounded-lg bg-white" as="header">
        <Logo size="big" />
        <Box href="/" className="ml-auto">
          About
        </Box>
        <Box href="/portfolio">Portfolio</Box>
        {/* <Box href="https://design-system.pechk.in">Design system</Box> */}
        <Box href="mailto:to@pechk.in" className="ml-auto">
          Get in touch
        </Box>
      </Bar>
      <main className="h-full">{children}</main>
      <footer className="w-full flex flex-col items-center print:hidden">
        <Box>© {new Date().getFullYear()} Vlad Pechkin</Box>
      </footer>
    </div>
  </div>
);
