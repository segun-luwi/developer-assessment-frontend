import { Inter, Montserrat } from "next/font/google";
import { PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "300", "400", "500", "600", "700", "800", "900"],
});

export const MainLayout = ({ children }: PropsWithChildren<{ children?: JSX.Element }>) => {
  return (
    <>
      <div className={montserrat.className}>{children}</div>
    </>
  );
};
