import { useEffect } from "react";
import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { loadSvgSprite } from "./utilities/loadSvgSprite";
import Layout from "src/components/Layout/Layout";
import { useGetFavoriteRecipesQuery } from "./store/services/recipeService";
import { useDispatch, useSelector } from "react-redux";
import { setFavoriteRecipes } from "./store/features/favoriteRecipesSlice";
import { selectFavoriteRecipes } from "./store/selectors/selectors";
const Login = lazy(() => import("src/pages/Login/Login"));
const Home = lazy(() => import("src/pages/Home/Home"));
const Recipe = lazy(() => import("src/pages/Recipe/Recipe"));
const AddRecipe = lazy(() => import("src/pages/AddRecipe/AddRecipe"));
const User = lazy(() => import("src/pages/User/User"));

export const App = () => {
  const { data: favoritesRes } = useGetFavoriteRecipesQuery();
  const favoritesArray = useSelector(selectFavoriteRecipes);
  console.log(favoritesArray);

  const dispath = useDispatch();

  useEffect(() => {
    if (favoritesRes) {
      dispath(setFavoriteRecipes(favoritesRes.data));
    }
  }, [favoritesRes]);

  useEffect(() => {
    loadSvgSprite("/project-foodies-frontend/symbol-defs.svg");
  }, []);

  return (
    <BrowserRouter basename="/project-foodies-frontend">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/recipe/add" element={<AddRecipe />} />
          <Route path="/user/:id" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
