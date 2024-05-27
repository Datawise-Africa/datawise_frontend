import { NavLink } from "react-router-dom";
import { stripHtmlTags } from "../../helpers/stripHtmlTags";
import defaultImage from "/assets/default-blog-image.png";

const FeatureBlog = ({blogs}) => {

  const featuredBlog =  blogs.find(blog => blog.is_featured);
  const sponsoredBlog = blogs.find(blog => blog.is_sponsored);
  const editorPickBlog = blogs.find(blog => blog.is_editors_pick);

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:col-span-3">
        {sponsoredBlog && (
          <NavLink
            to={`/blog/${sponsoredBlog.slug}`}
          >
          <div className="cursor-pointer">
            <div className="w-[360px]" style={{height: '250px'}}>
                  <img src={sponsoredBlog.featured_image ? sponsoredBlog.featured_image : defaultImage}  alt="featured_image" className="w-full h-full object-cover"/>
                  <div className="absolute top-40 left-90 bg-n-12 text-n-14 text-xs px-2 py-1 rounded">
                    <p>{sponsoredBlog.blog_category.title}</p>
                  </div>
            </div>
            
                <div className="text-2xl font-bold text-primary">
                  {stripHtmlTags(sponsoredBlog?.title)}
                </div>
                
              
          </div>
          </NavLink>
        )}
          {featuredBlog && (
            <NavLink
              to={`/blog/${featuredBlog.slug}`}
            >
              <div className="cursor-pointer">
                <div className="w-[360px]" style={{height: '250px'}}>
                    <img src={featuredBlog.featured_image ? featuredBlog.featured_image : defaultImage}  alt="featured_image"/>
                      <div className="absolute top-40 left-90 bg-n-12 text-n-14 text-xs px-2 py-1 rounded">
                    <p>{featuredBlog.blog_category.title}</p>
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary">
                  {stripHtmlTags(featuredBlog?.title)}
                </div>
              
              </div>
            </NavLink>
          )}
          {editorPickBlog && (
             <NavLink
             to={`/blog/${editorPickBlog.slug}`}
            >
              <div className="cursor-pointer">
                <div className="w-[360px]" style={{height: '250px'}}>
                  <img src={editorPickBlog.featured_image ? editorPickBlog.featured_image : defaultImage} alt="featured_image"/>
                  <div className="absolute top-40 left-90 bg-n-12 text-n-14 text-xs px-2 py-1 rounded">
                    <p>{editorPickBlog.blog_category.title}</p>
                  </div>
                </div>
             
                <div className="text-2xl font-bold text-primary">
                  {stripHtmlTags(editorPickBlog?.title)}
                </div>
              
              </div>
            </NavLink>
          )}
      </div>
    )
}

export default FeatureBlog