import { useEffect } from "react";
import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { loadSvgSprite } from "./utilities/loadSvgSprite";
import Layout from "src/components/Layout/Layout";
import { PrivateRoute } from "src/components/shared";
import { useDispatch, useSelector } from "react-redux";
import { useGetFavoriteRecipesQuery } from "./store/services/recipeService";
import { setFavoriteRecipes } from "./store/features/favoriteRecipesSlice";
import { selectFavoriteRecipes } from "./store/selectors/selectors.js";
import { selectToken } from "./store/features/authSlice.js";
const Login = lazy(() => import("src/pages/Login/Login"));
const Home = lazy(() => import("src/pages/Home/Home"));
const Recipe = lazy(() => import("src/pages/Recipe/Recipe"));
const AddRecipe = lazy(() => import("src/pages/AddRecipe/AddRecipe"));
const User = lazy(() => import("src/pages/User/User"));

export const App = () => {
  const token = useSelector(selectToken);
  const { data: favoritesRes } = useGetFavoriteRecipesQuery(undefined, { skip: !token });
  const dispatch = useDispatch();

  useEffect(() => {
    if (favoritesRes) {
      dispatch(setFavoriteRecipes(favoritesRes.data));
    }
  }, [favoritesRes, dispatch]);

  useEffect(() => {
    loadSvgSprite("/project-foodies-frontend/symbol-defs.svg");

    if (favoritesRes) {
      const favoritesRecipes = favoritesRes.data.map(({ recipe }) => recipe._id);
      dispatch(setFavoriteRecipes(favoritesRecipes));
    }
  }, [favoritesRes, dispatch]);

  return (
    <BrowserRouter basename="/project-foodies-frontend">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/recipe/add" element={<PrivateRoute component={AddRecipe} />} />
          <Route path="/user/:id" element={<PrivateRoute component={User} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
