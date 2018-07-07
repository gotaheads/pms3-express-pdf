import {Router} from "express";
import {post} from "./post";

export const index = Router();

index.post("/test", post);

