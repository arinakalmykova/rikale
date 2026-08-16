import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { create } from 'domain';

@Injectable()
export class ProjectService {
    constructor(private readonly prisma:PrismaService){}

    async findAll() {
        return this.prisma.project.findMany({
            orderBy: {
                createdAt: 'desc'
            },
        })
    }

    async findOne(id:number) {
        return this.prisma.project.findUnique({
            where: {
                id
            },
        })
    }
}