import { Router } from "express";
import { get } from './get';
import {post} from "./post";
export const index = Router();
index.get("/test", get);
index.post("/test", post);

