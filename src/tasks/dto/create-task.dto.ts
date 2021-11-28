/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { IsNotEmpty } from 'class-validator';

/* eslint-disable prettier/prettier */
export class CreateTaskDto {
  @IsNotEmpty()
  title: string;
  
// eslint-disable-next-line prettier/prettier
@IsNotEmpty()
  description: string;
}
