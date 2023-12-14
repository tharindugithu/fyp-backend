import { Category } from './Category';
import { Tutorial } from './Tutorial';
export declare class Course {
    id: number;
    title: string;
    description: string;
    category: Category;
    tutorials: Tutorial[];
}
