
import WatchMovie from '@/components/WatchMovie';
import prismadb from '@/lib/prismadb';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';


const Watch = async ({params} : {params: {movieId: string}}) => {
  const session = await getServerSession()
  if(!session){
    redirect("/auth")
  }
  const movieId = params.movieId
  if (typeof movieId !== 'string') {
    throw new Error('Invalid Id');
  }

  if (!movieId) {
    throw new Error('Missing Id');
  }

  const data = await prismadb.movie.findUnique({
    where: {
      id: movieId
    }
  });
  return (
    <WatchMovie data={data!}/>
  )
}

export default Watch;
