import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';
import IconSelectArrow from "./IconSelectArrow";

const ColorSelect = ({ colors, selectedImage, onColorChange }) => {
    const { t } = useTranslation();
    const onChange = (e) => {
        const { value } = e.target;
        onColorChange(value);
    };

    return (
        <div className="select-wrapper">
            <label htmlFor="color-select">{t('colors.label')}</label>
            <select id="color-select" defaultValue={selectedImage} onChange={onChange} className="select">
                {colors.map((color, index) =>  (
                <option key={index} value={color.image}>{t(`colors.${color.label}`)}</option>
            ))}
            </select>
            <IconSelectArrow />
        </div>
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