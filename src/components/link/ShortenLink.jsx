import React from 'react';
import classes from "./ShortenLink.module.scss";
import { useForm } from "react-hook-form";
import {useDispatch} from "react-redux";
import {fetchShortLink} from "../../store/linksSlice";


const ShortenLink = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({mode: 'onSubmit'});
    const dispatch = useDispatch();

    const onSubmit = ({url}) => {
       dispatch(fetchShortLink(url));
       reset();
    };

    return (
        <section className={classes.section}>
            <div className={classes.shorten}>
                <div className={classes.shorten__container}>
                    <img className={classes.shorten__background} src="./img/bg-shorten-desktop.svg"/>
                    <img className={classes.shorten__mobile} src="./img/bg-shorten-mobile.svg"/>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className={classes.shorten__form}
                    >
                        <input
                            {...register("url", {
                                required: 'Please add a link',
                                pattern: {
                                    value: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
                                    message: 'Please enter a valid url',
                                }}
                            )}
                            className={errors.url && classes.error}
                            placeholder="Shorten a link here..."
                        />
                        {errors.url && <span>{errors.url.message}</span>}
                        <button>Shorten it!</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export {ShortenLink}