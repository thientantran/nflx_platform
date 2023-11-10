
import axios from "axios"

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
  const randomMovie = data.data.title

  // hoặc ở server thì nên viết một hàm get riêng, sau đó gọi vào database và lấy lun, khỏi tốn công tạo Get api, tuỳ thuộc vào có muốn user call bên ngoài ko?
  return (
    <div className="text-white">{randomMovie}</div>
  )
}
