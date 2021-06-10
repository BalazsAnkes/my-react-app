import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const TabContent = ({ contents, contentId }) => {
    const { t } = useTranslation();

    const findContent = (content) => (content.id === contentId);

    return (
        <p>{t(contents.find(findContent).content)}</p>
    )
};

TabContent.propTypes = {
    contentId: PropTypes.number
};

export default TabContent;