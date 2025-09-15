import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/home/Index";
import Blog from "./pages/blog/Blog";
import NotFound from "./pages/not-found/NotFound";
import ServicesPage from "./pages/services/Services";
import BlogArticle from "./pages/blog/BlogArticle";
import Privacy from "./pages/privacy/Privacy";
import Canonical from "./app/seo/Canonical";
import RouteAnalytics from "./app/analytics/RouteAnalytics";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Canonical />
        <RouteAnalytics />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogArticle />} />
          <Route path="/privacidad" element={<Privacy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
