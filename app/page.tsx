"use client";

import { useEffect, useState } from "react";
import '@/styles/hero.css';

export default function Home() {
  const words = ["Positive", "Proactive", "Challenging"];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [forwards, setForwards] = useState(true);

  // delay for the backward to be processed
  const [skipCount, setSkipCount] = useState(0);
  const skipDelay = 15;
  const speed = 70;

  useEffect(() => {
    const animateText = () => {
      const currentWord = words[currentWordIndex];

      if (forwards) {
        if (currentOffset >= currentWord.length) {
          setSkipCount(skipCount + 1);
          if (skipCount === skipDelay) {
            setForwards(false);
            setSkipCount(0);
          }
        }
      } else {
        if (currentOffset === 0) {
          setForwards(true);
          setCurrentWordIndex((prevIndex) =>
            prevIndex === words.length - 1 ? 0 : prevIndex + 1
          );
        }
      }

      if (skipCount === 0) {
        forwards
          ? setCurrentOffset((prevOffset) => prevOffset + 1)
          : setCurrentOffset((prevOffset) => prevOffset - 1);
      }
    };

    const interval = setInterval(animateText, speed);

    return () => clearInterval(interval);
  }, [currentWordIndex, currentOffset, forwards, skipCount]);


  return (
    <main>
      <div className="contents">
        <div className="flex flex-col justify-center items-center m-2">
          <h1 className="head_text">Welcome!</h1>
          <p className='desc mt-5'>
            I'm a
          </p>
          <h6 className="hash-text text-xl font-bold my-2">
            #{words[currentWordIndex].substring(0, currentOffset)}
          </h6>
          <p className='desc'>
            JavaScript Developer!
          </p>
        </div>
      </div>
    </main>
  )
}
