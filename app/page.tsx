import { Background } from "@/components/background";
import { Footer } from "@/components/footer";
import { Newsletter } from "@/components/newsletter";

export default function Home() {
  return (
    <main className="p-inset h-[100dvh] w-full">
      <div className="relative h-full w-full">
        <Background
          src="/Paris Landscape 3.png"
          foregroundSrc="/Paris_Man3 copy.png"
        />
        <Newsletter />
        <Footer />
      </div>
    </main>
  );
}
