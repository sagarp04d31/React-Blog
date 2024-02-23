import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PostCard from '../components/Card.jsx';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/get_posts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div className='flex flex-col mx-auto max-w-4xl my-5'>
      {posts && posts.length > 0 && (
        <div className='flex flex-col gap-4'>
          <div className='flex flex-wrap gap-4'>
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        </div>
      )}
    </div>
  );

}

export default Home
