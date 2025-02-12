<lov-code>
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

  // Define translations
  const translations = {
    en: {
      title: "Privacy Policy",
      preamble: {
        title: "Preamble",
        content: "This Privacy Policy (\"Privacy Policy\"), together with our Terms of Use (\"Terms\"), sets out the basis for our collection, use, and disclosure of personal information about individuals who use the MoonlyCoin platform (the \"Service\"), when you interact with us, enter into agreements with us, communicate with us, or otherwise engage with our services. It also explains the measures we take to keep your information secure. For the purposes of this Privacy Policy, \"Personal Information\" means any data that can directly or indirectly identify you (for example, your name, contact details, IP address, or information regarding your use of our Service). We comply with the Data Protection Act, 2021 of the British Virgin Islands and, to the extent applicable, with the data protection laws of other jurisdictions—including, but not limited to, the European General Data Protection Regulation (the \"GDPR\"). We process your data in a lawful, fair, and transparent manner."
      },
      whoWeAre: {
        title: "Who We Are",
        content: "MoonlyCoin Ltd (\"We,\" \"Us,\" or \"Our\") is a company incorporated in the British Virgin Islands that operates the MoonlyCoin platform, offering digital wallet and blockchain transaction services as well as community engagement channels for cryptocurrency enthusiasts. Our registered address is:",
        address: `MoonlyCoin Ltd
100 Crypto Way, Suite 400
Road Town, Tortola
British Virgin Islands, VG1122`,
        contact: "If you have any questions about our privacy practices or this Privacy Policy, or if you wish to exercise any of your rights described herein, please contact us at:",
        contactInfo: `Email: privacy@moonlycoin.com
Contact Page: https://moonlycoin.com/contact`
      },
      informationWeCollect: {
        title: "Information We Collect from You",
        content: "We collect limited information about you to provide and improve the functionality of our Service, including but not limited to:",
        list: [
          "Your Telegram account data (such as your username, Telegram ID, and publicly displayed name) if you access our Service via the Telegram mini-app.",
          "Your blockchain wallet information (such as your wallet address) to enable features that interact with blockchain systems.",
          "Basic technical data, including your IP address, approximate location, device type, operating system, and browser, to ensure the security and proper operation of our Service."
        ],
        additionalContent: "We do not collect email addresses or other personal information unless you choose to provide them. By providing us with this information, you expressly consent to our use of your personal information in accordance with this Privacy Policy."
      },
      informationFromOtherSources: {
        title: "Information We Receive from Other Sources",
        content: "We may receive information about you if you use other services operated by us or our partners. We also work with third parties—including contractors, project partners, service providers, and analytics providers—and may receive information about you from them. Such information may be combined with the information you provide directly to us."
      },
      howYourInformationIsUsed: {
        title: "How Your Information Is Used",
        content: "We may use personal information about you for the following purposes:",
        list: [
          "To ensure the proper functioning of our Service, including maintaining, supporting, and improving its features and performance.",
          "To provide you with relevant updates and news about the MoonlyCoin project.",
          "To send you personalized communications that you have requested or that may be of interest to you, based on your activity on our Service or the services of our partners. These communications may include information about promotions, events, and reward programs.",
          "To analyze user behavior and measure the effectiveness of our Service, thereby helping us make suggestions or recommendations for improvements and related services.",
          "For analytics and profiling to create aggregate trend reports, understand how users access and use our Service, gauge responses to marketing campaigns, and determine the most effective marketing channels and messages.",
          "To seek your feedback or comments regarding our Service.",
          "To notify you of changes to our Service, policies, and Terms of Use."
        ],
        additionalContent: "We regularly review our retention periods for personal information. We will retain your personal information for as long as necessary for the relevant activity, to comply with legal requirements, or to defend against legal claims. After the applicable retention period expires, your data will be securely destroyed in accordance with applicable laws and regulations."
      },
      whoHasAccess: {
        title: "Who Has Access to Your Information",
        content: "In certain cases, we may share your information with trusted third-party service providers, agents, subcontractors, or affiliated organizations to perform specific tasks and deliver services to you—such as processing and storing information or sending communications."
      },
      yourRights: {
        title: "Your Choices and Your Rights",
        content: "You have a number of rights regarding the personal information we hold about you. Some of these rights may be subject to limitations depending on the circumstances, and exercising them may affect our ability to maintain a business relationship with you. These rights include:"
      },
      rightToConfirmation: {
        title: "Right to Confirmation",
        content: "You have the right to obtain confirmation as to whether your personal information is being processed by us. To exercise this right, please contact us as provided in section 1."
      },
      rightToAccess: {
        title: "Right to Access",
        content: "You have the right to access your personal information held by us at any time and to receive a copy of that information. This includes details such as:",
        list: [
          "The purposes for which your information is processed;",
          "The categories of personal information concerned;",
          "The recipients or categories of recipients to whom your information has been or will be disclosed;",
          "The envisaged period for which your information will be stored or, if that is not possible, the criteria used to determine that period;",
          "Your right to request rectification or erasure of your personal information, or the restriction of its processing, and your right to object to such processing;",
          "Your right to lodge a complaint with a supervisory authority;",
          "Where applicable, information regarding the source of your information if it was not collected directly from you; and",
          "Information about the existence of automated decision-making, including profiling, and meaningful details about the logic involved, as well as the significance and expected consequences of such processing for you."
        ],
        additionalContent: "To exercise your right to access, please contact us as set forth in section 1."
      },
      rightToRectification: {
        title: "Right to Rectification",
        content: "You have the right to request the prompt correction of inaccurate personal information about you. You also have the right to have incomplete information completed by providing a supplementary statement. To exercise this right, please contact us as provided in section 1."
      },
      rightToErasure: {
        title: "Right to Erasure (Right to be Forgotten)",
        content: "You have the right to request that we erase your personal information without undue delay if:",
        list: [
          "The information is no longer necessary for the purposes for which it was collected or processed;",
          "You withdraw the consent on which the processing is based and no other legal ground for the processing exists;",
          "You object to the processing under applicable law and there are no overriding legitimate grounds for the processing;",
          "The information has been unlawfully processed;",
          "The information must be erased for compliance with a legal obligation; and/or",
          "The information has been collected in relation to the provision of information society services, as applicable."
        ],
        additionalContent: "To request erasure, please contact us as indicated in section 1."
      },
      rightToRestriction: {
        title: "Right to Restriction of Processing",
        content: "You have the right to request the restriction of processing of your personal information under the following circumstances:",
        list: [
          "If you contest the accuracy of your information, for a period that allows us to verify its accuracy;",
          "If the processing is unlawful and you oppose erasure, requesting instead a restriction on its use;",
          "If we no longer need the information for processing but you require it for the establishment, exercise, or defense of legal claims; and/or",
          "If you have objected to processing pending verification of whether our legitimate grounds override your interests."
        ],
        additionalContent: "If any of these conditions apply and you wish to request a restriction on processing, please contact us."
      },
      rightToObject: {
        title: "Right to Object",
        content: "You have the right to object to the processing of your personal information on grounds relating to your particular situation, especially when processing is based on legitimate interests or for direct marketing purposes. Should you object, we will cease processing your personal information unless we can demonstrate compelling legitimate grounds for the processing that override your interests, rights, and freedoms, or if the processing is necessary for the establishment, exercise, or defense of legal claims. To exercise this right, please contact us."
      },
      rightToDataPortability: {
        title: "Right to Data Portability",
        content: "You have the right to receive the personal information that you have provided to us in a structured, commonly used, and machine-readable format. You also have the right to transmit that data to another controller without hindrance from us, provided that the processing is based on consent or a contract and is carried out by automated means. If technically feasible and if it does not adversely affect the rights and freedoms of others, you may also request that your personal information be transmitted directly from one controller to another. To exercise your right to data portability, please contact us."
      },
      automatedDecisionMaking: {
        title: "Automated Individual Decision-Making, Including Profiling",
        content: "You have the right not to be subject to a decision based solely on automated processing, including profiling, that produces legal effects or similarly significantly affects you, unless such processing is:",
        list: [
          "Necessary for entering into or performing a contract between you and us;",
          "Based on your explicit consent; or",
          "Authorized by applicable law with appropriate safeguards in place."
        ],
        additionalContent: "While we currently use profiling only to tailor our communications and services to your interests, should you wish to exercise your rights regarding automated decision-making, please contact us."
      },
      rightToWithdrawConsent: {
        title: "Right to Withdraw Data Protection Consent",
        content: "You have the right to withdraw your consent to the processing of your personal information at any time. To exercise this right, please contact us."
      },
      manifestlyUnfoundedRequests: {
        title: "Manifestly Unfounded or Excessive Requests",
        content: "While you may exercise your rights free of charge, we reserve the right to charge a reasonable fee for requests that are manifestly unfounded or excessive. We may also refuse to comply with such requests."
      },
      marketingPreferences: {
        content: "Additionally, you have the right to instruct us not to process your personal information for marketing purposes. You can exercise this right by adjusting your preferences on our data collection forms or by contacting us via our contact page. We will not contact you for marketing purposes unless you have provided your prior consent, and you can change your marketing preferences at any time."
      },
      updateInformation: {
        title: "How You Can Update Your Information",
        content: "The accuracy of your information is important to us. If you need to update or correct your personal information, please contact us at:",
        contactInfo: `Email: update@moonlycoin.com`,
        additionalContent: "or update your details directly within your account settings on the MoonlyCoin platform."
      },
      securityMeasures: {
        title: "Security Measures to Protect Your Information",
        content: "When you provide us with personal information, we take steps to ensure that it is handled securely. The security of your personal information is of paramount importance to MoonlyCoin Ltd. We have implemented appropriate physical, electronic, and organizational procedures to safeguard the personal information collected through our Service and to ensure its integrity and confidentiality. Although we strive to protect your information, please note that non-sensitive details (such as your email address) may be transmitted unencrypted over the internet, and no transmission method is completely secure. You transmit your information at your own risk, and once we receive it, we use robust security measures to protect it."
      },
      profiling: {
        title: "Profiling",
        content: "We may analyze your personal information to create a profile of your preferences and interests in order to provide you with tailored information and recommendations about our products and services. We may also supplement this profile with additional information from external sources to improve our service offerings."
      },
      useOfCookies: {
        title: "Use of Cookies",
        content: "Our Service uses cookies—small text files stored on your device—to distinguish you from other users and to enhance your experience. Cookies enable features such as personalized content, social media integration, and traffic analysis. Some cookies may be placed by third-party services appearing on our pages. By continuing to use our Service, you agree to our use of cookies. We use different types of cookies, including:"
      },
      strictlyNecessaryCookies: {
        content: "Strictly Necessary Cookies: These cookies are essential for the proper functioning of the Service and cannot be switched off in our systems. They are typically set in response to actions you take (such as setting your privacy preferences, logging in, or filling out forms) and enable basic functions like page navigation and access to secure areas of the Service."
      },
      linksToOtherSites: {
        title: "Links to Other Websites, Apps, or Mini Apps",
        content: "Our Service may contain links to other websites, applications, or mini apps operated by third parties. This Privacy Policy applies solely to our Service. We encourage you to review the privacy policies of any other websites, apps, or mini apps that you access via links from our Service. We are not responsible for the privacy practices of those third parties."
      },
      ifYouAreUnder18: {
        title: "If You Are 18 or Under",
        content: "We are committed to protecting the privacy of children. If you are under 18, please obtain your parent or guardian's permission before providing any personal information or using our Service."
      },
      whereWeStoreInformation: {
        title: "Where We Store Your Personal Information",
        content: "The data we collect from you may be transferred to, stored in, and processed in countries outside the British Virgin Islands. In such cases, the local laws governing data protection may differ from those in the British Virgin Islands. We only transfer data when it is necessary for the performance of a contract, for the exercise or defense of legal claims, based on your explicit consent, or subject to appropriate safeguards (such as standard contractual clauses approved by relevant authorities). Although we take reasonable steps to protect your personal information during transmission and storage, the internet is not completely secure, and any transmission is at your own risk. Once we have received your information, we use stringent procedures and security measures to prevent unauthorized access."
      },
      miscellaneous: {
        title: "Miscellaneous",
        content: "If any provision of this Privacy Policy is found to be invalid, illegal, or unenforceable by a court or competent authority, that provision (or the relevant part thereof) will be deemed deleted to the minimum extent necessary and will not affect the validity or enforceability of the remaining provisions. Unless otherwise agreed, no delay or omission in exercising any right or remedy shall be considered a waiver of that right or remedy. All matters relating to this Privacy Policy and any disputes arising from it (including non-contractual disputes) shall be governed by and construed in accordance with the laws of the British Virgin Islands, without regard to its conflict of law rules. Any legal proceedings arising out of or related to this Privacy Policy shall be instituted exclusively in the courts of the British Virgin Islands, although we reserve the right to bring any suit or claim for breach of these Terms in your country of residence or any other relevant jurisdiction. You waive any objections to the jurisdiction or venue of such courts."
      },
      updatingPolicy: {
        title: "Updating and Changing This Privacy Policy",
        content: "Due to the continuous development of our Service and changes in legal or regulatory requirements, we may update this Privacy Policy from time to time. Your continued use of our Service after any changes are published constitutes your acceptance of the revised Privacy Policy."
      },
      lastUpdated: "Last Updated: 21 January 2025"
    },
    ru: {
      title: "Политика конфиденциальности",
      preamble: {
        title: "Преамбула",
        content: "Настоящая Политика конфиденциальности («Политика конфиденциальности»), вместе с нашими Условиями использования («Условия»), устанавливает основу для сбора, использования и раскрытия персональных данных о лицах, использующих платформу MoonlyCoin («Сервис»), когда вы взаимодействуете с нами, заключаете с нами соглашения, общаетесь с нами или иным образом взаимодействуете с нашими услугами. Она также объясняет меры, которые мы принимаем для обеспечения безопасности вашей информации. Для целей настоящей Политики конфиденциальности «Персональные данные» означают любые данные, которые могут прямо или косвенно идентифицировать вас (например, ваше имя, контактные данные, IP-адрес или информация об использовании вами нашего Сервиса). Мы соблюдаем Закон о защите данных 2021 года Британских Виргинских островов и, в применимой степени, законы о защите данных других юрисдикций, включая, помимо прочего, Общий регламент по защите данных Европейского Союза (GDPR). Мы обрабатываем ваши данные законным, справедливым и прозрачным образом."
      },
      whoWeAre: {
        title: "Кто мы",
        content: "MoonlyCoin Ltd («Мы», «Нас» или «Наш») – это компания, зарегистрированная на Британских Виргинских островах, которая управляет платформой MoonlyCoin, предоставляющей услуги цифрового кошелька и блокчейн-транзакций, а также каналы взаимодействия с сообществом для энтузиастов криптовалют. Наш зарегистрированный адрес:",
        address: `MoonlyCoin Ltd
100 Crypto Way, Suite 400
Road Town, Tortola
Британские Виргинские острова, VG1122`,
        contact: "Если у вас есть вопросы о наших практиках конфиденциальности или об этой Политике конфиденциальности, или если вы хотите воспользоваться любым из ваших прав, описанных в настоящем документе, пожалуйста, свяжитесь с нами по адресу:",
        contactInfo: `Email: privacy@moonlycoin.com
Страница контактов: https://moonlycoin.com/contact`
      },
      informationWeCollect: {
        title: "Информация, которую мы собираем о вас",
        content: "Мы собираем ограниченную информацию о вас для предоставления и улучшения функциональности нашего Сервиса, включая, но не ограничиваясь:",
        list: [
          "Данные вашей учетной записи Telegram (такие как ваше имя пользователя, Telegram ID и общедоступное имя), если вы получаете доступ к нашему Сервису через мини-приложение Telegram.",
          "Информация о вашем блокчейн-кошельке (например, адрес вашего кошелька) для включения функций, взаимодействующих с блокчейн-системами.",
          "Основные технические данные, включая ваш IP-адрес, приблизительное местоположение, тип устройства, операционную систему и браузер, для обеспечения безопасности и надлежащей работы нашего Сервиса."
        ],
        additionalContent: "Мы не собираем адреса электронной почты или другую личную информацию, если вы не решите предоставить их. Предоставляя нам эту информацию, вы явно соглашаетесь на использование вашей личной информации в соответствии с настоящей Политикой конфиденциальности."
      },
      informationFromOtherSources: {
        title: "Информация, которую мы получаем из других источников",
        content: "Мы можем получать информацию о вас, если вы используете другие сервисы, управляемые нами или нашими партнерами. Мы также работаем с третьими сторонами, включая подрядчиков, партнеров по проектам, поставщиков услуг и поставщиков аналитики, и можем получать информацию о вас от них. Такая информация может быть объединена с информацией, которую вы предоставляете нам напрямую."
      },
      howYourInformationIsUsed: {
        title: "Как используется ваша информация",
        content: "Мы можем использовать личную информацию о вас для следующих целей:",
        list: [
          "Для обеспечения надлежащего функционирования нашего Сервиса, включая поддержание, поддержку и улучшение его функций и производительности.",
          "Чтобы предоставлять вам соответствующие обновления и новости о проекте MoonlyCoin.",
          "Чтобы отправлять вам персонализированные сообщения, которые вы запросили или которые могут быть вам интересны, на основе вашей активности в нашем Сервисе или сервисах наших партнеров. Эти сообщения могут включать информацию об акциях, событиях и программах вознаграждений.",
          "Для анализа поведения пользователей и измерения эффективности нашего Сервиса, что помогает нам давать предложения или рекомендации по улучшениям и связанным услугам.",
          "Для аналитики и профилирования для создания сводных отчетов о тенденциях, понимания того, как пользователи получают доступ и используют наш Сервис, оценки ответов на маркетинговые кампании и определения наиболее эффективных маркетинговых каналов и сообщений.",
          "Чтобы запросить ваши отзывы или комментарии относительно нашего Сервиса.",
          "Чтобы уведомлять вас об изменениях в нашем Сервисе, политиках и Условиях использования."
        ],
        additionalContent: "Мы регулярно пересматриваем сроки хранения личной информации. Мы будем хранить вашу личную информацию до тех пор, пока это необходимо для соответствующей деятельности, для соблюдения юридических требований или для защиты от юридических претензий. По истечении применимого срока хранения ваши данные будут надежно уничтожены в соответствии с применимыми законами и правилами."
      },
      whoHasAccess: {
        title: "Кто имеет доступ к вашей информации",
        content: "В определенных случаях мы можем передавать вашу информацию доверенным сторонним поставщикам услуг, агентам, субподрядчикам или аффилированным организациям для выполнения определенных задач и предоставления вам услуг, таких как обработка и хранение информации или отправка сообщений."
      },
      yourRights: {
        title: "Ваши права и возможности выбора",
        content: "У вас есть ряд прав в отношении личной информации, которую мы храним о вас. Некоторые из этих прав могут быть ограничены в зависимости от обстоятельств, и их осуществление может повлиять на нашу способность поддерживать с вами деловые отношения. Эти права включают:"
      },
      rightToConfirmation: {
        title: "Право на подтверждение",
        content: "Вы имеете право получить подтверждение того, обрабатываются ли ваши личные данные нами. Чтобы воспользоваться этим правом, свяжитесь с нами, как указано в разделе 1."
      },
      rightToAccess: {
        title: "Право на доступ",
        content: "Вы имеете право в любое время получить доступ к вашим личным данным, хранящимся у нас, и получить копию этой информации. Это включает в себя такие детали, как:",
        list: [
          "Цели, для которых обрабатывается ваша информация;",
          "Категории соответствующих личных данных;",
          "Получатели или категории получателей, которым ваша информация была или будет раскрыта;",
          "Предполагаемый период, в течение которого ваша информация будет храниться, или, если это невозможно, критерии, используемые для определения этого периода;",
          "Ваше право запросить исправление или удаление ваших личных данных, или ограничение их обработки, и ваше право возражать против такой обработки;",
          "Ваше право подать жалобу в надзорный орган;",
          "Где это применимо, информация об источнике вашей информации, если она не была собрана непосредственно от вас; и",
          "Информация о существовании автоматизированного принятия решений, включая профилирование, и значимые детали о задействованной логике, а также о значении и ожидаемых последствиях такой обработки для вас."
        ],
        additionalContent: "Чтобы воспользоваться своим правом на доступ, свяжитесь с нами, как указано в разделе 1."
      },
      rightToRectification: {
        title: "Право на исправление",
        content: "Вы имеете право запросить оперативное исправление неточной личной информации о вас. Вы также имеете право на дополнение неполной информации путем предоставления дополнительного заявления. Чтобы воспользоваться этим правом, свяжитесь с нами, как указано в разделе 1."
      },
      rightToErasure: {
        title: "Право на удаление (право быть забытым)",
        content: "Вы имеете право потребовать, чтобы мы удалили ваши личные данные без неоправданной задержки, если:",
        list: [
          "Информация больше не нужна для целей, для которых она была собрана или обработана;",
          "Вы отзываете согласие, на котором основана обработка, и не существует других законных оснований для обработки;",
          "Вы возражаете против обработки в соответствии с применимым законодательством, и нет преимущественных законных оснований для обработки;",
          "Информация была обработана незаконно;",
          "Информация должна быть удалена для соблюдения юридического обязательства; и/или",
          "Информация была собрана в связи с предоставлением услуг информационного общества, в зависимости от обстоятельств."
        ],
        additionalContent: "Чтобы запросить удаление, свяжитесь с нами, как указано в разделе 1."
      },
      rightToRestriction: {
        title: "Право на ограничение обработки",
        content: "Вы имеете право запросить ограничение обработки ваших личных данных при следующих обстоятельствах:",
        list: [
          "Если вы оспариваете точность вашей информации, на период, который позволяет нам проверить ее точность;",
          "Если обработка является незаконной и вы возражаете против удаления, требуя вместо этого ограничения ее использования;",
          "Если нам больше не нужна информация для обработки, но она требуется вам для установления, осуществления или защиты юридических требований; и/или",
          "Если вы возразили против обработки в ожидании проверки того, перевешивают ли наши законные основания ваши интересы."
        ],
        additionalContent: "Если какое-либо из этих условий применяется и вы хотите запросить ограничение обработки, свяжитесь с нами."
      },
      rightToObject: {
        title: "Право на возражение",
        content: "Вы имеете право возражать против обработки ваших личных данных на основании, относящемся к вашей конкретной ситуации, особенно когда обработка основана на законных интересах или в целях прямого маркетинга. Если вы возражаете, мы прекратим обработку ваших личных данных, если мы не сможем продемонстрировать убедительные законные основания для обработки, которые перевешивают ваши интересы, права и свободы, или если обработка необходима для установления, осуществления или защиты юридических требований. Чтобы воспользоваться этим правом, свяжитесь с нами."
      },
      rightToDataPortability: {
        title: "Право на переносимость данных",
        content: "Вы имеете право получить личные данные, которые вы нам предоставили, в структурированном, общепринятом и машиночитаемом формате. Вы также имеете право передать эти данные другому контроллеру без нашего вмешательства, при условии, что обработка основана на согласии или контракте и осуществляется автоматизированными средствами. Если это технически осуществимо и если это не оказывает негативного влияния на права и свободы других лиц, вы также можете запросить, чтобы ваши личные данные были переданы непосредственно от одного контроллера другому. Чтобы воспользоваться своим правом на переносимость данных, свяжитесь с нами."
      },
      automatedDecisionMaking: {
        title: "Автоматизированное индивидуальное принятие решений, включая профилирование",
        content: "Вы имеете право не быть объектом решения, основанного исключительно на автоматизированной обработке, включая профилирование, которое влечет за собой юридические последствия или аналогичным образом существенно затрагивает вас, если такая обработка не является:",
        list: [
          "Необходимо для заключения или выполнения договора между вами и нами;",
          "Основано на вашем явном согласии; или",
          "Разрешено применимым законодательством с надлежащими мерами предосторожности."
        ],
        additionalContent: "Хотя в настоящее время мы используем профилирование только для адаптации наших сообщений и услуг к вашим интересам, если вы хотите воспользоваться своими правами в отношении автоматизированного принятия решений, свяжитесь с нами."
      },
      rightToWithdrawConsent: {
        title: "Право на отзыв согласия на защиту данных",
        content: "Вы имеете право в любое время отозвать свое согласие на обработку ваших личных данных. Чтобы воспользоваться этим правом, свяжитесь с нами."
      },
      manifestlyUnfoundedRequests: {
        title: "Явно необоснованные или чрезмерные запросы",
        content: "Хотя вы можете осуществлять свои права бесплатно, мы оставляем за собой право взимать разумную плату за запросы, которые являются явно необоснованными или чрезмерными. Мы также можем отказать в выполнении таких запросов."
      },
      marketingPreferences: {
        content: "Кроме того, вы имеете право дать нам указание не обрабатывать ваши личные данные в маркетинговых целях. Вы можете воспользоваться этим правом, изменив свои предпочтения в наших формах сбора данных или связавшись с нами через нашу страницу контактов. Мы не будем связываться с вами в маркетинговых целях, если вы не дали предварительное согласие, и вы можете изменить свои маркетинговые предпочтения в любое время."
      },
      updateInformation: {
        title: "Как вы можете обновить свою информацию",
        content: "Точность вашей информации важна для нас. Если вам необходимо обновить или исправить свою личную информацию, свяжитесь с нами по адресу:",
        contactInfo: `Email: update@moonlycoin.com`,
        additionalContent: "или обновите свои данные непосредственно в настройках своей учетной записи на платформе MoonlyCoin."
      },
      securityMeasures: {
        title: "Меры безопасности для защиты вашей информации",
        content: "Когда вы предоставляете нам личную информацию, мы принимаем меры для обеспечения ее безопасной обработки. Безопасность вашей личной информации имеет первостепенное значение для MoonlyCoin Ltd. Мы внедрили соответствующие физические, электронные и организационные процедуры для защиты личной информации, собранной через наш Сервис, и для обеспечения ее целостности и конфиденциальности. Хотя мы стремимся защитить вашу информацию, обратите внимание, что неконфиденциальные данные (например, ваш адрес электронной почты) могут передаваться в незашифрованном виде через Интернет, и ни один метод передачи не является полностью безопасным. Вы передаете свою информацию на свой страх и риск, и как только мы ее получим, мы используем надежные меры безопасности для ее защиты."
      },
      profiling: {
        title: "Профилирование",
        content: "Мы можем анализировать вашу личную информацию для создания профиля ваших предпочтений и интересов, чтобы предоставлять вам индивидуальную информацию и рекомендации о наших продуктах и услугах. Мы также можем дополнять этот профиль дополнительной информацией из внешних источников для улучшения наших предложений услуг."
      },
      useOfCookies: {
        title: "Использование файлов cookie",
        content: "Наш Сервис использует файлы cookie — небольшие текстовые файлы, хранящиеся на вашем устройстве, — чтобы отличать вас от других пользователей и улучшать ваше взаимодействие. Файлы cookie обеспечивают такие функции, как персонализированный контент, интеграция с социальными сетями и анализ трафика. Некоторые файлы cookie могут размещаться сторонними службами, появляющимися на наших страницах. Продолжая использовать наш Сервис, вы соглашаетесь на использование нами файлов cookie. Мы используем различные типы файлов cookie, в том числе:"
      },
      strictlyNecessaryCookies: {
        content: "Строго необходимые файлы cookie: эти файлы cookie необходимы для надлежащего функционирования Сервиса и не могут быть отключены в наших системах. Они обычно устанавливаются в ответ на ваши действия (например, настройку ваших предпочтений конфиденциальности, вход в систему или заполнение форм) и обеспечивают основные функции, такие как навигация по страницам и доступ к безопасным областям Сервиса."
      },
      linksToOtherSites: {
        title: "Ссылки на другие веб-сайты, приложения или мини-приложения",
        content: "Наш Сервис может содержать ссылки на другие веб-сайты, приложения или мини-приложения, управляемые третьими сторонами. Настоящая Политика конфиденциальности применяется исключительно к нашему Сервису. Мы рекомендуем вам ознакомиться с политиками конфиденциальности любых других веб-сайтов, приложений или мини-приложений, к которым вы получаете доступ по ссылкам с нашего Сервиса. Мы не несем ответственности за политику конфиденциальности этих третьих лиц."
      },
      ifYouAreUnder18: {
        title: "Если вам 18 лет или меньше",
        content: "Мы стремимся защищать конфиденциальность детей. Если вам меньше 18 лет, получите разрешение от родителей или опекунов, прежде чем предоставлять какую-либо личную информацию или использовать наш Сервис."
      },
      whereWeStoreInformation: {
        title: "Где мы храним вашу личную информацию",
        content: "Данные, которые мы собираем от вас, могут быть переданы, сохранены и обработаны в странах за пределами Британских Виргинских островов. В таких случаях местные законы, регулирующие защиту данных, могут отличаться от законов Британских Виргинских островов. Мы передаем данные только тогда, когда это необходимо для выполнения контракта, для осуществления или защиты юридических требований, на основании вашего явного согласия или при условии соблюдения надлежащих мер предосторожности (таких как стандартные договорные положения, одобренные соответствующими органами). Хотя мы принимаем разумные меры для защиты вашей личной информации во время передачи и хранения, Интернет не является полностью безопасным, и любая передача осуществляется на ваш страх и риск. Как только мы получим вашу информацию, мы используем строгие процедуры и меры безопасности для предотвращения несанкционированного доступа."
      },
      miscellaneous: {
        title: "Разное",
        content: "Если какое-либо положение настоящей Политики конфиденциальности будет признано недействительным, незаконным или не имеющим законной силы судом или компетентным органом, это положение (или соответствующая его часть) будет считаться удаленным в минимально необходимой степени и не повлияет на действительность или возможность принудительного исполнения остальных положений. Если не согласовано иное, никакая задержка или упущение в осуществлении какого-либо права или средства правовой защиты не должны рассматриваться как отказ от этого права или средства правовой защиты. Все вопросы, касающиеся настоящей Политики конфиденциальности, и любые споры, возникающие из нее (включая внедоговорные споры), регулируются и толкуются в соответствии с законами Британских Виргинских островов, без учета их коллизионных норм. Любые судебные разбирательства, возникающие из настоящей Политики конфиденциальности или связанные с ней, должны возбуждаться исключительно в судах Британских Виргинских островов, хотя мы оставляем за собой право подавать любой иск или требование о нарушении настоящих Условий в вашей стране проживания или в любой
