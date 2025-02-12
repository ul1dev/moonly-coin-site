
import React from 'react';
import { motion } from "framer-motion";
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

interface Translations {
  [key: string]: {
    title: string;
    preamble: {
      title: string;
      content: string;
    };
    whoWeAre: {
      title: string;
      content: string;
      address: string;
      contact: string;
      contactInfo: string;
    };
  }
}

const translations: Translations = {
  en: {
    title: "Privacy Policy",
    preamble: {
      title: "Preamble",
      content: "This Privacy Policy (\"Privacy Policy\"), together with our Terms of Use (\"Terms\"), sets out the basis for our collection, use, and disclosure of personal information about individuals who use the MoonlyCoin platform (the \"Service\"), when you interact with us, enter into agreements with us, communicate with us, or otherwise engage with our services."
    },
    whoWeAre: {
      title: "Who We Are",
      content: "MoonlyCoin Ltd (\"We,\" \"Us,\" or \"Our\") is a company incorporated in the British Virgin Islands that operates the MoonlyCoin platform, offering digital wallet and blockchain transaction services as well as community engagement channels for cryptocurrency enthusiasts. Our registered address is:",
      address: "MoonlyCoin Ltd\n100 Crypto Way, Suite 400\nRoad Town, Tortola\nBritish Virgin Islands, VG1122",
      contact: "If you have any questions about our privacy practices or this Privacy Policy, or if you wish to exercise any of your rights described herein, please contact us at:",
      contactInfo: "Email: privacy@moonlycoin.com\nContact Page: https://moonlycoin.com/contact"
    }
  },
  ru: {
    title: "Политика конфиденциальности",
    preamble: {
      title: "Преамбула",
      content: "Настоящая Политика конфиденциальности («Политика конфиденциальности»), вместе с нашими Условиями использования («Условия»), устанавливает основу для сбора, использования и раскрытия персональных данных о лицах, использующих платформу MoonlyCoin («Сервис»), когда вы взаимодействуете с нами, заключаете с нами соглашения, общаетесь с нами или иным образом взаимодействуете с нашими услугами."
    },
    whoWeAre: {
      title: "Кто мы",
      content: "MoonlyCoin Ltd («Мы», «Нас» или «Наш») – это компания, зарегистрированная на Британских Виргинских островах, которая управляет платформой MoonlyCoin, предоставляющей услуги цифрового кошелька и блокчейн-транзакций, а также каналы взаимодействия с сообществом для энтузиастов криптовалют. Наш зарегистрированный адрес:",
      address: "MoonlyCoin Ltd\n100 Crypto Way, Suite 400\nRoad Town, Tortola\nБританские Виргинские острова, VG1122",
      contact: "Если у вас есть вопросы о наших практиках конфиденциальности или об этой Политике конфиденциальности, или если вы хотите воспользоваться любым из ваших прав, описанных в настоящем документе, пожалуйста, свяжитесь с нами по адресу:",
      contactInfo: "Email: privacy@moonlycoin.com\nСтраница контактов: https://moonlycoin.com/contact"
    }
  }
};

const PrivacyPolicy = () => {
  const { lang = 'en' } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const [language, setLanguage] = React.useState<'en' | 'ru'>(lang as 'en' | 'ru');

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ru' : 'en';
    setLanguage(newLang);
    navigate(`/${newLang}/privacy`);
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/80 backdrop-blur-lg border-b border-primary/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to={`/${lang}`} className="text-primary font-bold hover:opacity-80 transition-opacity">
              MoonlyCoin
            </Link>
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-24 flex-grow"
      >
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h1 className="text-3xl font-bold mb-6">{t.title}</h1>
          
          <h2 className="text-xl font-semibold text-primary mb-4">{t.preamble.title}</h2>
          <p className="text-gray-300 mb-6">{t.preamble.content}</p>

          <h2 className="text-xl font-semibold text-primary mb-4">{t.whoWeAre.title}</h2>
          <p className="text-gray-300 mb-6">{t.whoWeAre.content}</p>
          <pre className="text-gray-300 mb-6 whitespace-pre-wrap">{t.whoWeAre.address}</pre>
          <p className="text-gray-300 mb-6">{t.whoWeAre.contact}</p>
          <pre className="text-gray-300 mb-6 whitespace-pre-wrap">{t.whoWeAre.contactInfo}</pre>
        </div>
      </motion.div>

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
                  <Link to={`/${lang}/privacy`} className="text-gray-400 hover:text-primary text-sm">
                    {language === 'en' ? 'Privacy Policy' : 'Политика конфиденциальности'}
                  </Link>
                </li>
                <li>
                  <Link to={`/${lang}/terms`} className="text-gray-400 hover:text-primary text-sm">
                    {language === 'en' ? 'Terms of Service' : 'Условия использования'}
                  </Link>
                </li>
                <li>
                  <Link to={`/${lang}/disclaimer`} className="text-gray-400 hover:text-primary text-sm">
                    {language === 'en' ? 'Risk Disclaimer' : 'Предупреждение о рисках'}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                {language === 'en' ? 'Contact' : 'Контакты'}
              </h3>
              <p className="text-gray-400 text-sm">support@cryptomeme-ai.com</p>
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

export default PrivacyPolicy;
