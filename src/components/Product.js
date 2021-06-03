import Header from './Header';
import Tabs from './Tabs';

const Product = () => {
    const tabItems = [{
        label: 'description',
        contentId: 1
    }, {
        label: 'details',
        contentId: 2
    }];

    return (
        <div className="product">
            <Header />
            <Tabs items={tabItems} />
        </div>
    );
};

export default Product;