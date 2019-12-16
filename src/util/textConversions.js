import React from "react-dom";

/**
 * Return the text provided combined with the Combining Enclosing Keycap
 * @param {string} text
 * @returns {string} html text
 * @param text
 */
export const combiningEnclosingKeyCap = text => {
    const letters = [...text];
    return letters.map(letter => `${letter}&#8419;`).join("");
};

/**
 * Return the text provided combined with the Combining Enclosing Circle
 * @param {string} text
 * @returns {string} html text
 * @param text
 */
export const combiningEnclosingCircle = text => {
    const letters = [...text];
    return letters.map(letter => `${letter}&#8413;`).join("");
};

/**
 * Return the text provided combined with a bunch of stuff
 * @param {string} text
 * @returns {string} html text
 * @param text
 */
export const bunchOfStuff = text => {
    const letters = [...text];
    return letters
        .map(
            letter =>
                `${letter}&#824;&#785;&#773;&#771;&#849;&#831;&#830;&#818;&#793;&#808;&#810;&#791;&#800;&#812;`
        )
        .join("");
};

export default {
    combiningEnclosingKeyCap,
    combiningEnclosingCircle,
    bunchOfStuff
};
