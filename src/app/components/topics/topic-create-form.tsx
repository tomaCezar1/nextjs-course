'use client';

import { createTopic } from '@/actions';
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from '@nextui-org/react';
import { startTransition, useActionState } from 'react';

const TopicCreateForm = () => {
  const [formState, action] = useActionState(createTopic, { errors: {} });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    startTransition(() => {
      action(formData);
    });
  }

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button variant="bordered" color="primary">
          Create Topic
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <form onSubmit={handleSubmit} noValidate>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a New Topic</h3>
            <Input
              name="name"
              label="Name"
              labelPlacement="outside"
              placeholder="Name"
              isInvalid={!!formState.errors.name}
              errorMessage={formState.errors.name?.join(', ')}
            />
            <Textarea
              name="description"
              label="Description"
              labelPlacement="outside"
              placeholder="Description"
              isInvalid={!!formState.errors.description}
              errorMessage={formState.errors.description?.join(', ')}
            />
            <Button type="submit" color="primary">
              Submit
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default TopicCreateForm;
