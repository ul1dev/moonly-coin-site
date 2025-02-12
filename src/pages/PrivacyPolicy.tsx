import React from 'react';
import { motion } from "framer-motion";
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  const { lang = 'en' } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const [language, setLanguage] = React.useState<'en' | 'ru'>(lang as 'en' | 'ru');

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ru' : 'en';
    setLanguage(newLang);
    navigate(`/${newLang}/privacy`);
  };

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
          <h1 className="text-3xl font-bold mb-6">{language === 'en' ? 'Privacy Policy' : 'Политика конфиденциальности'}</h1>
          
          {language === 'en' ? (
            <>
              <h2 className="text-xl font-semibold text-primary mb-4">Preamble</h2>
              <p className="text-gray-300 mb-6">
                This Privacy Policy ("Privacy Policy"), together with our Terms of Use ("Terms"), sets out the basis for our collection, use, and disclosure of personal information about individuals who use the MoonlyCoin platform (the "Service"), when you interact with us, enter into agreements with us, communicate with us, or otherwise engage with our services. It also explains the measures we take to keep your information secure. For the purposes of this Privacy Policy, "Personal Information" means any data that can directly or indirectly identify you (for example, your name, contact details, IP address, or information regarding your use of our Service). We comply with the Data Protection Act, 2021 of the British Virgin Islands and, to the extent applicable, with the data protection laws of other jurisdictions—including, but not limited to, the European General Data Protection Regulation (the "GDPR"). We process your data in a lawful, fair, and transparent manner.
              </p>

              <h2 className="text-xl font-semibold text-primary mb-4">Who We Are</h2>
              <p className="text-gray-300 mb-6">
                MoonlyCoin Ltd ("We," "Us," or "Our") is a company incorporated in the British Virgin Islands that operates the MoonlyCoin platform, offering digital wallet and blockchain transaction services as well as community engagement channels for cryptocurrency enthusiasts. Our registered address is [Insert Address]. We are the controller of the personal information processed under this Privacy Policy. If you have any questions about our privacy practices or this Privacy Policy, or if you wish to exercise any of your rights described herein, please contact us at [Insert Contact Link].
              </p>

              {/* ... Additional English content sections */}
            </>
          ) : (
            <>
              <h2 className="text-xl font-semibold text-primary mb-4">Преамбула</h2>
              <p className="text-gray-300 mb-6">
                Эта Политика конфиденциальности ("Политика конфиденциальности"), вместе с нашими Условиями использования ("Условия"), устанавливает основу для сбора, использования и раскрытия персональной информации о лицах, использующих платформу MoonlyCoin ("Сервис"), когда вы взаимодействуете с нами, заключаете с нами соглашения, общаетесь с нами или иным образом взаимодействуете с нашими услугами.
              </p>

              <h2 className="text-xl font-semibold text-primary mb-4">Кто мы</h2>
              <p className="text-gray-300 mb-6">
                MoonlyCoin Ltd ("Мы" или "Наш") - это компания, зарегистрированная на Британских Виргинских островах, которая управляет платформой MoonlyCoin, предоставляя услуги цифрового кошелька и блокчейн-транзакций, а также каналы взаимодействия с сообществом для энтузиастов криптовалют.
              </p>

              {/* ... Additional Russian content sections */}
            </>
          )}

          <div className="text-sm text-gray-400 mt-8 pt-4 border-t border-gray-800">
            {language === 'en' ? 'Last Updated: 21 January 2025' : 'Обновлено: 21 января 2025'}
          </div>
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
                  <Link to="/privacy" className="text-gray-400 hover:text-primary text-sm">
                    {language === 'en' ? 'Privacy Policy' : 'Политика конфиденциальности'}
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-400 hover:text-primary text-sm">
                    {language === 'en' ? 'Terms of Service' : 'Условия использования'}
                  </Link>
                </li>
                <li>
                  <Link to="/disclaimer" className="text-gray-400 hover:text-primary text-sm">
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
