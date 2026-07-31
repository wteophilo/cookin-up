import type ICategory from "@/interfaces/ICategory";
import type IRecipe from "@/interfaces/IRecipe";

async function getDataFromUrl<T>(url: string): Promise<T> {
    const response = await fetch(url);
    return response.json() as T;
    
}

export async function getCategories(): Promise<ICategory[]> {
    const url = "https://gist.githubusercontent.com/wteophilo/5de4ec62cc27894bbcf687e437eaf163/raw/0ba96643c7fca3ff7b1fb981b46ff93cbc524cdc/categories.json"
    return getDataFromUrl<ICategory[]>(url);
}

export async function getRecipes() {
    const url = "https://gist.githubusercontent.com/wteophilo/bf07366abbabd18836d3bc6491b561ba/raw/8d3df17d3ddd01e8f5e09668f5bf881db7af9d55/recipe.json";
    return getDataFromUrl<IRecipe[]>(url);
}