import React from 'react';
import { motion } from "framer-motion";
import { RocketIcon, TwitterIcon, MessageCircle, Brain, Check, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useParams, useNavigate } from 'react-router-dom';

interface ProgressCard {
  id: string;
  title: string;
  titleRu: string;
  description: string;
  descriptionRu: string;
  isCompleted: boolean;
  date?: string;
  dateRu?: string;
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
    titleRu: "Начальный Запуск",
    description: "Early investor phase with guaranteed growth potential through strategic market positioning.",
    descriptionRu: "Фаза ранних инвесторов с гарантированным потенциалом роста через стратегическое позиционирование на рынке.",
    investmentUSD: "3,000 USD",
    investmentRUB: "300,000 RUB",
    date: "Launch Phase",
    dateRu: "Фаза Запуска",
  },
  {
    title: "Expansion Phase",
    titleRu: "Фаза Расширения",
    description: "Major development milestone with increased AI capabilities and market presence.",
    descriptionRu: "Важный этап развития с расширенными возможностями ИИ и присутствием на рынке.",
    investmentUSD: "50,000 USD",
    investmentRUB: "5,000,000 RUB",
    date: "February 22, 2024",
    dateRu: "22 февраля 2024",
  },
  {
    title: "Growth Acceleration",
    titleRu: "Ускорение Роста",
    description: "Massive scaling phase with enhanced AI features and market dominance.",
    descriptionRu: "Фаза масштабного роста с улучшенными функциями ИИ и доминированием на рынке.",
    investmentUSD: "250,000 USD",
    investmentRUB: "25,000,000 RUB",
    date: "March 8, 2024",
    dateRu: "8 марта 2024",
  },
];

const dotVariants = {
  initial: { 
    opacity: 0,
    scale: 0.5,
  },
  animate: { 
    opacity: [0, 1, 0],
    scale: [0.5, 1.2, 0.5],
    transition: {
      duration: 1.5,
      ease: "easeInOut"
    }
  }
};

