import styled from "@emotion/styled";

export const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  background-color: #435057;
  justify-content: space-evenly;
  gap: 20px;
`;

export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 30px;
  width: 300px;
  box-shadow: 0 3px 10px 0 #aaa;
`;

export const RecipeImage = styled.img`
  height: 200px;
  object-fit: cover;
`;

export const RecipeName = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 10px 0;
`;

export const IngredientsText = styled.span`
  font-size: 18px;
  border: solid 1px green;
  color: black;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 4px;
  text-align: center;
  color: green;
  margin-bottom: 12px;
`;

export const RecipeText = styled(IngredientsText)`
  border: solid 1px red;
  color: red;
`;
