import { UserSchema } from "@/dto/user.dto"
import { z } from "zod"

export type User = z.infer<typeof UserSchema>;