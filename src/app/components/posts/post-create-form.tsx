'use client';

import { useActionState } from 'react';
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react';
import FormButton from '../common/form-button';

const PostCreateForm = () => {
  const [formState, action, isPending] = useActionState();

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a post</Button>
      </PopoverTrigger>

      <PopoverContent>
        <form action={}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a post</h3>
            <Input
              name="title"
              label="Title"
              labelPlacement="outside"
              placeholder="title"
            />
            <Input
              name="content"
              label="Content"
              labelPlacement="outside"
              placeholder="content"
            />
            <FormButton isLoading={isPending}>Create Post</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default PostCreateForm;
