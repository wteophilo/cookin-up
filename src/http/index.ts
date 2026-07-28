import type ICategory from "@/interfaces/ICategory";

export async function getCategories() {
    const url = "https://gist.githubusercontent.com/wteophilo/5de4ec62cc27894bbcf687e437eaf163/raw/0ba96643c7fca3ff7b1fb981b46ff93cbc524cdc/categories.json"
    const response = await fetch(url);
    const categories: ICategory[] = await response.json();
    return categories;
}