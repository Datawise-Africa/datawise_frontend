import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import apiService from '../../services/apiService'
import Loader from '../blog/Loader';
import HtmlDecoder from "../../helpers/HtmlDecoder";
import MaxWidthWrapper from '../../helpers/max-width-wrapper';
import Section from '../../components/HomePage/Section';
import defaultImage from "/assets/default-blog-image.png";

const SingleDraft = () => {
    const { slug } = useParams();
    const [draft, setDraft] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchDraft = async () => {
            try {
                const response = await apiService.get(`/blogs/drafts/${slug}/`);
                setDraft(response);
            } catch (error) {
                console.log('Failed to fetch blog', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchDraft();
    }, [slug]);

    if (isLoading) {
        return <Loader />
    }

    if (!draft) {
        return <div className='mt-20 lg:mt-5 min-h-[500vh]'>Draft not found</div>;
    }

    return (
        <Section>
            <div className='mt-20 lg:mt-5 min-h-[50vh]'>
                <MaxWidthWrapper>
                    <div className='text-left'>
                        <h1 className='text-2xl font-bold mx-auto'>{draft?.title}</h1>
                    </div>
                    <div className="w-full h-64">
                        <img src={draft.featured_image ? draft.featured_image : defaultImage} alt="featured_image" className='w-full h-full rounded object-cover' />
                    </div>
                    <div>
                        <div className='flex items-center gap-4 py-2 border-b px-2 my-1'>
                            <span className='text-primary trunctate text-lg'>
                                <strong>Author:</strong> {draft?.author.first_name}{" "}{draft?.author.last_name}
                            </span>
                            <span className='text-primary text-lg truncate'>
                                {new Date(draft?.publish_date).toLocaleDateString()}
                            </span>
                        </div>
                        <div className="text-xl">
                            <HtmlDecoder html={draft?.body ?? ""} />
                        </div>
                    </div>
                </MaxWidthWrapper>
            </div>
        </Section>
    )
}

export default SingleDraft;