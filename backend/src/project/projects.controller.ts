import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { ProjectService } from './projects.service';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectsService: ProjectService) {}

  @Get("by-link")
  findByLink(@Query("link") link: string) {
    return this.projectsService.findByLink(link);
  }

  @Get()
  findAll() {
    return this.projectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.projectsService.findOne(id);
  }

}
