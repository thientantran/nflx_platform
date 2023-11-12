import prismadb from "@/lib/prismadb";
import { without } from "lodash";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req:Request) {
  try {
    const session = await getServerSession(authOptions);

    const { movieId } = await req.json();
    const existingMovie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      }
    });

    if (!existingMovie) {
      throw new Error('Invalid ID');
    }

    const user = await prismadb.user.update({
      where: {
        email: session?.user?.email || '',
      },
      data: {
        favoriteIds: {
          push: movieId
        }
      }
    });
    return NextResponse.json(user)

  } catch (error) {
    console.log(error);

    return new NextResponse("Internal Error", {status:500})
  }
}

export async function DELETE(req:Request) {
  try {
    const session = await getServerSession(authOptions);
    const { movieId } = await req.json();
    const existingMovie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      }
    });

    if (!existingMovie) {
      throw new Error('Invalid ID');
    }

    const user = await prismadb.user.findUnique({
      where: {
        email: session?.user?.email || '',
      }
    });
    const updatedFavoriteIds = without(user?.favoriteIds, movieId);
    const updatedUser = await prismadb.user.update({
      where: {
        email: session?.user?.email || '',
      },
      data: {
        favoriteIds: updatedFavoriteIds
      }
    });
    return NextResponse.json(updatedUser)

  } catch (error) {
    console.log(error);

    return new NextResponse("Internal Error", {status:500})
  }
}