import { IsString, IsBoolean } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  task: string;

  @IsBoolean()
  complete: boolean;
}
