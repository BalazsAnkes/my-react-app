import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t, i18n } = useTranslation();

    return (
        <header>
            <h1>{t('product.title')}</h1>
            <h2>{t('product.subtitle')}</h2>
        </header>
    )
};

export default Header;