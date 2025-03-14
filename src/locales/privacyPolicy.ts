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

export const privacyPolicyTranslations: Record<
    string,
    PrivacyPolicyTranslations
> = {
    en: {
        title: 'Privacy Policy',
        preamble: {
            title: 'Preamble',
            content:
                'This Privacy Policy ("Privacy Policy"), together with our Terms of Use ("Terms"), sets out the basis for our collection, use, and disclosure of personal information about individuals who use the Moonly platform (the "Service"), when you interact with us, enter into agreements with us, communicate with us, or otherwise engage with our services. It also explains the measures we take to keep your information secure. For the purposes of this Privacy Policy, "Personal Information" means any data that can directly or indirectly identify you (for example, your name, contact details, IP address, or information regarding your use of our Service). We comply with the Data Protection Act, 2021 of the British Virgin Islands and, to the extent applicable, with the data protection laws of other jurisdictions - including, but not limited to, the European General Data Protection Regulation (the "GDPR"). We process your data in a lawful, fair, and transparent manner.',
        },
        whoWeAre: {
            title: 'Who We Are',
            content:
                'Moonly Ltd ("We," "Us," or "Our") is a company incorporated in the British Virgin Islands that operates the Moonly platform, offering digital wallet and blockchain transaction services as well as community engagement channels for cryptocurrency enthusiasts. Our registered address is:',
            address:
                'Moonly Ltd\n100 Crypto Way, Suite 400\nRoad Town, Tortola\nBritish Virgin Islands, VG1122',
            contact:
                'If you have any questions about our privacy practices or this Privacy Policy, or if you wish to exercise any of your rights described herein, please contact us at:',
            contactInfo:
                'Email: privacy@moonlycoin.com\nContact Page: https://moonlycoin.com/contact',
        },
        informationWeCollect: {
            title: 'Information We Collect from You',
            content:
                'We collect limited information about you to provide and improve the functionality of our Service, including but not limited to:',
            list: [
                'Your Telegram account data (such as your username, Telegram ID, and publicly displayed name) if you access our Service via the Telegram mini-app.',
                'Your blockchain wallet information (such as your wallet address) to enable features that interact with blockchain systems.',
                'Basic technical data, including your IP address, approximate location, device type, operating system, and browser, to ensure the security and proper operation of our Service.',
            ],
            additionalContent:
                'We do not collect email addresses or other personal information unless you choose to provide them. By providing us with this information, you expressly consent to our use of your personal information in accordance with this Privacy Policy.',
        },
        informationFromOtherSources: {
            title: 'Information We Receive from Other Sources',
            content:
                'We may receive information about you if you use other services operated by us or our partners. We also work with third parties - including contractors, project partners, service providers, and analytics providers - and may receive information about you from them. Such information may be combined with the information you provide directly to us.',
        },
        howYourInformationIsUsed: {
            title: 'How Your Information Is Used',
            content:
                'We may use personal information about you for the following purposes:',
            list: [
                'To ensure the proper functioning of our Service, including maintaining, supporting, and improving its features and performance.',
                'To provide you with relevant updates and news about the Moonly project.',
                'To send you personalized communications that you have requested or that may be of interest to you, based on your activity on our Service or the services of our partners. These communications may include information about promotions, events, and reward programs.',
                'To analyze user behavior and measure the effectiveness of our Service, thereby helping us make suggestions or recommendations for improvements and related services.',
                'For analytics and profiling to create aggregate trend reports, understand how users access and use our Service, gauge responses to marketing campaigns, and determine the most effective marketing channels and messages.',
                'To seek your feedback or comments regarding our Service.',
                'To notify you of changes to our Service, policies, and Terms of Use.',
            ],
            additionalContent:
                'We regularly review our retention periods for personal information. We will retain your personal information for as long as necessary for the relevant activity, to comply with legal requirements, or to defend against legal claims. After the applicable retention period expires, your data will be securely destroyed in accordance with applicable laws and regulations.',
        },
        whoHasAccess: {
            title: 'Who Has Access to Your Information',
            content:
                'In certain cases, we may share your information with trusted third-party service providers, agents, subcontractors, or affiliated organizations to perform specific tasks and deliver services to you - such as processing and storing information or sending communications.',
        },
        yourRights: {
            title: 'Your Choices and Your Rights',
            content:
                'You have a number of rights regarding the personal information we hold about you. Some of these rights may be subject to limitations depending on the circumstances, and exercising them may affect our ability to maintain a business relationship with you. These rights include:',
        },
        rightToConfirmation: {
            title: 'Right to Confirmation',
            content:
                'You have the right to obtain confirmation as to whether your personal information is being processed by us. To exercise this right, please contact us as provided in section 1.',
        },
        rightToAccess: {
            title: 'Right to Access',
            content:
                'You have the right to access your personal information held by us at any time and to receive a copy of that information. This includes details such as:',
            list: [
                'The purposes for which your information is processed;',
                'The categories of personal information concerned;',
                'The recipients or categories of recipients to whom your information has been or will be disclosed;',
                'The envisaged period for which your information will be stored or, if that is not possible, the criteria used to determine that period;',
                'Your right to request rectification or erasure of your personal information, or the restriction of its processing, and your right to object to such processing;',
                'Your right to lodge a complaint with a supervisory authority;',
                'Where applicable, information regarding the source of your information if it was not collected directly from you;',
                'Information about the existence of automated decision-making, including profiling, and meaningful details about the logic involved, as well as the significance and expected consequences of such processing for you.',
            ],
            additionalContent:
                'To exercise your right to access, please contact us as set forth in section 1.',
        },
        rightToRectification: {
            title: 'Right to Rectification',
            content:
                'You have the right to request the prompt correction of inaccurate personal information about you. You also have the right to have incomplete information completed by providing a supplementary statement. To exercise this right, please contact us as provided in section 1.',
        },
        rightToErasure: {
            title: 'Right to Erasure (Right to be Forgotten)',
            content:
                'You have the right to request that we erase your personal information without undue delay if:',
            list: [
                'The information is no longer necessary for the purposes for which it was collected or processed;',
                'You withdraw the consent on which the processing is based and no other legal ground for the processing exists;',
                'You object to the processing under applicable law and there are no overriding legitimate grounds for the processing;',
                'The information has been unlawfully processed;',
                'The information must be erased for compliance with a legal obligation;',
                'The information has been collected in relation to the provision of information society services, as applicable.',
            ],
            additionalContent:
                'To request erasure, please contact us as indicated in section 1.',
        },
        rightToRestriction: {
            title: 'Right to Restriction of Processing',
            content:
                'You have the right to request the restriction of processing of your personal information under the following circumstances:',
            list: [
                'If you contest the accuracy of your information, for a period that allows us to verify its accuracy;',
                'If the processing is unlawful and you oppose erasure, requesting instead a restriction on its use;',
                'If we no longer need the information for processing but you require it for the establishment, exercise, or defense of legal claims;',
                'If you have objected to processing pending verification of whether our legitimate grounds override your interests.',
            ],
            additionalContent:
                'If any of these conditions apply and you wish to request a restriction on processing, please contact us.',
        },
        rightToObject: {
            title: 'Right to Object',
            content:
                'You have the right to object to the processing of your personal information on grounds relating to your particular situation, especially when processing is based on legitimate interests or for direct marketing purposes. Should you object, we will cease processing your personal information unless we can demonstrate compelling legitimate grounds for the processing that override your interests, rights, and freedoms, or if the processing is necessary for the establishment, exercise, or defense of legal claims. To exercise this right, please contact us.',
        },
        rightToDataPortability: {
            title: 'Right to Data Portability',
            content:
                'You have the right to receive the personal information that you have provided to us in a structured, commonly used, and machine-readable format. You also have the right to transmit that data to another controller without hindrance from us, provided that the processing is based on consent or a contract and is carried out by automated means. If technically feasible and if it does not adversely affect the rights and freedoms of others, you may also request that your personal information be transmitted directly from one controller to another. To exercise your right to data portability, please contact us.',
        },
        automatedDecisionMaking: {
            title: 'Automated Individual Decision-Making, Including Profiling',
            content:
                'You have the right not to be subject to a decision based solely on automated processing, including profiling, that produces legal effects or similarly significantly affects you, unless such processing is:',
            list: [
                'Necessary for entering into or performing a contract between you and us;',
                'Based on your explicit consent;',
                'Authorized by applicable law with appropriate safeguards in place.',
            ],
            additionalContent:
                'While we currently use profiling only to tailor our communications and services to your interests, should you wish to exercise your rights regarding automated decision-making, please contact us.',
        },
        rightToWithdrawConsent: {
            title: 'Right to Withdraw Data Protection Consent',
            content:
                'You have the right to withdraw your consent to the processing of your personal information at any time. To exercise this right, please contact us.',
        },
        manifestlyUnfoundedRequests: {
            title: 'Manifestly Unfounded or Excessive Requests',
            content:
                'While you may exercise your rights free of charge, we reserve the right to charge a reasonable fee for requests that are manifestly unfounded or excessive. We may also refuse to comply with such requests.',
        },
        marketingPreferences: {
            content:
                'Additionally, you have the right to instruct us not to process your personal information for marketing purposes. You can exercise this right by adjusting your preferences on our data collection forms or by contacting us via our contact page. We will not contact you for marketing purposes unless you have provided your prior consent, and you can change your marketing preferences at any time.',
        },
        updateInformation: {
            title: 'How You Can Update Your Information',
            content:
                'The accuracy of your information is important to us. If you need to update or correct your personal information, please contact us at:',
            contactInfo: 'Email: update@moonlycoin.com',
            additionalContent:
                'or update your details directly within your account settings on the Moonly platform.',
        },
        securityMeasures: {
            title: 'Security Measures to Protect Your Information',
            content:
                'When you provide us with personal information, we take steps to ensure that it is handled securely. The security of your personal information is of paramount importance to Moonly Ltd. We have implemented appropriate physical, electronic, and organizational procedures to safeguard the personal information collected through our Service and to ensure its integrity and confidentiality. Although we strive to protect your information, please note that non-sensitive details (such as your email address) may be transmitted unencrypted over the internet, and no transmission method is completely secure. You transmit your information at your own risk, and once we receive it, we use robust security measures to protect it.',
        },
        profiling: {
            title: 'Profiling',
            content:
                'We may analyze your personal information to create a profile of your preferences and interests in order to provide you with tailored information and recommendations about our products and services. We may also supplement this profile with additional information from external sources to improve our service offerings.',
        },
        useOfCookies: {
            title: 'Use of Cookies',
            content:
                'Our Service uses cookies - small text files stored on your device - to distinguish you from other users and to enhance your experience. Cookies enable features such as personalized content, social media integration, and traffic analysis. Some cookies may be placed by third-party services appearing on our pages. By continuing to use our Service, you agree to our use of cookies. We use different types of cookies, including:',
        },
        strictlyNecessaryCookies: {
            content:
                'Strictly Necessary Cookies: These cookies are essential for the proper functioning of the Service and cannot be switched off in our systems. They are typically set in response to actions you take (such as setting your privacy preferences, logging in, or filling out forms) and enable basic functions like page navigation and access to secure areas of the Service.',
        },
        linksToOtherSites: {
            title: 'Links to Other Websites, Apps, or Mini Apps',
            content:
                'Our Service may contain links to other websites, applications, or mini apps operated by third parties. This Privacy Policy applies solely to our Service. We encourage you to review the privacy policies of any other websites, apps, or mini apps that you access via links from our Service. We are not responsible for the privacy practices of those third parties.',
        },
        ifYouAreUnder18: {
            title: 'If You Are 18 or Under',
            content:
                "We are committed to protecting the privacy of children. If you are under 18, please obtain your parent or guardian's permission before providing any personal information or using our Service.",
        },
        whereWeStoreInformation: {
            title: 'Where We Store Your Personal Information',
            content:
                'The data we collect from you may be transferred to, stored in, and processed in countries outside the British Virgin Islands. In such cases, the local laws governing data protection may differ from those in the British Virgin Islands. We only transfer data when it is necessary for the performance of a contract, for the exercise or defense of legal claims, based on your explicit consent, or subject to appropriate safeguards (such as standard contractual clauses approved by relevant authorities). Although we take reasonable steps to protect your personal information during transmission and storage, the internet is not completely secure, and any transmission is at your own risk. Once we have received your information, we use stringent procedures and security measures to prevent unauthorized access.',
        },
        miscellaneous: {
            title: 'Miscellaneous',
            content:
                'If any provision of this Privacy Policy is found to be invalid, illegal, or unenforceable by a court or competent authority, that provision (or the relevant part thereof) will be deemed deleted to the minimum extent necessary and will not affect the validity or enforceability of the remaining provisions. Unless otherwise agreed, no delay or omission in exercising any right or remedy shall be considered a waiver of that right or remedy. All matters relating to this Privacy Policy and any disputes arising from it (including non-contractual disputes) shall be governed by and construed in accordance with the laws of the British Virgin Islands, without regard to its conflict of law rules. Any legal proceedings arising out of or related to this Privacy Policy shall be instituted exclusively in the courts of the British Virgin Islands, although we reserve the right to bring any suit or claim for breach of these Terms in your country of residence or any other relevant jurisdiction. You waive any objections to the jurisdiction or venue of such courts.',
        },
        updatingPolicy: {
            title: 'Updating and Changing This Privacy Policy',
            content:
                'Due to the continuous development of our Service and changes in legal or regulatory requirements, we may update this Privacy Policy from time to time. Your continued use of our Service after any changes are published constitutes your acceptance of the revised Privacy Policy.',
        },
        lastUpdated: 'Обновлено: 21 января 2025',
    },
    ru: {
        title: 'Политика конфиденциальности',
        preamble: {
            title: 'Преамбула',
            content:
                'Настоящая Политика конфиденциальности («Политика конфиденциальности»), вместе с нашими Условиями использования («Условия»), определяет основы сбора, использования и раскрытия личной информации о лицах, использующих платформу Moonly (далее - «Сервис»), при взаимодействии с нами, заключении с нами договоров, общении с нами или иным участии в наших услугах. В ней также разъясняются меры, которые мы принимаем для защиты вашей информации. Для целей настоящей Политики конфиденциальности «Личная информация» означает любые данные, позволяющие напрямую или косвенно идентифицировать вас (например, ваше имя, контактные данные, IP-адрес или информацию, касающуюся использования вами нашего Сервиса). Мы соблюдаем Закон о защите данных 2021 года Британских Виргинских островов и, в применимой мере, законодательство других юрисдикций, включая, но не ограничиваясь, Общим регламентом защиты данных Европейского союза (далее - «GDPR»). Мы обрабатываем ваши данные законным, справедливым и прозрачным способом.',
        },
        whoWeAre: {
            title: 'Кто мы такие',
            content:
                'Moonly Ltd («Мы», «Нас» или «Наш») - компания, зарегистрированная на Британских Виргинских островах, которая управляет платформой Moonly, предоставляя услуги цифрового кошелька и проведения транзакций в блокчейне, а также каналы для вовлечения сообщества энтузиастов криптовалют. Наш юридический адрес:',
            address:
                'Moonly Ltd\n100 Crypto Way, Suite 400\nRoad Town, Тортола\nБританские Виргинские острова, VG1122',
            contact:
                'Если у вас возникнут вопросы относительно наших практик в области конфиденциальности или настоящей Политики конфиденциальности, или если вы хотите воспользоваться любыми своими правами, описанными в данном документе, пожалуйста, свяжитесь с нами по следующим контактам:',
            contactInfo:
                'Электронная почта: privacy@moonlycoin.com\nКонтактная страница: https://moonlycoin.com/contact',
        },
        informationWeCollect: {
            title: 'Информация, которую мы собираем о вас',
            content:
                'Мы собираем ограниченную информацию о вас для предоставления и улучшения функциональности нашего Сервиса, включая, но не ограничиваясь следующим:',
            list: [
                'Данные вашей учетной записи Telegram (например, ваше имя пользователя, Telegram ID и отображаемое имя), если вы используете наш Сервис через мини-приложение Telegram.',
                'Информацию о вашем блокчейн-кошельке (например, адрес вашего кошелька) для обеспечения функций, взаимодействующих с блокчейн-системами.',
                'Основные технические данные, включая ваш IP-адрес, приблизительное местоположение, тип устройства, операционную систему и браузер, для обеспечения безопасности и корректной работы нашего Сервиса.',
            ],
            additionalContent:
                'Мы не собираем адреса электронной почты или другую личную информацию, если вы не решите предоставить их самостоятельно. Предоставляя нам эту информацию, вы явно даёте согласие на ее использование в соответствии с настоящей Политикой конфиденциальности.',
        },
        informationFromOtherSources: {
            title: 'Информация, которую мы получаем из других источников',
            content:
                'Мы можем получать информацию о вас, если вы пользуетесь другими услугами, предоставляемыми нами или нашими партнерами. Мы также сотрудничаем с третьими сторонами - включая подрядчиков, партнеров по проектам, поставщиков услуг и аналитических компаний - и можем получать информацию о вас от них. Такая информация может комбинироваться с информацией, которую вы предоставляете напрямую.',
        },
        howYourInformationIsUsed: {
            title: 'Как используется ваша информация',
            content:
                'Мы можем использовать вашу личную информацию для следующих целей:',
            list: [
                'Обеспечение надлежащего функционирования нашего Сервиса, включая поддержку, обслуживание и улучшение его функций и производительности.',
                'Предоставление вам актуальных обновлений и новостей о проекте Moonly.',
                'Отправка вам персонализированных сообщений, которые вы запросили или которые могут представлять для вас интерес, на основе вашей активности в нашем Сервисе или в сервисах наших партнеров. Такие сообщения могут включать информацию о промо-акциях, мероприятиях и программах вознаграждения.',
                'Анализ поведения пользователей и оценка эффективности нашего Сервиса, что помогает нам предлагать рекомендации по улучшению услуг и сопутствующих сервисов.',
                'Проведение аналитики и профилирования для создания сводных отчетов о тенденциях, понимания того, как пользователи получают доступ к нашему Сервису и используют его, оценки откликов на маркетинговые кампании, а также определения наиболее эффективных маркетинговых каналов и сообщений.',
                'Сбор ваших отзывов и комментариев относительно нашего Сервиса.',
                'Уведомление вас об изменениях в нашем Сервисе, политиках и Условиях использования.',
            ],
            additionalContent:
                'Мы регулярно пересматриваем сроки хранения личной информации. Мы будем хранить вашу личную информацию столько, сколько необходимо для выполнения соответствующих функций, соблюдения законодательных требований или защиты от судебных исков. По истечении применимого срока хранения ваши данные будут надежно уничтожены в соответствии с действующим законодательством.',
        },
        whoHasAccess: {
            title: 'Кто имеет доступ к вашей информации',
            content:
                'В отдельных случаях мы можем передавать вашу информацию доверенным сторонним поставщикам услуг, агентам, субподрядчикам или аффилированным организациям для выполнения определенных задач и оказания услуг вам - например, для обработки и хранения информации или отправки сообщений.',
        },
        yourRights: {
            title: 'Ваши выборы и ваши права',
            content:
                'Вы обладаете рядом прав в отношении личной информации, которую мы о вас храним. Некоторые из этих прав могут иметь ограничения в зависимости от обстоятельств, а их осуществление может повлиять на нашу способность поддерживать с вами деловые отношения. Эти права включают:',
        },
        rightToConfirmation: {
            title: 'Право на подтверждение',
            content:
                'Вы имеете право получить подтверждение о том, что ваша личная информация обрабатывается нами. Чтобы воспользоваться этим правом, пожалуйста, свяжитесь с нами, как указано в разделе 1.',
        },
        rightToAccess: {
            title: 'Право на доступ',
            content:
                'Вы имеете право в любое время получить доступ к вашей личной информации, находящейся у нас, и получить её копию. Это включает следующую информацию:',
            list: [
                'Цели, для которых обрабатывается ваша информация;',
                'Категории обрабатываемой личной информации;',
                'Получатели и категории получателей, которым ваша информация уже передавалась или будет передана;',
                'Планируемый срок хранения вашей информации или, если это невозможно, критерии, используемые для определения этого срока;',
                'Ваше право требовать исправления или удаления вашей личной информации, ограничения её обработки и право возражать против такой обработки;',
                'Ваше право подать жалобу в надзорный орган;',
                'При необходимости - информацию об источнике вашей информации, если она не была собрана непосредственно у вас;',
                'Информацию о наличии автоматизированного принятия решений, включая профилирование, а также подробности о логике такого процесса, его значимости и ожидаемых последствиях для вас.',
            ],
            additionalContent:
                'Чтобы воспользоваться правом доступа, пожалуйста, свяжитесь с нами, как указано в разделе 1.',
        },
        rightToRectification: {
            title: 'Право на исправление',
            content:
                'Вы имеете право требовать незамедлительного исправления недостоверной личной информации о вас. Вы также имеете право дополнить неполную информацию, предоставив дополнительное заявление. Для реализации этого права, пожалуйста, свяжитесь с нами, как указано в разделе 1.',
        },
        rightToErasure: {
            title: 'Право на удаление (право быть забытым)',
            content:
                'Вы имеете право требовать без неоправданных задержек удаления вашей личной информации, если:',
            list: [
                'Информация больше не нужна для целей, для которых она была собрана или обработана;',
                'Вы отзывуете согласие, на основе которого осуществлялась обработка, и не существует иного законного основания для обработки;',
                'Вы возражаете против обработки на основании применимого законодательства, и нет преобладающих законных оснований для продолжения обработки;',
                'Информация была обработана незаконно;',
                'Информация должна быть удалена в целях соблюдения юридических обязательств;',
                'Информация была собрана в связи с предоставлением услуг информационного общества, если это применимо.',
            ],
            additionalContent:
                'Чтобы потребовать удаление информации, пожалуйста, свяжитесь с нами, как указано в разделе 1.',
        },
        rightToRestriction: {
            title: 'Право на ограничение обработки',
            content:
                'Вы имеете право требовать ограничения обработки вашей личной информации в следующих случаях:',
            list: [
                'Если вы оспариваете точность вашей информации в течение периода, необходимого для проверки её точности;',
                'Если обработка является незаконной, и вы возражаете против её удаления, требуя вместо этого ограничения на её использование;',
                'Если мы больше не нуждаемся в информации для обработки, а вы требуете её для установления, осуществления или защиты ваших правовых требований;',
                'Если вы возразили против обработки до выяснения, преобладают ли наши законные интересы над вашими.',
            ],
            additionalContent:
                'Если любое из этих условий применимо и вы хотите потребовать ограничение обработки, пожалуйста, свяжитесь с нами.',
        },
        rightToObject: {
            title: 'Право возражать',
            content:
                'Вы имеете право возражать против обработки вашей личной информации по основаниям, связанным с вашей конкретной ситуацией, особенно если обработка осуществляется на основе законных интересов или для прямых маркетинговых целей. В случае вашего возражения мы прекратим обработку вашей личной информации, если не сможем продемонстрировать убедительные законные основания для такой обработки, которые перевешивают ваши интересы, права и свободы, либо если обработка необходима для установления, осуществления или защиты правовых требований. Чтобы воспользоваться этим правом, пожалуйста, свяжитесь с нами.',
        },
        rightToDataPortability: {
            title: 'Право на переносимость данных',
            content:
                'Вы имеете право получить личную информацию, которую вы предоставили нам, в структурированном, общепринятом и машиночитаемом формате. Вы также имеете право передать эти данные другому оператору без препятствий с нашей стороны, при условии, что обработка основана на согласии или договоре и осуществляется с использованием автоматизированных средств. Если это технически возможно и не нарушает права и свободы других лиц, вы можете также потребовать, чтобы ваша личная информация была передана напрямую от одного оператора другому. Чтобы воспользоваться правом на переносимость данных, пожалуйста, свяжитесь с нами.',
        },
        automatedDecisionMaking: {
            title: 'Автоматизированное принятие решений, включая профилирование',
            content:
                'Вы имеете право не подвергаться решениям, основывающимся исключительно на автоматизированной обработке, включая профилирование, которые порождают юридические последствия или иным образом существенно влияют на вас, если такая обработка не является:',
            list: [
                'необходимой для заключения или исполнения договора между вами и нами;',
                'осуществляемой на основе вашего явного согласия;',
                'разрешена применимым законодательством с принятием соответствующих мер защиты.',
            ],
            additionalContent:
                'Хотя в настоящее время мы используем профилирование только для адаптации наших коммуникаций и услуг к вашим интересам, если вы хотите воспользоваться своими правами в отношении автоматизированного принятия решений, пожалуйста, свяжитесь с нами.',
        },
        rightToWithdrawConsent: {
            title: 'Право отозвать согласие на обработку персональных данных',
            content:
                'Вы имеете право в любое время отозвать свое согласие на обработку вашей личной информации. Чтобы воспользоваться этим правом, пожалуйста, свяжитесь с нами.',
        },
        manifestlyUnfoundedRequests: {
            title: 'Право, если запросы кажутся явно необоснованными или чрезмерными',
            content:
                'Хотя вы можете осуществлять свои права бесплатно, мы оставляем за собой право взимать разумную плату за запросы, которые являются явно необоснованными или чрезмерными. В таких случаях мы также можем отказать в удовлетворении запроса.',
        },
        marketingPreferences: {
            content:
                'Кроме того, вы имеете право указать нам не обрабатывать вашу личную информацию в маркетинговых целях. Вы можете воспользоваться этим правом, изменив свои настройки в формах сбора данных или связавшись с нами через нашу контактную страницу. Мы не будем обращаться к вам с маркетинговыми предложениями, если вы предварительно не дали согласия, и вы можете изменить свои маркетинговые предпочтения в любое время.',
        },
        updateInformation: {
            title: 'Как вы можете обновить свою информацию',
            content:
                'Для нас важна точность вашей информации. Если вам необходимо обновить или исправить ваши личные данные, пожалуйста, свяжитесь с нами по адресу:',
            contactInfo: 'Электронная почта: update@moonlycoin.com',
            additionalContent:
                'или обновите свои данные непосредственно в настройках вашего аккаунта на платформе Moonly.',
        },
        securityMeasures: {
            title: 'Меры безопасности для защиты вашей информации',
            content:
                'Когда вы предоставляете нам личную информацию, мы принимаем меры для обеспечения её безопасной обработки. Безопасность вашей личной информации имеет первостепенное значение для Moonly Ltd. Мы внедрили соответствующие физические, электронные и организационные процедуры для защиты личной информации, собранной через наш Сервис, и обеспечения её целостности и конфиденциальности. Несмотря на наши усилия по защите вашей информации, обратите внимание, что неконфиденциальные данные (например, ваш адрес электронной почты) могут передаваться в незашифрованном виде через Интернет, и ни один способ передачи не является абсолютно безопасным. Вы передаете свою информацию на свой страх и риск, и после её получения мы применяем надежные меры безопасности для защиты данных.',
        },
        profiling: {
            title: 'Профилирование',
            content:
                'Мы можем анализировать вашу личную информацию для создания профиля ваших предпочтений и интересов, чтобы предоставлять вам персонализированную информацию и рекомендации по нашим продуктам и услугам. Мы также можем дополнять этот профиль дополнительной информацией из внешних источников для улучшения наших сервисов.',
        },
        useOfCookies: {
            title: 'Использование файлов cookie',
            content:
                'Наш Сервис использует файлы cookie - небольшие текстовые файлы, сохраняемые на вашем устройстве - для различения вас от других пользователей и улучшения вашего опыта работы с сервисом. Файлы cookie позволяют реализовывать такие функции, как персонализированный контент, интеграция с социальными сетями и анализ трафика. Некоторые файлы cookie могут устанавливаться сторонними сервисами, отображаемыми на наших страницах. Продолжая использование нашего Сервиса, вы соглашаетесь с использованием нами файлов cookie. Мы используем различные типы файлов cookie, включая:',
        },
        strictlyNecessaryCookies: {
            content:
                'Файлы cookie, строго необходимые для работы Сервиса: эти файлы cookie необходимы для корректного функционирования Сервиса и не могут быть отключены в наших системах. Они, как правило, устанавливаются в ответ на действия, которые вы предпринимаете (например, установление ваших предпочтений конфиденциальности, вход в систему или заполнение форм) и обеспечивают базовые функции, такие как навигация по страницам и доступ к защищенным разделам Сервиса.',
        },
        linksToOtherSites: {
            title: 'Ссылки на другие веб-сайты, приложения или мини-приложения',
            content:
                'Наш Сервис может содержать ссылки на другие веб-сайты, приложения или мини-приложения, управляемые третьими сторонами. Настоящая Политика конфиденциальности применяется исключительно к нашему Сервису. Мы рекомендуем вам ознакомиться с политиками конфиденциальности любых других веб-сайтов, приложений или мини-приложений, которые вы можете найти через ссылки из нашего Сервиса. Мы не несем ответственности за политики конфиденциальности этих третьих сторон.',
        },
        ifYouAreUnder18: {
            title: 'Если вы 18 или меньше',
            content:
                'Мы ценим вашу конфиденциальность. Если вы еще не достигли 18 лет, пожалуйста, убедитесь, что ваш родитель или опекун дает вам согласие на предоставление личной информации или использование нашего Сервиса.',
        },
        whereWeStoreInformation: {
            title: 'Где мы храним вашу личную информацию',
            content:
                'Данные, которые мы собираем от вас, могут быть переданы, хранены и обработаны в странах, не входящих в Британские Виргинские острова. В таких случаях законодательство о защите данных может отличаться от законодательства Британских Виргинских островов. Мы передаем данные только в том случае, если это необходимо для выполнения контракта, для защиты от судебных исков, на основании вашего явного согласия или с применением соответствующих мер защиты (например, стандартных договорных условий, одобренных соответствующими органами). Хотя мы принимаем все возможные меры для защиты вашей личной информации во время передачи и хранения, Интернет не является полностью безопасным, и любая передача данных подвержена риску. После получения данных мы применяем строгие процедуры и меры безопасности для предотвращения незаконного доступа.',
        },
        miscellaneous: {
            title: 'Дополнительные сведения',
            content:
                'Если какое-либо положение настоящей Политики конфиденциальности будет считаться недействительным, незаконным или неисполнимым судом или судом competentным, то это положение (или его часть) будет считаться удаленным до минимального необходимого уровня и не повлияет на действительность или исполнимость остальных положений. Без согласия, несогласия или отсутствия согласия, ни одна задержка или отсутствие действия не будет считаться отказом в исполнении этого права или действия. Все вопросы, связанные с настоящей Политикой конфиденциальности и возникающие из-за них (включая несогласительные споры) будут регулироваться и construed в соответствии с законодательством Британских Виргинских островов, без учета его правил конфликта законодательства. Любые судебные дела, связанные с настоящей Политикой конфиденциальности, будут возбуждены исключительно в судах Британских Виргинских островов, хотя мы оставляем за собой право вносить взыскания или исковые заявления о нарушении этих Термов в вашем месте жительства или в любом другом юридическом регионе. Вы отказываетесь от всех возражений о праве на jurisdiction или местонахождение суда.',
        },
        updatingPolicy: {
            title: 'Обновление и изменение Политики конфиденциальности',
            content:
                'В связи с постоянным развитием нашего Сервиса и изменениями в законодательстве или регуляторных требованиях, мы можем регулярно обновлять эту Политику конфиденциальности. Продолжение использования нашего Сервиса после публикации изменений означает ваше согласие с обновленной Политикой конфиденциальности.',
        },
        lastUpdated: 'Обновлено: 21 января 2025',
    },
};
