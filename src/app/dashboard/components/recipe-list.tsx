import { Recipe } from "@/model/recipe.model"

interface RecipeListProps {
    recipes: Recipe[];
    onRecipeSelect: (recipe: Recipe) => void;
    isLoading: boolean;
}

const RecipeList = (props: RecipeListProps) => {
    const { recipes, onRecipeSelect, isLoading } = props;

    if (isLoading) {
        return (
            <div className="flex-1 rounded-lg bg-(--color-primary) p-4 shadow-md">
                <h1>Loading...</h1>
            </div>
        )
    }

    return (
        <div className="flex-1 flex flex-col rounded-lg bg-(--color-primary)/[75%] p-4 shadow-md gap-4">
            {
                recipes.map((recipe) => {
                    return (
                        <div key={recipe.id} className="flex-1 rounded-lg bg-(--color-secondary-dark) p-4 shadow-md text-(--text)" onClick={() => onRecipeSelect(recipe)}>
                            <h1>{recipe.name}</h1>
                            <p>{recipe.description}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RecipeList