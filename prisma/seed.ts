import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seedData = Array.from({ length: 20 }).map(() => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const widgets = Array.from({ length: 3 }).map(() => ({
    name: faker.helpers.arrayElement(["imageOfTheDay", "search", "time"]),
    column: Number(faker.random.numeric()),
    row: Number(faker.random.numeric()),
    width: Number(faker.random.numeric()),
    height: Number(faker.random.numeric()),
  }));
  return {
    email: faker.internet.email(firstName, lastName),
    userName: faker.internet.userName(firstName, lastName),
    firstName,
    lastName,
    profile: {
      create: {
        widgets: {
          create: widgets,
        },
      },
    },
  };
});

async function main() {
  await prisma.user.deleteMany();
  await Promise.all(
    seedData.map((item) =>
      prisma.user.create({
        data: item,
      })
    )
  );

  // cant use createMany with schemas that have relations
  // await prisma.user.createMany({
  //   data,
  // });
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
