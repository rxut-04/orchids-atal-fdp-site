import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import ImportantDates from "@/components/sections/important-dates";
import Committees from "@/components/sections/committees";
import WhoShouldAttend from "@/components/sections/who-should-attend";
import EventDetails from "@/components/sections/event-details";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ImportantDates />
        <Committees />
        <WhoShouldAttend />
        <EventDetails />
      </main>
      <Footer />
    </>
  );
}
