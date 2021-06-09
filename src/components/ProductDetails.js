import Header from './Header';
import Tabs from './Tabs';

const ProductDetails = ({ details }) => {
    return (
        <div className="product">
            <Header />
            <Tabs items={details.tabItems} />
        </div>
    );
};

export default ProductDetails;