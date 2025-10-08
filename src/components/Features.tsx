"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from "framer-motion";
import { Globe } from "./ui/Globe";
import {
  IconMessageChatbot,
  IconBulb,
  IconPhotoAi,
  IconTableColumn,
} from "@tabler/icons-react";

// ✅ Skeleton components (inline so no missing file)
const SkeletonOne = () => {
  const variants = {
    initial: { x: 0 },
    animate: { x: 10, rotate: 5, transition: { duration: 0.2 } },
  };
  const variantsSecond = {
    initial: { x: 0 },
    animate: { x: -10, rotate: -5, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2]
                bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 
                  dark:border-white/[0.2] p-2 items-center space-x-2 
                  bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pulse-500 to-pulse-300 shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 
                  dark:border-white/[0.2] p-2 items-center space-x-2 
                  w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pulse-500 to-pulse-300 shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100
                  dark:border-white/[0.2] p-2 items-center space-x-2 
                  bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pulse-500 to-pulse-300 shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  const variants = {
    initial: { width: 0 },
    animate: { width: "100%", transition: { duration: 0.2 } },
    hover: { width: ["0%", "100%"], transition: { duration: 2 } },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2]
                bg-dot-black/[0.2] flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skeleton-two" + i}
          variants={variants}
          style={{ maxWidth: Math.random() * (100 - 40) + 40 + "%" }}
          className="flex flex-row rounded-full border border-neutral-100
                    dark:border-white/[0.2] p-2 items-center space-x-2
                    bg-neutral-100 dark:bg-black w-full h-4"
        />
      ))}
    </motion.div>
  );
};

const SkeletonThree = () => {
  const variants = {
    initial: { backgroundPosition: "0 50%" },
    animate: { backgroundPosition: ["0 50%", "100% 50%", "0 50%"] },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg
                dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"
      style={{ background: "linear-gradient(-45deg,  #fff7ed, #fed7aa, #fff7ed, #f97316 ,#fff7ed)", backgroundSize: "400% 400%", }}

    />
  );
};

const SkeletonFour = () => {
  const first = { initial: { x: 20, rotate: -5 }, hover: { x: 0, rotate: 0 } };
  const second = { initial: { x: -20, rotate: 5 }, hover: { x: 0, rotate: 0 } };

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] 
                dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white dark:bg-black 
                  dark:border-white/[0.1] border border-neutral-200 flex
                  flex-col items-center justify-center"
      >
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Just code in Vanilla Javascript
        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 
                      text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Delusional
        </p>
      </motion.div>
      <motion.div
        className="h-full relative z-20 w-1/3 rounded-2xl bg-white dark:bg-black 
                  dark:border-white/[0.1] border border-neutral-200 flex 
                  flex-col items-center justify-center"
      >
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Tailwind CSS is cool, you know
        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 
                      text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Sensible
        </p>

      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white dark:bg-black
                  dark:border-white/[0.1] border border-neutral-200 flex 
                  flex-col items-center justify-center"
      >
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          I love Angular, RSC, and Redux.
        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 
                      text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Helpless
        </p>
      </motion.div>
    </motion.div>
  );
};

const SkeletonFive = () => {
  const variants = { initial: { x: 0 }, animate: { x: 10, rotate: 5, transition: { duration: 0.2 } } };
  const variantsSecond = { initial: { x: 0 }, animate: { x: -10, rotate: -5, transition: { duration: 0.2 } } };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2]
                bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 
                  dark:border-white/[0.2] p-2 items-start space-x-2 
                  bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">
          There are a lot of cool frameworks out there like React, Angular, Vue, Svelte…
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 
                  dark:border-white/[0.2] p-2 items-center justify-end 
                  space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">Use PHP.</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pulse-500 to-pulse-300 shrink-0" />
      </motion.div>
    </motion.div>
  );
};
const GlobeCard = () => {
  return (
    <div className="w-full h-full min-h-[32rem] rounded-lg overflow-hidden">
      <Globe />
    </div>
  );
};

// ✅ Now use seminar topics with these skeletons
const items = [
  {
    title: "Chatbots & Voice Assistants",
    description: <span className="text-sm">AI-powered conversational interfaces for seamless user interaction.</span>,
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconMessageChatbot className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Smart Recommendations",
    description: <span className="text-sm">Personalized suggestions powered by machine learning algorithms.</span>,
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconBulb className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "AI-Powered Image/Voice Tools",
    description: <span className="text-sm">Advanced tools for generating, editing, and analyzing multimedia content.</span>,
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconPhotoAi className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Sentiment Analysis",
    description: <span className="text-sm">Understand emotions and tone of your data using AI-driven sentiment analysis.</span>,
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Text Summarization",
    description: <span className="text-sm">Summarize lengthy documents quickly with AI summarization tools.</span>,
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconPhotoAi className="h-4 w-4 text-neutral-500" />,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 bg-white dark:bg-gray-900">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">
              03
            </span>
            <span>AI Tools</span>
          </div>
        </div>

        <h2 className="text-5xl font-display font-bold mb-16 text-gray-900 dark:text-white">
          Explore AI's Applications
        </h2>

        <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[16rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={cn("[&>p:text-lg]", item.className)}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </div>

    </section>
  );
};

export default Features;
