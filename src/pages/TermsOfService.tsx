
import React from 'react';
import { motion } from "framer-motion";
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const TermsOfService = () => {
  const { lang = 'en' } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const [language, setLanguage] = React.useState<'en' | 'ru'>(lang as 'en' | 'ru');

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ru' : 'en';
    setLanguage(newLang);
    navigate(`/${newLang}/terms`);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/80 backdrop-blur-lg border-b border-primary/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-primary font-bold">TON Society ID</div>
            <div className="flex items-center gap-4">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary-dark"
                onClick={() => window.open('https://telegram.org/', '_blank')}
              >
                {language === 'en' ? 'Open Telegram' : 'Открыть Telegram'}
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
        className="container mx-auto px-4 py-24"
      >
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h1 className="text-3xl font-bold mb-6">{language === 'en' ? 'Terms of Use' : 'Условия использования'}</h1>
          
          <h2 className="text-xl font-semibold text-primary mb-4">{language === 'en' ? 'Preamble' : 'Преамбула'}</h2>
          <p className="text-gray-300 mb-6">
            {language === 'en' ? (
              'Welcome to TON Society ID. By using the TON Society ID("Service"), you as the user ("You" or "Your") are agreeing to be bound by these terms of use ("Terms") of TON Society Limited a British Virgin Islands company ("We" or "Us" or "Our"), all applicable laws and regulations, and agree that You are responsible for compliance with any applicable local laws. If You do not agree with any of these terms, You are prohibited from using this Service. The materials contained in this Service are protected by applicable copyright and trademark law. We reserve the right to change these Terms at any time at Our sole discretion. The Terms in force at the time of Your use of the Service apply. Updated Terms are binding on You with respect to Your use of the Service on or after the date specified in the updated Terms. If You do not agree to the updated Terms, You must stop using the Service. Your continued use of the Service after the date of the updated Terms will constitute Your acceptance of the updated Terms.'
            ) : (
              'Добро пожаловать в TON Society ID. Используя TON Society ID ("Сервис"), вы как пользователь ("Вы") соглашаетесь соблюдать настоящие условия использования ("Условия") компании TON Society Limited, зарегистрированной на Британских Виргинских островах ("Мы"), все применимые законы и правила, и соглашаетесь с тем, что несете ответственность за соблюдение любых применимых местных законов. Если Вы не согласны с любым из этих условий, Вам запрещается использовать этот Сервис. Материалы, содержащиеся в этом Сервисе, защищены применимым законодательством об авторском праве и товарных знаках.'
            )}
          </p>

          {/* Add remaining sections with translations */}
          
          <div className="text-sm text-gray-400 mt-8 pt-4 border-t border-gray-800">
            {language === 'en' ? 'Updated: 21 January 2025' : 'Обновлено: 21 января 2025'}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TermsOfService;
