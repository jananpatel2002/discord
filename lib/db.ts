import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient(); // This allows you to hot reload so the app doesn't create new prismaclient on refresh

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
