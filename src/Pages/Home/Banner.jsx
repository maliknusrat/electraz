import { Carousel } from 'antd';
import img from '../../assets/surprised-happy-bearded-man-shirt-pointing-away-removebg-preview.png'
import img1 from '../../assets/african-american-student-walking-street-talking-phone-removebg-preview.png'
import img2 from '../../assets/happy-good-looking-man-glasses-pointing-finger-left-Photoroom.png-Photoroom.png'


const Banner = () => {
    return (
        <div>
            <Carousel autoplay>
                <div className=' bg-amber-300'>
                    <div className='flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto'>
                        <div className='pt-28 md:pt-10'>
                            <h2 className="text-2xl md:text-2xl font-thin">In this Season, Find best</h2>
                            <h2 className="text-5xl md:text-6xl font-black">Exclusive Collections For Everyone</h2>
                        </div>
                        <img className='pt-0 lg:pt-10' src={img} alt="" />
                    </div>
                </div>
                <div className=' bg-amber-400 '>
                    <div className='flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto'>
                    <div className='pt-28 md:pt-10'>
                            <h2 className="text-2xl md:text-2xl font-thin">In this Season, Find best</h2>
                            <h2 className="text-5xl md:text-6xl font-black">Exclusive Collections For Everyone</h2>
                        </div>
                        <img className='pt-0 lg:pt-10' src={img2} alt="" />
                    </div>
                </div>
                <div className=' bg-amber-500 '>
                    <div className='flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto'>
                    <div className='pt-28 md:pt-10'>
                            <h2 className="text-2xl md:text-2xl font-thin">In this Season, Find best</h2>
                            <h2 className="text-5xl md:text-6xl font-black">Exclusive Collections For Everyone</h2>
                        </div>
                        <img className='pt-0 lg:pt-10' src={img1} alt="" />
                    </div>
                </div>
                {/* <div className=' bg-amber-400 '>
                    <div className='flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto'>
                    <div className='pt-28 md:pt-10'>
                            <h2 className="text-2xl md:text-2xl font-thin">In this Season, Find best</h2>
                            <h2 className="text-5xl md:text-6xl font-black">Exclusive Collections For Everyone</h2>
                        </div>
                        <img className='pt-0 lg:pt-10' src={img2} alt="" />
                    </div>
                </div> */}
                

            </Carousel>



        </div>
    );
};

export default Banner;