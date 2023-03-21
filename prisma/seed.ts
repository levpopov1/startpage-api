import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const data = Array.from({ length: 20 }).map(() => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  return {
    email: faker.internet.email(firstName, lastName),
    userName: faker.internet.userName(firstName, lastName),
    firstName,
    lastName,
  };
});

async function main() {
  await prisma.user.deleteMany();
  await prisma.user.createMany({
    data,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
