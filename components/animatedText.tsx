"use client";
import { useEffect, useState, useRef } from "react";

type AnimatedTextProps = {
  text: string;
  className?: string | undefined;
  interval?: number | undefined;
  setHeight?: number | undefined;
  isReady?: boolean | undefined;
};

const AnimatedSpan = ({ text, className, interval = 0, isReady = false }: AnimatedTextProps) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, interval);
    return () => {
      clearTimeout(timer);
    };
  }, [isReady, interval]);

  return (
    <span className={` inline-block ${isReady ? " transition-all duration-500 " : " "} ${!show ? " opacity-0 translate-y-2 " : ""} ${className} `}>{text}</span>
  );
};

export default function AnimatedText({ text = "", className, interval = 100 }: AnimatedTextProps) {
  const bodyTextArr = text.split(" ");
  const [textStep, setTextStep] = useState(bodyTextArr.length);
  const [isReady, setIsReady] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const height = ref?.current?.clientHeight || 0;
    setHeight(height);
    setTextStep(0);
    setIsReady(true);
  }, []);

  useEffect(() => {
    let counter = 0;
    const textInterval = setInterval(() => {
      if (counter >= bodyTextArr.length) {
        clearInterval(textInterval);
      } else {
        setTextStep(step => step + 1);
        counter++; // local variable that this closure will see
      }
    }, interval);
    return () => {
      clearInterval(textInterval);
    };
  }, [bodyTextArr, interval]);

  return (
    <div ref={ref} style={{ minHeight: height }} className={` ${!isReady ? " opacity-0 " : " "}`}>
      {
        bodyTextArr.slice(0, textStep).map((shard, index) => {
          return (
            <AnimatedSpan
              key={index + "-" + shard}
              text={shard}
              className={className}
              isReady={isReady}
              interval={isReady ? 300 : 0} />
          );
        })
      }
    </div>
  );
}
