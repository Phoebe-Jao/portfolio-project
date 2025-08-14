import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";

const Work = () => {
  return (
    <main className='siteContent workPage'>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
      </motion.main>
      <section className="workSec">
        <div className="workSec__inner">
          <PageHeader
            title='Work'
            subtitle='My Works'
          />
        </div>
      </section>
    </main>
  )
}

export default Work;