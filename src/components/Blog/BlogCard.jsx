import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Image */}
      <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta Information */}
        <div className="flex items-center justify-between mb-4">
          <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-medium">
            {post.category}
          </span>
          <time className="text-sm text-gray-500">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>

        {/* Title */}
        <h3 className="text-xl font-heading font-bold mb-3 hover:text-secondary transition-colors">
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

        {/* Author & Read More */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white text-sm font-semibold">
              {post.author.charAt(0)}
            </div>
            <span className="text-sm text-gray-600">{post.author}</span>
          </div>
          <Link
            to={`/blog/${post.id}`}
            className="text-secondary font-medium text-sm hover:underline flex items-center space-x-1"
          >
            <span>Read More</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
