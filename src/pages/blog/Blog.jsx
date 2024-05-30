import { useState, useEffect } from "react";
import Section from "../../components/HomePage/Section";
import FeatureBlog from "./FeatureBlog";
import SideNav from "./SideNav";
import AllBlogs from "./AllBlogs";
import apiService from "../../services/apiService";
import Loader from "./Loader";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await apiService.get("/blogs/");
        setBlogs(response.data);
      } catch (error) {
        console.log('Failed to fetch blogs', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (isLoading) {
    <Loader />
  }

  // const filteredBlogs = selectedCategory 
  // ? blogs.filter(blog => blog.blog_category.title === selectedCategory)
  // : blogs

  const filteredBlogs = blogs.filter(blog => {
    const matchesCategory = selectedCategory ? blog.blog_category.title == selectedCategory : true;
    const matchesSearchQuery = searchQuery ? (
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.blog_category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.publish_date.toLowerCase().includes(searchQuery.toLowerCase()) 
    ) : true;
    return matchesCategory && matchesSearchQuery;
  })

  return (
    <Section className="py-10 pt-10">
      <div className="container mx-auto pt-20 md:pt-10">
            {blogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:col-span-3">
                <AllBlogs blogs={filteredBlogs}/>
                <SideNav blogs={blogs} onCategorySelect={setSelectedCategory} onSearch={setSearchQuery} />
              </div>
            ) : (
              <div className="text-center">
                <p>Blogs Coming Soon</p>
              </div>
            )}
      </div>
    </Section>
  );
};

export default Blog;
