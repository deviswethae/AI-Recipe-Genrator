// Update your API.js to match backend routes exactly
const BASE_API = import.meta.env.VITE_REACT_APP_PROD_BASE_API_URL || "https://ai-recipe-genrator-zxnd.onrender.com";

export const LoginUrl = `${BASE_API}/auth/v1/users/login`;
export const VerifyOtp = `${BASE_API}/auth/v1/users/verifyOtp`;
export const RegisterUrl = `${BASE_API}/auth/v1/users/register`;
export const RecipeCreateUrl = `${BASE_API}/auth/v1/recipes/generate`;
export const RecipeDeleteUrl = `${BASE_API}/auth/v1/recipes/delete`;
export const GetUserRecipesUrl = `${BASE_API}/auth/v1/recipes/user`;
export const GetRecipeByID = `${BASE_API}/auth/v1/recipes/recipe`;
export const UserProfileUrl = `${BASE_API}/auth/v1/users/profile`;
export const UserDeleteUrl = `${BASE_API}/auth/v1/users/delete`;
export const AddToFavUrl = `${BASE_API}/auth/v1/fav/favorite`;
export const RemoveFavUrl = `${BASE_API}/auth/v1/fav/removeFav`;
export const GetFavUrl = `${BASE_API}/auth/v1/fav/userFav`;
export const GetAllRecipe = `${BASE_API}/auth/v1/recipes/all`;
export const LogoutUrl = `${BASE_API}/auth/v1/users/logout`;
export const ForgotPasswordUrl = `${BASE_API}/auth/v1/users/forgot-password`;
export const ResetPasswordWithOtpUrl = `${BASE_API}/auth/v1/users/reset-password-with-otp`;
export const SendOtp = `${BASE_API}/auth/v1/users/sendOtp`;
export const VerifyAccount = `${BASE_API}/auth/v1/users/verifyAccount`;