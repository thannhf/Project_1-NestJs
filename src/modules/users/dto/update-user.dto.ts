import { IsMongoId, IsNotEmpty, IsOptional } from "class-validator";


export class UpdateUserDto {
    @IsMongoId({message: "_id is not define"})
    @IsNotEmpty({message: "_id is not empty"})
    _id: string;

    @IsOptional()
    name: string;

    @IsOptional()
    phone: string;

    @IsOptional()
    address: string;

    @IsOptional()
    image: string;
}
