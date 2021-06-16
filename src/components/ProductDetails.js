import ColorSelect from './ColorSelect';
import Header from './Header';
import TabContent from './TabContent';
import Tabs from './Tabs';
import PropTypes from 'prop-types';

const ProductDetails = ({ details, currentDetails, onDetailChange, onColorChange }) => {
    return (
        <div className="product">
            <Header />
            <Tabs items={details.tabItems} onDetailChange={onDetailChange} />
            <TabContent contents={details.tabContents} contentId={currentDetails.tabContentId} />
            <ColorSelect colors={details.colors} selectedImage={currentDetails.image} onColorChange={onColorChange}/>
            <section className="image">
                <img src={`images/${currentDetails.image}`} alt={currentDetails.image}></img>
            </section>
        </div>
    );
};

ProductDetails.propTypes = {
    details: PropTypes.object,
    currentDetails: PropTypes.object,
    onDetailChange: PropTypes.func,
    onColorChange: PropTypes.func
};

export default ProductDetails;