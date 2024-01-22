import { TutorialService } from './tutorial.service';
import { CreateTutorialDto } from 'src/dtos/CreateTutorial.dto';
export declare class TutorialController {
    tutorialService: TutorialService;
    constructor(tutorialService: TutorialService);
    createTutorial(tutorialDto: CreateTutorialDto): Promise<import("../typeorm/entities/Tutorial").Tutorial>;
    getTutorials(): Promise<import("../typeorm/entities/Tutorial").Tutorial[]>;
    updateTutorial(tutorialId: number, updatededTutorial: CreateTutorialDto): Promise<import("../typeorm/entities/Tutorial").Tutorial>;
    deleteTutorial(tutorialId: number): Promise<void>;
    getSpecificTutorial(tutorialId: number): Promise<import("../typeorm/entities/Tutorial").Tutorial>;
}
