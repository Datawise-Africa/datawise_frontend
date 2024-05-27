
import Button from '../../components/HomePage/Button';
import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const BlogsDashbord = () => {
  
  return (
    <div className='flex ml-10'>
      <div className='hidden md:block md:ml-10 w-40 md:w-2/5 lg:w-2/5'>
        <div className='flex flex-col'>
          <h2 className="h2 mb-4 md:mb-8">Blog List</h2>
        </div>
      </div>
      <div className='w-60 md:w-3/5 lg:w-3/5'>
        <div className='flex flex-col'>
          <h2 className="h2 mb-4 md:mb-8">Create a new blog</h2>

          <form action="#contact">
              <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-n-1">Title</label>
                  <input type="text" id="name" name="name" className="mt-5 w-full px-3 py-3 border border-n-1/10 rounded-xl focus:outline-none focus:border-n-10"/>
              </div>
              <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-n-1">Category</label>
                  <input type="text" id="name" name="name" className="mt-5 w-full px-3 py-3 border border-n-1/10 rounded-xl focus:outline-none focus:border-n-10"/>
              </div>
              <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-n-1">Featured image</label>
                  <input type="text" id="name" name="name" className="mt-5 w-full px-3 py-3 border border-n-1/10 rounded-xl focus:outline-none focus:border-n-10"/>
              </div>
              <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-n-1">Excerpt</label>
                  <textarea id="message" name="message" row="5" className="mt-5 w-full px-3 py-3 border border-n-1/10 rounded-xl focus:outline-none focus:border-n-10"/>
              </div> 
              <div className="mb-4">
                  <label htmlFor="message" className="block  text-sm font-medium text-n-1">Body</label>
                  <textarea id="message" name="message" row="5" className="mt-5 w-full px-3 py-3 h-[200px] border border-n-1/10 rounded-xl focus:outline-none focus:border-n-10"/>
              </div> 
             {/* <div className="mb-4">
              <p  className='block text-sm font-medium text-n-1 mb-5'>Body</p>
              <CKEditor 
                editor={ClassicEditor}
                // data="<p> Write something... </p>"
                onReady={ editor => {
                  console.log('Editor is ready to use!', editor)
                }}
                onChange={(event) => {
                  // const data = event.editor.getData();
                  // console.log({ event, data });
                  console.log(event);
                }}
                onBlur={(event, editor) => {
                  console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                  console.log('Focus.', editor);
                }}
              />
             </div> */}

              <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-n-1">Publish date</label>
                  <input type="text" id="name" name="name" className="mt-5 w-full px-3 py-3 border border-n-1/10 rounded-xl focus:outline-none focus:border-n-10"/>
              </div>
              <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-n-1">Author</label>
                  <input type="text" id="name" name="name" className="mt-5 w-full px-3 py-3 border border-n-1/10 rounded-xl focus:outline-none focus:border-n-10"/>
              </div>
              <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-n-1">Tags</label>
                  <input type="text" id="name" name="name" className="mt-5 w-full px-3 py-3 border border-n-1/10 rounded-xl focus:outline-none focus:border-n-10"/>
              </div>
              <div className="flex mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-n-1">Is featured</label>
                  <input type="radio" id="name" name="name" className="mt-5 w-full px-3 py-3 border border-n-1/10 rounded-xl focus:outline-none focus:border-n-10"/>

                  <label htmlFor="name" className="block text-sm font-medium text-n-1">Is sponsored</label>
                  <input type="radio" id="name" name="name" className="mt-5 w-full px-3 py-3 border border-n-1/10 rounded-xl focus:outline-none focus:border-n-10"/>

                  <label htmlFor="name" className="block text-sm font-medium text-n-1">Is editors pick</label>
                  <input type="radio" id="name" name="name" className="mt-5 w-full px-3 py-3 border border-n-1/10 rounded-xl focus:outline-none focus:border-n-10"/>
              </div>
              <Button>Save as draft</Button>
              <Button>Publish</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BlogsDashbord