export interface PrivacyPolicyTranslations {
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
  informationWeCollect: {
    title: string;
    content: string;
    list: string[];
    additionalContent: string;
  };
  informationFromOtherSources: {
    title: string;
    content: string;
  };
  howYourInformationIsUsed: {
    title: string;
    content: string;
    list: string[];
    additionalContent: string;
  };
  whoHasAccess: {
    title: string;
    content: string;
  };
  yourRights: {
    title: string;
    content: string;
  };
  rightToConfirmation: {
    title: string;
    content: string;
  };
  rightToAccess: {
    title: string;
    content: string;
    list: string[];
    additionalContent: string;
  };
  rightToRectification: {
    title: string;
    content: string;
  };
  rightToErasure: {
    title: string;
    content: string;
    list: string[];
    additionalContent: string;
  };
  rightToRestriction: {
    title: string;
    content: string;
    list: string[];
    additionalContent: string;
  };
  rightToObject: {
    title: string;
    content: string;
  };
  rightToDataPortability: {
    title: string;
    content: string;
  };
  automatedDecisionMaking: {
    title: string;
    content: string;
    list: string[];
    additionalContent: string;
  };
  rightToWithdrawConsent: {
    title: string;
    content: string;
  };
  manifestlyUnfoundedRequests: {
    title: string;
    content: string;
  };
  marketingPreferences: {
    content: string;
  };
  updateInformation: {
    title: string;
    content: string;
    contactInfo: string;
    additionalContent: string;
  };
  securityMeasures: {
    title: string;
    content: string;
  };
  profiling: {
    title: string;
    content: string;
  };
  useOfCookies: {
    title: string;
    content: string;
  };
  strictlyNecessaryCookies: {
    content: string;
  };
  linksToOtherSites: {
    title: string;
    content: string;
  };
  ifYouAreUnder18: {
    title: string;
    content: string;
  };
  whereWeStoreInformation: {
    title: string;
    content: string;
  };
  miscellaneous: {
    title: string;
    content: string;
  };
  updatingPolicy: {
    title: string;
    content: string;
  };
  lastUpdated: string;
}

