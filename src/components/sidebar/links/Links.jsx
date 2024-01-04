import React from "react";
import { motion } from "framer-motion";

const Links = () => {
  const items = ["Homepage", "Services", "Portfolio", "Contacts", "About"];

  const variants = {
    open: {
      transtion: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transtion: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };
  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </a>
      ))}
    </motion.div>
  );
};

export default Links;
