import { BrowserRouter, Route, Routes } from "react-router-dom";
import Survey from "@/pages/survey/Survey";
import Test from "@/pages/test/Test";
import Login from "./pages/login/Login";
import Main from "./pages/main/Main";
import MyPage from "./pages/mypage/MyPage";
import EditProfile from "./pages/editProfile/EditProfile";
import AddIngredient from "./pages/addIngredient/AddIngredient";
import ScanReceipt from "./pages/scanReceipt/ScanReceipt";
import IngredientInput from "./pages/ingredientInput/IngredientInput";
import RecommendedRecipes from "@/pages/recommendedRecipes/RecommendedRecipes";
import RecommendedRecipe from "./pages/recommendedRecipe/RecommendedRecipe";
import ResultScanReceipt from "./pages/resultScanReceipt/ResultScanReceipt";
import LoginHandler from "./pages/login/components/LoginHandler";
import Refrigerator from "./pages/refrigerator/Refrigerator";
import ViewIngredient from "./pages/viewIngredient/ViewIngredient";
import EditIngredient from "@/pages/editIngredient/EditIngredient";
import Filtering from "./pages/filtering/Filtering";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/" element={<Login />} />
        <Route path="/login/oauth2/callback/kakao" element={<LoginHandler />} />
        <Route path="/main" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/addingredient" element={<AddIngredient />} />
        <Route path="/scanreceipt" element={<ScanReceipt />} />
        <Route path="/ingredientinput" element={<IngredientInput />} />
        <Route path="/resultscan" element={<ResultScanReceipt />} />
        <Route path="/refrigerator" element={<Refrigerator/>} />
        <Route path="/ingredient/:id" element={<ViewIngredient />} />
        <Route path="/editIngredient/:id" element={<EditIngredient />} />
        <Route path="/filtering" element={<Filtering />} />
        <Route path="/recommendedRecipes" element={<RecommendedRecipes />} />
        <Route path="/recommendedRecipes/:id" element={<RecommendedRecipe />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
