import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";

import prismadb from '@/lib/prismadb';


const serverAuth = async (req: NextApiRequest) => {
  const session = await getSession({req});
  //session này ko có những fields mình cần, dùng để get các field cần thiết
  if (!session?.user?.email) {
    throw new Error('Not signed in');
  }

  const currentUser = await prismadb.user.findUnique({
    where: {
      email: session.user.email,
    }
  });

  if (!currentUser) {
    throw new Error('Not signed in');
    // viết cái này để mấy cái mà gọi cái này, nó nhận diện được error
  }

  return { currentUser };
}

export default serverAuth;
