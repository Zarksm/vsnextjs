import { SholawatCard } from "@/components";
import Marq from "@/components/Marq";
import CSliders from "@/components/SimpleSlider";

export default function Home() {
  return (
    <main className="anim min-h-screen bg-white dark:bg-secondary">
      <Marq />
      <div className="md:main h-auto pb-20 px-5 md:px-40">
        <CSliders />

        {/* card */}
        <div className="w-full h-auto py-5 bg-primary rounded-lg">
          <h2 className="text-white font-Quisand font-semibold text-2xl p-5">
            Kumpulan Sholawat dan Lirik Qosidah
          </h2>

          <SholawatCard />
        </div>
      </div>
    </main>
  );
}
