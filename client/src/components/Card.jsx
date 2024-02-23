import { Link } from 'react-router-dom';

function PostCard({ post }) {
  return (
    <div 
      className='border-2 border-[#FF0045] group relative w-full h-[400px] sm:w-[430px] shadow-md hover:shadow-xl hover:scale-105 dark:shadow-[#FF0045] dark:hover:shadow-lg dark:hover:shadow-[#FF0045] rounded-lg transition'
    >
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt='post cover'
          className='h-[250px] w-full object-cover rounded-t-lg'
        />
      </Link>
      <div className='flex flex-col'>
        <Link
          to={`/post/${post.slug}`}
          className='text-center m-2 text-2xl'
        >
          <p className='font-serif'>{post.title}</p>
        </Link>
      </div>
    </div>
  );
}

export default PostCard
