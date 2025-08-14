import { motion } from "framer-motion";
import img from '/images/about/about_img.png';
import PageHeader from "../components/PageHeader";

const About = () => {
  return (
    <main className='siteContent aboutPage'>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <section className="aboutSec">
          <PageHeader
            title='About'
            subtitle='My Profile'
          />
          <div className="aboutSec__inner">
            <div className="aboutSec__imgCont">
              <div className="aboutSec__imgWrap">
                <img src={img} alt="email" className="aboutSec__img" />
              </div>
            </div>
            <div className="aboutSec__content">
              <div className="aboutSec__cont">
                <h2 className="aboutSec__hd"><span>Junior Frontend Developer</span>Phoebe</h2>
                <p className="aboutSec__txt">
                  Hello, my name is Phoebe Jao, a Junior Frontend Web Developer based in the Philippines. I am passionate about building clean, responsive websites and constantly improving my skills in web development. With a strong foundation in HTML, CSS, and JavaScript, I enjoy turning designs into functional digital experiences. I am eager to learn, grow, and contribute to innovative projects while honing my skills.</p>
              </div>
              <div className="aboutSec__cont">
                <h3 className="aboutSec__ttl">
                  <svg>
                    <text x="50%">Experience</text>
                  </svg>
                </h3>
              </div>
              <div className="aboutSec__cont">
                <h3 className="aboutSec__ttl">
                  <svg>
                    <text x="50%">Education</text>
                  </svg>
                </h3>
              </div>
              <div className="aboutSec__cont u-bdrTrs">
                <h3 className="aboutSec__ttl">
                  <svg>
                    <text x="50%">CV</text>
                  </svg>
                </h3>
              </div>
            </div>
          </div>
        </section>
      </motion.main>
    </main>
  )
}

export default About;