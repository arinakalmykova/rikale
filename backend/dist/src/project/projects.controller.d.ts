import { ProjectService } from './projects.service';
export declare class ProjectController {
    private readonly projectsService;
    constructor(projectsService: ProjectService);
    findAll(): Promise<{
        link: string;
        id: number;
        title: string;
        description: string;
        steps: string[];
        image: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): Promise<{
        link: string;
        id: number;
        title: string;
        description: string;
        steps: string[];
        image: string;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
}
