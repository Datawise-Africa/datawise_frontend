import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { stripHtmlTags } from "../../helpers/stripHtmlTags";
import defaultImage from "/assets/default-blog-image.png";

const AllBlogs = ({blogs}) => {
  const navigate = useNavigate();

  const filteredBlogs = blogs.filter(blog => !blog.is_featured && !blog.is_sponsored && !blog.is_editors_pick);

  const handleBlogClick = (slug) => {
    navigate(`/blog/${slug}`)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:col-span-2">
      {filteredBlogs.map(blog => (
        <NavLink
          to={`/blog/${blog.slug}`}
        >
        <div key={blog.id} className="cursor-pointer pt-5" onClick={() => handleBlogClick(blog.slug)}>
          <div className="w-[360px]" style={{height: '250px'}}>
            <img 
              src={blog.featured_image ? blog.featured_image : defaultImage} 
              alt="featured_image" 
              className="w-full h-full object-cover"
            />
            {/* <div className="absolute top-40 left-90 bg-n-12 text-n-14 text-xs px-2 py-1 rounded">
              <p>{blog.blog_category.title}</p>
            </div> */}
          </div>
          
          <div className='text-2xl font-bold text-primary'>
            {stripHtmlTags(blog?.title)}
          </div>  
        </div>
        </NavLink>
      ))}
    </div>
  )
}

export default AllBlogs