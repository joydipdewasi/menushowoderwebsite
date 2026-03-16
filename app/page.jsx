import Introduction from "./components/Introduction";
import Demo from "./components/Demo";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">

      <section id="introduction" className="pt-20">
        <Introduction />
      </section>

      <section id="demo" className="pt-20">
        <Demo />
      </section>

      <section id="contact" className="pt-20">
        <Contact />
      </section>

    </div>
  );
}