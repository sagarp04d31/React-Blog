import { Link } from 'react-router-dom';

function PostCard({ post }) {
  return (
    <div className='group relative w-full h-[400px] sm:w-[430px]'>
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt='post cover'
          className='h-[260px] w-full object-cover'
        />
      </Link>
      <div className='flex flex-col'>
        <Link
          to={`/post/${post.slug}`}
          className='text-white'
        >
          <p className='font-serif'>{post.title}</p>
        </Link>
      </div>
    </div>
  );
}

export default PostCard
