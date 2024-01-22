import { Category } from './Category';
import { Tutorial } from './Tutorial';
export declare class Course {
    id: number;
    title: string;
    image: string;
    description: string;
    category: Category;
    tutorials: Tutorial[];
    createdAt: Date;
}
