
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
      content: "This Privacy Policy (\"Privacy Policy\"), together with our Terms of Use (\"Terms\"), sets out the basis for our collection, use, and disclosure of personal information about individuals who use the MoonlyCoin platform (the \"Service\"), when you interact with us, enter into agreements with us, communicate with us, or otherwise engage with our services."
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
      additionalContent: "We do not collect email addresses or other personal information unless you choose to provide them."
    },
    informationFromOtherSources: {
      title: "Information We Receive from Other Sources",
      content: "We may receive information about you if you use other services operated by us or our partners."
    },
    howYourInformationIsUsed: {
      title: "How Your Information Is Used",
      content: "We may use personal information about you for the following purposes:",
      list: [
        "To ensure the proper functioning of our Service",
        "To provide you with relevant updates and news",
        "To send you personalized communications"
      ],
      additionalContent: "We regularly review our retention periods for personal information."
    },
    whoHasAccess: {
      title: "Who Has Access to Your Information",
      content: "In certain cases, we may share your information with trusted third-party service providers."
    },
    yourRights: {
      title: "Your Rights",
      content: "You have various rights regarding your personal information."
    },
    rightToConfirmation: {
      title: "Right to Confirmation",
      content: "You have the right to obtain confirmation about your data processing."
    },
    rightToAccess: {
      title: "Right to Access",
      content: "You have the right to access your personal information:",
      list: [
        "The purposes of processing",
        "The categories of data",
        "The recipients of data"
      ],
      additionalContent: "Contact us to exercise this right."
    },
    rightToRectification: {
      title: "Right to Rectification",
      content: "You have the right to correct inaccurate personal information."
    },
    rightToErasure: {
      title: "Right to Erasure",
      content: "You can request data deletion when:",
      list: [
        "The data is no longer necessary",
        "You withdraw consent",
        "Processing is unlawful"
      ],
      additionalContent: "Contact us to request deletion."
    },
    rightToRestriction: {
      title: "Right to Restriction",
      content: "You can request processing restrictions when:",
      list: [
        "You contest accuracy",
        "Processing is unlawful",
        "We no longer need the data"
      ],
      additionalContent: "Contact us for restrictions."
    },
    rightToObject: {
      title: "Right to Object",
      content: "You can object to processing in certain circumstances."
    },
    rightToDataPortability: {
      title: "Right to Data Portability",
      content: "You can receive your data in a structured format."
    },
    automatedDecisionMaking: {
      title: "Automated Decision Making",
      content: "You have rights regarding automated processing:",
      list: [
        "Right to human intervention",
        "Right to express your point of view",
        "Right to contest decisions"
      ],
      additionalContent: "Contact us about automated decisions."
    },
    rightToWithdrawConsent: {
      title: "Right to Withdraw Consent",
      content: "You can withdraw consent at any time."
    },
    manifestlyUnfoundedRequests: {
      title: "Unfounded Requests",
      content: "We may charge for excessive requests."
    },
    marketingPreferences: {
      content: "You can opt out of marketing communications."
    },
    updateInformation: {
      title: "Updating Information",
      content: "Keep your information current:",
      contactInfo: "Email: update@moonlycoin.com",
      additionalContent: "Or update via your account settings."
    },
    securityMeasures: {
      title: "Security Measures",
      content: "We implement appropriate security measures."
    },
    profiling: {
      title: "Profiling",
      content: "We may analyze your data to improve our services."
    },
    useOfCookies: {
      title: "Use of Cookies",
      content: "We use cookies to enhance your experience."
    },
    strictlyNecessaryCookies: {
      content: "Essential cookies cannot be disabled."
    },
    linksToOtherSites: {
      title: "External Links",
      content: "We are not responsible for external websites."
    },
    ifYouAreUnder18: {
      title: "Age Restriction",
      content: "Users under 18 need parental consent."
    },
    whereWeStoreInformation: {
      title: "Data Storage",
      content: "We store data securely in various locations."
    },
    miscellaneous: {
      title: "Miscellaneous",
      content: "Additional legal information and provisions."
    },
    updatingPolicy: {
      title: "Policy Updates",
      content: "We may update this policy periodically."
    },
    lastUpdated: "Last Updated: 21 January 2025"
  },
  ru: {
    // Copy the same structure as English but with Russian translations
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
      title: "Право на удаление",
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
    lastUpdated: "Последнее обновление: 21 января 2025"
  }
};
