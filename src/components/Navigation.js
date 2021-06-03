import { useTranslation } from 'react-i18next';

const Navigation = () => {
    const { t } = useTranslation();

    return (
        <nav>
            <button>
                <img src="images/arrow_left_24dp.svg" alt="arrow_left"/>
                <span>{t('allProducts')}</span>
            </button>
        </nav>
    )
};

export default Navigation;