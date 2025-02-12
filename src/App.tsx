
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Disclaimer from "./pages/Disclaimer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Redirect root to /en */}
          <Route path="/" element={<Navigate to="/en" replace />} />
          
          {/* Language-specific routes */}
          <Route path="/:lang" element={<Index />} />
          <Route path="/:lang/terms" element={<TermsOfService />} />
          <Route path="/:lang/privacy" element={<PrivacyPolicy />} />
          <Route path="/:lang/disclaimer" element={<Disclaimer />} />
          
          {/* Legacy routes for backward compatibility */}
          <Route path="/terms" element={<Navigate to="/en/terms" replace />} />
          <Route path="/privacy" element={<Navigate to="/en/privacy" replace />} />
          <Route path="/disclaimer" element={<Navigate to="/en/disclaimer" replace />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
