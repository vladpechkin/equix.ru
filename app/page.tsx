import type { Metadata } from "next";
import { Landing } from "./equix/Landing";

export const metadata: Metadata = {
  title: "EQUIX — ПО для создания графических интерфейсов",
  description:
    "Программное обеспечение, существенно упрощающее креативную работу дизайнерам и монотонную - разработчикам, тем самым позволяющее максимально просто и быстро создавать высококачественные решения для бизнеса в области цифровых приложений, удешевляя процесс",
};

const Page = () => (
  <Landing
    title={metadata.title as string}
    description={metadata.description as string}
    logoSrc="/logo.svg"
    heroImageSrc="/intro.png"
    links={[]}
    sections={[]}
    siteName="ООО Эквикс"
  />
);

export default Page;
