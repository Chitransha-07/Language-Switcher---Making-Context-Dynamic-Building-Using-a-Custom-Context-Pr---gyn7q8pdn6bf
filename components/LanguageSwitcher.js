// components/LanguageSwitcher.js
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, switchLanguage } = useLanguage();

  const handleLanguageChange = (e) => {
    switchLanguage(e.target.value);
  };

  return (
    <select value={language} onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="fr">French</option>
      <option value="es">Spanish</option>
      {/* Add more languages as needed */}
    </select>
  );
};

export default LanguageSwitcher;
