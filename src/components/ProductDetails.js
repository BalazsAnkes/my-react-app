import Header from './Header';
import TabContent from './TabContent';
import Tabs from './Tabs';

const ProductDetails = ({ details, currentDetails }) => {
    return (
        <div className="product">
            <Header />
            <Tabs items={details.tabItems} />
            <TabContent contents={details.tabContents} contentId={currentDetails.tabContentId} />
        </div>
    );
};

export default ProductDetails;