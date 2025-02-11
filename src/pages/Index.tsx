
import React from 'react';
import { motion } from "framer-motion";
import { RocketIcon, TwitterIcon, MessageCircle, Brain, Check, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProgressCard {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  date?: string;
}

interface NavItem {
  label: {
    en: string;
    ru: string;
  };
  href: string;
}

const investmentStages = [
  {
    title: "Initial Launch",
    description: "Early investor phase with guaranteed growth potential through strategic market positioning.",
    investment: "300,000 RUB",
    date: "Launch Phase",
  },
  {
    title: "Expansion Phase",
    description: "Major development milestone with increased AI capabilities and market presence.",
    investment: "5,000,000 RUB",
    date: "February 22, 2024",
  },
  {
    title: "Growth Acceleration",
    description: "Massive scaling phase with enhanced AI features and market dominance.",
    investment: "25,000,000 RUB",
    date: "March 8, 2024",
  },
];

const Index = () => {
  const [language, setLanguage] = React.useState<'en' | 'ru'>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ru' : 'en');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/80 backdrop-blur-lg border-b border-primary/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-primary font-bold">CryptoMeme AI</div>
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  {language === 'en' ? item.label.en : item.label.ru}
                </button>
              ))}
            </nav>
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded border border-primary/20 text-primary text-sm"
            >
              {language === 'en' ? 'RU' : 'EN'}
            </button>
          </div>
        </div>
      </header>

      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20" />
        <div className="absolute inset-0 backdrop-blur-3xl">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2">
              <Brain className="h-4 w-4" /> Powered by Advanced AI Technology
            </span>
            <h1 className="mt-6 text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-dark to-secondary">
              CryptoMeme AI
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              The world's first cryptocurrency fully managed by artificial intelligence. Join us in revolutionizing the crypto market through advanced neural networks and automated trading strategies.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button className="bg-primary hover:bg-primary-dark">
                <RocketIcon className="mr-2 h-4 w-4" />
                Invest Now
              </Button>
              <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/10">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="investment" className="py-20 bg-[#0D0D12]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white">Investment Stages</h2>
            <p className="mt-4 text-gray-400">Strategic growth through planned investment phases</p>
          </motion.div>
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {investmentStages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#12121A] p-6 rounded-xl border border-primary/10 backdrop-blur-lg"
              >
                <div className="text-primary text-lg font-semibold mb-2">Stage {index + 1}</div>
                <h3 className="text-xl font-bold text-white mb-4">{stage.title}</h3>
                <p className="text-gray-400">{stage.description}</p>
                <div className="mt-4 text-xl font-bold text-primary">{stage.investment}</div>
                <div className="text-sm text-gray-500">{stage.date}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="ai-future" className="py-20 bg-[#0A0A0F]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-white">AI-Powered Future</h2>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Our revolutionary cryptocurrency is entirely managed by an advanced neural network, developed by our team to automate and optimize cryptocurrency operations. When our market capitalization reaches $10 million, we'll secure major investments to make this AI technology accessible to all.
            </p>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              Every token purchase directly supports the development of groundbreaking AI technology in cryptocurrency trading. Our strategic investors are committed to ensuring substantial returns by actively supporting token value growth and rewarding early investors.
            </p>
            <p className="mt-4 text-primary font-semibold">
              This is just the beginning of our journey to revolutionize cryptocurrency trading through artificial intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="progress" className="py-20 bg-[#0D0D12]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white">Development Progress</h2>
            <p className="mt-4 text-gray-400">Track our journey to success</p>
          </motion.div>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {progressCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-[#12121A] border-primary/10 p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                      <p className="text-gray-400">{card.description}</p>
                      {card.date && (
                        <p className="text-sm text-primary mt-2">{card.date}</p>
                      )}
                    </div>
                    {card.isCompleted && (
                      <span className="bg-primary/10 p-2 rounded-full">
                        <Check className="h-4 w-4 text-primary" />
                      </span>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="community" className="py-20 bg-[#0A0A0F]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white">Join Our Community</h2>
            <p className="mt-4 text-gray-400">Be part of the AI-driven crypto revolution</p>
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
                className="p-4 bg-[#12121A] rounded-full shadow-lg border border-primary/10"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#0D0D12] border-t border-primary/10">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">CryptoMeme AI</h3>
              <p className="text-gray-400 text-sm">
                Revolutionary AI-powered cryptocurrency platform
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/privacy" className="text-gray-400 hover:text-primary text-sm">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-gray-400 hover:text-primary text-sm">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/disclaimer" className="text-gray-400 hover:text-primary text-sm">
                    Risk Disclaimer
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <p className="text-gray-400 text-sm">support@cryptomeme-ai.com</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary/10 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} CryptoMeme AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const navItems: NavItem[] = [
  { label: { en: "Home", ru: "Главная" }, href: "hero" },
  { label: { en: "Investment", ru: "Инвестиции" }, href: "investment" },
  { label: { en: "AI Future", ru: "Будущее ИИ" }, href: "ai-future" },
  { label: { en: "Progress", ru: "Прогресс" }, href: "progress" },
  { label: { en: "Community", ru: "Сообщество" }, href: "community" },
];

const progressCards: ProgressCard[] = [
  {
    id: "coin-creation",
    title: "Coin Creation",
    description: "Development and deployment of the initial smart contract",
    isCompleted: true,
    date: "Completed"
  },
  {
    id: "dex-release",
    title: "DEX Release",
    description: "Launch on decentralized exchanges for public trading",
    isCompleted: false,
    date: "Upcoming"
  },
  {
    id: "marketing",
    title: "Marketing Campaign",
    description: "Active promotion and community reward programs",
    isCompleted: false,
    date: "In Progress"
  },
  {
    id: "stonfi",
    title: "STON.fi Launch",
    description: "Integration and listing on STON.fi platform",
    isCompleted: false,
    date: "Planned"
  },
  {
    id: "bybit",
    title: "ByBit Launch",
    description: "Official listing on ByBit exchange",
    isCompleted: false,
    date: "Planned"
  }
];

const socialLinks = [
  {
    url: "https://twitter.com",
    icon: <TwitterIcon className="h-6 w-6 text-primary" />,
  },
  {
    url: "https://t.me",
    icon: <MessageCircle className="h-6 w-6 text-primary" />,
  },
  {
    url: "https://youtube.com",
    icon: <Youtube className="h-6 w-6 text-primary" />,
  },
];

export default Index;
