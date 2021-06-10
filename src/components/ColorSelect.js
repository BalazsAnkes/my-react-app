import { useTranslation } from "react-i18next";

const ColorSelect = ({ colors, selectedImage, onColorChange }) => {
    const { t } = useTranslation();
    const onChange = (e) => {
        const { value } = e.target;
        onColorChange(value);
    };

    return (
        <select defaultValue={selectedImage} onChange={onChange} className="select">
            {colors.map((color, index) =>  (
              <option key={index} value={color.image}>{t(color.label)}</option>
          ))}
        </select>
    );
};

export default ColorSelect;