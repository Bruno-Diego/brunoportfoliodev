// app/api/latest-posts/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Busca todos os blogs
    const blogs = await prisma.blog.findMany({
      include: {
        posts: {
          orderBy: {
            createdAt: "desc", // Ordena os posts por data de criação (do mais recente para o mais antigo)
          },
          take: 1, // Pega apenas o último post de cada blog
        },
      },
    });

    // Filtra os blogs que têm posts
    const blogsWithLatestPost = blogs.filter((blog) => blog.posts.length > 0);

    return NextResponse.json(blogsWithLatestPost, { status: 200 });
  } catch (error) {
    console.error("Error fetching latest posts:", error);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}