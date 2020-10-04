import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LangContainer, LangDropDownList, FlagContainer } from './style';
import FlagUzb from '../../assets/images/flag.jpg';

const LangDropdown = () => {
  const [active, setActive] = useState(false);
  const { i18n } = useTranslation();
  return (
    <LangContainer onClick={() => setActive(!active)}>
      <FlagContainer>
        <img src={FlagUzb} alt="flag" />
        <p>{i18n.language === 'uz' ? 'UZ' : 'ЎЗ'}</p>
      </FlagContainer>

      <LangDropDownList active={active}>
        <li>
          <a
            role="button"
            tabIndex={0}
            onClick={() => i18n.changeLanguage('uz')}
            onKeyDown={() => i18n.changeLanguage('uz')}
          >
            {'O\'zbekcha'}
          </a>
        </li>
        <li>
          <a
            role="button"
            tabIndex={0}
            onClick={() => i18n.changeLanguage('ru')}
            onKeyDown={() => i18n.changeLanguage('ru')}
          >
            Ўзбекча
          </a>
        </li>
      </LangDropDownList>
    </LangContainer>

  );
};

export default LangDropdown;
