import PostCard from '@/components/common/PostCard';
import Header from '@/components/layout/Header';
import { PostProps } from '@/interfaces';
import React from 'react';

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div>
      <Header />
      <div className='p-5'>
        <h1 className="text-4xl font-extrabold text-center my-4">Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} title={post.title} content={post.body} userId={post.userId} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
};

export default PostsPage;