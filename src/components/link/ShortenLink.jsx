import React from 'react';
import classes from "./ShortenLink.module.scss";



const ShortenLink = () => {

    return (
        <div className={classes.shorten}>
            <div className={classes.shorten__container}>
                <img className={classes.shorten__background} src="./img/bg-shorten-desktop.svg"/>
                <form className={classes.shorten__form}>
                    <input
                        placeholder="Shorten a link here..."
                    />
                    <button>Shorten it!</button>
                </form>


            </div>
        </div>
    );
}

export {ShortenLink}