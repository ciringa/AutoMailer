import { z } from "zod";
import "dotenv/config"

export const {SOURCE_EMAIL,SOURCE_PASS} = z.object({
    SOURCE_EMAIL:z.string(),
    SOURCE_PASS:z.string()
}).parse(process.env)