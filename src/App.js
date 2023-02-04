import React, { useState } from "react";
import Axios from "axios";
import styled from "@emotion/styled";
import {
  Header,
  AppNameComponent,
  SearchComponent,
  SearchBox,
} from "./components/headerComponents";
import {
  RecipeListContainer,
  RecipeContainer,
  RecipeName,
  RecipeImage,
  RecipeText,
  IngredientsText,
} from "./components/recipeComponent";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import SearchIcon from "@mui/icons-material/Search";

const APP_ID = "0bd30447";
const APP_KEY = "dbb3a4abc421faa0190ef77571100d46";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Placeholder = styled.img`
  opacity: 0.8;
  width: 100%;
  height: auto;
`;

const RecipeComponent = (props) => {
  const [show, setShow] = useState(false);
  const { recipeObj } = props;
  console.log(recipeObj);
  return (
    <>
      <Dialog open={show}>
        <DialogTitle>Ingredients</DialogTitle>
        <DialogContent>
          <table>
            <tbody>
              {recipeObj.ingredientLines.map((ingredientItem) => (
                <tr>
                  <td>{ingredientItem}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <IngredientsText onClick={() => window.open(recipeObj.url)}>
            See More
          </IngredientsText>
          <RecipeText onClick={() => setShow(false)}>Close</RecipeText>
        </DialogActions>
      </Dialog>

      <RecipeContainer>
        <RecipeImage src={recipeObj.image} alt="hamburger" />
        <RecipeName>{recipeObj.label}</RecipeName>
        <IngredientsText onClick={() => setShow(true)}>
          Show Ingredients
        </IngredientsText>
        <RecipeText onClick={() => window.open(recipeObj.url)}>
          See Recipe
        </RecipeText>
      </RecipeContainer>
    </>
  );
};

function App() {
  const [timeoutId, setTimeoutId] = useState();
  const [recipeList, setRecipeList] = useState([]);

  const fetchRecipe = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    setRecipeList(response.data.hits);
  };

  const onChangeText = (e) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchRecipe(e.target.value), 500);
    setTimeoutId(timeout);
  };

  return (
    <Container>
      <Header>
        <AppNameComponent>
          <p style={{ fontSize: "32px", marginBottom: "0px" }}>Eat Well</p>
          <p style={{ fontSize: "18px", marginTop: "2px" }}>
            Find a recipe by ingredient search
          </p>
        </AppNameComponent>
        <SearchComponent>
          <SearchIcon style={{ color: "black" }} />
          <SearchBox placeholder="Search" onChange={onChangeText} />
        </SearchComponent>
      </Header>
      <RecipeListContainer>
        {recipeList.length ? (
          recipeList.map((recipeObj) => (
            <RecipeComponent recipeObj={recipeObj.recipe} />
          ))
        ) : (
          <Placeholder
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="serving food"
          />
        )}
      </RecipeListContainer>
    </Container>
  );
}

export default App;
