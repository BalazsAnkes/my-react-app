import { useTranslation } from 'react-i18next';

const Navigation = () => {
    const { t } = useTranslation();

    return (
        <nav>
            <a>
                <img src="images/arrow_left_24dp.svg" />
                <span>{t('allProducts')}</span>
            </a>
        </nav>
    )
};

export default Navigation;