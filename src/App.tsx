import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Artigos from "./pages/Artigos";
import Videos from "./pages/Videos";
import Audios from "./pages/Audios";
import Notas from "./pages/Notas";
import Legal from "./pages/Legal";
// Draft pages for future local SEO - NOT linked anywhere
import SaoPaulo from "./pages/SaoPaulo";
import AbcPaulista from "./pages/AbcPaulista";
import Osasco from "./pages/Osasco";
// Service SEO pages - indexable for Google
import Quiropraxia from "./pages/Quiropraxia";
import Osteopatia from "./pages/Osteopatia";
import TerapiasManuais from "./pages/TerapiasManuais";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/artigos" element={<Artigos />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/audios" element={<Audios />} />
          <Route path="/notas" element={<Notas />} />
          <Route path="/legal" element={<Legal />} />
          {/* DRAFT PAGES - Local SEO (noindex, not linked) */}
          <Route path="/sao-paulo" element={<SaoPaulo />} />
          <Route path="/abc-paulista" element={<AbcPaulista />} />
          <Route path="/osasco" element={<Osasco />} />
          {/* SERVICE SEO PAGES - Indexable for Google ranking */}
          <Route path="/quiropraxia" element={<Quiropraxia />} />
          <Route path="/osteopatia" element={<Osteopatia />} />
          <Route path="/terapias-manuais" element={<TerapiasManuais />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
