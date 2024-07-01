import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import apiService from '../../services/apiService'
import Loader from './Loader'
import HtmlDecoder from "../../helpers/HtmlDecoder";
import MaxWidthWrapper from '../../helpers/max-width-wrapper';
import Section from '../../components/HomePage/Section';
import defaultImage from "/assets/default-blog-image.png";

const SingleBlog = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await apiService.get(`/blogs/all/${slug}/`);
                setBlog(response);
            } catch (error) {
                console.log('Failed to fetch blog', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchBlog();
    }, [slug]);

    if (isLoading) {
        return <Loader />
    }

    if (!blog) {
        return <div className='mt-20 lg:mt-5 min-h-[500vh]'>Blog not found</div>;
    }

    return (
        <Section>
            <div className='mt-20 lg:mt-5 min-h-[50vh]'>
                <MaxWidthWrapper>
                    <div className='text-left'>
                        <h1 className='text-2xl font-bold mx-auto'>{blog?.title}</h1>
                    </div>
                    <div className="w-full h-64">
                        <img src={blog.featured_image ? blog.featured_image : defaultImage} alt="featured_image" className='w-full h-full rounded object-cover' />
                    </div>
                    <div>
                        <div className='flex items-center gap-4 py-2 border-b px-2 my-1'>
                            <span className='text-primary trunctate text-lg'>
                                <strong>Author:</strong> {blog?.author.first_name}{" "}{blog?.author.last_name}
                            </span>
                            <span className='text-primary text-lg truncate'>
                                {new Date(blog?.publish_date).toLocaleDateString()}
                            </span>
                        </div>
                        <div className="text-xl">
                            <HtmlDecoder html={blog?.body ?? ""} />
                        </div>
                    </div>
                </MaxWidthWrapper>
            </div>
        </Section>
    )
}

export default SingleBlog;