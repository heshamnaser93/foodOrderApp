import { Fragment } from "react";
import AvilableMeals from "./AvalilableMeals";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  return (
    <Fragment>
      <AvilableMeals />
      <MealsSummary />
    </Fragment>
  );
};

export default Meals;
