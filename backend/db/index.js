import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username, password, firstName, lastName) {
  const res = await prisma.user.create({
    data: {
        username,
        password,
        firstName,
        lastName
    }
  })
  console.log(res);
}

export default prisma

insertUser("admin1", "123456", "harkirat", "singh")