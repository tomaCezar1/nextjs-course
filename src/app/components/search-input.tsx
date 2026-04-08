'use client';

import { search } from '@/actions';
import { Input } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';

const SearchInput = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('term') || '';

  return (
    <form action={search}>
      <Input name="term" defaultValue={searchQuery} />
    </form>
  );
};

export default SearchInput;
