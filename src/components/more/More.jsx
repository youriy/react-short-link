import React from 'react';
import classes from "./More.module.scss";
import {data} from "./data";

const More = () => {

    return (
        <div className={classes.more}>
            <div className={classes.more__title}>{data.title}</div>
            <div className={classes.more__text}>{data.text}</div>
            <div className={classes.more__button}><a href="#" title="Get Started">Get Started</a></div>
            <div className={classes.more__img}><img src="./img/illustration-working.svg"/></div>
        </div>
    );
}

export {More}