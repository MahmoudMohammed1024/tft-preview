import MagicBento, { type BentoCardProps } from "../components/ui/MagicBento";

const aboutCards: BentoCardProps[] = [
    {
        title: 'Our Mission',
        description: (
            <>
                <p className="mb-4">
                    We aim to reshape the fashion landscape by blending creativity, technology, and community-driven design. Our mission goes beyond clothing — we build identity, confidence, and culture through every piece we create.
                </p>
                <p className="mb-4">
                    At TFT, we believe that fashion is a language. We strive to empower individuals to express their unique stories without saying a word. By pushing the boundaries of traditional design, we are creating a future where style and innovation coexist seamlessly.
                </p>
                <p>
                    Our commitment extends to the environment and the people who make our clothes. We are dedicated to sustainable practices that ensure a positive impact on the world, paving the way for a more responsible and conscious fashion industry.
                </p>
            </>
        ),
        label: 'Mission'
    },
    {
        title: 'Our Vision',
        description: (
            <>
                <p className="mb-4">
                    We envision a world where everyone has the freedom to express their true self through cutting-edge fashion. Our goal is to become a global leader in style, setting trends that resonate across borders and cultures.
                </p>
                <p>
                    From the runway to the street, we see a future where TFT is synonymous with quality, creativity, and authenticity. We are building a legacy that inspires the next generation of designers and dreamers.
                </p>
            </>
        ),
        label: 'Vision'
    },
    {
        title: 'Community',
        description: (
            <>
                <p className="mb-4">
                    Our community is the heart of everything we do. We are a collective of creators, innovators, and fashion enthusiasts who support and inspire one another.
                </p>
                <p>
                    We believe in the power of collaboration. By working together, we grow stronger, creating a vibrant ecosystem where ideas flourish and everyone has a seat at the table.
                </p>
            </>
        ),
        label: 'Connect'
    },
    {
        title: 'Quality First',
        description: (
            <>
                <p className="mb-4">
                    Excellence is not just a goal; it's our standard. We meticulously select the finest materials and partner with skilled artisans to ensure that every garment meets our rigorous quality criteria. From the stitch to the silhouette, nothing is overlooked.
                </p>
                <p className="mb-4">
                    We believe that true luxury lies in the details. Our design process involves multiple rounds of testing and refinement to guarantee fit, durability, and comfort. When you wear TFT, you are wearing a piece of art that is built to last.
                </p>
                <p className="font-medium text-slate-800 dark:text-white/90">
                    We are constantly evolving, seeking new technologies and techniques to elevate our craft.
                </p>
            </>
        ),
        label: 'Excellence'
    },
    {
        title: 'Customer Focus',
        description: (
            <>
                <p className="mb-4">
                    We listen to our customers because they are our greatest inspiration. Your feedback drives our innovation and shapes our collections. We are committed to understanding your needs and exceeding your expectations at every touchpoint.
                </p>
                <p>
                    Building trust is paramount. We offer dedicated support and transparent communication to ensure that your experience with TFT is seamless and enjoyable. We are here for you, always.
                </p>
            </>
        ),
        label: 'Service'
    },
    {
        title: 'Why TFT',
        description: (
            <ul className="space-y-2 list-disc list-inside">
                <li>Unique, trend-setting designs found nowhere else.</li>
                <li>Premium quality materials that stand the test of time.</li>
                <li>A passionate, inclusive global community.</li>
                <li>A modern, digital-first brand experience.</li>
                <li>Commitment to sustainability and ethical practices.</li>
            </ul>
        ),
        label: 'Why Us'
    }
];

export default function About() {
    return (
        <div className="min-h-screen pt-24 pb-12 bg-slate-50 dark:bg-background transition-colors duration-300">
            <div className="container mx-auto px-4 text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-slate-900 dark:text-white">About Us</h1>
                <p className="text-slate-600 dark:text-muted-foreground text-lg max-w-2xl mx-auto">
                    Discover the story behind TFT and our commitment to excellence.
                </p>
            </div>

            <MagicBento
                items={aboutCards}
                textAutoHide={false}
                enableStars={true}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                spotlightRadius={300}
                particleCount={12}
                glowColor="125, 249, 255"
            />
        </div>
    );
}
