import { auth } from "@/auth";
import { Navbar } from "@/components/dashboard/navbar";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) {
    redirect("/");
  }

  return (
    <section className="bg-neutral-800/70 h-screen w-screen flex flex-col">
      <Navbar />
      {children}
    </section>
  );
}
