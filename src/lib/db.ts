import { PrismaClient } from '@prisma/client'

console.log("Trying connection...")
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()
console.log(prisma)
// ``
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

console.log("Connection established!")