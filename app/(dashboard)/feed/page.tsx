import CreatePublication from "@/components/dashboard/createPublication";

export default async function Page() {
  return (
    <section className="flex w-full grow">
      <aside className="bg-red-500 lg:w-[25svw] h-full overflow-hidden hidden lg:flex"></aside>
      <main className="w-full lg:w-[50svw] h-full overflow-hidden">
        <CreatePublication />
      </main>
      <aside className="bg-red-500 lg:w-[25svw] h-full overflow-hidden hidden lg:flex"></aside>
    </section>
  );
}
