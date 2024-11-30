import { Button } from "@/components/ui/button";
import { FiDownload, fiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Link from "next/link";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">
              Communication and Electronics Engineer
            </span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent">Saeed Saged</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              A Communication and Electronics Engineer specializes in designing,
              analyzing, and maintaining advanced electronic and communication
              systems.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <a
                  href="/Saeed-saged.pdf"
                  download="Saeed-saged.pdf"
                  className="flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload />
                </a>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration:500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;