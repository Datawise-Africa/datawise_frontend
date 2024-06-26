import he from 'he';
import DOMPurify from 'dompurify';
import "./htmldecoder.css"
import { REACT_PUBLIC_API_HOST } from '../constants';

const HtmlDecoder = ({ html }) => {
  const hostUrl = REACT_PUBLIC_API_HOST

  const UpdateImageUrls = (htmlString) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');

    const imgs = doc.querySelectorAll('img');
    imgs.forEach(img => {
      const src = img.getAttribute('src');
      if (src && !src.startsWith('http') || src && !src.startsWith('https')) {
        img.setAttribute('src', `${hostUrl}${src}`);
      }
    });
    return doc.body.innerHTML;
  }

  const decodedHtml = he.decode(html);
  const sanitizedHtml = DOMPurify.sanitize(decodedHtml);
  const updatedHtml = UpdateImageUrls(sanitizedHtml);

  return (
    <span 
      className='html-content'
      dangerouslySetInnerHTML={{__html: updatedHtml}}>
    </span>
  );
}

export default HtmlDecoder