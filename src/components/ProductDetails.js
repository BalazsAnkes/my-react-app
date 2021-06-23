import ColorSelect from './ColorSelect';
import Header from './Header';
import TabContent from './TabContent';
import Tabs from './Tabs';
import PropTypes from 'prop-types';
import Price from './Price';

const ProductDetails = ({ details, currentDetails, onDetailChange, onColorChange }) => {
    return (
        <>
            <header className="product-header">
                <Header />
            </header>
            <section className="product-description">
                <div className="tab-group">
                    <Tabs items={details.tabItems} activeContentId={currentDetails.tabContentId} onDetailChange={onDetailChange} />
                </div>
                <TabContent contents={details.tabContents} contentId={currentDetails.tabContentId} />
            </section>
            <section className="price-group">
                <Price currentPrice={59.99} oldPrice={89.99} currency="USD" />
            </section>
            <section className="color-select-group">
                <ColorSelect colors={details.colors} selectedImage={currentDetails.image} onColorChange={onColorChange}/>
            </section>
        </>
    );
};

ProductDetails.propTypes = {
    details: PropTypes.object,
    currentDetails: PropTypes.object,
    onDetailChange: PropTypes.func,
    onColorChange: PropTypes.func
};

export default ProductDetails;