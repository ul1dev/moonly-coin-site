
import React from 'react';
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-[#1A1A1F] border-primary/10">
            <CardContent className="p-6 md:p-8">
              <ScrollArea className="h-[80vh] pr-4">
                <div className="prose prose-invert max-w-none">
                  <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
                  
                  <h2 className="text-xl font-semibold text-primary mb-4">Preamble</h2>
                  <p className="text-gray-300 mb-6">
                    Welcome to TON Society ID. By using the TON Society ID("Service"), you as the user ("You" or "Your") are agreeing to be bound by these terms of use ("Terms") of TON Society Limited a British Virgin Islands company ("We" or "Us" or "Our"), all applicable laws and regulations, and agree that You are responsible for compliance with any applicable local laws. If You do not agree with any of these terms, You are prohibited from using this Service. The materials contained in this Service are protected by applicable copyright and trademark law. We reserve the right to change these Terms at any time at Our sole discretion. The Terms in force at the time of Your use of the Service apply. Updated Terms are binding on You with respect to Your use of the Service on or after the date specified in the updated Terms. If You do not agree to the updated Terms, You must stop using the Service. Your continued use of the Service after the date of the updated Terms will constitute Your acceptance of the updated Terms.
                  </p>

                  <h2 className="text-xl font-semibold text-primary mb-4">1. About the Service</h2>
                  <p className="text-gray-300 mb-4">
                    The Service is a form of digital identity also a Telegram Mini App allowing users to interact with other TON Society products, it allows:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
                    <li>user registration and authentication using his/her telegram account (i.e. it stores the relations between user's telegram account(s) and connects to the user's TON wallets);</li>
                    <li>users to establish identities for participating in TON Society's decentralized apps, blockchain services, or other TON-related activities;</li>
                    <li>users with the ability to browsing and editing their profile, where they could provide their name, photo, profile description and links (all these are optional);</li>
                    <li>users to receive new SBT badges (TON Society's onchain badges);</li>
                    <li>users to receive notifications (i.e. about New minted NFT badges or TON Society news);</li>
                    <li>user authentication on external services (i.e other Telegram Bots and Mini Apps) using his/her TON Society ID profile; and</li>
                    <li>users to participate in Leaderboards and receiving rewards.</li>
                  </ul>

                  {/* Continue with remaining sections */}
                  <h2 className="text-xl font-semibold text-primary mb-4">2. Eligibility</h2>
                  <p className="text-gray-300 mb-6">
                    By using Our Service, You represent and warrant that you (i) have the right, authority, and legal capacity to accept these Terms, (ii) will not use Our Service if the laws of Your country of residence and/or citizenship prohibit You from doing so in accordance with these Terms, (iii) are using our Service for Your own personal use.
                  </p>

                  {/* Add all other sections similarly */}
                  
                  <div className="text-sm text-gray-400 mt-8 pt-4 border-t border-gray-800">
                    Updated: 21 January 2025
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
