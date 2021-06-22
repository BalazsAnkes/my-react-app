import { useTranslation } from 'react-i18next';
import IconArrowLeft from './IconArrowLeft';

const Navigation = () => {
    const { t } = useTranslation();

    return (
        <button className="btn btn--borderless btn--with-icon">
            <IconArrowLeft />
            <span>{t('navigation.allProducts')}</span>
        </button>
    )
};

export default Navigation;