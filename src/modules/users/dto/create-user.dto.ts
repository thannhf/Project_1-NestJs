import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty({ message: "name is not empty" })
    name: string;

    @IsNotEmpty({message: 'email khong duoc de trong'})
    @IsEmail({}, {message: 'email khong dung dinh dang'})
    email: string;

    @IsNotEmpty({ message: "password is not empty" })
    password: string;
    
    phone: string;
    address: string;
    image: string;
}
