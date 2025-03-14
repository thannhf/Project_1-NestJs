import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateAuthDto {
    @IsNotEmpty({message: "email is not empty"})
    email: string;

    @IsNotEmpty({message: "password is not empty"})
    password: string;

    @IsOptional()
    name: string
}


export class CodeAuthDto {
    @IsNotEmpty({message: "id is not empty"})
    _id: string;

    @IsNotEmpty({message: "code is not empty"})
    code: string;
}

export class ChangePasswordAuthDto {
 
    @IsNotEmpty({message: "code is not empty"})
    code: string;

    @IsNotEmpty({message: "password is not empty"})
    password: string;

    @IsNotEmpty({message: "confirmPassword is not empty"})
    confirmPassword: string;

    @IsNotEmpty({message: "email is not empty"})
    email: string;
}