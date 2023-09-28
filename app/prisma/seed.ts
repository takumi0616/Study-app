import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seed = async () => {
  await prisma.user.create({
    data: {
      name: "takahashi",
      email: "sample@email.com",
      posts: {
        create: {
          title: "sample title",
          content: "sample content",
					published: true,
        },
      },
    },
  });
};

seed()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect;
  });