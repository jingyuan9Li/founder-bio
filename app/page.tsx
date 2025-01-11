import { Squares } from "@/components/ui/squares-background"
import { HoverButton } from "./components/ui/hover-button"
import { Noise } from "@/components/ui/noise"
import { WordRotate } from "./components/ui/word-rotate"
import { RevealImageListItem } from "./components/ui/reveal-images"

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

  return (
    <main className="relative min-h-screen bg-[#060606] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Squares 
          direction="diagonal"
          speed={0.5}
          squareSize={30}
          borderColor="#444" 
          hoverFillColor="#333"
          className="opacity-50"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen gap-8 px-4">
        <div className="text-5xl md:text-6xl lg:text-7xl font-black text-white text-center max-w-4xl flex flex-wrap justify-center items-baseline">
          <span>The </span>
          <div className="inline-block w-[220px] md:w-[280px] lg:w-[340px]">
            <WordRotate
              className="-translate-y-[0.12em]"
              words={["Ultimate", "Coolest", "Buzziest", "Sleekist"]}
              duration={2000}
            />
          </div>
          <RevealImageListItem 
            text="Bio Page"
            images={bioPageImages}
          />
          <div className="w-full text-center">For Founders Like You</div>
        </div>
        <HoverButton className="text-white">
          Join Waitlist
        </HoverButton>
      </div>

      {/* Noise Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-80 mix-blend-multiply">
        <Noise 
          patternSize={100}
          patternScaleX={1}
          patternScaleY={1}
          patternAlpha={50}
          patternRefreshInterval={1}
        />
      </div>
    </main>
  )
}
 