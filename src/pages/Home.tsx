import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    Check,
    Instagram,
    Send,
    Music2,
    Youtube,
    X,
    Facebook,
    Gamepad2,
    Zap,
    Radio,
    Users
} from "lucide-react";
import { Button } from "../components/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import { SITE_CONFIG } from "../config/site";
import { ElectricBorder } from "../components/ElectricBorder";
import GridScanBackground from "../components/backgrounds/GridScanBackground";

// Animations
const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const communityLinks = [
    {
        name: "Instagram",
        icon: Instagram,
        url: "https://www.instagram.com/tftxesports/?igshid=NzZlODBkYWE4Ng%3D%3D",
        electricColor: "#C13584",
        accent: "from-purple-600 to-pink-600"
    },
    {
        name: "TikTok",
        icon: Music2,
        url: "https://www.tiktok.com/@tftxesports?_t=zs-90ya7jum9ug&_r=1",
        electricColor: "#00f2ea",
        accent: "from-cyan-400 to-teal-400"
    },
    {
        name: "YouTube",
        icon: Youtube,
        url: "https://www.youtube.com/@tftxesports",
        electricColor: "#FF0000",
        accent: "from-red-600 to-red-500"
    },
    {
        name: "X (Twitter)",
        icon: X,
        url: "https://x.com/tftxesports?t=s44327m4ln1IaZAniJjwjA&s=09",
        electricColor: "#ffffff",
        accent: "from-zinc-500 to-zinc-400"
    },
    {
        name: "Facebook",
        icon: Facebook,
        url: "https://www.facebook.com/profile.php?id=61581906166486&mibextid=wwXIfr&rdid=Qdvm9BM2S4i0U0vL&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1A9rdmswbZ%2F%3Fmibextid%3DwwXIfr#",
        electricColor: "#1877F2",
        accent: "from-blue-600 to-blue-500"
    },
    {
        name: "Discord",
        icon: Gamepad2,
        url: "https://discord.com/invite/cvyv3h6AvK",
        electricColor: "#5865F2",
        accent: "from-indigo-600 to-blue-600"
    },
    {
        name: "Telegram",
        icon: Send,
        url: "https://t.me/TFTSCRIM",
        electricColor: "#229ED9",
        accent: "from-sky-500 to-blue-500"
    },
    {
        name: "WhatsApp Group",
        icon: Users,
        url: "https://chat.whatsapp.com/GM92KS7z0l9KQJUn2JeTBS",
        electricColor: "#25D366",
        accent: "from-green-500 to-emerald-500"
    },
    {
        name: "WhatsApp Channel",
        icon: Radio,
        url: "https://www.whatsapp.com/channel/0029VayMNLF2ER6kgIeADn1k",
        electricColor: "#075e54",
        accent: "from-emerald-600 to-teal-600"
    },
    {
        name: "Kick",
        icon: Zap,
        url: "https://kick.com/tftxesports",
        electricColor: "#53fc18",
        accent: "from-lime-500 to-green-500"
    }
];

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative z-0 h-[90vh] flex items-center justify-center overflow-hidden text-white">
                <GridScanBackground />


                <div className="container relative z-10 px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-7xl font-bold font-serif mb-6 tracking-tight"
                    >
                        Redefine Your Style
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
                    >
                        Discover the latest trends in modern fashion. Elevate your wardrobe with our exclusive collection.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Link to="/shop">
                            <Button size="lg" className="text-lg px-8 py-6 rounded-full">
                                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="text-center mb-16"
                    >
                        <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold font-serif mb-4">Our Services</motion.h2>
                        <motion.p variants={fadeIn} className="text-muted-foreground max-w-2xl mx-auto">
                            We provide more than just clothes. We provide an experience.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {/* Service 1 */}
                        <motion.div variants={fadeIn}>
                            <Card className="h-full border-none shadow-none bg-secondary/20 hover:bg-secondary/40 transition-colors">
                                <CardHeader>
                                    <CardTitle>Fast Delivery</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">Get your orders delivered to your doorstep within 24-48 hours.</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                        {/* Service 2 */}
                        <motion.div variants={fadeIn}>
                            <Card className="h-full border-none shadow-none bg-secondary/20 hover:bg-secondary/40 transition-colors">
                                <CardHeader>
                                    <CardTitle>Premium Quality</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">We use only the finest materials to ensure comfort and durability.</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                        {/* Service 3 */}
                        <motion.div variants={fadeIn}>
                            <Card className="h-full border-none shadow-none bg-secondary/20 hover:bg-secondary/40 transition-colors">
                                <CardHeader>
                                    <CardTitle>24/7 Support</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">Our team is always available to assist you with any inquiries via WhatsApp.</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Packages / Pricing Section */}
            <section className="py-20 bg-secondary/10">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Packages</h2>
                        <p className="text-muted-foreground">Choose a plan that fits your style needs.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {/* Package 1: GOLDEN SERIES */}
                        <div className="group relative flex flex-col rounded-3xl border border-border/50 bg-white dark:bg-zinc-900 shadow-xl shadow-black/10 dark:shadow-black/40 overflow-hidden transition-transform hover:-translate-y-1">
                            {/* Trapezoid Header */}
                            <div
                                className="absolute top-0 inset-x-0 h-24 bg-[#fbbf24]"
                                style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)' }}
                            />
                            {/* Icon Container */}
                            <div className="relative mx-auto mt-6 mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-white shadow-lg z-10">
                                <img
                                    src="/image/gold (1).png"
                                    alt="GOLDEN SERIES"
                                    className="h-10 w-10 object-contain select-none pointer-events-none"
                                />
                            </div>
                            {/* Content */}
                            <div className="flex flex-col flex-1 px-6 pb-8 text-center pt-2">
                                <h3 className="text-xl font-bold uppercase tracking-wider mb-2">GOLDEN SERIES</h3>
                                <div className="text-3xl font-black mb-6">39.99$</div>

                                <ul className="space-y-3 mb-8 text-left text-sm text-muted-foreground flex-1">
                                    <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-[#fbbf24]" /> Semi Final</li>
                                    <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-[#fbbf24]" /> Top Qualified</li>
                                    <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-[#fbbf24]" /> Final per Month</li>
                                    <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-[#fbbf24]" /> Prize Pool: 100$ Each Final</li>
                                    <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-[#fbbf24]" /> Total Prize Pool: 1200$</li>
                                </ul>

                                <Button
                                    className="w-full rounded-2xl bg-[#fbbf24] hover:bg-[#fbbf24]/90 text-white font-bold text-lg py-6 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                                    onClick={() => window.open(SITE_CONFIG.socials.whatsapp, '_blank')}
                                >
                                    DISCOVER MORE
                                </Button>
                            </div>
                        </div>

                        {/* Package 2: DIAMOND SERIES */}
                        <div className="group relative flex flex-col rounded-3xl border border-border/50 bg-white dark:bg-zinc-900 shadow-xl shadow-black/10 dark:shadow-black/40 overflow-hidden transition-transform hover:-translate-y-1">
                            <div
                                className="absolute top-0 inset-x-0 h-24 bg-[#8b5cf6]"
                                style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)' }}
                            />
                            <div className="relative mx-auto mt-6 mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-white shadow-lg z-10">
                                <img
                                    src="/image/diamond.PNG"
                                    alt="DIAMOND SERIES"
                                    className="h-10 w-10 object-contain select-none pointer-events-none"
                                />
                            </div>
                            <div className="flex flex-col flex-1 px-6 pb-8 text-center pt-2">
                                <h3 className="text-xl font-bold uppercase tracking-wider mb-2">DIAMOND SERIES</h3>
                                <div className="text-3xl font-black mb-6">34.99$</div>

                                <ul className="space-y-3 mb-8 text-left text-sm text-muted-foreground flex-1">
                                    <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-[#8b5cf6]" /> 10 Semi Final</li>
                                    <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-[#8b5cf6]" /> Top Qualified</li>
                                    <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-[#8b5cf6]" /> 10 Final per Month</li>
                                    <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-[#8b5cf6]" /> Prize Pool: 100$ Each Final</li>
                                    <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-[#8b5cf6]" /> Total Prize Pool: 1000$</li>
                                    <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-[#8b5cf6]" /> Live Stream</li>
                                </ul>

                                <Button
                                    className="w-full rounded-2xl bg-[#8b5cf6] hover:bg-[#8b5cf6]/90 text-white font-bold text-lg py-6 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                                    onClick={() => window.open(SITE_CONFIG.socials.whatsapp, '_blank')}
                                >
                                    DISCOVER MORE
                                </Button>
                            </div>
                        </div>

                        {/* Package 3: ELITE SERIES */}
                        <div className="group relative flex flex-col rounded-3xl border border-border/50 bg-white dark:bg-zinc-900 shadow-xl shadow-black/10 dark:shadow-black/40 overflow-hidden transition-transform hover:-translate-y-1">
                            <div
                                className="absolute top-0 inset-x-0 h-24 bg-[#10b981]"
                                style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)' }}
                            />
                            <div className="relative mx-auto mt-6 mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-white shadow-lg z-10">
                                <img
                                    src="/image/elite.png"
                                    alt="ELITE SERIES"
                                    className="h-10 w-10 object-contain select-none pointer-events-none"
                                />
                            </div>
                            <div className="flex flex-col flex-1 px-6 pb-8 text-center pt-2">
                                <h3 className="text-xl font-bold uppercase tracking-wider mb-2">ELITE SERIES</h3>
                                <div className="text-3xl font-black mb-6">24.99$</div>

                                <ul className="space-y-3 mb-8 text-left text-sm text-muted-foreground flex-1">
                                    <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-[#10b981]" /> 5 Semi Final</li>
                                    <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-[#10b981]" /> Top Qualified</li>
                                    <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-[#10b981]" /> Final per Month</li>
                                    <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-[#10b981]" /> Prize Pool: 100$ Each Final</li>
                                    <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-[#10b981]" /> Total Prize Pool: 1200$</li>
                                    <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-[#10b981]" /> Live Stream</li>
                                </ul>

                                <Button
                                    className="w-full rounded-2xl bg-[#10b981] hover:bg-[#10b981]/90 text-white font-bold text-lg py-6 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                                    onClick={() => window.open(SITE_CONFIG.socials.whatsapp, '_blank')}
                                >
                                    DISCOVER MORE
                                </Button>
                            </div>
                        </div>

                        {/* Package 4: PLATINUM SERIES */}
                        <div className="group relative flex flex-col rounded-3xl border border-border/50 bg-white dark:bg-zinc-900 shadow-xl shadow-black/10 dark:shadow-black/40 overflow-hidden transition-transform hover:-translate-y-1">
                            <div
                                className="absolute top-0 inset-x-0 h-24 bg-[#06b6d4]"
                                style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)' }}
                            />
                            <div className="relative mx-auto mt-6 mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-white shadow-lg z-10">
                                <img
                                    src="/image/platinum.PNG"
                                    alt="PLATINUM SERIES"
                                    className="h-10 w-10 object-contain select-none pointer-events-none"
                                />
                            </div>
                            <div className="flex flex-col flex-1 px-6 pb-8 text-center pt-2">
                                <h3 className="text-xl font-bold uppercase tracking-wider mb-2">PLATINUM SERIES</h3>
                                <div className="text-3xl font-black mb-6">34.99$</div>

                                <ul className="space-y-3 mb-8 text-left text-sm text-muted-foreground flex-1">
                                    <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-[#06b6d4]" /> 10 Semi Final</li>
                                    <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-[#06b6d4]" /> Top Qualified</li>
                                    <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-[#06b6d4]" /> Final per Month</li>
                                    <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-[#06b6d4]" /> Prize Pool: 100$ Each Final</li>
                                    <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-[#06b6d4]" /> Total Prize Pool: 1000$</li>
                                    <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-[#06b6d4]" /> Live Stream</li>
                                </ul>

                                <Button
                                    className="w-full rounded-2xl bg-[#06b6d4] hover:bg-[#06b6d4]/90 text-white font-bold text-lg py-6 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                                    onClick={() => window.open(SITE_CONFIG.socials.whatsapp, '_blank')}
                                >
                                    DISCOVER MORE
                                </Button>
                            </div>
                        </div>

                        {/* Package 5: TRAINING SERIES */}
                        <div className="group relative flex flex-col rounded-3xl border border-border/50 bg-white dark:bg-zinc-900 shadow-xl shadow-black/10 dark:shadow-black/40 overflow-hidden transition-transform hover:-translate-y-1">
                            <div
                                className="absolute top-0 inset-x-0 h-24 bg-[#14b8a6]"
                                style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)' }}
                            />
                            <div className="relative mx-auto mt-6 mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-white shadow-lg z-10">
                                <img
                                    src="/image/training.PNG"
                                    alt="TRAINING SERIES"
                                    className="h-10 w-10 object-contain select-none pointer-events-none"
                                />
                            </div>
                            <div className="flex flex-col flex-1 px-6 pb-8 text-center pt-2">
                                <h3 className="text-xl font-bold uppercase tracking-wider mb-2">TRAINING SERIES</h3>
                                <div className="text-3xl font-black mb-6">14.99$</div>

                                <ul className="space-y-3 mb-8 text-left text-sm text-muted-foreground flex-1">
                                    <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-[#14b8a6]" /> 2 Training per Day</li>
                                    <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-[#14b8a6]" /> 52 Training per Month</li>
                                    <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-[#14b8a6]" /> Top Qualified to Elite Event</li>
                                    <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-[#14b8a6]" /> Time:</li>
                                    <li className="flex items-center ml-6">6:00 PM KSA – 16:00 CST</li>
                                    <li className="flex items-center ml-6">1:00 PM KSA – 23:00 CST</li>
                                </ul>

                                <Button
                                    className="w-full rounded-2xl bg-[#14b8a6] hover:bg-[#14b8a6]/90 text-white font-bold text-lg py-6 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                                    onClick={() => window.open(SITE_CONFIG.socials.whatsapp, '_blank')}
                                >
                                    DISCOVER MORE
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Network / Community Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif mb-12">Join Our Community</h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {communityLinks.map((link) => (
                            <ElectricBorder
                                key={link.name}
                                color={link.electricColor || "#7df9ff"}
                                speed={1}
                                chaos={0.5}
                                thickness={2}
                                style={{ borderRadius: "1rem" }}
                                className="relative group h-full transition-all duration-300 ease-out hover:-translate-y-1"
                            >
                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block h-full w-full relative"
                                >
                                    <Card className="relative h-full flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-md shadow-lg shadow-black/30 rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-black/40 z-10">

                                        {/* Brand Accent Overlay */}
                                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${link.accent} -z-10`} />

                                        {/* Content */}
                                        <div className="relative z-10 flex flex-col items-center">
                                            <link.icon className="h-8 w-8 mb-3 text-slate-900 dark:text-white transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]" />
                                            <span className="font-medium tracking-wide text-sm md:text-base text-slate-700 dark:text-white/80 transition-colors duration-300 group-hover:text-white">
                                                {link.name}
                                            </span>
                                        </div>
                                    </Card>
                                </a>
                            </ElectricBorder>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
