import { GetServerSideProps } from 'next';

interface Post {
  id: string;
  title: string;
  content?: string;
  published: boolean;
  author: {
    id: string;
    name?: string;
    email?: string;
  };
};

interface HomeProps {
  posts: Post[];
};

const Home: React.FC<HomeProps> = ({ posts }) => {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>By: {post.author?.name || 'Unknown'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/posts');
  const posts: Post[] = await res.json();

  return {
    props: { posts },
  };
};

export default Home;