export const privacyPolicyTranslations: Record<string, PrivacyPolicyTranslations> = {
  en: {
    title: "Privacy Policy",
    preamble: {
      title: "Preamble",
      content: "This Privacy Policy (\"Privacy Policy\"), together with our Terms of Use (\"Terms\"), sets out the basis for our collection, use, and disclosure of personal information about individuals who use the MoonlyCoin platform (the \"Service\"), when you interact with us, enter into agreements with us, communicate with us, or otherwise engage with our services. It also explains the measures we take to keep your information secure. For the purposes of this Privacy Policy, \"Personal Information\" means any data that can directly or indirectly identify you (for example, your name, contact details, IP address, or information regarding your use of our Service). We comply with the Data Protection Act, 2021 of the British Virgin Islands and, to the extent applicable, with the data protection laws of other jurisdictions—including, but not limited to, the European General Data Protection Regulation (the \"GDPR\"). We process your data in a lawful, fair, and transparent manner."
    },
    whoWeAre: {
      title: "Who We Are",
      content: "MoonlyCoin Ltd (\"We,\" \"Us,\" or \"Our\") is a company incorporated in the British Virgin Islands that operates the MoonlyCoin platform, offering digital wallet and blockchain transaction services as well as community engagement channels for cryptocurrency enthusiasts. Our registered address is:",
      address: "MoonlyCoin Ltd\n100 Crypto Way, Suite 400\nRoad Town, Tortola\nBritish Virgin Islands, VG1122",
      contact: "If you have any questions about our privacy practices or this Privacy Policy, or if you wish to exercise any of your rights described herein, please contact us at:",
      contactInfo: "Email: privacy@moonlycoin.com\nContact Page: https://moonlycoin.com/contact"
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
        "Where applicable, information regarding the source of your information if it was not collected directly from you;",
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
        "The information must be erased for compliance with a legal obligation;",
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
        "If we no longer need the information for processing but you require it for the establishment, exercise, or defense of legal claims;",
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
        "Based on your explicit consent;",
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
      contactInfo: "Email: update@moonlycoin.com",
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
    lastUpdated: "Updated: 21 January 2025"
  },
  ru: {
    title: "Политика конфиденциальности",
    preamble: {
      title: "Преамбула",
      content: "Настоящая Политика конфиденциальности определяет основы сбора и обработки персональных данных."
    },
    whoWeAre: {
      title: "Кто мы",
      content: "MoonlyCoin Ltd - компания, зарегистрированная на Британских Виргинских островах.",
      address: "MoonlyCoin Ltd\n100 Crypto Way, Suite 400\nRoad Town, Tortola\nБританские Виргинские острова, VG1122",
      contact: "По вопросам о конфиденциальности обращайтесь:",
      contactInfo: "Email: privacy@moonlycoin.com\nСтраница контактов: https://moonlycoin.com/contact"
    },
    informationWeCollect: {
      title: "Собираемая информация",
      content: "Мы собираем следующую информацию:",
      list: [
        "Данные аккаунта Telegram",
        "Информация о криптокошельке",
        "Технические данные"
      ],
      additionalContent: "Мы не собираем дополнительные данные без вашего согласия."
    },
    informationFromOtherSources: {
      title: "Информация из других источников",
      content: "Мы можем получать информацию от партнеров."
    },
    howYourInformationIsUsed: {
      title: "Использование информации",
      content: "Ваша информация используется для:",
      list: [
        "Обеспечения работы сервиса",
        "Отправки обновлений",
        "Персонализации контента"
      ],
      additionalContent: "Мы регулярно пересматриваем сроки хранения данных."
    },
    whoHasAccess: {
      title: "Доступ к информации",
      content: "Доступ предоставляется доверенным партнерам."
    },
    yourRights: {
      title: "Ваши права",
      content: "У вас есть определенные права относительно ваших данных."
    },
    rightToConfirmation: {
      title: "Право на подтверждение",
      content: "Вы можете получить подтверждение обработки данных."
    },
    rightToAccess: {
      title: "Право на доступ",
      content: "Вы имеете право на доступ к данным:",
      list: [
        "Цели обработки",
        "Категории данных",
        "Получатели данных"
      ],
      additionalContent: "Свяжитесь с нами для получения доступа."
    },
    rightToRectification: {
      title: "Право на исправление",
      content: "Вы можете исправить неточные данные."
    },
    rightToErasure: {
      title: "Право н�� удаление",
      content: "Запрос на удаление возможен если:",
      list: [
        "Данные больше не нужны",
        "Вы отозвали согласие",
        "Обработка незаконна"
      ],
      additionalContent: "Свяжитесь для запроса удаления."
    },
    rightToRestriction: {
      title: "Право на ограничение",
      content: "Ограничение обработки возможно когда:",
      list: [
        "Оспаривается точность",
        "Обработка незаконна",
        "Данные больше не нужны"
      ],
      additionalContent: "Свяжитесь для ограничения."
    },
    rightToObject: {
      title: "Право на возражение",
      content: "Вы можете возражать против обработки."
    },
    rightToDataPortability: {
      title: "Право на переносимость",
      content: "Получение данных в структурированном формате."
    },
    automatedDecisionMaking: {
      title: "Автоматизированные решения",
      content: "Права относительно автоматической обработки:",
      list: [
        "Право на вмешательство человека",
        "Право выразить мнение",
        "Право оспорить решение"
      ],
      additionalContent: "Свяжитесь по вопросам автоматизации."
    },
    rightToWithdrawConsent: {
      title: "Отзыв согласия",
      content: "Вы можете отозвать согласие в любое время."
    },
    manifestlyUnfoundedRequests: {
      title: "Необоснованные запросы",
      content: "Может взиматься плата за чрезмерные запросы."
    },
    marketingPreferences: {
      content: "Вы можете отказаться от маркетинговых сообщений."
    },
    updateInformation: {
      title: "Обновление информации",
      content: "Поддерживайте актуальность данных:",
      contactInfo: "Email: update@moonlycoin.com",
      additionalContent: "Или обновите в настройках аккаунта."
    },
    securityMeasures: {
      title: "Меры безопасности",
      content: "Мы применяем соответствующие меры безопасности."
    },
    profiling: {
      title: "Профилирование",
      content: "Анализ данных для улучшения сервиса."
    },
    useOfCookies: {
      title: "Использование cookies",
      content: "Cookies используются для улучшения опыта."
    },
    strictlyNecessaryCookies: {
      content: "Необходимые cookies нельзя отключить."
    },
    linksToOtherSites: {
      title: "Внешние ссылки",
      content: "Мы не отвечаем за внешние сайты."
    },
    ifYouAreUnder18: {
      title: "Возрастное ограничение",
      content: "До 18 лет требуется согласие родителей."
    },
    whereWeStoreInformation: {
      title: "Хранение данных",
      content: "Данные хранятся безопасно в разных местах."
    },
    miscellaneous: {
      title: "Разное",
      content: "Дополнительная юридическая информация."
    },
    updatingPolicy: {
      title: "Обновление политики",
      content: "Политика может периодически обновляться."
    },
    lastUpdated: "Обновлено: 21 января 2025"
  }
};
