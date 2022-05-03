import React from 'react';
import classes from './Boost.module.scss'

const Boost = () => {

    return (
        <div className={classes.boost}>
            <img src="./img/bg-boost-desktop.svg"/>
            <div className={classes.boost__title}>Boost your links today</div>
            <div className={classes.boost__action}><a href="#" title="Get Started">Get Started</a></div>
        </div>
    );
}

export {Boost}