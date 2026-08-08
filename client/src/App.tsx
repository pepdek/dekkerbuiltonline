import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useScrollToTop } from "./hooks/useScrollToTop";
import SkipToContent from "./components/SkipToContent";
import { useEffect } from "react";
import { initializePerformanceOptimizations } from "./lib/performance";
import Home from "./pages/Home";
import KitchenRemodel from "./pages/KitchenRemodel";
import BathroomRemodel from "./pages/BathroomRemodel";
import WholeHomeRemodel from "./pages/WholeHomeRemodel";
import ADUConstruction from "./pages/ADUConstruction";
import BasementRemodel from "./pages/BasementRemodel";
import DeckPatio from "./pages/DeckPatio";
import NewConstruction from "./pages/NewConstruction";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import ProjectGallery from "./pages/ProjectGallery";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import GeneralContractorTacoma from "./pages/GeneralContractorTacoma";
import GeneralContractorTacoma from "./pages/GeneralContractorTacoma";
import GeneralContractorGigHarbor from "./pages/GeneralContractorGigHarbor";
import GeneralContractorLakewood from "./pages/GeneralContractorLakewood";
import GeneralContractorPuyallup from "./pages/GeneralContractorPuyallup";
import ProjectDetail from "./pages/ProjectDetail";

function Router() {
  // Scroll to top on route change
  useScrollToTop();

  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/services"} component={Services} />
      <Route path={"/kitchen-remodel"} component={KitchenRemodel} />
      <Route path={"/bathroom-remodeling"} component={BathroomRemodel} />
      <Route path={"/full-home-remodel"} component={WholeHomeRemodel} />
      <Route path={"/adu-construction"} component={ADUConstruction} />
      <Route path={"/basement-remodeling"} component={BasementRemodel} />
      <Route path={"/deck-patio"} component={DeckPatio} />
      <Route path={"/new-construction"} component={NewConstruction} />
      <Route path={"/about-us"} component={AboutUs} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/project-gallery"} component={ProjectGallery} />
      <Route path={"/project/:slug"} component={ProjectDetail} />
      <Route path={"/blog"} component={Home} />
      <Route path={"/blog/:slug"} component={Home} />
      <Route path={"/privacy-policy"} component={PrivacyPolicy} />
      <Route path={"/terms-and-conditions"} component={TermsAndConditions} />
      <Route path={"/general-contractor-bellevue"} component={GeneralContractorTacoma} />
      <Route path={"/general-contractor-tacoma"} component={GeneralContractorTacoma} />
      <Route path={"/general-contractor-gig-harbor"} component={GeneralContractorGigHarbor} />
      <Route path={"/general-contractor-lakewood"} component={GeneralContractorLakewood} />
      <Route path={"/general-contractor-puyallup"} component={GeneralContractorPuyallup} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  useEffect(() => {
    // Initialize performance optimizations on mount
    initializePerformanceOptimizations();
  }, []);

  return (
    <ErrorBoundary>
      <SkipToContent />
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
