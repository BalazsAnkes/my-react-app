import { useTranslation } from 'react-i18next';

const Navigation = () => {
    const { t } = useTranslation();

    return (
        <button className="btn btn--borderless btn--with-icon">
            <img src="images/arrow_left_24dp.svg" alt="arrow_left"/>
            <span>{t('navigation.allProducts')}</span>
        </button>
    )
};

export default Navigation;