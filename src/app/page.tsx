import PostList from '@/components/posts/post-list';
import TopicCreateForm from './components/topics/topic-create-form';
import TopicList from './components/topics/topic-list';
import { fetchTopPosts } from '@/db/queries/posts';

export default async function Home() {
  // const session = await auth();

  return (
    // <>
    //   {/* <form action={signIn}>
    //     <Button type="submit">Sign In</Button>
    //   </form>

    //   <form action={signOut}>
    //     <Button type="submit">Sign Out</Button>
    //   </form>

    //   {session?.user ? (
    //     <div>Signed in as {session.user.email}</div>
    //   ) : (
    //     <div>Not signed in</div>
    //   )}

    //   <Profile /> */}
    // </>

    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top Posts</h1>
        <PostList fetchData={fetchTopPosts} />
      </div>
      <div>
        <TopicCreateForm />
        <TopicList />
      </div>
    </div>
  );
}
