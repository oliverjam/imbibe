import React, { Fragment, Suspense, lazy, useState } from "react";
import { Router } from "@reach/router";

import GlobalStyle from "./GlobalStyle";
import Nav from "./Nav";
import NotFound from "./NotFound";
import IngredientList from "./IngredientList";
import { PageContainer } from "./css";

const DrinksList = lazy(() => import("./DrinksList"));
const Drink = lazy(() => import("./Drink"));

function App() {
  const [myIngredients, setIngredients] = useState(() => {
    const url = new URL(window.location);
    const qs = new URLSearchParams(url.search);
    const ingredients = qs.get("ingredients");
    if (!ingredients || !ingredients.length) return [];
    return ingredients.split(",");
  });
  const selectIngredient = (newIng, { reset }) => {
    setIngredients([...myIngredients, newIng]);
    reset({ inputValue: "" });
  };
  const removeIngredient = ing => () =>
    setIngredients(myIngredients.filter(x => x !== ing));

  return (
    <Fragment>
      <GlobalStyle />
      <Nav />
      <PageContainer>
        <Suspense fallback={<div>Loading...</div>}>
          <Router>
            <IngredientList
              path="/"
              myIngredients={myIngredients}
              selectIngredient={selectIngredient}
              removeIngredient={removeIngredient}
            />
            <DrinksList path="/drinks" myIngredients={myIngredients} />
            <Drink path="/drink/:drinkId" />
            <NotFound default />
          </Router>
        </Suspense>
      </PageContainer>
    </Fragment>
  );
}

export default App;
