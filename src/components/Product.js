import Header from './Header';
import Tabs from './Tabs';

const Product = () => {
    const tabItems = [{
        label: 'description'
    }, {
        label: 'details'
    }];

    return (
        <div className="product">
            <Header />
            <Tabs items={tabItems} />
        </div>
    );
};

export default Product;