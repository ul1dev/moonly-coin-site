
import React from 'react';
import { motion } from "framer-motion";
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import PolicySection from "@/components/privacy/PolicySection";
import { privacyPolicyTranslations } from "@/locales/privacyPolicy";

const PrivacyPolicy = () => {
  const { lang = 'en' } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const [language, setLanguage] = React.useState<'en' | 'ru'>(lang as 'en' | 'ru');

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ru' : 'en';
    setLanguage(newLang);
    navigate(`/${newLang}/privacy`);
  };

  const t = privacyPolicyTranslations[language];

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
          
          <PolicySection {...t.preamble} />
          
          <PolicySection {...t.whoWeAre} />
          <pre className="text-gray-300 mb-6 whitespace-pre-wrap">{t.whoWeAre.address}</pre>
          <p className="text-gray-300 mb-6">{t.whoWeAre.contact}</p>
          <pre className="text-gray-300 mb-6 whitespace-pre-wrap">{t.whoWeAre.contactInfo}</pre>
          
          <PolicySection {...t.informationWeCollect} />
          <PolicySection {...t.informationFromOtherSources} />
          <PolicySection {...t.howYourInformationIsUsed} />
          <PolicySection {...t.whoHasAccess} />
          <PolicySection {...t.yourRights} />
          <PolicySection {...t.rightToConfirmation} />
          <PolicySection {...t.rightToAccess} />
          <PolicySection {...t.rightToRectification} />
          <PolicySection {...t.rightToErasure} />
          <PolicySection {...t.rightToRestriction} />
          <PolicySection {...t.rightToObject} />
          <PolicySection {...t.rightToDataPortability} />
          <PolicySection {...t.automatedDecisionMaking} />
          <PolicySection {...t.rightToWithdrawConsent} />
          <PolicySection {...t.manifestlyUnfoundedRequests} />
          
          <p className="text-gray-300 mb-6">{t.marketingPreferences.content}</p>
          
          <PolicySection {...t.updateInformation} />
          <PolicySection {...t.securityMeasures} />
          <PolicySection {...t.profiling} />
          <PolicySection {...t.useOfCookies} />
          
          <p className="text-gray-300 mb-6">{t.strictlyNecessaryCookies.content}</p>
          
          <PolicySection {...t.linksToOtherSites} />
          <PolicySection {...t.ifYouAreUnder18} />
          <PolicySection {...t.whereWeStoreInformation} />
          <PolicySection {...t.miscellaneous} />
          <PolicySection {...t.updatingPolicy} />
          
          <div className="mt-8 pt-8 border-t border-primary/10">
            <p className="text-sm text-gray-400 italic">{t.lastUpdated}</p>
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
