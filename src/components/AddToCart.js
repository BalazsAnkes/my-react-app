import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';

const AddToCart = ({ state, onAddToCart }) => {
    const { t } = useTranslation();
    const wait = (delay) => (new Promise(resolve => {
        setTimeout(resolve, delay);
    }));
    const onClick = async () => {
        onAddToCart({ label: 'button.loading', disabled: true });
        await wait(2000);
        onAddToCart({ label: 'button.viewCart', disabled: false });
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