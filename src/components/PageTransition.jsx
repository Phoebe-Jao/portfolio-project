import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useLocation } from "react-router-dom";

const PageTransition = () => {
  const controls = useAnimation();
  const { pathname } = useLocation();
  const firstLoad = useRef(true);

  useEffect(() => {
    const run = async () => {
      if (firstLoad.current) {
        firstLoad.current = false;
        return;
      }

      // 1) Fade to black over old page
      await controls.start({
        opacity: 1,
        y: "0%",
        transition: { duration: 0.2, ease: "easeInOut" },
      });

      // 2) Pause black before reveal
      await new Promise((resolve) => setTimeout(resolve, 800));

      // 3) Wipe up to reveal next page
      await controls.start({
        y: "-100%",
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
      });

      // Reset for next transition
      controls.set({ opacity: 0, y: "100%" });
    };

    run();
  }, [pathname, controls]);

  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0, y: "100%" }}
      animate={controls}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
}

export default PageTransition;