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
            <div className="text-primary font-bold">MoonlyCoin</div>
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
        className="container mx-auto px-4 py-24"
      >
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h1 className="text-3xl font-bold mb-6">{language === 'en' ? 'Terms of Service' : 'Условия использования'}</h1>
          
          <h2 className="text-xl font-semibold text-primary mb-4">{language === 'en' ? 'Preamble' : 'Преамбула'}</h2>
          <p className="text-gray-300 mb-6">
            {language === 'en' ? (
              'Welcome to the MoonlyCoin platform (the "Service")! By using this Service, you (hereinafter referred to as "You" or "Your") agree to be bound by these Terms of Use (the "Terms") of MoonlyCoin Ltd, a company incorporated in the British Virgin Islands (referred to as "We," "Us," or "Our"), as well as all applicable laws and regulations. If you do not agree with these Terms, you are prohibited from using the Service. All materials provided through the Service are protected by copyright and trademark laws. We reserve the right to modify these Terms at any time, and any new version will become effective upon publication. Your continued use of the Service constitutes your acceptance of the updated Terms.'
            ) : (
              'Добро пожаловать на платформу MoonlyCoin ("Сервис")! Используя этот Сервис, вы (далее "Вы") соглашаетесь соблюдать настоящие Условия использования ("Условия") компании MoonlyCoin Ltd, зарегистрированной на Британских Виргинских островах ("Мы"), а также все применимые законы и правила. Если вы не согласны с этими Условиями, вам запрещается использовать Сервис. Все материалы, предоставляемые через Сервис, защищены законами об авторском праве и товарных знаках. Мы оставляем за собой право изменять эти Условия в любое время, и любая новая версия вступает в силу после публикации. Продолжение использования Сервиса означает ваше согласие с обновленными Условиями.'
            )}
          </p>

          <h2 className="text-xl font-semibold text-primary mb-4">{language === 'en' ? 'About the Service' : 'О Сервисе'}</h2>
          <p className="text-gray-300 mb-6">
            {language === 'en' ? (
              'The MoonlyCoin Service provides users with access to a digital platform for working with the meme coin MoonlyCoin. Specifically, the Service allows you to: • Create and manage digital wallets. Users can store, transfer, and exchange MoonlyCoin using the platform\'s user-friendly interface. • Conduct transactions. The Service facilitates operations with MoonlyCoin using state-of-the-art blockchain technology. • Access up-to-date information. Users can receive news, updates, and notifications about the development of the MoonlyCoin project, as well as information on promotions, reward programs, and voting. • Integrate with other services. Where available, third-party applications and partner platforms may allow you to use your MoonlyCoin account for authentication and access additional features.'
            ) : (
              'Сервис MoonlyCoin предоставляет пользователям доступ к цифровой платформе для работы с мем-койном MoonlyCoin. В частности, Сервис позволяет: • Создавать и управлять цифровыми кошельками. Пользователи могут хранить, переводить и обменивать MoonlyCoin, используя удобный интерфейс платформы. • Проводить транзакции. Сервис обеспечивает операции с MoonlyCoin, используя современную технологию блокчейн. • Получать актуальную информацию. Пользователи могут получать новости, обновления и уведомления о развитии проекта MoonlyCoin, а также информацию о акциях, программах вознаграждений и голосованиях. • Интегрироваться с другими сервисами. Где это доступно, сторонние приложения и платформы-партнеры могут позволить использовать ваш аккаунт MoonlyCoin для аутентификации и доступа к дополнительным функциям.'
            )}
          </p>

          <h2 className="text-xl font-semibold text-primary mb-4">{language === 'en' ? 'Eligibility' : 'Право на использование'}</h2>
          <p className="text-gray-300 mb-6">
            {language === 'en' ? (
              'By using the Service, you confirm that: • You have the authority and legal capacity to enter into these Terms. • Your use of the Service does not violate the laws of your country of residence or citizenship. • You are using the Service solely for personal, non-commercial purposes.'
            ) : (
              'Используя Сервис, вы подтверждаете, что: • У вас есть полномочия и правоспособность для заключения этих Условий. • Ваше использование Сервиса не нарушает законы вашей страны проживания или гражданства. • Вы используете Сервис исключительно для личных, некоммерческих целей.'
            )}
          </p>

          <h2 className="text-xl font-semibold text-primary mb-4">{language === 'en' ? 'Use of the Service' : 'Использование Сервиса'}</h2>
          <p className="text-gray-300 mb-6">
            {language === 'en' ? (
              'We reserve the right to modify, suspend, or terminate the Service (or any of its features) at any time without prior notice. We do not guarantee that the Service will operate continuously or without errors, and we are not responsible for any temporary or permanent unavailability of the Service.'
            ) : (
              'Мы оставляем за собой право изменять, приостанавливать или прекращать Сервис (или любую из его функций) в любое время без предварительного уведомления. Мы не гарантируем, что Сервис будет работать непрерывно или без ошибок, и мы не несем ответственности за любую временную или постоянную недоступность Сервиса.'
            )}
          </p>

          <h2 className="text-xl font-semibold text-primary mb-4">{language === 'en' ? 'User Obligations' : 'Обязанности Пользователя'}</h2>
          <p className="text-gray-300 mb-6">
            {language === 'en' ? (
              'You agree not to use the Service for: • Distributing materials that promote illegal activities, violence, extremism, or racial, religious, or ethnic hatred. • Publishing content that is pornographic, offensive, obscene, or otherwise unacceptable. • Disseminating instructions or information that facilitate the commission of criminal acts. • Violating the rights of others or the requirements of the law (including the publication of confidential information, state secrets, or trade secrets). • Using automated means (such as scraping, bots, etc.) to extract or copy the content of the Service without our written permission. • Circumventing or violating any security measures implemented to protect the Service.'
            ) : (
              'Вы соглашаетесь не использовать Сервис для: • Распространения материалов, которые пропагандируют незаконные действия, насилие, экстремизм или расовую, религиозную или этническую ненависть. • Публикации контента, который является порнографическим, оскорбительным, непристойным или иным образом неприемлемым. • Распространения инструкций или информации, которые способствуют совершению преступных действий. • Нарушения прав других лиц или требований закона (включая публикацию конфиденциальной информации, государственных секретов или коммерческих тайн). • Использования автоматизированных средств (таких как скрейпинг, боты и т. д.) для извлечения или копирования контента Сервиса без нашего письменного разрешения. • Обхода или нарушения любых мер безопасности, внедренных для защиты Сервиса.'
            )}
          </p>

          <h2 className="text-xl font-semibold text-primary mb-4">{language === 'en' ? 'Third-Party Applications and Links' : 'Сторонние Приложения и Ссылки'}</h2>
          <p className="text-gray-300 mb-6">
            {language === 'en' ? (
              'The Service may contain links to third-party websites, applications, or services (collectively, "Third-Party Links"). These links are provided solely for your convenience. We do not control the content of these resources and are not responsible for their operation, privacy policies, or other terms.'
            ) : (
              'Сервис может содержать ссылки на сторонние веб-сайты, приложения или услуги (в совокупности "Сторонние Ссылки"). Эти ссылки предоставляются исключительно для вашего удобства. Мы не контролируем содержание этих ресурсов и не несем ответственности за их работу, политику конфиденциальности или другие условия.'
            )}
          </p>

          <h2 className="text-xl font-semibold text-primary mb-4">{language === 'en' ? 'Intellectual Property Rights' : 'Права Интеллектуальной Собственности'}</h2>
          <p className="text-gray-300 mb-6">
            {language === 'en' ? (
              'All content, design, software, and other materials available through the Service are the property of MoonlyCoin Ltd, its licensors, or other rights holders and are protected by applicable copyright, trademark, patent, and other laws. Without our prior written consent, you are prohibited from: • Copying, modifying, distributing, publishing, or otherwise using any materials from the Service. • Reverse engineering, decompiling, or otherwise attempting to extract the source code or architecture of the Service.'
            ) : (
              'Весь контент, дизайн, программное обеспечение и другие материалы, доступные через Сервис, являются собственностью MoonlyCoin Ltd, ее лицензиаров или других правообладателей и защищены применимыми законами об авторском праве, товарных знаках, патентах и других законах. Без нашего предварительного письменного согласия вам запрещается: • Копировать, изменять, распространять, публиковать или иным образом использовать любые материалы из Сервиса. • Обратная разработка, декомпиляция или иные попытки извлечь исходный код или архитектуру Сервиса.'
            )}
          </p>

          <h2 className="text-xl font-semibold text-primary mb-4">{language === 'en' ? 'Disclaimer of Warranties' : 'Отказ от Гарантий'}</h2>
          <p className="text-gray-300 mb-6">
            {language === 'en' ? (
              'The Service is provided "as is" and "as available." We do not guarantee that: • The Service will operate without failures, errors, or interruptions. • The information and materials provided through the Service are accurate, complete, and up-to-date. • The Service will meet your expectations or requirements. Any decisions made based on the information obtained through the Service are made at your own risk.'
            ) : (
              'Сервис предоставляется "как есть" и "по мере доступности". Мы не гарантируем, что: • Сервис будет работать без сбоев, ошибок или перерывов. • Информация и материалы, предоставляемые через Сервис, являются точными, полными и актуальными. • Сервис будет соответствовать вашим ожиданиям или требованиям. Любые решения, принятые на основе информации, полученной через Сервис, принимаются на ваш собственный риск.'
            )}
          </p>

          <h2 className="text-xl font-semibold text-primary mb-4">{language === 'en' ? 'Limitation of Liability' : 'Ограничение Ответственности'}</h2>
          <p className="text-gray-300 mb-6">
            {language === 'en' ? (
              'To the fullest extent permitted by law, MoonlyCoin Ltd, as well as its affiliates, employees, and partners, shall not be liable for any direct, indirect, incidental, punitive, or other damages (including lost profits, data loss, damage to reputation, etc.) arising from your use of or inability to use the Service, even if advised of the possibility of such damages.'
            ) : (
              'В максимальной степени, разрешенной законом, MoonlyCoin Ltd, а также ее аффилированные лица, сотрудники и партнеры, не несут ответственности за любые прямые, косвенные, случайные, штрафные или другие убытки (включая упущенную прибыль, потерю данных, ущерб репутации и т. д.), возникающие в результате вашего использования или невозможности использования Сервиса, даже если им было сообщено о возможности таких убытков.'
            )}
          </p>

          <h2 className="text-xl font-semibold text-primary mb-4">{language === 'en' ? 'Indemnification' : 'Компенсация Убытков'}</h2>
          <p className="text-gray-300 mb-6">
            {language === 'en' ? (
              'You agree to indemnify, defend, and hold harmless MoonlyCoin Ltd, its affiliates, and their respective employees and agents from any claims, expenses, losses, or demands, including reasonable attorney’s fees, arising from your violation of these Terms or unauthorized use of the Service.'
            ) : (
              'Вы соглашаетесь компенсировать, защищать и освобождать от ответственности MoonlyCoin Ltd, ее аффилированные лица и их сотрудников и агентов от любых требований, расходов, убытков или требований, включая разумные гонорары адвокатов, возникающих в результате вашего нарушения этих Условий или несанкционированного использования Сервиса.'
            )}
          </p>

          <h2 className="text-xl font-semibold text-primary mb-4">{language === 'en' ? 'Privacy Policy' : 'Политика Конфиденциальности'}</h2>
          <p className="text-gray-300 mb-6">
            {language === 'en' ? (
              'The collection, use, and protection of your personal data are governed by our Privacy Policy. By using the Service, you agree to the terms outlined in the Privacy Policy.'
            ) : (
              'Сбор, использование и защита ваших персональных данных регулируются нашей Политикой конфиденциальности. Используя Сервис, вы соглашаетесь с условиями, изложенными в Политике конфиденциальности.'
            )}
          </p>

          <h2 className="text-xl font-semibold text-primary mb-4">{language === 'en' ? 'Feedback' : 'Обратная Связь'}</h2>
          <p className="text-gray-300 mb-6">
            {language === 'en' ? (
              'We welcome your feedback and suggestions for improving the Service. By providing feedback, you agree that MoonlyCoin Ltd may use it without any restrictions, compensation, or notification.'
            ) : (
              'Мы приветствуем ваши отзывы и предложения по улучшению Сервиса. Предоставляя обратную связь, вы соглашаетесь с тем, что MoonlyCoin Ltd может использовать ее без каких-либо ограничений, компенсации или уведомления.'
            )}
          </p>

          <h2 className="text-xl font-semibold text-primary mb-4">{language === 'en' ? 'Changes to the Service' : 'Изменения в Сервисе'}</h2>
          <p className="text-gray-300 mb-6">
            {language === 'en' ? (
              'We reserve the right to modify, suspend, or discontinue the Service (or any of its features) at any time without prior notice. Such changes may be made for technical or legal reasons.'
            ) : (
              'Мы оставляем за собой право изменять, приостанавливать или прекращать Сервис (или любую из его функций) в любое время без предварительного уведомления. Такие изменения могут быть внесены по техническим или юридическим причинам.'
            )}
          </p>

          <h2 className="text-xl font-semibold text-primary mb-4">{language === 'en' ? 'Violation of the Terms' : 'Нарушение Условий'}</h2>
          <p className="text-gray-300 mb-6">
            {language === 'en' ? (
              'If we suspect that you have violated these Terms, we reserve the right, without prior notice, to: • Suspend or terminate your access to the Service. • Disclose information about you if necessary for an investigation or to protect our rights. • Take any other actions permitted by law, including initiating legal proceedings.'
            ) : (
              'Если мы подозреваем, что вы нарушили эти Условия, мы оставляем за собой право, без предварительного уведомления: • Приостановить или прекратить ваш доступ к Сервису. • Раскрыть информацию о вас, если это необходимо для расследования или для защиты наших прав. • Принять любые другие действия, разрешенные законом, включая возбуждение судебных разбирательств.'
            )}
          </p>

          <h2 className="text-xl font-semibold text-primary mb-4">{language === 'en' ? 'Changes to the Terms' : 'Изменения в Условиях'}</h2>
          <p className="text-gray-300 mb-6">
            {language === 'en' ? (
              'We may periodically update these Terms. Significant changes will be communicated by publishing the updated version on the Service. Your continued use of the Service after such changes constitutes your acceptance of the updated Terms. What constitutes a "significant change" is determined at our sole discretion.'
            ) : (
              'Мы можем периодически обновлять эти Условия. Существенные изменения будут сообщены путем публикации обновленной версии на Сервисе. Ваше продолжение использования Сервиса после таких изменений означает ваше согласие с обновленными Условиями. Что составляет "существенное изменение", определяется по нашему усмотрению.'
            )}
          </p>

          <h2 className="text-xl font-semibold text-primary mb-4">{language === 'en' ? 'Governing Law and Jurisdiction' : 'Применимое Право и Юрисдикция'}</h2>
          <p className="text-gray-300 mb-6">
            {language === 'en' ? (
              'These Terms shall be governed by and construed in accordance with the laws of the British Virgin Islands. Any disputes arising in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of the British Virgin Islands.'
            ) : (
              'Настоящие Условия регулируются и толкуются в соответствии с законами Британских Виргинских островов. Любые споры, возникающие в связи с этими Условиями, подлежат исключительной юрисдикции судов Британских Виргинских островов.'
            )}
          </p>

          <div className="text-sm text-gray-400 mt-8 pt-4 border-t border-gray-800">
            {language === 'en' ? 'Updated: 21 January 2025' : 'Обновлено: 21 января 2025'}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TermsOfService;
