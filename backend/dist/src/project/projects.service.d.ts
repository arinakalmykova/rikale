import { PrismaService } from '../prisma/prisma.service';
export declare class ProjectService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
