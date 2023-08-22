import { PrismaClient } from '@prisma/client'
import { hash, hashSync } from 'bcrypt'
const prisma = new PrismaClient()
async function main() {
  await prisma.user.create({
    data: {
      email: 'teste@gmail.com',
      password: hashSync('teste123', 10),
      name: 'Teste'
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })