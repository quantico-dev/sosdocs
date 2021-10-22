import { createContext, ReactNode, useContext, useState } from 'react'

type Languages = 'pt-br' | 'es-py' | 'en-us'

type TranslationContextProps = {
  language: Languages
  setLanguage(language: Languages): void
}

type TranslationProps = {
  children: ReactNode
}

const TranslationContext = createContext<TranslationContextProps>(
  {} as TranslationContextProps
)

export function Translation({ children }: TranslationProps) {
  const [language, setLanguage] = useState<Languages>('pt-br')
  return (
    <TranslationContext.Provider value={{ language, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  return useContext(TranslationContext)
}
