import img1 from '../../assets/search_3179891.png'
import img2 from '../../assets/shopping-cart_2331970.png'
import img4 from '../../assets/product_4889260.png'
import img3 from '../../assets/smartwatch_5973447.png'


const OrderProcess = () => {
    return (
        <div className=' border-y-[1px] my-9 max-w-6xl mx-auto'>
            <div className='flex flex-col md:flex-row items-center justify-center gap-5'>
                <div className='flex flex-col items-center gap-4 py-20 justify-center'>
                    <img className='my-15 w-20' src={img1} alt="" />
                    <div className='bg-red-200 rounded-3xl w-16'>
                        <h1 className="text-xs p-1 text-red-500 text-center">Step-1</h1>
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold py-3 text-center">Filter & Discover</h1>
                        <h1 className="text-lg font-light w-[250px] text-center">Smart filtering and suggestions make it easy to find</h1>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-4 py-20 justify-center'>
                    <img className='my-15 w-20' src={img2} alt="" />
                    <div className='bg-blue-100 rounded-3xl w-16'>
                        <h1 className="text-xs text-blue-500 p-1 text-center">Step-2</h1>
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold py-3 text-center">Add to bag</h1>
                        <h1 className="text-lg font-light w-[250px] text-center">Easily select the correct items and add them to the cart</h1>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-4 py-20 justify-center'>
                    <img className='my-15 w-20' src={img3} alt="" />
                    <div className='bg-amber-100 rounded-3xl w-16'>
                        <h1 className="text-xs text-amber-600 p-1 text-center">Step-3</h1>
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold py-3 text-center">Fast shipping</h1>
                        <h1 className="text-lg font-light w-[250px] text-center">The carrier will confirm and ship quickly to you</h1>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-4 py-20 justify-center'>
                    <img className='my-15 w-20' src={img4} alt="" />
                    <div className='bg-lime-100 rounded-3xl w-16'>
                        <h1 className="text-xs text-lime-600 p-1 text-center">Step-4</h1>
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold py-3 text-center">Enjoy the product</h1>
                        <h1 className="text-lg font-light w-[250px] text-center">Have fun and enjoy your 5-star quality products</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderProcess;