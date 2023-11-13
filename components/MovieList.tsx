import { getFavoriteMoves } from '@/lib/functions'
import { Movie } from '@prisma/client'
import { isEmpty } from 'lodash'
import { getServerSession } from 'next-auth'
import MovieCard from './MovieCard'

interface MovieListProps{
  data: Movie[]
  title: string
}

export default async function MovieList({data, title}: MovieListProps) {
  if(isEmpty(data)){
    return null
  }
  const session = await getServerSession()
  const email: string = session?.user?.email || ""
  const favoriteMovies = await getFavoriteMoves(email)
  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">{title}</p>
        <div className="grid grid-cols-4 gap-2">
          {data.map((movie) => (
           <MovieCard key={movie.id} favoriteMovies={favoriteMovies} data={movie}/>
          ))}
        </div>
      </div>
    </div>
  )
}
