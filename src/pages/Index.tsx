import React from 'react';
import { motion } from 'framer-motion';
import { RocketIcon, Brain, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
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
            ease: 'easeInOut',
        },
    },
};

const Index = () => {
    const { lang = 'en' } = useParams<{ lang: string }>();
    const navigate = useNavigate();
    const [language, setLanguage] = React.useState<'en' | 'ru'>(
        lang as 'en' | 'ru'
    );
    const [dots, setDots] = React.useState<
        Array<{ id: number; x: number; y: number }>
    >([]);

    const [visibleCards, setVisibleCards] = React.useState<{
        progress: boolean[];
        social: boolean[];
    }>({
        progress: Array(progressCards.length).fill(false),
        social: Array(socialLinks.length).fill(false),
    });

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
                y: Math.random() * 100,
            };
            setDots((prev) => [...prev, newDot]);
            setTimeout(() => {
                setDots((prev) => prev.filter((dot) => dot.id !== newDot.id));
            }, 1500);
        }, 200);

        return () => clearInterval(interval);
    }, []);

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'en' ? 'ru' : 'en'));
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleCardVisibility = (
        section: 'progress' | 'social',
        index: number
    ) => {
        if (!visibleCards[section][index]) {
            setVisibleCards((prev) => {
                const newSection = [...prev[section]];
                newSection[index] = true;
                return { ...prev, [section]: newSection };
            });
        }
    };

    return (
        <div className="min-h-screen bg-[#0A0A0F] text-white">
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/80 backdrop-blur-lg border-b border-primary/10">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="text-primary font-bold">Moonly</div>
                        <nav className="hidden md:flex items-center space-x-6">
                            {navItems.map((item) => (
                                <button
                                    key={item.href}
                                    onClick={() => scrollToSection(item.href)}
                                    className="text-sm text-gray-300 hover:text-primary transition-colors"
                                >
                                    {language === 'en'
                                        ? item.label.en
                                        : item.label.ru}
                                </button>
                            ))}
                        </nav>
                        <div className="flex items-center gap-4">
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-primary-dark"
                                onClick={() =>
                                    window.open(
                                        'https://t.me/MoonlyCoinBot/app',
                                        '_blank'
                                    )
                                }
                            >
                                {language === 'en' ? 'Open' : 'Открыть'}
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

            <section
                id="hero"
                className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 md:py-40"
            >
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
                            {language === 'en'
                                ? 'Based on advanced technologies'
                                : 'На основе передовых технологий'}
                        </span>
                        <h1
                            className="mt-8 text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-dark to-secondary"
                            style={{ lineHeight: '1.2' }}
                        >
                            Moonly
                        </h1>
                        <p className="mt-8 text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            {language === 'en'
                                ? "Actively developing crypto-project, with great potential and actively growing audience. Start now so you won't regret it later..."
                                : 'Активно развивающийся криптопроект, с большим потенциалом и активно растущей аудиторией. Начните сейчас, чтобы не жалеть потом...'}
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-primary-dark"
                                onClick={() =>
                                    window.open(
                                        'https://t.me/MoonlyCoinBot/app',
                                        '_blank'
                                    )
                                }
                            >
                                <RocketIcon className="h-4 w-4" />
                                {language === 'en'
                                    ? 'Open App'
                                    : 'Открыть приложение'}
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-primary/20 text-primary bg-primary/10 hover:bg-primary/5"
                                onClick={() => scrollToSection('aboutUs')}
                            >
                                {language === 'en'
                                    ? 'Learn More'
                                    : 'Узнать больше'}
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section id="aboutUs" className="py-20 bg-[#0A0A0F]">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h2 className="text-4xl font-bold text-white">
                            {language === 'en' ? 'About Us' : 'О нас'}
                        </h2>
                        <div className="mt-6 text-lg text-gray-300 leading-relaxed whitespace-pre-line">
                            {language === 'en' ? (
                                <>
                                    {
                                        'The Moonly team is a close-knit group of professionals with over a decade of experience in blockchain, tech product development, and building global communities. Our journey began long before this project: we have successfully delivered more than eight initiatives that united millions of users worldwide. Today, we are focused on something greater — creating an ecosystem capable of redefining standards in the Web3 space.\n\nWe are not just another startup. Behind us are years of work on complex, time-tested solutions that have been embraced by large audiences. Moonly is a network of interconnected services where technology, creativity, and community converge. We are already working on integrations with leading platforms, NFT-driven gameplay mechanics, and tools that will unlock new opportunities for earning, creating, and investing.\n\nOur philosophy rests on three principles: expertise, innovation, and trust. We believe a project’s strength lies in its users. The more the Moonly community grows, the more resources we invest in development. Every action you take brings us closer to launching new products — ones that can only be imagined for now.\n\nWhat lies ahead? We don’t reveal details prematurely, but we guarantee this: Moonly’s future will be filled with unexpected solutions, technological breakthroughs, and exclusive opportunities for those who join us from the very beginning. We’ve laid the foundation, but the most exciting discoveries are yet to come.\n\n'
                                    }
                                    <span className="text-primary font-medium">
                                        Join us to be part of this journey.
                                    </span>
                                </>
                            ) : (
                                <>
                                    {
                                        'Команда Moonly — это сплоченная группа профессионалов с более чем десятилетним опытом в блокчейн-индустрии, разработке технологических продуктов и создании международных сообществ. Наш путь начался задолго до этого проекта: мы успешно реализовали свыше восьми инициатив, которые объединили миллионы пользователей по всему миру. Сегодня мы сосредоточены на чем-то большем — построении экосистемы, способной переопределить стандарты в мире Web3.\n\nМы не просто стартап. За нашими плечами — годы работы над сложными решениями, проверенными временем и масштабной аудиторией. Moonly — это сеть взаимосвязанных сервисов, где технологии, креативность и сообщество сливаются в единое целое. Мы уже работаем над интеграциями с ведущими платформами, игровыми механиками на основе NFT и инструментами, которые откроют новые возможности для заработка, творчества и инвестиций.\n\nНаша философия строится на трех принципах: опыт, инновации и доверие. Мы верим, что сила проекта — в его пользователях. Чем активнее растет сообщество Moonly, тем больше ресурсов мы вкладываем в развитие. Каждое ваше действие приближает нас к запуску новых продуктов, о которых пока можно лишь догадываться.\n\nЧто ждет нас впереди? Мы не раскрываем детали заранее, но гарантируем: будущее Moonly будет наполнено неожиданными решениями, технологическими прорывами и эксклюзивными возможностями для тех, кто присоединится к нам с самого начала. Мы уже заложили фундамент, но главные открытия — впереди.\n\n'
                                    }
                                    <span className="text-primary font-medium">
                                        Присоединяйтесь, чтобы стать частью
                                        этого пути.
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
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-4xl font-bold text-white">
                            {language === 'en'
                                ? 'Development Plan'
                                : 'План Развития'}
                        </h2>
                        <p className="mt-4 text-gray-400">
                            {language === 'en'
                                ? 'Track our journey to success'
                                : 'Следите за нашим путем к успеху'}
                        </p>
                    </motion.div>
                    <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {progressCards.map((card, index) => (
                            <motion.div
                                key={card.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={
                                    visibleCards.progress[index]
                                        ? { opacity: 1, y: 0 }
                                        : { opacity: 0, y: 20 }
                                }
                                whileInView={{ opacity: 1, y: 0 }}
                                onViewportEnter={() =>
                                    handleCardVisibility('progress', index)
                                }
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                            >
                                <Card className="bg-[#12121A] border-primary/10 p-6 h-[200px] flex flex-col">
                                    <div className="flex items-start justify-between flex-1">
                                        <div className="flex flex-col justify-between h-full">
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-2">
                                                    {language === 'en'
                                                        ? card.title
                                                        : card.titleRu}
                                                </h3>
                                                <p className="text-gray-400">
                                                    {language === 'en'
                                                        ? card.description
                                                        : card.descriptionRu}
                                                </p>
                                            </div>
                                            {card.date && (
                                                <p className="text-sm text-primary mt-2">
                                                    {language === 'en'
                                                        ? card.date
                                                        : card.dateRu}
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
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-4xl font-bold text-white">
                            {language === 'en'
                                ? 'Join Our Community'
                                : 'Присоединяйтесь к Сообществу'}
                        </h2>
                        <p className="mt-4 text-gray-400">
                            {language === 'en'
                                ? 'Be part of the AI-driven crypto revolution'
                                : 'Станьте частью крипто-революции на базе ИИ'}
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
                                animate={
                                    visibleCards.social[index]
                                        ? { opacity: 1, scale: 1 }
                                        : { opacity: 0, scale: 0.8 }
                                }
                                whileInView={{ opacity: 1, scale: 1 }}
                                onViewportEnter={() =>
                                    handleCardVisibility('social', index)
                                }
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                                viewport={{ once: true }}
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
                            <h3 className="text-lg font-semibold text-white mb-4">
                                Moonly
                            </h3>
                            <p className="text-gray-400 text-sm">
                                {language === 'en'
                                    ? 'Revolutionary cryptocurrency'
                                    : 'Революционная криптовалюта'}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">
                                {language === 'en'
                                    ? 'Legal'
                                    : 'Юридическая информация'}
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href={`/${language}/privacy`}
                                        className="text-gray-400 hover:text-primary text-sm"
                                    >
                                        {language === 'en'
                                            ? 'Privacy Policy'
                                            : 'Политика конфиденциальности'}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={`/${language}/terms`}
                                        className="text-gray-400 hover:text-primary text-sm"
                                    >
                                        {language === 'en'
                                            ? 'Terms of Service'
                                            : 'Условия использования'}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={`/${language}/disclaimer`}
                                        className="text-gray-400 hover:text-primary text-sm"
                                    >
                                        {language === 'en'
                                            ? 'Risk Disclaimer'
                                            : 'Предупреждение о рисках'}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">
                                {language === 'en' ? 'Contact' : 'Контакты'}
                            </h3>
                            <p className="text-gray-400 text-sm">
                                support@moonlycoin.com
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-primary/10 text-center">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} Moonly
                        </p>
                        <p className="text-gray-400 text-sm mt-1">
                            {language === 'en'
                                ? 'All rights reserved.'
                                : 'Все права защищены.'}
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

const navItems: NavItem[] = [
    { label: { en: 'Home', ru: 'Главная' }, href: 'hero' },
    { label: { en: 'About Us', ru: 'О нас' }, href: 'aboutUs' },
    { label: { en: 'Plan', ru: 'План' }, href: 'progress' },
    { label: { en: 'Community', ru: 'Сообщество' }, href: 'community' },
];

const progressCards: ProgressCard[] = [
    {
        id: 'app-creation',
        title: 'Launch Mini App',
        titleRu: 'Запуск Mini App',
        description: 'Launch of the first season of our Mini App on Telegram',
        descriptionRu:
            'Запуск первого сезона нашего мини приложения в телеграм',
        isCompleted: true,
        date: 'Completed',
        dateRu: 'Завершено',
    },
    {
        id: 'users-10000',
        title: '10 000 Users',
        titleRu: '10 000 Пользователей',
        description: 'Attract 10 000 active users',
        descriptionRu: 'Привлечение 10 000 активных пользователей',
        isCompleted: false,
        date: 'In Progress',
        dateRu: 'В процессе',
    },
    {
        id: 'сonducting-giveaways',
        title: 'Conducting giveaways',
        titleRu: 'Проведение розыгрышей',
        description: 'Active holding of giveaways in our telegram channel',
        descriptionRu: 'Активное проведение розыгрышей в нашем телеграм канале',
        isCompleted: false,
        date: 'Upcoming',
        dateRu: 'Скоро',
    },
    {
        id: 'content-rewards',
        title: 'Content Rewards',
        titleRu: 'Награды за контент',
        description:
            'Active rewards for creating Moonly-themed social media videos',
        descriptionRu:
            'Активное вознаграждение за создание видео в соцсетях, посвященных Moonly',
        isCompleted: false,
        date: 'Upcoming',
        dateRu: 'Скоро',
    },
    {
        id: 'release-updates',
        title: 'Release of updates',
        titleRu: 'Выпуск обновлений',
        description: 'Releasing updates with exciting new features',
        descriptionRu: 'Выпуск обновлений с новыми интересными функциями',
        isCompleted: false,
        date: 'Upcoming',
        dateRu: 'Скоро',
    },
    {
        id: 'large-giveaways',
        title: 'Large-scale giveaways',
        titleRu: 'Масштабные розыгрыши',
        description:
            'Conducting large-scale giveaways and further strengthening the audience',
        descriptionRu:
            'Проведение масштабных розыгрышей и ещё большее укрепление аудитории',
        isCompleted: false,
        date: 'Planned',
        dateRu: 'Запланировано',
    },
    {
        id: 'listing',
        title: 'Listing',
        titleRu: 'Листинг',
        description:
            'Listing with integration into major exchanges and collaborations with other projects',
        descriptionRu:
            'Листинг с интеграцией в крупные биржи и коллаборации с другими проектами',
        isCompleted: false,
        date: 'Planned',
        dateRu: 'Запланировано',
    },
    {
        id: 'nft-game-release',
        title: 'Nft game release',
        titleRu: 'Выпуск nft игры',
        description:
            'Releasing a game that turns your game wins into exclusive NFTs - each token is unique and created based on your actions in real time',
        descriptionRu:
            'Выпуск игры, которая превращает ваши игровые победы в эксклюзивные NFT – каждый токен уникален и создается на основе ваших действий в реальном времени',
        isCompleted: false,
        date: 'Planned',
        dateRu: 'Запланировано',
    },
    {
        id: 'integrations-developers',
        title: 'Integrations for developers',
        titleRu: 'Интеграции для разработчиков',
        description:
            'Connecting integrations for developers to create NFT games on our platform and monetise your creativity',
        descriptionRu:
            'Подключение интеграций для разработчиков, для создания NFT-игр на нашей платформе и монетизации вашего творчества',
        isCompleted: false,
        date: 'Planned',
        dateRu: 'Запланировано',
    },
];

const socialLinks = [
    {
        url: 'https://t.me/moonly_coin',
        icon: (
            <img
                src="/lovable-uploads/747309a3-afe4-449d-accf-8543d9734a06.png"
                alt="Telegram"
                className="w-auto h-auto max-w-[24px] max-h-[24px] -ml-0.5"
            />
        ),
    },
    {
        url: 'https://x.com/moonlyinc',
        icon: (
            <img
                src="/lovable-uploads/dd434247-33a9-4cb9-8499-8fb776ff41e7.png"
                alt="Twitter"
                className="w-auto h-auto max-w-[24px] max-h-[24px]"
            />
        ),
    },
    {
        url: 'https://youtube.com/@MoonlyInc',
        icon: (
            <img
                src="/lovable-uploads/7d564c75-f427-4330-ad58-ee5fd3f259da.png"
                alt="YouTube"
                className="w-auto h-auto max-w-[24px] max-h-[24px]"
            />
        ),
    },
    {
        url: 'https://www.tiktok.com/@moonlyinc',
        icon: (
            <img
                src="/lovable-uploads/b23c29a4-38fa-48f9-a590-d3e74b733b11.png"
                alt="TikTok"
                className="w-auto h-auto max-w-[24px] max-h-[24px]"
            />
        ),
    },
];

export default Index;