const Index = () => {
  const { lang = 'en' } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const [language, setLanguage] = React.useState<'en' | 'ru'>(lang as 'en' | 'ru');
  const [dots, setDots] = React.useState<Array<{ id: number; x: number; y: number }>>([]);

  React.useEffect(() => {
    navigate(`/${language}`, { replace: true });
  }, [language, navigate]);

  React.useEffect(() => {
    if (lang === 'en' || lang === 'ru') {
      setLanguage(lang);
    } else {
      navigate('/en', { replace: true });
    }
  }, [lang, navigate]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const newDot = {
        id: Math.random(),
        x: Math.random() * 100,
        y: Math.random() * 100
      };
      setDots(prev => [...prev, newDot]);
      setTimeout(() => {
        setDots(prev => prev.filter(dot => dot.id !== newDot.id));
      }, 1500);
    }, 200);

    return () => clearInterval(interval);
  }, []);

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
            <div className="text-primary font-bold">MoonlyCoin</div>
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
            <div className="flex items-center gap-4">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary-dark"
                onClick={() => window.open('https://telegram.org/', '_blank')}
              >
                {language === 'en' ? 'Invest' : 'Инвестировать'}
              </Button>
              <button
                onClick={toggleLanguage}
                className="px-3 py-1 rounded border border-primary/20 text-primary text-sm"
              >
                {language === 'en' ? 'RU' : 'EN'}
              </button>
            </div>
          </div>
        </div>
      </header>

      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 md:py-40">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0F] via-purple-900/10 to-[#0A0A0F]" />
          <div className="absolute inset-0 backdrop-blur-[50px]" />
          
          {dots.map((dot) => (
            <motion.div
              key={dot.id}
              className="absolute w-2 h-2 rounded-full bg-primary/50"
              style={{
                top: `${dot.y}%`,
                left: `${dot.x}%`,
              }}
              variants={dotVariants}
              initial="initial"
              animate="animate"
            />
          ))}
        </div>
        
        <div className="container relative mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2 backdrop-blur-sm">
              <Brain className="h-4 w-4" />
              {language === 'en' ? 'Powered by Advanced AI Technology' : 'На основе передовых технологий ИИ'}
            </span>
            <h1 className="mt-8 text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-dark to-secondary" style={{ lineHeight: '1.2' }}>
              MoonlyCoin
            </h1>
            <p className="mt-8 text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {language === 'en' 
                ? "The world's first cryptocurrency fully managed by artificial intelligence. Join us in revolutionizing the crypto market through advanced neural networks and automated trading strategies."
                : "Первая в мире криптовалюта, полностью управляемая искусственным интеллектом. Присоединяйтесь к нам в революции крипторынка с помощью передовых нейронных сетей и автоматизированных торговых стратегий."}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark"
                onClick={() => window.open('https://telegram.org/', '_blank')}
              >
                <RocketIcon className="h-4 w-4" />
                {language === 'en' ? 'Invest Now' : 'Инвестировать'}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/20 text-primary bg-primary/10 hover:bg-primary/5"
                onClick={() => scrollToSection('ai-future')}
              >
                {language === 'en' ? 'Learn More' : 'Узнать больше'}
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
            <h2 className="text-4xl font-bold text-white">
              {language === 'en' ? 'Investment Stages' : 'Этапы Инвестирования'}
            </h2>
            <p className="mt-4 text-gray-400">
              {language === 'en' ? 'Our investors will use to buy coins in phases to grow and increase capitalization' : 'Наши инвестора будут поэтапно закупать монету на эти суммы для роста и увеличения капитализации'}
            </p>
          </motion.div>
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {investmentStages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#12121A] p-6 rounded-xl border border-primary/10 backdrop-blur-lg min-h-[300px] flex flex-col justify-between"
              >
                <div className="flex-1">
                  <div className="text-primary text-lg font-semibold mb-2">Stage {index + 1}</div>
                  <h3 className="text-xl font-bold text-white mb-4 line-clamp-2">{language === 'en' ? stage.title : stage.titleRu}</h3>
                  <p className="text-gray-400 line-clamp-4">{language === 'en' ? stage.description : stage.descriptionRu}</p>
                </div>
                <div className="mt-4">
                  <div className="text-xl font-bold text-primary">
                    {language === 'en' ? stage.investmentUSD : stage.investmentRUB}
                  </div>
                  <div className="text-sm text-gray-500">{language === 'en' ? stage.date : stage.dateRu}</div>
                </div>
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
            <h2 className="text-4xl font-bold text-white">
              {language === 'en' ? 'AI-Powered Future' : 'Будущее на базе ИИ'}
            </h2>
            <div className="mt-6 text-lg text-gray-300 leading-relaxed whitespace-pre-line">
              {language === 'en' ? (
                <>
                  {'Our revolutionary cryptocurrency is entirely managed by an advanced neural network, developed by our team to automate and optimize cryptocurrency operations. When our market capitalization reaches $10 million, we\'ll secure major investments to make this AI technology accessible to all.\n\nEvery token purchase directly supports the development of groundbreaking AI technology in cryptocurrency trading. Our strategic investors are committed to ensuring substantial returns by actively supporting token value growth and rewarding early investors.\n\n'}
                  <span className="text-primary font-medium">
                    This is just the beginning of our journey to revolutionize cryptocurrency trading through artificial intelligence.
                  </span>
                </>
              ) : (
                <>
                  {'Наша революционная криптовалюта полностью управляется передовой нейронной сетью, разработанной нашей командой для автоматизации и оптимизации криптовалютных операций. Когда наша рыночная капитализация достигнет 10 миллионов долларов, мы получим крупные инвестиции, чтобы сделать эту технологию ИИ доступной для всех.\n\nКаждая покупка токенов напрямую поддерживает разработку революционной технологии ИИ в криптовалютной торговле. Наши стратегические инвесторы намерены обеспечить существенную прибыль, активно поддерживая рост стоимости токенов и вознаграждая ранних инвесторов.\n\n'}
                  <span className="text-primary font-medium">
                    Это только начало нашего пути к революции в крипто-революции на базе ИИ.
                  </span>
                </>
              )}
            </div>
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
            <h2 className="text-4xl font-bold text-white">
              {language === 'en' ? 'Development Progress' : 'Процесс Разработки'}
            </h2>
            <p className="mt-4 text-gray-400">
              {language === 'en' ? 'Track our journey to success' : 'Следите за нашим путем к успеху'}
            </p>
          </motion.div>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {progressCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-[#12121A] border-primary/10 p-6 h-[200px] flex flex-col">
                  <div className="flex items-start justify-between flex-1">
                    <div className="flex flex-col justify-between h-full">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {language === 'en' ? card.title : card.titleRu}
                        </h3>
                        <p className="text-gray-400">
                          {language === 'en' ? card.description : card.descriptionRu}
                        </p>
                      </div>
                      {card.date && (
                        <p className="text-sm text-primary mt-2">
                          {language === 'en' ? card.date : card.dateRu}
                        </p>
                      )}
                    </div>
                    {card.isCompleted && (
                      <span className="bg-primary/10 p-2 rounded-full shrink-0">
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
            <h2 className="text-4xl font-bold text-white">
              {language === 'en' ? 'Join Our Community' : 'Присоединяйтесь к Сообществу'}
            </h2>
            <p className="mt-4 text-gray-400">
              {language === 'en' ? 'Be part of the AI-driven crypto revolution' : 'Станьте частью крипто-революции на базе ИИ'}
            </p>
          </motion.div>
          <div className="mt-12 flex flex-wrap justify-center items-center gap-6">
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
                className="w-14 h-14 flex items-center justify-center bg-[#12121A] rounded-full shadow-lg border border-primary/10"
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
              <h3 className="text-lg font-semibold text-white mb-4">MoonlyCoin</h3>
              <p className="text-gray-400 text-sm">
                {language === 'en' 
                  ? 'Revolutionary AI-powered cryptocurrency'
                  : 'Революционная криптовалюта на базе ИИ'}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                {language === 'en' ? 'Legal' : 'Юридическая информация'}
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="/privacy" className="text-gray-400 hover:text-primary text-sm">
                    {language === 'en' ? 'Privacy Policy' : 'Политика конфиденциальности'}
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-gray-400 hover:text-primary text-sm">
                    {language === 'en' ? 'Terms of Service' : 'Условия использования'}
                  </a>
                </li>
                <li>
                  <a href="/disclaimer" className="text-gray-400 hover:text-primary text-sm">
                    {language === 'en' ? 'Risk Disclaimer' : 'Предупреждение о рисках'}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                {language === 'en' ? 'Contact' : 'Контакты'}
              </h3>
              <p className="text-gray-400 text-sm">support@moonlycoin.com</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary/10 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} MoonlyCoin
            </p>
            <p className="text-gray-400 text-sm mt-1">
              {language === 'en' ? 'All rights reserved.' : 'Все права защищены.'}
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
    titleRu: "Создание Монеты",
    description: "Development and deployment of the initial smart contract",
    descriptionRu: "Разработка и развертывание первоначального смарт-контракта",
    isCompleted: true,
    date: "Completed",
    dateRu: "Завершено"
  },
  {
    id: "dex-release",
    title: "DEX Release",
    titleRu: "Релиз на DEX",
    description: "Launch on decentralized exchanges for public trading",
    descriptionRu: "Запуск на децентрализованных биржах для публичной торговли",
    isCompleted: false,
    date: "In Progress",
    dateRu: "В процессе"
  },
  {
    id: "social-promotion",
    title: "Social Media Promotion",
    titleRu: "Продвижение в Соцсетях",
    description: "Actively promote the coin on social media",
    descriptionRu: "Активное продвижение монеты в социальных сетях",
    isCompleted: false,
    date: "In Progress",
    dateRu: "В процессе"
  },
  {
    id: "stonfi",
    title: "STON.fi Launch",
    titleRu: "Запуск на STON.fi",
    description: "Integration and listing on STON.fi platform",
    descriptionRu: "Интеграция и листинг на платформе STON.fi",
    isCompleted: false,
    date: "Upcoming",
    dateRu: "Скоро"
  },
  {
    id: "bybit",
    title: "ByBit Launch",
    titleRu: "Запуск на ByBit",
    description: "Official listing on ByBit exchange",
    descriptionRu: "Официальный листинг на бирже ByBit",
    isCompleted: false,
    date: "Upcoming",
    dateRu: "Скоро"
  },
  {
    id: "ai-finalization",
    title: "AI Finalization",
    titleRu: "Доработка ИИ",
    description: "Finalizing our AI technology for optimal performance",
    descriptionRu: "Завершение разработки нашей технологии ИИ для оптимальной производительности",
    isCompleted: false,
    date: "Planned",
    dateRu: "Запланировано"
  },
  {
    id: "ai-adaptation",
    title: "AI Adaptation",
    titleRu: "Адаптация ИИ",
    description: "Adapting AI technology for user-friendly interface",
    descriptionRu: "Адаптация технологии ИИ для удобного пользовательского интерфейса",
    isCompleted: false,
    date: "Planned",
    dateRu: "Запланировано"
  },
  {
    id: "ai-release",
    title: "AI Mass Release",
    titleRu: "Массовый Релиз ИИ",
    description: "Making AI technology available for mass audience",
    descriptionRu: "Предоставление технологии ИИ для массовой аудитории",
    isCompleted: false,
    date: "Planned",
    dateRu: "Запланировано"
  },
  {
    id: "ecosystem",
    title: "Ecosystem Creation",
    titleRu: "Создание Экосистемы",
    description: "Building integrated ecosystem with our services and coin",
    descriptionRu: "Создание интегрированной экосистемы с нашими сервисами и монетой",
    isCompleted: false,
    date: "Planned",
    dateRu: "Запланировано"
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
