/* eslint-disable prettier/prettier */
import { IsString, MaxLength, MinLength } from 'class-validator';

/* eslint-disable prettier/prettier */
export class AuthCredentialsDto {
@MinLength(3)
@MaxLength(29)
@IsString()
  username: string;

  @MinLength(8)
  @MaxLength(29)
  @IsString()
  password: string;
}
