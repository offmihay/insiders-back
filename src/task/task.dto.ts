import { Status } from '@prisma/client';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsEnum(Status)
  status: Status;
}

export class QueryTaskDto {
  @IsOptional()
  @IsEnum(Status)
  status: Status;
}
