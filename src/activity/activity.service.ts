import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { Activity } from 'src/typeorm/entities/Activity';
import { CreateActivityDto } from 'src/dtos/CreateActivity.dto';
import { Tutorial } from 'src/typeorm/entities/Tutorial';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(Activity)
    private activityRepo: Repository<Activity>,
    @InjectRepository(Tutorial)
    private tutorialRepo:Repository<Tutorial>
  ) {}

  async createActivity(createActivityDto: CreateActivityDto) {
    const { title, answers, tutorial } = createActivityDto;
  
    const newActivity: DeepPartial<Activity> = {
      answers,
      title,
      tutorial:{id:tutorial}
    }
    const createActivity = this.activityRepo.create(newActivity);
    return this.activityRepo.save(createActivity);
  }
  

  async getAllActivities(): Promise<Activity[]> {
    return await this.activityRepo.find({relations:['tutorial']});
  }

  async getActivityById(id: number): Promise<Activity> {
    const activity = await this.activityRepo.findOne({
      where:{
        id
      },relations:['tutorial']
    });

    if (!activity) {
      throw new NotFoundException(`Activity with ID ${id} not found`);
    }

    return activity;
  }

  async updateActivity(id: number, updateActivityDto: CreateActivityDto): Promise<Activity> {
    const activity = await this.getActivityById(id);
    activity.title = updateActivityDto.title;
    activity.answers = updateActivityDto.answers;
    activity.tutorial =await this.tutorialRepo.findOne({
      where:{
        id:updateActivityDto.tutorial
      }
    });

    return await this.activityRepo.save(activity);
  }

  async deleteActivity(id: number): Promise<void> {
    const activity = await this.getActivityById(id);

    await this.activityRepo.remove(activity);
  }
}
