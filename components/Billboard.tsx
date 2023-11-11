
import axios from "axios"
import { InfoIcon } from "lucide-react"

export default async  function Billboard() {
  //gọi ở use client
  // const [randomMovie, setRandomMovie] = useState("")
  // const getRandomMovie = async() => {
  //   try {
  //     const data = await axios.get("/api/random")
  //     setRandomMovie(data.data.title)

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // useEffect(() => {
  //   getRandomMovie()
  // }, [])

  // gọi ở server, ko có useclient
  const data = await axios.get("http://localhost:3000/api/random")

  // hoặc ở server thì nên viết một hàm get riêng, sau đó gọi vào database và lấy lun, khỏi tốn công tạo Get api, tuỳ thuộc vào có muốn user call bên ngoài ko?
  return (
    <div className="relative h-[45vw]">
      <video
        className="w-full h-[45vw] object-cover brightness-[60%] transition duration-500"
        autoPlay
        muted
        loop
        poster={data.data?.thumbnailUrl}
        src={data.data?.videoUrl}
        >

      </video>
      <div className="absolute top-[30%] md:top-[40%] mt-4 ml-2 md:ml-16">
        <p className="text-white text-xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {data.data.title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {data.data?.description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <button className="bg-white text-white bg-opacity-30 rounded-xl py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition">
            <InfoIcon className="mr-1 w-4 md:w-7"/>
            More Info
          </button>
        </div>
      </div>
    </div>
  )
}
