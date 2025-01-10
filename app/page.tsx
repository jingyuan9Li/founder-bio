import { Squares } from "@/components/ui/squares-background"
import { HoverButton } from "./components/ui/hover-button"

export default function Home() {
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
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white text-center max-w-4xl">
          The Ultimate Bio Page For Founders
        </h1>
        <HoverButton className="text-white">
          Join Waitlist
        </HoverButton>
      </div>
    </main>
  )
}
 