import Link from "next/link";
import Image from "next/image";

const HeroSection: React.FC = () => {
  const heroImagePath = "/abstract31g.png";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark"
    >
      <div className="absolute inset-0 bg-hero-glow-background z-0"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Text Column (Left) */}
          <div className="text-center md:text-left animate-slide-in-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="block">
                <span className="text-brand-light-text">Where </span>
                <span className="italic bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(96,165,250,0.6)]">boldness</span>
              </span>
              <span className="block text-brand-light-text">Finds its digital</span>
              <span className="block text-brand-accent">form</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-brand-muted-text max-w-xl mx-auto md:mx-0 mb-10">
              We don't build websites. We forge experiences that challenge the conventional and redefine what's possible in the digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="#portfolio" className="btn-primary text-lg px-10 py-4">
                Explore Projects
              </Link>
            </div>
          </div>

          {/* Visual Column (Right) - With Single Image */}
          <div className="relative h-72 md:h-[450px] lg:h-[500px] flex items-center justify-center animate-slide-in-right">
            <div className="w-full h-full max-w-md md:max-w-lg lg:max-w-xl mx-auto">
              <Image
                src={heroImagePath}
                alt="Ashenvell Visualization"
                width={600} 
                height={500}
                className="object-contain w-full h-full rounded-lg shadow-xl"
                priority 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <Link href="#services" aria-label="Go to services">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-brand-blue-light hover:text-brand-accent transition-colors">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
