import { NextResponse } from 'next/server';

import prisma from '../../../lib/prisma';

const GET = async () => {
  const array = await prisma.post.findMany({});
  return NextResponse.json(array);
};

const POST = async (request: Request) => {
  const posts = await request.json();
  await prisma.post.deleteMany({});
  await prisma.post.createMany({
    data: posts,
    skipDuplicates: true
  });
  return NextResponse.json(true);
};

export { GET, POST };
