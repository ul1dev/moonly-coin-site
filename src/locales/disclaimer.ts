
export interface DisclaimerTranslations {
  title: string;
  introduction: {
    content: string;
  };
  volatilityRisk: {
    title: string;
    content: string;
  };
  regulatoryRisks: {
    title: string;
    content: string;
  };
  technologicalRisks: {
    title: string;
    content: string;
  };
  marketRisks: {
    title: string;
    content: string;
  };
  investmentRisks: {
    title: string;
    content: string;
  };
  conclusion: {
    content: string;
  };
}

export const disclaimerTranslations: Record<string, DisclaimerTranslations> = {
  en: {
    title: "Investment Risk Disclaimer",
    introduction: {
      content: "Before using the MoonlyCoin platform or investing in MoonlyCoin tokens, please carefully review this section. The use of our service and participation in digital asset transactions involve significant risks, including, but not limited to, the following:"
    },
    volatilityRisk: {
      title: "Volatility Risk",
      content: "The price of MoonlyCoin, like that of other cryptocurrencies and digital assets, can fluctuate significantly over short periods of time. Such fluctuations may lead to substantial financial losses, and past performance is not indicative of future returns."
    },
    regulatoryRisks: {
      title: "Regulatory Risks",
      content: "Changes in legislation and regulatory frameworks, both locally and internationally, may negatively affect the operation of the platform and the value of MoonlyCoin tokens. We cannot guarantee that current or future regulations will not adversely impact your investments."
    },
    technologicalRisks: {
      title: "Technological Risks",
      content: "The MoonlyCoin platform uses modern blockchain technologies which, despite their high level of security, may contain vulnerabilities. Technical failures, cyberattacks, or other incidents may occur, potentially leading to data breaches or financial losses."
    },
    marketRisks: {
      title: "Market Risks",
      content: "Market conditions may change due to shifts in supply and demand, economic factors, or the emergence of new competing technologies. In unfavorable market conditions, the liquidity of tokens may decrease, making it difficult to sell or exchange them, which could result in a significant decline in their value."
    },
    investmentRisks: {
      title: "Investment-Related Risks",
      content: "Investing in cryptocurrencies carries a high level of risk, and the funds invested may be lost entirely or partially. You should only invest funds that you can afford to lose without adversely affecting your financial situation. Before making any investment decisions, it is recommended that you conduct your own analysis and consult with qualified financial advisors."
    },
    conclusion: {
      content: "By using the MoonlyCoin platform, you acknowledge and accept all the risks outlined above. MoonlyCoin Ltd and its affiliated entities shall not be held responsible for any losses or financial damages incurred as a result of using the service or investing in MoonlyCoin tokens. All investment decisions are made at your own risk."
    }
  },
  ru: {
    title: "Отказ от ответственности по инвестиционным рискам",
    introduction: {
      content: "Перед использованием платформы MoonlyCoin или инвестированием в токены MoonlyCoin, пожалуйста, внимательно ознакомьтесь с данным разделом. Использование нашего сервиса и участие в операциях с цифровыми активами сопряжены с существенными рисками, включая, но не ограничиваясь следующими:"
    },
    volatilityRisk: {
      title: "Риск волатильности",
      content: "Цена MoonlyCoin, как и других криптовалют и цифровых активов, может существенно колебаться в течение коротких периодов времени. Такие колебания могут привести к значительным финансовым потерям, и прошлые результаты не гарантируют будущую доходность."
    },
    regulatoryRisks: {
      title: "Регуляторные риски",
      content: "Изменения в законодательстве и нормативно-правовой базе, как на местном, так и на международном уровне, могут оказать негативное влияние на функционирование платформы и стоимость токенов MoonlyCoin. Мы не можем гарантировать, что текущие или будущие регуляции не окажут неблагоприятного воздействия на ваши инвестиции."
    },
    technologicalRisks: {
      title: "Технологические риски",
      content: "Платформа MoonlyCoin использует современные блокчейн-технологии, которые, несмотря на высокую степень безопасности, могут содержать уязвимости. Возможны технические сбои, кибератаки или другие инциденты, способные привести к утечке данных или финансовым потерям."
    },
    marketRisks: {
      title: "Рыночные риски",
      content: "Рыночные условия могут изменяться вследствие изменений спроса и предложения, экономических факторов или появления новых конкурирующих технологий. В неблагоприятных рыночных условиях ликвидность токенов может снизиться, что затруднит их продажу или обмен и может привести к значительному снижению их стоимости."
    },
    investmentRisks: {
      title: "Риски, связанные с инвестированием",
      content: "Инвестирование в криптовалюты сопряжено с высоким уровнем риска, и вложенные средства могут быть утрачены полностью или частично. Вы должны инвестировать только те средства, потеря которых не окажет существенного влияния на ваше финансовое положение. Прежде чем принимать инвестиционные решения, рекомендуется проводить самостоятельный анализ и консультироваться с квалифицированными финансовыми консультантами."
    },
    conclusion: {
      content: "Используя платформу MoonlyCoin, вы подтверждаете, что осознаете и принимаете все перечисленные риски. MoonlyCoin Ltd и его аффилированные лица не несут ответственности за любые убытки или финансовые потери, возникшие в результате использования сервиса или инвестирования в токены MoonlyCoin. Все инвестиционные решения принимаются вами на ваш собственный риск."
    }
  }
};
