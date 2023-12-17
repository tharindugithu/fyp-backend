import { Course } from './Course';
export declare class Category {
    id: number;
    title: string;
    image: string;
    description: string;
    courses: Course[];
    createdAt: Date;
}
