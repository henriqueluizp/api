import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  create(createTaskDto: CreateTaskDto) {
    const currentMaxId = this.tasks[this.tasks.length - 1]?.id || 0;
    const id = currentMaxId + 1;

    const task = {
      id,
      ...createTaskDto,
    };
    this.tasks.push(task);
    return task;
  }

  findAll() {
    return this.tasks;
  }

  findOne(id: number) {
    const index = this.tasks.findIndex((task) => task.id === id);
    return this.tasks[index];
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    const task = this.findOne(id);

    const newTask = {
      ...task,
      ...updateTaskDto,
    };
    const index = this.tasks.findIndex((task) => task.id === id);
    this.tasks[index] = newTask;
    return newTask;
  }

  remove(id: number) {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index === -1) {
      throw new NotFoundException('task does not exist');
    }
    this.tasks.splice(index, 1);
    return `Tarefa #${id} removida com sucesso!`;
  }
}
