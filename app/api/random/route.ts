import prismadb from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const moviesCount = await prismadb.movie.count();
    const randomIndex = Math.floor(Math.random() * moviesCount);

    const randomMovies = await prismadb.movie.findMany({
      take: 1,
      skip: randomIndex
    });

    return NextResponse.json(randomMovies[0])
  } catch (error) {
    console.log("[ERROR_RANDOM_MOVIE_API]",error);
    return new NextResponse("Internal Error", {status:500})
  }
}