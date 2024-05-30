import { NavLink, useNavigate } from "react-router-dom";
import { stripHtmlTags } from "../../helpers/stripHtmlTags";
import defaultImage from "/assets/default-blog-image.png";

const AllBlogs = ({blogs}) => {
  const navigate = useNavigate();

  const featuredBlog =  blogs.find(blog => blog.is_featured);
  const sponsoredBlog = blogs.find(blog => blog.is_sponsored);
  const filteredBlogs = blogs.filter(blog => !blog.is_featured && !blog.is_sponsored && !blog.is_editors_pick);

  const handleBlogClick = (slug) => {
    navigate(`/blog/${slug}`)
  }

  if (blogs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-primary">No blogs found</h1>
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:col-span-2">
        {featuredBlog && (
            <NavLink
              to={`/blog/${featuredBlog.slug}`}
            >
              <div className="cursor-pointer pt-5">
                <div className="w-[360px]" style={{height: '250px'}}>
                    <img 
                      src={featuredBlog.featured_image ? featuredBlog.featured_image : defaultImage}  
                      alt="featured_image" 
                      className="w-full h-full object-cover rounded-xl"
                    />
                      <div className="absolute ml-3 -mt-60 bg-n-12 text-n-14 text-xs px-2 py-1 rounded">
                        <p>{featuredBlog.blog_category.title}</p>
                      </div>
                </div>
                <div className="text-2xl font-bold text-primary">
                  {stripHtmlTags(featuredBlog?.title)}
                </div>
              
              </div>
            </NavLink>
          )}
        {filteredBlogs.map(blog => (
          <NavLink
            to={`/blog/${blog.slug}`}
          >
          <div key={blog.id} className="cursor-pointer pt-5" onClick={() => handleBlogClick(blog.slug)}>
            <div className="w-[360px]" style={{height: '250px'}}>
              <img 
                src={blog.featured_image ? blog.featured_image : defaultImage} 
                alt="featured_image" 
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute ml-3 -mt-60 bg-n-12 text-n-14 text-xs px-2 py-1 rounded">
                <p>{blog.blog_category.title}</p>
              </div>
            </div>
            
            <div className='text-2xl font-bold text-primary'>
              {stripHtmlTags(blog?.title)}
            </div>  
          </div>
          </NavLink>
        ))}
      </div>
    </>
  )
}

export default AllBlogs