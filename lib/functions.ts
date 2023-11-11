import prismadb from "./prismadb";

export default async function getMovies() {
  console.log("ZO GET MOVIES")
  try {

    const movies = await prismadb.movie.findMany();

    return movies
  } catch (error) {
    console.log(['ERROR_GET_MOVIES'])
  }
}