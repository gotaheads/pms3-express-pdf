import { Router } from "express";
import { get } from './get';
export const index = Router();
index.get("/", get);
