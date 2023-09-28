import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req: { method: string; }, res: { json: (arg0: ({ author: { id: string; name: string | null; email: string | null; createdAt: Date; updatedAt: Date; } | null; } & { id: string; title: string; content: string | null; published: boolean; authorId: string | null; })[]) => void; status: (arg0: number) => { (): any; new(): any; end: { (): void; new(): any; }; }; }) {
  if (req.method === 'GET') {
    const posts = await prisma.post.findMany({
      include: {
        author: true,
      },
    });
    res.json(posts);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
