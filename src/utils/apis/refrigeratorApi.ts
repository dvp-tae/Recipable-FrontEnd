import { IngredientRequset } from "@/types/ScanReceiptType";
import { api } from "./axios";

export const AddRefrigeratorReceipt = (ingredients: IngredientRequset) => {
  return api.post<string>("/refrigerators/receipt", ingredients);
};
