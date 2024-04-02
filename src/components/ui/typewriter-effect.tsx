import React from 'react';
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string | JSX.Element; // Allow JSX.Element for line breaks
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const renderWords = (startIndex: number, endIndex: number) => {
    return (
      <div className="overflow-hidden pb-2">
        <motion.div
          initial={{
            width: "0%",
          }}
          whileInView={{
            width: "fit-content",
          }}
          transition={{
            duration: 2,
            ease: "linear",
            delay: 1,
          }}
        >
          <div
            className="font-bold"
            style={{
              whiteSpace: "nowrap",
            }}
          >
            {words.slice(startIndex, endIndex).map((word, idx) => (
              <div key={`word-${startIndex + idx}`} className="inline-block">
                {typeof word.text === "string" ? (
                  word.text.split("").map((char, index) => (
                    <span
                      key={`char-${startIndex + idx}-${index}`}
                      className={cn(
                        `dark:text-white text-black renderwords`,
                        word.className
                      )}
                    >
                      {char}
                    </span>
                  ))
                ) : (
                  word.text
                )}
                &nbsp;
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    );
  };

  return (
    <div className={cn("flex flex-col space-x-1", className)}>
      {renderWords(0, Math.ceil(words.length / 2))}
      {renderWords(Math.ceil(words.length / 2), words.length)}

      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px]  h-4 sm:h-6 xl:h-12 xl:mt-8 bg-white",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
