
import { motion } from "framer-motion";
import { RocketIcon, TwitterIcon, TelegramIcon, GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Welcome to the Future of Meme Finance
            </span>
            <h1 className="mt-6 text-6xl md:text-7xl font-bold text-text">
              CryptoMeme
            </h1>
            <p className="mt-6 text-xl text-text-light max-w-2xl mx-auto">
              Join our community-driven journey to revolutionize the meme economy through blockchain technology.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button className="bg-primary hover:bg-primary-dark">
                <RocketIcon className="mr-2 h-4 w-4" />
                Get Started
              </Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-gradient-to-b from-white to-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-text">Development Roadmap</h2>
            <p className="mt-4 text-text-light">Our journey to the moon, mapped out for success</p>
          </motion.div>
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="text-primary text-lg font-semibold mb-2">
                  Phase {index + 1}
                </div>
                <h3 className="text-xl font-bold text-text mb-4">{item.title}</h3>
                <p className="text-text-light">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-text">Join Our Community</h2>
            <p className="mt-4 text-text-light">Connect with us across our social platforms</p>
          </motion.div>
          <div className="mt-12 flex justify-center gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="p-4 bg-white rounded-full shadow-lg"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-text">Our Story</h2>
            <p className="mt-6 text-lg text-text-light leading-relaxed">
              Born from the convergence of humor and innovation, CryptoMeme represents more than just another cryptocurrency. We believe in the power of community-driven development and the potential of memes to revolutionize how we think about digital assets.
            </p>
            <p className="mt-4 text-lg text-text-light leading-relaxed">
              Our mission is to create a sustainable, engaging, and valuable ecosystem that benefits all participants while maintaining the fun and inclusive nature of meme culture.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const roadmapItems = [
  {
    title: "Launch & Community Building",
    description: "Initial token launch, community establishment, and social media presence development.",
  },
  {
    title: "Platform Development",
    description: "Development of core features, security audits, and partnership formations.",
  },
  {
    title: "Ecosystem Expansion",
    description: "Integration with major platforms, additional features, and community governance implementation.",
  },
];

const socialLinks = [
  {
    url: "https://twitter.com",
    icon: <TwitterIcon className="h-6 w-6 text-primary" />,
  },
  {
    url: "https://t.me",
    icon: <TelegramIcon className="h-6 w-6 text-primary" />,
  },
  {
    url: "https://github.com",
    icon: <GithubIcon className="h-6 w-6 text-primary" />,
  },
];

export default Index;
