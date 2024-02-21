import Banner from "./Banner";
import Banner2 from "./Banner2";
import Categories from "./Categories";
import Discover from "./Discover";
import OrderProcess from "./OrderProcess";
import Subcription from "./Subcription";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Discover></Discover>
            <OrderProcess></OrderProcess>
            <Banner2></Banner2>
            <Categories></Categories>
            <Subcription></Subcription>
            
        </div>
    );
};

export default Home;