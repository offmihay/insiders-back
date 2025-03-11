import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto, QueryTaskDto } from './task.dto';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async getTasks(query: QueryTaskDto) {
    return this.prisma.task.findMany({
      where: {
        status: query.status,
      },
    });
  }

  async createTask(data: CreateTaskDto) {
    return this.prisma.task.create({
      data,
    });
  }

  async updateTask(id: string, data: CreateTaskDto) {
    return this.prisma.task.update({
      where: {
        id,
      },
      data,
    });
  }

  async deleteTask(id: string) {
    await this.prisma.task.delete({
      where: {
        id,
      },
    });
    return { message: 'Deleted successfully' };
  }
}
