'use client';

import Link from 'next/link';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Avatar,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import React from 'react';
import * as actions from '@/actions';

export default function HeaderAuth() {
  const session = useSession();

  let authContent: React.ReactNode;
  if (session.data?.user) {
    authContent = (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar
            src={session.data?.user.image || ''}
            alt={session.data?.user.name || 'User'}
          />
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <form action={actions.signOut}>
              <Button type="submit">Sign out</Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="secondary" variant="bordered">
              Sign in
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={actions.signOut}>
            <Button type="submit" color="primary" variant="flat">
              Sign out
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }

  return authContent;
}
