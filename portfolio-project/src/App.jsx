import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from './components/Header'
import Footer from './components/Footer'
import Top from './pages/Top'
import About from './pages/About'
import Work from './pages/Work'
import PageTransition from "./components/PageTransition";
import { motion } from "framer-motion";

function Page({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.25, delay: 0.15 } }}
      exit={{ opacity: 1 }}
    >
      {children}
    </motion.main>
  );
}

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <PageTransition />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page><Top /></Page>} />
          <Route path="/about" element={<Page><About /></Page>} />
          <Route path="/work" element={<Page><Work /></Page>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default App
