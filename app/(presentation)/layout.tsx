import { Navbar1 } from "@/components/navbar";
import FooterPage from "@/components/presentation/accuiel/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Navbar1 />
      {children}
      <FooterPage />
    </section>
  );
}
