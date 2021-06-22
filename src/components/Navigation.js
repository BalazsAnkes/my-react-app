import { useTranslation } from 'react-i18next';

const Navigation = () => {
    const { t } = useTranslation();

    return (
        <button className="btn btn--borderless">
            <img src="images/arrow_left_24dp.svg" alt="arrow_left"/>
            <span>{t('allProducts')}</span>
        </button>
    )
};

export default Navigation;