import { Button } from "@/components/ui/button";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function Page() {
  return (
    <>
      <Header />
      <main className="mt-32">
        <Button>click me2</Button>
      </main>
      <Footer />
    </>
  );
}
