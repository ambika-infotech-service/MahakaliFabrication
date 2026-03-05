import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import useSEO from '../hooks/useSEO';
import { buildAbsoluteUrl, buildBreadcrumbSchema } from '../utils/seo';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  useSEO({
    title: post ? post.title : 'Post Not Found',
    description: post
      ? post.excerpt
      : "The requested blog post could not be found.",
    path: post ? `/blog/${post.id}` : '/blog',
    image: post?.image,
    type: post ? 'article' : 'website',
    noIndex: !post,
    keywords: post
      ? [
          post.category,
          'metal fabrication blog',
          'fabrication insights',
          post.author,
        ]
      : ['blog', 'metal fabrication'],
    schema: post
      ? {
          '@context': 'https://schema.org',
          '@graph': [
            buildBreadcrumbSchema([
              { name: 'Home', path: '/' },
              { name: 'Blog', path: '/blog' },
              { name: post.title, path: `/blog/${post.id}` },
            ]),
            {
              '@type': 'Article',
              headline: post.title,
              description: post.excerpt,
              image: [post.image],
              datePublished: post.date,
              author: {
                '@type': 'Person',
                name: post.author,
              },
              publisher: {
                '@type': 'Organization',
                name: 'Mahakali Fabrication',
                logo: {
                  '@type': 'ImageObject',
                  url: buildAbsoluteUrl('/vite.svg'),
                },
              },
              mainEntityOfPage: buildAbsoluteUrl(`/blog/${post.id}`),
            },
          ],
        }
      : buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
        ]),
  });

  if (!post) {
    return (
      <div className="section-padding container-custom text-center">
        <h1 className="text-4xl font-heading font-bold mb-4">Post Not Found</h1>
        <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
        <Link to="/blog" className="btn-primary">
          Back to Blog
        </Link>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      {/* Article Header */}
      <article className="bg-white">
        <div className="relative h-[500px] bg-gradient-to-br from-gray-200 to-gray-300">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 container-custom pb-12">
            <div className="max-w-4xl">
              <span className="inline-block bg-secondary text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
                {post.title}
              </h1>
              <div className="flex items-center space-x-6 text-white/90">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-semibold">
                    {post.author.charAt(0)}
                  </div>
                  <span>{post.author}</span>
                </div>
                <span>•</span>
                <time>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <button
                onClick={() => navigate('/blog')}
                className="flex items-center space-x-2 text-gray-600 hover:text-secondary mb-8 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Back to Blog</span>
              </button>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>{post.content}</p>
                  <p>
                    This is a sample blog post. In a real application, you would have the full
                    article content stored in your database or CMS. You can format the content
                    using various HTML elements and styling to create an engaging reading experience.
                  </p>
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4">
                    Key Takeaways
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Understanding the fundamentals is crucial for success</li>
                    <li>Quality should never be compromised for speed</li>
                    <li>Continuous learning and adaptation are essential in this industry</li>
                    <li>Safety protocols must always be followed</li>
                  </ul>
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4">
                    Conclusion
                  </h2>
                  <p>
                    The fabrication industry continues to evolve with new technologies and
                    methodologies. Staying informed and adapting to these changes is key to
                    maintaining competitive advantage and delivering exceptional results.
                  </p>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold mb-4">Share this article</h3>
                <div className="flex space-x-4">
                  <button className="w-10 h-10 bg-gray-100 hover:bg-secondary hover:text-white rounded-full flex items-center justify-center transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-gray-100 hover:bg-secondary hover:text-white rounded-full flex items-center justify-center transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-gray-100 hover:bg-secondary hover:text-white rounded-full flex items-center justify-center transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-heading font-bold mb-12 text-center">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-secondary text-sm font-medium">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-xl font-heading font-bold mt-2 group-hover:text-secondary transition-colors">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BlogPost;
