export type Theme = {
  primaryColor: string
  secondaryColor: string
  terciaryColor: string
  quaternaryColor: string
  contrastColor: string
  darkContrastColor: string
  tabletBreakpoint: string
  mobileBreakpoint: string
}

export const defaultTheme: Theme = {
  primaryColor: '#0c2461',
  secondaryColor: '#314985',
  terciaryColor: '#7A8FC4',
  quaternaryColor: '#DEE7FF',
  contrastColor: '#46E9FF',
  darkContrastColor: '#081944',
  tabletBreakpoint: '768px',
  mobileBreakpoint: '426px'
}

export default defaultTheme
