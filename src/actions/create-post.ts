'use server';

import { auth } from '@/auth';
import { db } from '@/db';
import { z } from 'zod';

const createPostSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
});

interface CreatePostFormState {
  errors: {
    title?: string[];
    content?: string[];
    _form?: string[];
  };
}

export async function createPost(
  slug: string,
  formState: CreatePostFormState,
  formData: FormData,
): Promise<CreatePostFormState> {
  console.log({ formState });
  const result = createPostSchema.safeParse({
    title: formData.get('title'),
    content: formData.get('content'),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const session = await auth();
  if (!session || !session.user || !session.user.id) {
    return {
      errors: {
        _form: ['Must be signed in'],
      },
    };
  }

  const topic = await db.topic.findFirst({
    where: { slug },
  });

  if (!topic) {
    return { errors: { _form: ['Cannot find topic'] } };
  }

  return { errors: {} };
}
