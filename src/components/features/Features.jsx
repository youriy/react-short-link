import React, {forwardRef} from 'react';
import {motion} from "framer-motion";
import classes from "./Features.module.scss";
import {data} from "./data"

const featuresAnimation = {
    hidden : {
        y: 100,
        opacity: 0
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2}
    })
}

const Features = () => {

    return (
        <div className={classes.feature_content}>
            <div className={classes.features}>
                <motion.div
                    className={classes.features__info}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{amount: 0.4, once: true}}
                >
                    <motion.h2
                        custom={1}
                        variants={featuresAnimation}
                        className={classes.features__title}
                    >
                        {data.title}
                    </motion.h2>
                    <motion.p
                        custom={2}
                        variants={featuresAnimation}
                        className={classes.features__subtitle}
                    >
                        {data.subtitle}
                    </motion.p>
                </motion.div>
            </div>
            <motion.div
                className={classes.items}
                initial="hidden"
                whileInView="visible"
                viewport={{amount: 0.1, once: true}}
            >
                {data.features.map((feature, index) =>
                    <FeatureItem
                        custom={index}
                        variants={featuresAnimation}
                        key={feature.id}
                        {...feature}/>
                )}
                <motion.div custom={4} variants={featuresAnimation} className={classes.line}/>
            </motion.div>
        </div>
    );
}

export {Features}

const FeatureItem = motion(forwardRef(({id, title, text, img}, ref) => (
        <div ref={ref} className={classes.item} style={{marginTop: id*45}}>
            <div className={classes.item__img}>
                <img alt={title} title={title} src={img}/>
            </div>
            <h3 className={classes.item__title}>{title}</h3>
            <p className={classes.item__text}>{text}</p>
        </div>
)));
