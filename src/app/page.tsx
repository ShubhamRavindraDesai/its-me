import { navLinks } from "@/constants";
import Navigation from "@/shared-components/Navigation";

export default function Home() {
  return (
    <main className="bg-custom-gradient h-full w-full flex min-h-screen flex-col justify-between p-24">
      <Navigation links={navLinks} />
    </main>
  );
}
