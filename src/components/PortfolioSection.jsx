import { PortfolioItems } from '../constants';
import { GradientLight } from "./designs/AboutUs";

const PortfolioSection = () => {
  return (
    <div className="container relative z-2">
        <div className="flex flex-wrap gap-10 mb-10">
            {PortfolioItems.map((item) => (
                <div 
                    key={item.id} 
                    className='block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] '
                    style={{backgroundImage: `url(${item.backgroundUrl})`}}
                >
                    <div className='relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none'>
                        <div className="flex items-center mt-auto">
                            <img src={item.logo} alt={item.title} width={200} height={200} loading='lazy'/>
                        </div>
                        <h5 className='h5 mb-5 mt-5'>{item.title}</h5>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PortfolioSection