import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateAuthDto {
    @IsNotEmpty({message: "email is not empty"})
    email: string;

    @IsNotEmpty({message: "password is not empty"})
    password: string;

    @IsOptional()
    name: string
}
