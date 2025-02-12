
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
    // ... continue with all other English translations
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
      address: "MoonlyCoin Ltd\n100 Crypto Way, Suite 400\nRoad Town, Tortola\nБританские Виргинские острова, VG1122",
      contact: "Если у вас есть вопросы о наших практиках конфиденциальности или об этой Политике конфиденциальности, или если вы хотите воспользоваться любым из ваших прав, описанных в настоящем документе, пожалуйста, свяжитесь с нами по адресу:",
      contactInfo: "Email: privacy@moonlycoin.com\nСтраница контактов: https://moonlycoin.com/contact"
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
    // ... continue with all other Russian translations
  }
};
