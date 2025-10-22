"use client"

import { useLanguage } from '../context/LanguageContext'

export default function NewsPage() {
  const { content } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center">{content.newsPage.title}</h1>
    </div>
  );
}