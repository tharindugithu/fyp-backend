import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { Activity } from 'src/typeorm/entities/Activity';
import { CreateActivityDto } from 'src/dtos/CreateActivity.dto';

@Controller('activity')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Post()
  async createActivity(@Body() createActivityDto: CreateActivityDto) {
    return await this.activityService.createActivity(createActivityDto);
  }

  @Get()
  async getAllActivities(): Promise<Activity[]> {
    return await this.activityService.getAllActivities();
  }

  @Get(':id')
  async getActivityById(@Param('id') id: number): Promise<Activity> {
    return await this.activityService.getActivityById(id);
  }

  @Put(':id')
  async updateActivity(
    @Param('id') id: number,
    @Body() updateActivityDto: CreateActivityDto,
  ): Promise<Activity> {
    return await this.activityService.updateActivity(id, updateActivityDto);
  }

  @Delete(':id')
  async deleteActivity(@Param('id') id: number): Promise<void> {
    return await this.activityService.deleteActivity(id);
  }
}
