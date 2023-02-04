import styled from "@emotion/styled";

export const Header = styled.div`
  color: white;
  background-color: #435057;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;

export const AppNameComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchComponent = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 10px;
  border-radius: 6px;
  width: 40%;
`;

export const SearchBox = styled.input`
  border: none;
  outline: none;
  margin-left: 15px;
  font-size: 16px;
  font-weight: bold;
`;
