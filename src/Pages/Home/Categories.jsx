import img1 from "../../assets/11873.jpg"
import img3 from "../../assets/black-headphones-digital-device.jpg"
import img4 from "../../assets/laptop-balancing-with-purple-background.jpg"
import img5 from "../../assets/smartphone-balancing-with-pink-background.jpg"


const Categories = () => {
    return (
        <div className="max-w-5xl mx-auto mb-10">
            <div>
                <h1 className="text-4xl font-bold py-12">Shop By Sections</h1>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
                <div className="flex flex-col items-center  justify-center">
                    <img className="w-[250px] border rounded-md" src={img1} alt="" />
                    <div className="text-center">
                        <h1 className="text-xl py-3 font-bold">Smart Watchs</h1>
                        <h1 className="text-sm pb-2 text-slate-600 font-thin">50+ Categories</h1>
                    </div>
                </div>

                <div className="flex flex-col items-center  justify-center">
                    <img className="w-[250px] border rounded-md" src={img3} alt="" />
                    <div className="text-center">
                        <h1 className="text-xl py-3 font-bold">Head Phones</h1>
                        <h1 className="text-sm pb-2 text-slate-600 font-thin">20+ Categories</h1>
                    </div>
                </div>

                <div className="flex flex-col items-center  justify-center">
                    <img className="w-[250px] border rounded-md" src={img4} alt="" />
                    <div className="text-center">
                        <h1 className="text-xl py-3 font-bold">Laptops</h1>
                        <h1 className="text-sm pb-2 text-slate-600 font-thin">50+ Categories</h1>
                    </div>
                </div>

                <div className="flex flex-col items-center  justify-center">
                    <img className="w-[250px] border rounded-md" src={img5} alt="" />
                    <div className="text-center">
                        <h1 className="text-xl py-3 font-bold">Smart Phones</h1>
                        <h1 className="text-sm pb-2 text-slate-600 font-thin">50+ Categories</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories; 