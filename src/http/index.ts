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
    const url = "https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json";
    return getDataFromUrl<IRecipe[]>(url);
}