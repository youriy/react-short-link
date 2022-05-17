import React from 'react';
import classes from "./List.module.scss";
import {useSelector} from "react-redux";
import {motion, AnimatePresence } from "framer-motion";

const List = () => {
    const {links} = useSelector(state => state.links);
    const [copiedLink, setCopiedLink] = React.useState(null);

    const copyToClipboard = (link) => {
        navigator.clipboard.writeText(link).then(() => {
            setCopiedLink(link);
        });
    };

    return (
        <div className={classes.list_container}>
            <div className={classes.list}>
                {links.map((link, index) =>
                    <AnimatePresence key={index}>
                        <motion.div
                            className={classes.item}
                            initial={{opacity: 0, height: 0}}
                            animate={{opacity: 1, height: 'auto'}}
                        >
                            <div className={classes.item__original}>{link.original}</div>
                            <div className={classes.item__short}>{link.short}</div>
                            <div className={classes.item__button}>
                                <button
                                    onClick={() => copyToClipboard(link.short)}
                                    data-active={link.short === copiedLink}
                                >
                                    {link.short === copiedLink ? 'Copied!' : 'Copy'}
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                )}
            </div>
        </div>
    );
};

export {List}


