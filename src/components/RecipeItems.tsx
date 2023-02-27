import React from "react";

type ALP = {
    alphaIndex: (alpha: string) => void
};

export const RecipeItems = ({alphaIndex}: ALP) => {    
    var num = 0;

    const alpha: string[] = [
        "A", "B", "C", "D", "E", "F", "G", 
        "H", "I", "J", "K", "L", "M", "N", 
        "O", "P", "Q", "R", "S", "T", "U", 
        "V", "W", "X", "Y", "Z"
    ];    

    return (
        <React.Fragment>
            {alpha.map((item) => (
                <section 
                    key={num++} 
                    className="numBox"
                    onClick={() => alphaIndex(item)}
                >
                    <h3>{item}</h3>
                </section>
            ))}
        </React.Fragment>
    );
};


