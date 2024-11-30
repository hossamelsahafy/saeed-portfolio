"use client";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
const Services = () => {
  const services = [
    {
      num: "01",
      title: "CCTV & CCNA Services",
      description:
        "Expert in CCTV setup and CCNA networking solutions, ensuring security and seamless connectivity. ",
      href: "",
    },
    {
      num: "02",
      title: "Computer Vision Services",
      description:
        "Offering state-of-the-art computer vision solutions for image recognition, object detection, and automation.",
      href: "",
    },
    {
      num: "03",
      title: "AutoCAD 2D Design Services",
      description:
        " Providing precise AutoCAD 2D drafting and design solutions for architectural and engineering projects",
      href: "",
    },
    {
      num: "04",
      title: "C & Embedded Systems",
      description:
        "Developing efficient software solutions for hardware interaction using C and embedded systems programming.",
      href: "",
    },
  ];

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-between gap-6 group min-h-[300px]" // Ensures consistent height
            >
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              <p className="text-white/20">{service.description}</p>
              <div className="border-b border-white/20 w-full mt-auto"></div>{" "}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
