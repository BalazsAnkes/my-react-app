import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';

const AddToCart = ({ state, onAddToCart }) => {
    const { t } = useTranslation();
    const onClick = () => {
        onAddToCart({ label: 'button.loading', disabled: true });
        setTimeout(() => {
            onAddToCart({ label: 'button.viewCart', disabled: false });
        }, 2000);
    };

    return (
        <button disabled={state.disabled} onClick={onClick} className="btn btn--primary">
            {t(state.label)}
        </button>
    );
};

AddToCart.propTypes = {
    state: PropTypes.exact({
        label: PropTypes.string,
        disabled: PropTypes.bool
    }),
    onAddToCart: PropTypes.func
};

export default AddToCart;