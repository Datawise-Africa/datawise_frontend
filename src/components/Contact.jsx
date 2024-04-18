import Section from "./Section";
import Button from "./Button";

import { SocialIcon } from "react-social-icons";

const Contact = () => {
  return (
    <Section crosses className="overflow-hidden" id="contactus">
        <div className="container relative z-2">
            <div className="flex flex-col md:flex-row gap-12">
                <div className="p-2 flex flex-col border border-n-5 rounded-xl items-center justify-center">
                    <div className="flex">
                        <svg fill="#43435C" version="1.1" id="Capa_1" width="190px" height="190px" viewBox="-110.8 -110.8 617.31 617.31" xmlSpace="preserve" transform="matrix(1, 0, 0, 1, 0, 0)" stroke="#000000" strokeWidth="0.0039571"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"></path> </g> </g></svg>
                        <div className="items-center py-15">
                            <h5 className="h-5 mb-5 font-bold">Location</h5>
                            <p>Magharibi Place, GA11 Nairobi West, Kenya</p>
                        </div>
                    </div>
                    
                    <div className="flex">
                        <SocialIcon url="https://www.email.com"/>
                        <div className="items-center">
                            <h5 className="h-5 mb-5 font-bold px-5 md:px-15 py-2">Send an email</h5>
                            <p className="px-5 md:px-15 mb-2">info@datawise.africa</p>
                        </div>
                    </div>
                    
                </div>

                <div className="flex flex-col">
                <h2 className="h2 mb-4 md:mb-8">We'd love to hear from you anytime</h2>
                <form action="#contact">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-n-1">Name</label>
                        <input type="text" id="name" name="name" className="mt-5 w-full px-3 py-3 border border-n-1/10 rounded-xl focus:outline-none focus:border-n-10"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-n-1">Email</label>
                        <input type="email" id="email" name="email" className="mt-5 w-full px-3 py-3 border border-n-1/10 rounded-xl focus:outline-none focus:border-n-10"/>
                    </div>
                    {/* <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-n-1">Phone</label>
                        <input type="tel" id="phone" name="phone" className="mt-5 w-full px-3 py-3 border border-n-1/10 rounded-xl focus:outline-none focus:border-n-10"/>
                    </div> */}
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-n-1">Message</label>
                        <textarea id="message" name="message" row="5" className="mt-5 w-full px-3 py-3 border border-n-1/10 rounded-xl focus:outline-none focus:border-n-10"/>
                    </div> 
                    <Button>Send Message</Button>
                </form>
                </div>
            </div>
        </div>
    </Section>
  )
}

export default Contact