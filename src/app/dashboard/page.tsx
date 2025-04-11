'use client';

import { useEffect, useState } from "react";
import Metrics from "./components/metrics";
import RecipeList from "./components/recipe-list";
import { getRecipes, login as mockLogin } from "../api/mock-api";
import { useAuth } from "@/hooks/useAuth";
import { Recipe } from "@/model/recipe.model";

const Dashboard = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const { user, login } = useAuth();

    // TODO: Add authentication and rmove

    useEffect(() => {
        setIsLoading(true);

        const loginUser = async (email: string, password: string) => {
            const user = await mockLogin(email, password);
            if (!user) {
                console.error("User not found");
                return;
            }
            login(user);
        }

        const fetchData = async () => {
            if (!user) {
                return;
            }

            const result = await getRecipes(user.id);
            if (!result.length) {
                console.error("No recipes found");
                return;
            }

            console.log('Fetched recipes:', result);

            setRecipes(result);
            setIsLoading(false);
        }

        loginUser("user@username.com", "password123")
            .then(() => fetchData());
    }, [user, login]);

    const handleRecipeSelect = (recipe: Recipe) => {
        console.log("Selected recipe:", recipe);
    }

    return (
        <>
            <RecipeList recipes={recipes} onRecipeSelect={handleRecipeSelect} isLoading={isLoading} />
            <Metrics />
        </>

    );
}

export default Dashboard;