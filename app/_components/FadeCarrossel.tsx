"use client";

import { AnimatePresence, motion, usePresenceData } from "motion/react";
import Image from "next/image";
import { forwardRef, useState } from "react";
import { cn, featureCards } from "@/lib/utils";

export default function FadeCarrossel() {
  const images = [
    "/images/features/dashboard.png",
    "/images/features/system.png",
    "/images/features/youtube.png",
    "/images/features/dashboard.png",
    "/images/features/system.png",
    "/images/features/youtube.png",
    "/images/features/dashboard.png",
    "/images/features/system.png",
    "/images/features/youtube.png",
    "/images/features/dashboard.png",
    "/images/features/system.png",
    "/images/features/youtube.png",
    "/images/features/dashboard.png",
    "/images/features/system.png",
    "/images/features/youtube.png",
  ];
  const [selectedImage, setSelectedImage] = useState<number>(0);
  return (
    <>
      <div className="flex flex-row justify-evenly lg:gap-12 w-4/5 lg:w-11/12 xl:w-4/5 items-center sm:mt-6 lg:mt-0">
        <div className="hidden lg:flex lg:flex-wrap gap-6 xl:gap-8 2xl:gap-12 lg:w-1/3 xl:w-1/4 flex-row lg:flex-col overflow-y-auto lg:overflow-y-hidden relative px-1 lg:pl-0 py-4">
          {featureCards.map(
            (item, index) =>
              index < featureCards.length / 2 && (
                <div
                  className={cn(
                    "flex lg:w-full",
                    index % 2 === 1 ? "lg:justify-end" : "lg:justify-start",
                    index % 2 === 0 ? "floating-top" : "floating-bottom"
                  )}
                  key={item.title}
                >
                  <motion.button
                    initial={false}
                    aria-label="Previous"
                    onClick={() => setSelectedImage(index)}
                    whileFocus={{ outline: `2px solid` }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div
                      className={cn(
                        "gap-2 whitespace-nowrap rounded-full transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:cursor-pointer font-semibold bg-verde-musgo text-neon  items-center justify-center flex hover:opacity-50 px-5 h-12 text-sm 2xl:text-lg 2xl:h-auto 2xl:px-8 2xl:py-4",
                        item.bgColor,
                        item.textColor
                      )}
                    >
                      <item.icon size={24} />
                      <span className="font-semibold">{item.title}</span>
                    </div>
                  </motion.button>
                </div>
              )
          )}

          <Image
            alt="Cursor indicando interação"
            src="/svg/cursor-pointer.svg"
            width={24}
            height={24}
            sizes="24px"
            className="absolute bottom-0 left-[45%] w-[24px] h-[24px]"
          />
        </div>

        <div className="flex relative w-full lg:w-2/4 h-full items-center">
          <Image
            src="/images/features/mockup.png"
            alt="Dashboard da plataforma"
            width={1070}
            height={715}
            sizes="(max-width: 768px) 375px, 1070px"
            className="object-contain lg:object-center w-full h-[375px] lg:h-full lg:w-[1070px]"
            priority
          />

          <AnimatePresence initial={false} mode="popLayout">
            <Slide
              key={selectedImage}
              images={images}
              selectedItem={selectedImage}
            />
          </AnimatePresence>
        </div>

        <div className="hidden lg:flex lg:flex-wrap gap-6 xl:gap-8 2xl:gap-12 lg:w-1/3 xl:w-1/4 flex-row lg:flex-col overflow-y-auto lg:overflow-y-hidden relative px-1 lg:pl-0 py-4">
          {featureCards.map(
            (item, index) =>
              index >= featureCards.length / 2 && (
                <div
                  className={cn(
                    "flex lg:w-full",
                    index % 2 === 1 ? "lg:justify-end" : "lg:justify-start",
                    index % 2 === 0 ? "floating-top" : "floating-bottom"
                  )}
                  key={item.title}
                >
                  <motion.button
                    initial={false}
                    aria-label="Next"
                    onClick={() => setSelectedImage(index)}
                    whileFocus={{ outline: `2px solid` }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div
                      className={cn(
                        "gap-2 whitespace-nowrap rounded-full transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:cursor-pointer font-semibold bg-verde-musgo text-neon  items-center justify-center flex hover:opacity-50 px-5 h-12 text-sm 2xl:text-lg 2xl:h-auto 2xl:px-8 2xl:py-4",
                        item.bgColor,
                        item.textColor
                      )}
                    >
                      <item.icon size={24} />
                      <span className="font-semibold">{item.title}</span>
                    </div>
                  </motion.button>
                </div>
              )
          )}
        </div>
      </div>

      <div className="lg:hidden flex gap-8 w-full overflow-y-auto flex-row relative pl-6 py-4 mt-6 lg:mt-0">
        {featureCards.map((item, index) => (
          <div
            className={cn(
              "flex lg:w-full",
              index % 2 === 1 ? "lg:justify-end" : "lg:justify-start",
              index % 2 === 0 ? "floating-top" : "floating-bottom"
            )}
            key={item.title}
          >
            <motion.button
              initial={false}
              aria-label="Next"
              onClick={() => setSelectedImage(index)}
              whileFocus={{ outline: `2px solid` }}
              whileTap={{ scale: 0.9 }}
            >
              <div
                className={cn(
                  "gap-2 whitespace-nowrap rounded-full transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:cursor-pointer font-semibold bg-verde-musgo text-neon  items-center justify-center flex hover:opacity-50 px-5 lg:px-8 py-4 text-sm lg:text-base",
                  item.bgColor,
                  item.textColor
                )}
              >
                <item.icon size={24} />
                <span className="font-semibold">{item.title}</span>
              </div>
            </motion.button>
          </div>
        ))}
      </div>
    </>
  );
}

type SlideProps = {
  images: string[];
  selectedItem: number;
};

const Slide = forwardRef<HTMLDivElement, SlideProps>(function Slide(
  { images, selectedItem },
  ref
) {
  const direction = usePresenceData();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction * 50 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.2,
          type: "spring",
          visualDuration: 0.3,
          bounce: 0.4,
        },
      }}
      exit={{ opacity: 0, x: direction * -50 }}
      className="absolute top-0"
    >
      <Image
        src={images[selectedItem]}
        alt="Dashboard da plataforma"
        width={1070}
        height={715}
        sizes="(max-width: 768px) 375px, 1070px"
        className="object-contain lg:object-center w-full px-1 sm:px-11 h-[294px] sm:h-[260px] md:px-24 lg:px-0 lg:h-full lg:w-[1070px]"
        priority
      />
    </motion.div>
  );
});
