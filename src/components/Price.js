import currencyMap from '../utils/currencyMap.json'
import PropTypes from 'prop-types';

const Price = ({ currentPrice, oldPrice, currency }) => {
    return (
        <>
            <p className="price price--current"><span>{currencyMap[currency]}</span>{currentPrice}</p>
            <p className="price price--old"><span>{currencyMap[currency]}</span>{oldPrice}</p>
        </>
    );
};

Price.propTypes = {
    currentPrice: PropTypes.number,
    oldPrice: PropTypes.number,
    currency: PropTypes.string
};

export default Price;