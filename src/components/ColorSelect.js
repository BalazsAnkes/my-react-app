import { useTranslation } from "react-i18next";

const ColorSelect = ({ colors, selectedImage }) => {
    const { t } = useTranslation();

    return (
        <select defaultValue={selectedImage} className="select">
            {colors.map((color, index) =>  (
              <option key={index} value={color.image}>{t(color.label)}</option>
          ))}
        </select>
    );
};

export default ColorSelect;