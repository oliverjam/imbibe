import React, { Fragment } from "react";
import styled from "styled-components";
import posed, { PoseGroup } from "react-pose";
import IngredientSearch from "./IngredientSearch";
import { BorderBox, IconButton, border } from "./css";
import { Bottle } from "./icons";

const IngredientList = ({
  myIngredients,
  selectIngredient,
  removeIngredient,
}) => {
  const shareIngredients = () => {
    const encoded = myIngredients.join(",");
    const url = new URL(window.location);
    url.pathname = "/drinks";
    url.search = `ingredients=${encoded}`;
    navigator.clipboard
      .writeText(url.toString())
      .then(() => alert("Copied shareable URL to clipboard"))
      .catch(console.error);
  };
  return (
    <Fragment>
      <Header>
        <h1>
          <Bottle /> My Ingredients
        </h1>
        <Button onClick={shareIngredients}>Share ingredients</Button>
      </Header>
      <IngredientSearch selectIngredient={selectIngredient} />

      <List>
        <PoseGroup>
          {myIngredients.map(ing => (
            <ListItem key={`myIng-${ing}`}>
              <BorderBox>
                <Content>{ing[0].toUpperCase() + ing.slice(1)}</Content>
                <IconButton
                  onClick={removeIngredient(ing)}
                  aria-label={`Remove ${ing}`}
                >
                  &times;
                </IconButton>
              </BorderBox>
            </ListItem>
          ))}
        </PoseGroup>
      </List>
    </Fragment>
  );
};

const List = styled.ul`
  margin-top: 1rem;
  margin-left: -1rem;
  display: flex;
  flex-wrap: wrap;
`;

const PosedLi = posed.li();

const ListItem = styled(PosedLi)`
  padding-top: 1rem;
  padding-left: 1rem;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #fff;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  border: ${border};
  padding: 0.5rem;
  color: white;
  font: inherit;
  background-color: hsl(var(--hue), 50%, 30%);
`;

export default IngredientList;
