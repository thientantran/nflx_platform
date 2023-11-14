// 'use client'

import Billboard from "@/components/Billboard"
import InfoModelUseClient from "@/components/InfoModelUseClient"
import MovieList from "@/components/MovieList"
import Navbar from "@/components/Navbar"
import getMovies, { getFavoriteMoves } from "@/lib/functions"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

// import { getServerSession } from "next-auth"

export default async function Home() {

  // const {data:session} = useSession()
  const session = await getServerSession()
  if(!session){
    redirect("/auth")
  }
  const movies = await getMovies()
  const email: string = session?.user?.email || ""
  const favoriteMovieIds = await getFavoriteMoves(email)
  const favoriteMovies = movies?.filter((movie) => favoriteMovieIds.includes(movie.id))
  return (
    <div>
        <InfoModelUseClient/>
        <Navbar/>
        <Billboard/>
        <div className="pb-40">
          <MovieList title="Trending now" data={movies!}/>
          <MovieList title="Favorite Movie" data={favoriteMovies || []}/>
        </div>
        {/* {
          session ? (
            <button className="h-10 w-full bg-white" onClick={() => signOut()}>Sign out</button>
          ) : (
            <button className="h-10 w-full bg-white" onClick={() => signIn()}>Sign in</button>
          )
        } */}

    </div>

  )
}
