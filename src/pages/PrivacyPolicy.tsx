
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
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          
          <h2 className="text-xl font-semibold text-primary mb-4">Preamble</h2>
          <p className="text-gray-300 mb-6">
            This Privacy Policy ("Privacy Policy"), together with our Terms of Use ("Terms"), sets out the basis for our collection, use, and disclosure of personal information about individuals who use the MoonlyCoin platform (the "Service"), when you interact with us, enter into agreements with us, communicate with us, or otherwise engage with our services. It also explains the measures we take to keep your information secure. For the purposes of this Privacy Policy, "Personal Information" means any data that can directly or indirectly identify you (for example, your name, contact details, IP address, or information regarding your use of our Service). We comply with the Data Protection Act, 2021 of the British Virgin Islands and, to the extent applicable, with the data protection laws of other jurisdictions—including, but not limited to, the European General Data Protection Regulation (the "GDPR"). We process your data in a lawful, fair, and transparent manner.
          </p>

          <h2 className="text-xl font-semibold text-primary mb-4">Who We Are</h2>
          <p className="text-gray-300 mb-6">
            MoonlyCoin Ltd ("We," "Us," or "Our") is a company incorporated in the British Virgin Islands that operates the MoonlyCoin platform, offering digital wallet and blockchain transaction services as well as community engagement channels for cryptocurrency enthusiasts. Our registered address is:
          </p>
          <pre className="text-gray-300 mb-6 whitespace-pre-wrap">
            MoonlyCoin Ltd
            100 Crypto Way, Suite 400
            Road Town, Tortola
            British Virgin Islands, VG1122
          </pre>
          <p className="text-gray-300 mb-6">
            If you have any questions about our privacy practices or this Privacy Policy, or if you wish to exercise any of your rights described herein, please contact us at:
          </p>
          <pre className="text-gray-300 mb-6 whitespace-pre-wrap">
            Email: privacy@moonlycoin.com
            Contact Page: https://moonlycoin.com/contact
          </pre>

          <h2 className="text-xl font-semibold text-primary mb-4">Information We Collect from You</h2>
          <p className="text-gray-300 mb-6">
            We collect limited information about you to provide and improve the functionality of our Service, including but not limited to:
          </p>
          <ul className="text-gray-300 mb-6 list-disc pl-6">
            <li>Your Telegram account data (such as your username, Telegram ID, and publicly displayed name) if you access our Service via the Telegram mini-app.</li>
            <li>Your blockchain wallet information (such as your wallet address) to enable features that interact with blockchain systems.</li>
            <li>Basic technical data, including your IP address, approximate location, device type, operating system, and browser, to ensure the security and proper operation of our Service.</li>
          </ul>
          <p className="text-gray-300 mb-6">
            We do not collect email addresses or other personal information unless you choose to provide them. By providing us with this information, you expressly consent to our use of your personal information in accordance with this Privacy Policy.
          </p>

          <h2 className="text-xl font-semibold text-primary mb-4">Information We Receive from Other Sources</h2>
          <p className="text-gray-300 mb-6">
            We may receive information about you if you use other services operated by us or our partners. We also work with third parties—including contractors, project partners, service providers, and analytics providers—and may receive information about you from them. Such information may be combined with the information you provide directly to us.
          </p>

          <h2 className="text-xl font-semibold text-primary mb-4">How Your Information Is Used</h2>
          <p className="text-gray-300 mb-6">
            We may use personal information about you for the following purposes:
          </p>
          <ul className="text-gray-300 mb-6 list-disc pl-6">
            <li>To ensure the proper functioning of our Service, including maintaining, supporting, and improving its features and performance.</li>
            <li>To provide you with relevant updates and news about the MoonlyCoin project.</li>
            <li>To send you personalized communications that you have requested or that may be of interest to you, based on your activity on our Service or the services of our partners. These communications may include information about promotions, events, and reward programs.</li>
            <li>To analyze user behavior and measure the effectiveness of our Service, thereby helping us make suggestions or recommendations for improvements and related services.</li>
            <li>For analytics and profiling to create aggregate trend reports, understand how users access and use our Service, gauge responses to marketing campaigns, and determine the most effective marketing channels and messages.</li>
            <li>To seek your feedback or comments regarding our Service.</li>
            <li>To notify you of changes to our Service, policies, and Terms of Use.</li>
          </ul>
          <p className="text-gray-300 mb-6">
            We regularly review our retention periods for personal information. We will retain your personal information for as long as necessary for the relevant activity, to comply with legal requirements, or to defend against legal claims. After the applicable retention period expires, your data will be securely destroyed in accordance with applicable laws and regulations.
          </p>

          <h2 className="text-xl font-semibold text-primary mb-4">Who Has Access to Your Information</h2>
          <p className="text-gray-300 mb-6">
            In certain cases, we may share your information with trusted third-party service providers, agents, subcontractors, or affiliated organizations to perform specific tasks and deliver services to you—such as processing and storing information or sending communications.
          </p>

          <h2 className="text-xl font-semibold text-primary mb-4">Your Choices and Your Rights</h2>
          <p className="text-gray-300 mb-6">
            You have a number of rights regarding the personal information we hold about you. Some of these rights may be subject to limitations depending on the circumstances, and exercising them may affect our ability to maintain a business relationship with you. These rights include:
          </p>

          <h3 className="text-lg font-semibold text-primary mb-3">Right to Confirmation</h3>
          <p className="text-gray-300 mb-6">
            You have the right to obtain confirmation as to whether your personal information is being processed by us. To exercise this right, please contact us as provided in section 1.
          </p>

          <h3 className="text-lg font-semibold text-primary mb-3">Right to Access</h3>
          <p className="text-gray-300 mb-6">
            You have the right to access your personal information held by us at any time and to receive a copy of that information. This includes details such as:
          </p>
          <ul className="text-gray-300 mb-6 list-disc pl-6">
            <li>The purposes for which your information is processed;</li>
            <li>The categories of personal information concerned;</li>
            <li>The recipients or categories of recipients to whom your information has been or will be disclosed;</li>
            <li>The envisaged period for which your information will be stored or, if that is not possible, the criteria used to determine that period;</li>
            <li>Your right to request rectification or erasure of your personal information, or the restriction of its processing, and your right to object to such processing;</li>
            <li>Your right to lodge a complaint with a supervisory authority;</li>
            <li>Where applicable, information regarding the source of your information if it was not collected directly from you; and</li>
            <li>Information about the existence of automated decision-making, including profiling, and meaningful details about the logic involved, as well as the significance and expected consequences of such processing for you.</li>
          </ul>
          <p className="text-gray-300 mb-6">
            To exercise your right to access, please contact us as set forth in section 1.
          </p>

          <h3 className="text-lg font-semibold text-primary mb-3">Right to Rectification</h3>
          <p className="text-gray-300 mb-6">
            You have the right to request the prompt correction of inaccurate personal information about you. You also have the right to have incomplete information completed by providing a supplementary statement. To exercise this right, please contact us as provided in section 1.
          </p>

          <h3 className="text-lg font-semibold text-primary mb-3">Right to Erasure (Right to be Forgotten)</h3>
          <p className="text-gray-300 mb-6">
            You have the right to request that we erase your personal information without undue delay if:
          </p>
          <ul className="text-gray-300 mb-6 list-disc pl-6">
            <li>The information is no longer necessary for the purposes for which it was collected or processed;</li>
            <li>You withdraw the consent on which the processing is based and no other legal ground for the processing exists;</li>
            <li>You object to the processing under applicable law and there are no overriding legitimate grounds for the processing;</li>
            <li>The information has been unlawfully processed;</li>
            <li>The information must be erased for compliance with a legal obligation; and/or</li>
            <li>The information has been collected in relation to the provision of information society services, as applicable.</li>
          </ul>
          <p className="text-gray-300 mb-6">
            To request erasure, please contact us as indicated in section 1.
          </p>

          <h3 className="text-lg font-semibold text-primary mb-3">Right to Restriction of Processing</h3>
          <p className="text-gray-300 mb-6">
            You have the right to request the restriction of processing of your personal information under the following circumstances:
          </p>
          <ol className="text-gray-300 mb-6 list-decimal pl-6">
            <li>If you contest the accuracy of your information, for a period that allows us to verify its accuracy;</li>
            <li>If the processing is unlawful and you oppose erasure, requesting instead a restriction on its use;</li>
            <li>If we no longer need the information for processing but you require it for the establishment, exercise, or defense of legal claims; and/or</li>
            <li>If you have objected to processing pending verification of whether our legitimate grounds override your interests.</li>
          </ol>
          <p className="text-gray-300 mb-6">
            If any of these conditions apply and you wish to request a restriction on processing, please contact us.
          </p>

          <h3 className="text-lg font-semibold text-primary mb-3">Right to Object</h3>
          <p className="text-gray-300 mb-6">
            You have the right to object to the processing of your personal information on grounds relating to your particular situation, especially when processing is based on legitimate interests or for direct marketing purposes. Should you object, we will cease processing your personal information unless we can demonstrate compelling legitimate grounds for the processing that override your interests, rights, and freedoms, or if the processing is necessary for the establishment, exercise, or defense of legal claims. To exercise this right, please contact us.
          </p>

          <h3 className="text-lg font-semibold text-primary mb-3">Right to Data Portability</h3>
          <p className="text-gray-300 mb-6">
            You have the right to receive the personal information that you have provided to us in a structured, commonly used, and machine-readable format. You also have the right to transmit that data to another controller without hindrance from us, provided that the processing is based on consent or a contract and is carried out by automated means. If technically feasible and if it does not adversely affect the rights and freedoms of others, you may also request that your personal information be transmitted directly from one controller to another. To exercise your right to data portability, please contact us.
          </p>

          <h3 className="text-lg font-semibold text-primary mb-3">Automated Individual Decision-Making, Including Profiling</h3>
          <p className="text-gray-300 mb-6">
            You have the right not to be subject to a decision based solely on automated processing, including profiling, that produces legal effects or similarly significantly affects you, unless such processing is:
          </p>
          <ol className="text-gray-300 mb-6 list-decimal pl-6">
            <li>Necessary for entering into or performing a contract between you and us;</li>
            <li>Based on your explicit consent; or</li>
            <li>Authorized by applicable law with appropriate safeguards in place.</li>
          </ol>
          <p className="text-gray-300 mb-6">
            While we currently use profiling only to tailor our communications and services to your interests, should you wish to exercise your rights regarding automated decision-making, please contact us.
          </p>

          <h3 className="text-lg font-semibold text-primary mb-3">Right to Withdraw Data Protection Consent</h3>
          <p className="text-gray-300 mb-6">
            You have the right to withdraw your consent to the processing of your personal information at any time. To exercise this right, please contact us.
          </p>

          <h3 className="text-lg font-semibold text-primary mb-3">Manifestly Unfounded or Excessive Requests</h3>
          <p className="text-gray-300 mb-6">
            While you may exercise your rights free of charge, we reserve the right to charge a reasonable fee for requests that are manifestly unfounded or excessive. We may also refuse to comply with such requests.
          </p>

          <p className="text-gray-300 mb-6">
            Additionally, you have the right to instruct us not to process your personal information for marketing purposes. You can exercise this right by adjusting your preferences on our data collection forms or by contacting us via our contact page. We will not contact you for marketing purposes unless you have provided your prior consent, and you can change your marketing preferences at any time.
          </p>

          <h2 className="text-xl font-semibold text-primary mb-4">How You Can Update Your Information</h2>
          <p className="text-gray-300 mb-6">
            The accuracy of your information is important to us. If you need to update or correct your personal information, please contact us at:
          </p>
          <pre className="text-gray-300 mb-6 whitespace-pre-wrap">
            Email: update@moonlycoin.com
          </pre>
          <p className="text-gray-300 mb-6">
            or update your details directly within your account settings on the MoonlyCoin platform.
          </p>

          <h2 className="text-xl font-semibold text-primary mb-4">Security Measures to Protect Your Information</h2>
          <p className="text-gray-300 mb-6">
            When you provide us with personal information, we take steps to ensure that it is handled securely. The security of your personal information is of paramount importance to MoonlyCoin Ltd. We have implemented appropriate physical, electronic, and organizational procedures to safeguard the personal information collected through our Service and to ensure its integrity and confidentiality. Although we strive to protect your information, please note that non-sensitive details (such as your email address) may be transmitted unencrypted over the internet, and no transmission method is completely secure. You transmit your information at your own risk, and once we receive it, we use robust security measures to protect it.
          </p>

          <h2 className="text-xl font-semibold text-primary mb-4">Profiling</h2>
          <p className="text-gray-300 mb-6">
            We may analyze your personal information to create a profile of your preferences and interests in order to provide you with tailored information and recommendations about our products and services. We may also supplement this profile with additional information from external sources to improve our service offerings.
          </p>

          <h2 className="text-xl font-semibold text-primary mb-4">Use of Cookies</h2>
          <p className="text-gray-300 mb-6">
            Our Service uses cookies—small text files stored on your device—to distinguish you from other users and to enhance your experience. Cookies enable features such as personalized content, social media integration, and traffic analysis. Some cookies may be placed by third-party services appearing on our pages. By continuing to use our Service, you agree to our use of cookies. We use different types of cookies, including:
          </p>
          <p className="text-gray-300 mb-6">
            Strictly Necessary Cookies: These cookies are essential for the proper functioning of the Service and cannot be switched off in our systems. They are typically set in response to actions you take (such as setting your privacy preferences, logging in, or filling out forms) and enable basic functions like page navigation and access to secure areas of the Service.
          </p>

          <h2 className="text-xl font-semibold text-primary mb-4">Links to Other Websites, Apps, or Mini Apps</h2>
          <p className="text-gray-300 mb-6">
            Our Service may contain links to other websites, applications, or mini apps operated by third parties. This Privacy Policy applies solely to our Service. We encourage you to review the privacy policies of any other websites, apps, or mini apps that you access via links from our Service. We are not responsible for the privacy practices of those third parties.
          </p>

          <h2 className="text-xl font-semibold text-primary mb-4">If You Are 18 or Under</h2>
          <p className="text-gray-300 mb-6">
            We are committed to protecting the privacy of children. If you are under 18, please obtain your parent or guardian's permission before providing any personal information or using our Service.
          </p>

          <h2 className="text-xl font-semibold text-primary mb-4">Where We Store Your Personal Information</h2>
          <p className="text-gray-300 mb-6">
            The data we collect from you may be transferred to, stored in, and processed in countries outside the British Virgin Islands. In such cases, the local laws governing data protection may differ from those in the British Virgin Islands. We only transfer data when it is necessary for the performance of a contract, for the exercise or defense of legal claims, based on your explicit consent, or subject to appropriate safeguards (such as standard contractual clauses approved by relevant authorities). Although we take reasonable steps to protect your personal information during transmission and storage, the internet is not completely secure, and any transmission is at your own risk. Once we have received your information, we use stringent procedures and security measures to prevent unauthorized access.
          </p>

          <h2 className="text-xl font-semibold text-primary mb-4">Miscellaneous</h2>
          <p className="text-gray-300 mb-6">
            If any provision of this Privacy Policy is found to be invalid, illegal, or unenforceable by a court or competent authority, that provision (or the relevant part thereof) will be deemed deleted to the minimum extent necessary and will not affect the validity or enforceability of the remaining provisions. Unless otherwise agreed, no delay or omission in exercising any right or remedy shall be considered a waiver of that right or remedy. All matters relating to this Privacy Policy and any disputes arising from it (including non-contractual disputes) shall be governed by and construed in accordance with the laws of the British Virgin Islands, without regard to its conflict of law rules. Any legal proceedings arising out of or related to this Privacy Policy shall be instituted exclusively in the courts of the British Virgin Islands, although we reserve the right to bring any suit or claim for breach of these Terms in your country of residence or any other relevant jurisdiction. You waive any objections to the jurisdiction or venue of such courts.
          </p>

          <h2 className="text-xl font-semibold text-primary mb-4">Updating and Changing This Privacy Policy</h2>
          <p className="text-gray-300 mb-6">
            Due to the continuous development of our Service and changes in legal or regulatory requirements, we may update this Privacy Policy from time to time. Your continued use of our Service after any changes are published constitutes your acceptance of the revised Privacy Policy.
          </p>

          <div className="text-sm text-gray-400 mt-8 pt-4 border-t border-gray-800">
            Last Updated: 21 January 2025
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
