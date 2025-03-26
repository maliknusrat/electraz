import { Carousel } from 'antd';
import img from '../../assets/surprised-happy-bearded-man-shirt-pointing-away-removebg-preview.png'
import img1 from '../../assets/african-american-student-walking-street-talking-phone-removebg-preview.png'
import img2 from '../../assets/happy-good-looking-man-glasses-pointing-finger-left-Photoroom.png-Photoroom.png'
import { TypeAnimation } from 'react-type-animation';


const Banner = () => {
    return (
      <div>
        <Carousel autoplay autoplaySpeed={6000}>
          <div className="bg-amber-300">
            <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
              <div className="pt-28 md:pt-10">
                <h2 className="text-2xl md:text-2xl font-thin">
                  Discover the New Season
                </h2>
                <TypeAnimation
                  sequence={[
                    "Fresh Looks for Every Mood",
                    1000,
                    "Step Into the Spotlight",
                    1000,
                  ]}
                  wrapper="h2"
                  cursor={true}
                  repeat={Infinity}
                  className="text-5xl md:text-6xl font-black"
                />
              </div>
              <img className="pt-0 lg:pt-10" src={img} alt="Slide 1" />
            </div>
          </div>

          <div className="bg-amber-400">
            <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
              <div className="pt-28 md:pt-10">
                <h2 className="text-2xl md:text-2xl font-thin">
                  Step into the Spotlight
                </h2>
                <TypeAnimation
                  sequence={[
                    "Fashion That Speaks Boldly",
                    1000,
                    "Wear Confidence Daily",
                    1000,
                  ]}
                  wrapper="h2"
                  cursor={true}
                  repeat={Infinity}
                  className="text-5xl md:text-6xl font-black"
                />
              </div>
              <img className="pt-0 lg:pt-10" src={img2} alt="Slide 2" />
            </div>
          </div>

          <div className="bg-amber-500">
            <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
              <div className="pt-28 md:pt-10">
                <h2 className="text-2xl md:text-2xl font-thin">
                  New Arrivals Are Here
                </h2>
                <TypeAnimation
                  sequence={[
                    "Trendy Pieces You’ll Love",
                    1000,
                    "Perfect Fit, Perfect Style",
                    1000,
                  ]}
                  wrapper="h2"
                  cursor={true}
                  repeat={Infinity}
                  className="text-5xl md:text-6xl font-black"
                />
              </div>
              <img className="pt-0 lg:pt-10" src={img1} alt="Slide 3" />
            </div>
          </div>

          <div className="bg-amber-400">
            <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
              <div className="pt-28 md:pt-10">
                <h2 className="text-2xl md:text-2xl font-thin">
                  Unleash Your Inner Style
                </h2>
                <TypeAnimation
                  sequence={[
                    "Wear What Moves You",
                    1000,
                    "Find Your Fashion Voice",
                    1000,
                  ]}
                  wrapper="h2"
                  cursor={true}
                  repeat={Infinity}
                  className="text-5xl md:text-6xl font-black"
                />
              </div>
              <img className="pt-0 lg:pt-10" src={img2} alt="Slide 4" />
            </div>
          </div>
        </Carousel>
      </div>
    );
};

export default Banner;