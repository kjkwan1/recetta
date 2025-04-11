/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO: Replace with actual API
import { sampleRecipes } from "@test-data/recipe";
import { users } from "@test-data/user";
import { RecipeSchema } from "../../dto/recipe.dto";
import { Recipe } from "@/model/recipe.model";
import { User } from "@/model/user.model";

const mockDb = [...sampleRecipes];

const getRandomResolveTime = () => Math.ceil(Math.random() * 2000);

// CRUD Mock
export const getRecipes = async (userId: string) => {
  return new Promise<Recipe[]>((resolve) => {
    setTimeout(() => {
      resolve(mockDb.filter((recipe) => {
        const result = RecipeSchema.safeParse(recipe);
        if (!result.success) {
          console.error(result.error.format());
          return false;
        }
        return true;
      }));
    }, getRandomResolveTime());
  });
};

export const getRecipeById = async (id: string) => {
  return new Promise<Recipe | undefined>((resolve) => {
    setTimeout(() => {
      const recipe = mockDb.find((recipe) => recipe.id === id);
      resolve(recipe);
    }, getRandomResolveTime());
  });
};

export const createRecipe = async (recipe: Recipe) => {
  return new Promise<Recipe>((resolve) => {
    setTimeout(() => {
      mockDb.push(recipe);
      resolve(recipe);
    }, getRandomResolveTime());
  });
};

export const updateRecipe = async (id: string, updatedRecipe: Recipe) => {
  return new Promise<Recipe | undefined>((resolve) => {
    setTimeout(() => {
      const index = mockDb.findIndex((recipe) => recipe.id === id);
      if (index !== -1) {
        mockDb[index] = { ...mockDb[index], ...updatedRecipe };
        resolve(mockDb[index]);
      } else {
        resolve(undefined);
      }
    }, getRandomResolveTime());
  });
};

export const deleteRecipe = async (id: string) => {
  return new Promise<boolean>((resolve) => {
    setTimeout(() => {
      const index = mockDb.findIndex((recipe) => recipe.id === id);
      if (index !== -1) {
        mockDb.splice(index, 1);
        resolve(true);
      } else {
        resolve(false);
      }
    }, getRandomResolveTime());
  });
}

// users
const mockUserDb = [...users];
const getRandomUserResolveTime = () => Math.ceil(Math.random() * 2000);
// Auth mock

export const login = async (email: string, password: string) => {
  return new Promise<User | undefined>((resolve) => {
    setTimeout(() => {
      const user = mockUserDb.find((user) => user.email === email && user.password === password);
      resolve(user);
    }, getRandomUserResolveTime());
  });
}

export const register = async (user: User) => {
  return new Promise<User>((resolve) => {
    setTimeout(() => {
      mockUserDb.push(user);
      resolve(user);
    }, getRandomUserResolveTime());
  });
}

// CRUD mock

export const getUsers = async () => {
  return new Promise<User[]>((resolve) => {
    setTimeout(() => {
      resolve(mockUserDb);
    }, getRandomUserResolveTime());
  });
};

export const getUserById = async (id: string) => {
  return new Promise<User | undefined>((resolve) => {
    setTimeout(() => {
      const user = mockUserDb.find((user) => user.id === id);
      resolve(user);
    }, getRandomUserResolveTime());
  });
}

export const createUser = async (user: User) => {
  return new Promise<User>((resolve) => {
    setTimeout(() => {
      mockUserDb.push(user);
      resolve(user);
    }, getRandomUserResolveTime());
  });
}

export const updateUser = async (id: string, updatedUser: User) => {
  return new Promise<User | undefined>((resolve) => {
    setTimeout(() => {
      const index = mockUserDb.findIndex((user) => user.id === id);
      if (index !== -1) {
        mockUserDb[index] = { ...mockUserDb[index], ...updatedUser };
        resolve(mockUserDb[index]);
      } else {
        resolve(undefined);
      }
    }, getRandomUserResolveTime());
  });
}

export const deleteUser = async (id: string) => {
  return new Promise<boolean>((resolve) => {
    setTimeout(() => {
      const index = mockUserDb.findIndex((user) => user.id === id);
      if (index !== -1) {
        mockUserDb.splice(index, 1);
        resolve(true);
      } else {
        resolve(false);
      }
    }, getRandomUserResolveTime());
  });
}