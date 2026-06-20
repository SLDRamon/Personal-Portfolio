import { Button } from "@/components/Button";
import { 
    Menu, 
    X, 
    ArrowRight, 
    Download,
} from "lucide-react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

export const Home = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Backgroubd */}
            <div className="absolute inset-0">
                <img 
                    src="/Home-bg.jpg" 
                    alt="Home image" 
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"/>
            </div>

            {/* Green Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div 
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "#20B2A6",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                            animationDelay:`${Math.random () * 5}s`,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="container mx-auto px-6  pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                Computer Engineer • Frontend Developer
                            </span>
                        </div>

                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Crafting <span className="text-primary glow-text"> digital</span>
                                <br />
                                experience with
                                <br />
                                <span className="font-serif italic font-normal text-white">
                                    precision.
                                </span>
                            </h1>
                            <p className="text-lg text-muted max-w-lg animate-fade-in animation-delay-200">
                                I'm Ramon A. Soledad - a Front-end Developer. I earned my bachelor's degree 
                                in Computer Engineering from Bulacan State University. Knowledge in front-end 
                                developing that builds the user-facing part of websites and web applications, 
                                focusing on the visual design, layout, and interactivity that users directly engage with.
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-warp gap-4 animate-fade-in animation-delay-300">
                            <Button size="lg">
                                Contact Me <ArrowRight className="w-5 h-5"/>
                            </Button>
                             <AnimatedBorderButton />
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 animated-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">Follow me:</span>
                            {[
                                /* { icon: faGithub, href: "#"}, */
                            ].map((social, idx) => (
                                <a
                                key={idx}
                                href={social.href}
                                className="p-2 rounded-full glass hover:bg-primary/10
                                 hover:text-primary transition-all duration-300"
                                >
                                {<social.icon className="w-5 h-5" />}
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* Right Column - Profile Image */}
                    <div>
                        {/* Profile Image */}
                        <div>
                            <div>
                                <img src="Profile-Photo.jpg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};