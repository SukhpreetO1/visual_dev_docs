/**
 * Lessons Controller: CRUD operations for lessons and interactive steps.
 */

import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { QueryBuilder } from '../../database/QueryBuilder';

@Controller('v1/lessons')
export class LessonsController {
  @Get()
  async getLessons(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '20',
    @Query('domain') domain?: string,
  ) {
    const pageNum = parseInt(page, 10) || 1;
    const limitNum = parseInt(limit, 10) || 20;
    return QueryBuilder.findLessonsPaginated(pageNum, limitNum, domain);
  }

  @Get(':id')
  async getLessonById(@Param('id') id: string) {
    const lesson = await QueryBuilder.findLessonById(id);
    if (!lesson) {
      return { success: false, message: 'Lesson not found.' };
    }
    return lesson;
  }

  @Post()
  async createLesson(
    @Body()
    body: {
      domain: string;
      topic: string;
      title: string;
      description: string;
      config_json: any;
      steps?: {
        step_number: number;
        title: string;
        content_markdown: string;
        code_snippet?: string;
        language?: string;
      }[];
    },
  ) {
    return QueryBuilder.createLesson(body);
  }

  @Delete(':id')
  async deleteLesson(@Param('id') id: string) {
    return QueryBuilder.softDeleteLesson(id);
  }
}
