import { Router } from "express";
import * as generators from "../generators/index";

export const index = Router();

index.get("/", generators.index);
