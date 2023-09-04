import fastify from "fastify";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const app = fastify();

app.listen({
    port:3333
}).then(() => {
    console.log('HTTP is running on port 3333')
})

app.get('/students', async () => {
    const student = await prisma.student.findMany()
    return student;
})

app.get('/teachers', async () => {
    const teacher = await prisma.teacher.findMany()
    return teacher
})

app.get('/subjects', async () => {
    const subject = await prisma.subject.findMany()
    return subject
})