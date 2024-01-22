import { ActivityService } from './activity.service';
import { Activity } from 'src/typeorm/entities/Activity';
import { CreateActivityDto } from 'src/dtos/CreateActivity.dto';
export declare class ActivityController {
    private readonly activityService;
    constructor(activityService: ActivityService);
    createActivity(createActivityDto: CreateActivityDto): Promise<Activity>;
    getAllActivities(): Promise<Activity[]>;
    getActivityById(id: number): Promise<Activity>;
    updateActivity(id: number, updateActivityDto: CreateActivityDto): Promise<Activity>;
    deleteActivity(id: number): Promise<void>;
}
