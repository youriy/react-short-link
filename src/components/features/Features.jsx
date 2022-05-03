import React from 'react';
import classes from "./Features.module.scss";
import {data} from "./data"

const Features = () => {

    return (
        <div className={classes.feature_content}>
            <div className={classes.features}>
                <div className={classes.features__info}>
                    <div className={classes.features__title}>{data.title}</div>
                    <div className={classes.features__subtitle}>{data.subtitle}</div>
                </div>
            </div>
            <div className={classes.items}>
                {data.features.map((feature) => <FeatureItem key={feature.id} {...feature}/>)}
            </div>
        </div>
    );
}

export {Features}

const FeatureItem = ({id, title, text, img}) => {

    return (
        <div className={classes.item} style={{marginTop: id*45}}>
            <div className={classes.item__img}>
                <img alt={title} title={title} src={img}/>
            </div>
            <div className={classes.item__title}>{title}</div>
            <div className={classes.item__text}>{text}</div>
        </div>
    );
}