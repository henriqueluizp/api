import { MongooseModule } from "@nestjs/mongoose";
import { Module } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { TasksController } from "./tasks.controller";
import { taskSchema } from "./schemas/task.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: "tasks", schema: taskSchema }])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule { }
