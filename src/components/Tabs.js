import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const Tabs = ({ items }) => {
    const { t } = useTranslation();

    return (
        <>
          {items.map((item, index) =>  (
              <button key={index} className="btn btn-borderless">{t(item.label)}</button>
          ))}
        </>
    )
};

Tabs.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        label: PropTypes.string
    }))
};

export default Tabs;