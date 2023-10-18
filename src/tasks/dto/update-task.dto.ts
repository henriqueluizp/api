import { IsOptional } from 'class-validator';

export class UpdateTaskDto {
  @IsOptional()
  task: string;

  @IsOptional()
  complete: boolean;
}
