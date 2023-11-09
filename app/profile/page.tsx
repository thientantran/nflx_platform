import UserCard from "@/components/UserCard";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await getServerSession()
  if(!session){
    redirect("/auth")
  }
  return (
    <div className="flex items-center h-full justify-center">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-6xl text-white text-center">Who&#39;s watching?</h1>
        <div className="flex items-center justify-center gap-8 mt-10">
          <div className="text-white" >
            <UserCard name={session?.user?.name!} avatar={session?.user?.image!}/>
          </div>
        </div>
      </div>
    </div>
  );
}
