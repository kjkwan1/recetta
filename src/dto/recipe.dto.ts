import * as z from 'zod';

export const RecipeSchema = z.object({
    id: z.string().uuid(),
    name: z.string().min(1, { message: "Name is required" }),
    description: z.string().optional(),
    ingredients: z.array(z.object({
        id: z.string().uuid(),
        name: z.string().min(1, { message: "Ingredient name is required" }),
        quantity: z.string().optional(),
        unit: z.string().optional(),
        isOptional: z.boolean().optional(),
    })),
    instructions: z.array(z.object({
        id: z.string().uuid(),
        step: z.string().min(1, { message: "Instruction step is required" }),
        isOptional: z.boolean().optional(),
    })),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    prepTime: z.string().optional(),
    cookTime: z.string().optional(),
    totalTime: z.string().optional(),
    servings: z.string().optional(),
});