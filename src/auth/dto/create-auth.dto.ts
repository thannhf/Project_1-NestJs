import { IsNotEmpty } from "class-validator";

export class CreateAuthDto {
    @IsNotEmpty({message: "username khong duoc de trong"})
    username: string;

    @IsNotEmpty({message: "password khong duoc de trong"})
    password: string;



}
