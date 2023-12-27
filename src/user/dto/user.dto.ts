import {
  IsString,
  IsEmail,
  IsOptional,
} from 'class-validator';

export class EditUserDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  hash: string;

  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;
}
