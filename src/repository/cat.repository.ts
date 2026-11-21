import { Repository } from "typeorm";
import type { Cat } from "../entities/cat.entity.ts";

export class CatRepository extends Repository<Cat> {
    
}