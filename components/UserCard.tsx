'use client'
import { useRouter } from "next/navigation";

interface UserCardProps {
  name: string
  avatar: string
}

export default function UserCard({name, avatar}: UserCardProps) {
  const router = useRouter();

  const selectProfile = () => {
    router.push('/');
  };
  return (
    <div onClick={selectProfile} className="group flex-row w-44 mx-auto">
        <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
          <img draggable={false} className="w-max h-max object-contain" src={avatar || "/images/default-blue.png"} alt="avatar" />
        </div>
      <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">{name}</div>
   </div>
  );
}
