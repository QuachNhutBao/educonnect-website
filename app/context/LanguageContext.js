"use client"

import { createContext, useContext, useState, useEffect } from 'react'
import en from '../../i18n/en.json'
import vi from '../../i18n/vi.json'

// Tạo một "kho" (Context)
const LanguageContext = createContext()

// Tạo component "Quản lý kho" (Provider)
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const [content, setContent] = useState(en);

  useEffect(() => {
    setContent(lang === 'en' ? en : vi);
  }, [lang]);

  const toggleLang = () => {
    setLang(currentLang => (currentLang === 'en' ? 'vi' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ lang, content, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Tạo một "hook" để các component con dễ dàng lấy dữ liệu
export function useLanguage() {
  return useContext(LanguageContext)
}