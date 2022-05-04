import React from 'react';
import classes from "./More.module.scss";
import {data} from "./data";
import {motion} from "framer-motion";

const moreAnimation = {
    hidden : {
        x: -100,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2}
    })
};

const scaleAnimation = {
    hidden: {
        scale: 0
    },
    visible: {
        scale: 1,
        transition: { delay: 0.2 },
    }
};

const More = () => {

    return (
        <motion.div
            className={classes.more}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
        >
            <motion.h1
                className={classes.more__title}
                custom={1}
                variants={moreAnimation}
            >
                {data.title}
            </motion.h1>
            <motion.div
                className={classes.more__text}
                custom={2}
                variants={moreAnimation}
            >
                {data.text}
            </motion.div>
            <motion.div
                className={classes.more__button}
                custom={3}
                variants={moreAnimation}
            >
                <a href="#" title="Get Started">Get Started</a>
            </motion.div>
            <motion.div variants={scaleAnimation} className={classes.more__img}><img src="./img/illustration-working.svg"/></motion.div>
        </motion.div>
    );
}

export {More}