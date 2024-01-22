import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TutorialService } from './tutorial.service';
import { CreateTutorialDto } from 'src/dtos/CreateTutorial.dto';

@Controller('tutorial')
export class TutorialController {
    constructor(public tutorialService: TutorialService) { }

    @Post()
    async createTutorial(@Body() tutorialDto: CreateTutorialDto) {
        return this.tutorialService.createTutorial(tutorialDto);
    }

    @Get()
    async getTutorials() {
        return this.tutorialService.fetchTutorials()
    }

    @Put(':id')
    async updateTutorial(@Param('id') tutorialId: number, @Body() updatededTutorial: CreateTutorialDto) {
        return this.tutorialService.updateTutorial(tutorialId, updatededTutorial);
    }

    @Delete(':id')
    async deleteTutorial(@Param('id') tutorialId: number) {
        return this.tutorialService.deleteTutorial(tutorialId);
    }
    @Get('get_tutorial/:id')
    async getSpecificTutorial(@Param('id') tutorialId: number) {
        console.log("get cat call")
        return this.tutorialService.getSpecificTutorial(tutorialId)
    }
}
