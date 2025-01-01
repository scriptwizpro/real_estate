import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' }); // Adjust the path if needed
const prisma = new PrismaClient();

export default prisma;