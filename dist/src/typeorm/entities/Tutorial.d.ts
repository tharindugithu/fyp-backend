import { Course } from './Course';
import { Activity } from './Activity';
export declare class Tutorial {
    id: number;
    title: string;
    tuto_url: string;
    course: Course;
    activities: Activity[];
}
