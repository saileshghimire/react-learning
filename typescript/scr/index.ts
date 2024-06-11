import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const insertUser = async (email : string, password: string, firstName:string, lastName:string) => {
    const response = await prisma.user.create({
        data:{
            email,
            firstName,
            lastName,
            password
        },
        select:{
            id:true,
            password:true
        }
    })
    console.log(response);
    
}

// insertUser("admin1", "123456", "harkirat", "singh")

interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(email: string, {
    firstName,
    lastName
}: UpdateParams) {
  const res = await prisma.user.update({
    where: { email },
    data: {
      firstName,
      lastName
    }
  });
  console.log(res);
}
