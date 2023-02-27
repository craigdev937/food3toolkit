import React from "react";
import { IMLetter } from "../models/Interfaces";

type IDA = {
    data: IMLetter[]
};

export const MealItems = ({ data }: IDA) => {
    return (
        <React.Fragment>
            {
                (!data) ? "Not Found!" : data.map((item) => (
                    (
                        <section key={item.idMeal} className="card">
                            <img src={item.strMealThumb} alt="" />
                            <h3>{item.strMeal}</h3>
                        </section>
                    )
                ))
            }
        </React.Fragment>
    );
};

