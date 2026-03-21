import Home from "./Home";
import About from "./About";

export default function MainPage() {
    return (
        <div className="flex flex-col gap-12">
            <section id="home" className="scroll-mt-24">
                <Home />
            </section>

            {/* <section id="about" className="scroll-mt-24 px-4 pb-12 md:px-6">
                <About />
            </section> */}
        </div>
    )
}
