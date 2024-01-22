import { Repository } from 'typeorm';
import { Activity } from 'src/typeorm/entities/Activity';
import { CreateActivityDto } from 'src/dtos/CreateActivity.dto';
import { Tutorial } from 'src/typeorm/entities/Tutorial';
export declare class ActivityService {
    private activityRepo;
    private tutorialRepo;
    constructor(activityRepo: Repository<Activity>, tutorialRepo: Repository<Tutorial>);
    createActivity(createActivityDto: CreateActivityDto): Promise<Activity>;
    getAllActivities(): Promise<Activity[]>;
    getActivityById(id: number): Promise<Activity>;
    updateActivity(id: number, updateActivityDto: CreateActivityDto): Promise<Activity>;
    deleteActivity(id: number): Promise<void>;
}
