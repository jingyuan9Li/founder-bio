"use client"

import { Squares } from "@/components/ui/squares-background"
import { HoverButton } from "./components/ui/hover-button"
import { Noise } from "@/components/ui/noise"
import { WordRotate } from "./components/ui/word-rotate"
import { RevealImageListItem } from "./components/ui/reveal-images"
import { useEffect, useState } from "react"

export default function Home() {
  const bioPageImages: [{ src: string; alt: string }, { src: string; alt: string }] = [
    {
      src: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      alt: "Bio Page Preview 1",
    },
    {
      src: "https://images.unsplash.com/photo-1542435503-956c469947f6?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      alt: "Bio Page Preview 2",
    },
  ];

  const [scale, setScale] = useState(1.5);

  useEffect(() => {
    const updateScale = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setScale(1.5);
      } else if (window.innerWidth >= 768) { // md breakpoint
        setScale(2.25); // 1.5 * 1.5
      } else {
        setScale(4.5); // 1.5 * 3
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-20">
        <Squares 
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#333" 
          hoverFillColor="#222"
          className="opacity-[0.85] md:opacity-100"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-30 flex flex-col items-center justify-center min-h-screen gap-8 px-4">
        <div className="text-5xl md:text-6xl lg:text-7xl font-black text-center max-w-4xl flex flex-wrap justify-center items-baseline leading-[1.1] md:leading-[1.1]">
          <span className="silver-gradient-text">The </span>
          <div className="inline-block w-[220px] md:w-[280px] lg:w-[340px] mx-1 -my-4 md:-my-2">
            <WordRotate
              words={["Ultimate", "Coolest", "Buzziest", "Sleekist"]}
              duration={2000}
            />
          </div>
          <RevealImageListItem 
            text="Bio Page"
            images={bioPageImages}
          />
          <div className="w-full text-center mt-2 md:mt-0 silver-gradient-text">For Founders Like You</div>
        </div>
        <a href="https://tally.so/r/mJX8rd" target="_blank" rel="noopener noreferrer">
          <HoverButton className="text-white">
            Join Waitlist
          </HoverButton>
        </a>
      </div>

      {/* Noise Overlay */}
      <div className="fixed inset-0 z-10 pointer-events-none opacity-80 mix-blend-multiply">
        <Noise 
          patternSize={100}
          patternScaleX={scale}
          patternScaleY={scale}
          patternAlpha={50}
          patternRefreshInterval={1}
        />
      </div>
    </main>
  )
}
 