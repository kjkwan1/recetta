import { z } from 'zod';
import { RecipeSchema } from '../dto/recipe.dto';

export type Recipe = z.infer<typeof RecipeSchema>;
export type Ingredient = z.infer<typeof RecipeSchema.shape.ingredients>;
export type Instruction = z.infer<typeof RecipeSchema.shape.instructions>;