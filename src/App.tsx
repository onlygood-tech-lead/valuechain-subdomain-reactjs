import AppContainer from "./components/containers/AppContainer";
import FaqsSection from "./components/faqs/FaqsSection";
import { ThemeProvider } from "./hooks/ThemeContext";
import ThemeToggleButton from "./components/buttons/ThemeToggleButton";

export default function App() {
  return (
    <ThemeProvider>
      <AppContainer>
        <FaqsSection />
        <ThemeToggleButton />
      </AppContainer>
    </ThemeProvider>
  );
}
