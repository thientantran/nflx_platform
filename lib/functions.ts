import prismadb from "./prismadb";

export default async function getMovies() {
  try {

    const movies = await prismadb.movie.findMany();

    return movies
  } catch (error) {
    console.log(['ERROR_GET_MOVIES'])
  }
}

export async function getFavoriteMoves(email : string){
  const user = await prismadb.user.findUnique({
    where:{
      email: email || ""
    }}
  );

  return user?.favoriteIds || []
}