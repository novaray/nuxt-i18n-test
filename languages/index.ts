import en from './en';
import ko from './ko';
import ja from './ja';

export const I18N = {
  locales: [
    { code: 'en', name: 'English' },
    { code: 'ko', name: 'Korean' },
    { code: 'ja', name: 'Japanese' }
  ],
  defaultLocale: 'en',
  vueI18n: {
    fallbackLocale: 'en',
    messages: { en, ko, ja }
  }
}
