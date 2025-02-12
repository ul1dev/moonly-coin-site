
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";

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
          
          {/* Privacy Policy at /privacy */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          
          {/* Legacy route for backward compatibility */}
          <Route path="/terms" element={<Navigate to="/en/terms" replace />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
