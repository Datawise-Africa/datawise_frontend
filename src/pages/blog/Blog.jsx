import { useState, useEffect } from "react";
import Section from "../../components/HomePage/Section";
import FeatureBlog from "./FeatureBlog";
import AllBlogs from "./AllBlogs";
import apiService from "../../services/apiService";
import Loader from "./Loader";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <Section className="py-10 pt-10">
      <div className="container mx-auto pt-20 md:pt-10">
            {blogs.length > 0 ? (
              <>
                <FeatureBlog blogs={blogs} />
                <AllBlogs blogs={blogs}/>
              </>
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
