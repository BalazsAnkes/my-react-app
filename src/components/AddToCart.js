import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';
import { wait } from '../utils/index';
import { useState } from "react";

const AddToCart = ({ state, onAddToCart }) => {
    const [isSuccessShown, setIsSuccessShown] = useState(false);
    const { t } = useTranslation();
    const onClick = async () => {
        onAddToCart({ label: 'button.loading', disabled: true });
        await wait(2000);
        onAddToCart({ label: 'button.viewCart', disabled: false });
        setIsSuccessShown(true);
    };

    return (
        <>
            <button disabled={state.disabled} onClick={onClick} className="add-to-cart__btn btn btn--borderless btn--primary">
                {t(state.label)}
            </button>
            {isSuccessShown && <p className="success-msg">
                {t('itemAdded')}
            </p>}
        </>
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