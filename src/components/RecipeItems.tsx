import React from "react";

export const RecipeItems = () => {
    const alpha = ["A", "B", "C", "D", "E", "F", "G", 
        "H", "I", "J", "K", "L", "M", "N", "O", 
        "P", "Q", "R", "S", "T", "U", "V", 
        "W", "X", "Y", "Z"];

    return (
        <React.Fragment>
            {alpha.map((item, index) => (
                <section className="numBox">
                    <h3 key={index}>{item}</h3>
                </section>
            ))}
        </React.Fragment>
    );
};


