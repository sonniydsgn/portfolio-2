import { slugify as tr_slugify, transliterate } from 'transliteration'

export const slugify = (text: string) => tr_slugify(transliterate(text))
