import { ProjectService } from './projects.service';
export declare class ProjectController {
    private readonly projectsService;
    constructor(projectsService: ProjectService);
    findByLink(link: string): Promise<{
        link: string;
        id: number;
        title: string;
        description: string;
        steps: string[];
        images: string[];
        price: string | null;
        duration: string | null;
        goals: string[];
        tasks: string[];
        audienceText: string[];
        prototypeText: string[];
        resultText: string | null;
        colors: string[];
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    findAll(): Promise<{
        link: string;
        id: number;
        title: string;
        description: string;
        steps: string[];
        images: string[];
        price: string | null;
        duration: string | null;
        goals: string[];
        tasks: string[];
        audienceText: string[];
        prototypeText: string[];
        resultText: string | null;
        colors: string[];
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): Promise<{
        link: string;
        id: number;
        title: string;
        description: string;
        steps: string[];
        images: string[];
        price: string | null;
        duration: string | null;
        goals: string[];
        tasks: string[];
        audienceText: string[];
        prototypeText: string[];
        resultText: string | null;
        colors: string[];
        createdAt: Date;
        updatedAt: Date;
    } | null>;
}
