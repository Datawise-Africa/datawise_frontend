import { coreServices, ourServices } from '../../constants';

const ServiceDetail = () => {
  return (
    <div className="container relative z-2">
        <div className="flex flex-wrap gap-10 mb-10">
            {coreServices.map((item) => (
                <div 
                    key={item.id} 
                    className='block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]'
                    style={{backgroundImage: `url(${item.cardUrl})`}}
                >
                    <div className='relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none'>
                        <h5 className='h-5 mb-5 font-semibold'>{item.title}</h5>
                        <p className="body-2 mt-3 text-n-16">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ServiceDetail