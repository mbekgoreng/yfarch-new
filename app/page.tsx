import Nav from "@/components/Nav";
import Walk from "@/components/Walk";
import Interlude from "@/components/Interlude";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Studio from "@/components/Studio";
import Profile from "@/components/Profile";
import Contact from "@/components/Contact";
import Assistant from "@/components/Assistant";

export default function Home() {
  return (
    <main id="top">
      <Nav />
      <Walk />
      <Interlude />
      <Projects />
      <Services />
      <Process />
      <Studio />
      <Profile />
      <Contact />
      <Assistant />
    </main>
  );
}
