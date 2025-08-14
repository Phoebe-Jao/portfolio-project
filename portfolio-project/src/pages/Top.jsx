import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion";

import KvSection from '../components/top/KvSection'
import WorkSection from '../components/top/WorkSection'
import AboutSection from '../components/top/AboutSection'
import ContactSection from '../components/top/ContactSection'

const Top = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [hash]);

  return (
    <main className='siteContent topPage'>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <KvSection />
        <WorkSection />
        <AboutSection />
        <ContactSection />
      </motion.main>
    </main>
  )
}

export default Top;