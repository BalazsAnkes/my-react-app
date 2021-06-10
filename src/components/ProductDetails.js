import ColorSelect from './ColorSelect';
import Header from './Header';
import TabContent from './TabContent';
import Tabs from './Tabs';

const ProductDetails = ({ details, currentDetails, onDetailChange, onColorChange }) => {
    return (
        <div className="product">
            <Header />
            <Tabs items={details.tabItems} onDetailChange={onDetailChange} />
            <TabContent contents={details.tabContents} contentId={currentDetails.tabContentId} />
            <ColorSelect colors={details.colors} selectedImage={currentDetails.image} onColorChange={onColorChange}/>
            <section className="image">
                <img src={`images/${currentDetails.image}`}></img>
            </section>
        </div>
    );
};

export default ProductDetails;