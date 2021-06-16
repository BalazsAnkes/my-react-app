import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';

const ColorSelect = ({ colors, selectedImage, onColorChange }) => {
    const { t } = useTranslation();
    const onChange = (e) => {
        const { value } = e.target;
        onColorChange(value);
    };

    return (
        <>
            <label htmlFor="color-select">{t('colors.label')}</label>
            <select id="color-select" defaultValue={selectedImage} onChange={onChange} className="select">
                {colors.map((color, index) =>  (
                <option key={index} value={color.image}>{t(`colors.${color.label}`)}</option>
            ))}
            </select>
        </>
    );
};

ColorSelect.propTypes = {
    colors: PropTypes.arrayOf(PropTypes.exact({
        image: PropTypes.string,
        label: PropTypes.string
    })),
    selectedImage: PropTypes.string,
    onColorChange: PropTypes.func
};

export default ColorSelect;