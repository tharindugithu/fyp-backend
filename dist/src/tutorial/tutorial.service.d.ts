import { CreateTutorialDto } from 'src/dtos/CreateTutorial.dto';
import { Tutorial } from 'src/typeorm/entities/Tutorial';
import { Repository } from 'typeorm';
export declare class TutorialService {
    private tutorialRepo;
    constructor(tutorialRepo: Repository<Tutorial>);
    getSpecificTutorial(tutorialId: number): Promise<Tutorial>;
    deleteTutorial(tutorialId: number): Promise<void>;
    updateTutorial(tutorialId: number, updatededTutorial: CreateTutorialDto): Promise<Tutorial>;
    fetchTutorials(): Promise<Tutorial[]>;
    createTutorial(tutorial: CreateTutorialDto): Promise<Tutorial>;
}
