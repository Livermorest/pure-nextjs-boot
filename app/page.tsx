import { Button } from "@/components/ui/button";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-32 h-96 text-9xl content-center text-center">
        Main Area
      </main>
      <Footer />
    </>
  );
}
