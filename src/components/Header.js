import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();

    return (
        <>
            <h1>{t('product.title')}</h1>
            <h2>{t('product.subtitle')}</h2>
        </>
    )
};

export default Header;