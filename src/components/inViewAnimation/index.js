"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Proptypes from "prop-types";

const animation = {
  fadeInUp: {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0 },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  },
  opacity: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  imgBlur: {
    hidden: {
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      msBackdropFilter: "blur(10px)",
    },
    visible: {
      backdropFilter: "blur(0px)",
      WebkitBackdropFilter: "blur(0)",
      msBackdropFilter: "blur(0)",
    },
  },
  line: {
    hidden: {
      width: "0%",
    },
    visible: {
      width: "100%",
    },
  },
  scaleX: {
    hidden: {
      scaleX: 0,
    },
    visible: {
      scaleX: 1,
    },
  },
};

const InViewAnimation = ({
  children,
  effect = "fadeInUp",
  transition = { duration: 0.6, ease: "easeInOut" },
  margin = "-10%",
  ...props
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin, once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [mainControls, isInView]);

  return (
    <motion.div
      ref={ref}
      variants={animation[effect]}
      initial="hidden"
      animate={mainControls}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  );
};

InViewAnimation.propTypes = {
  children: Proptypes.node,
  effect: Proptypes.oneOf([
    "fadeInUp",
    "fadeInDown",
    "fadeInLeft",
    "opacity",
    "imgBlur",
    "line",
    "scaleX",
  ]),
  transition: Proptypes.object,
};

export default InViewAnimation;
