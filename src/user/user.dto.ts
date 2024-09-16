import { IsOptional } from "class-validator";

export class UserDto {
    @IsOptional()
    id: number;
    name: string;
    age: number;
}