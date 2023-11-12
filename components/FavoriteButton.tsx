'use client'

import axios from "axios";
import { CheckIcon, PlusIcon } from "lucide-react";
import { useMemo, useState } from "react";

interface FavoriteButtonProps {
  movieId: string,
  favoriteMovies: string []
}
export default function FavoriteButton({movieId, favoriteMovies}: FavoriteButtonProps) {
  const [list, setList] = useState(favoriteMovies)
  const isFavorite = useMemo(() => {

    return list.includes(movieId);
  }, [movieId, list]);

  const toggleFavorite = async () => {
    let response;
    if(isFavorite){
      response = await axios.delete("/api/favorite", {data: {movieId}})
    }else{
      response = await axios.post("/api/favorite",{movieId})
    }
    const updateFavoriteMovies = response?.data?.favoriteIds;
    setList(updateFavoriteMovies)
    // làm vậy để chỉ render lại cái component thôi chứ ko dùng useRouter sẽ reload cả page
  }

  const Icon = isFavorite ? CheckIcon : PlusIcon;

  return (
    <div onClick={toggleFavorite} className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
      <Icon className="text-white group-hover/item:text-neutral-300 w-4 lg:w-6" />
    </div>
  )
}
