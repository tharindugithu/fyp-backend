import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTutorialDto } from 'src/dtos/CreateTutorial.dto';
import { Tutorial } from 'src/typeorm/entities/Tutorial';
import { DeepPartial, Repository } from 'typeorm';

@Injectable()
export class TutorialService {

    constructor(@InjectRepository(Tutorial) private tutorialRepo: Repository<Tutorial>) { }

    getSpecificTutorial(tutorialId: number) {
        return this.tutorialRepo.findOne({
            where: {
                id: tutorialId,
            },
            relations: ['course','activities']
        },);
    }
    async deleteTutorial(tutorialId: number) {
        await this.tutorialRepo.delete(tutorialId);
    }

    async updateTutorial(tutorialId: number, updatededTutorial: CreateTutorialDto) {
        const existingTutorial = await this.tutorialRepo.findOne({
            where: {
                id: tutorialId,
            },
        });

        if (!existingTutorial) {
          
            return undefined;
        }

        Object.assign(existingTutorial, updatededTutorial);

        return this.tutorialRepo.save(existingTutorial);
    }
    fetchTutorials() {
        return this.tutorialRepo.find({ relations: ['course','activities'] })
    }
    createTutorial(tutorial: CreateTutorialDto) {
        const newTutorial: DeepPartial<Tutorial> = {
            title: tutorial.title,
            tuto_url: tutorial.tuto_url,
            course: { id: tutorial.course }
        }

        const createdTutorial = this.tutorialRepo.create(newTutorial);
        return this.tutorialRepo.save(createdTutorial);
    }
}
