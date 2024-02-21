import Marquee from "react-fast-marquee";
import img1 from "../../assets/11873-removebg-preview.png"
import img2 from "../../assets/312-removebg-preview.png"
import img3 from "../../assets/black-headphones-digital-device-removebg-preview.png"
import img4 from "../../assets/laptop-balancing-with-purple-background-removebg-preview.png"
import img5 from "../../assets/smartphone-balancing-with-pink-background-removebg-preview.png"

const Discover = () => {
    return (
        <div className="max-w-6xl mx-auto my-12 ">
            <div className="py-10">
                <h1 className="text-4xl font-bold">Discover More.<span className="text-zinc-500">Good Things Waiting for You!!</span></h1>
            </div>
            <div>
                <Marquee pauseOnHover>
                    <div className="card m-5 card-side bg-red-50 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-xl font-light">Explore New Arrivals</h2>
                            <p className="text-2xl w-[200px] font-bold">Shop The Latest from top brands</p>
                            <div className="card-actions justify-start">
                                <button className="btn btn-primary">Shop Now</button>
                            </div>
                        </div>
                        <figure className="w-[200px]"><img src={img1} alt="Movie" /></figure>
                    </div>

                    <div className="card m-5 card-side bg-orange-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-xl font-light">Explore New Arrivals</h2>
                            <p className="text-2xl w-[200px] font-bold">Give the Gift of choice</p>
                            <div className="card-actions justify-start">
                                <button className="btn btn-primary">Shop Now</button>
                            </div>
                        </div>
                        <figure className="w-[200px]"><img src={img2} alt="Movie" /></figure>
                    </div>

                    <div className="card m-5 card-side bg-amber-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-xl  font-light">Explore New Arrivals</h2>
                            <p className="text-2xl w-[200px] font-bold">Up to 80% of retail</p>
                            <div className="card-actions justify-start">
                                <button className="btn btn-primary">Shop Now</button>
                            </div>
                        </div>
                        <figure className="w-[200px]"><img src={img3} alt="Movie" /></figure>
                    </div>
                    <div className="card m-5 card-side bg-emerald-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-xl font-light">Explore New Arrivals</h2>
                            <p className="text-2xl w-[200px] font-bold">Shop The Latest from top brands</p>
                            <div className="card-actions justify-start">
                                <button className="btn btn-primary">Shop Now</button>
                            </div>
                        </div>
                        <figure className="w-[200px]"><img src={img4} alt="Movie" /></figure>
                    </div>
                    <div className="card m-5 card-side bg-cyan-50 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-xl font-light">Explore New Arrivals</h2>
                            <p className="text-2xl w-[200px] font-bold">Up to 80% of retail</p>
                            <div className="card-actions justify-start">
                                <button className="btn btn-primary">Shop Now</button>
                            </div>
                        </div>
                        <figure className="w-[200px]"><img src={img5} alt="Movie" /></figure>
                    </div>
                </Marquee>

            </div>
        </div>
    );
};

export default Discover;