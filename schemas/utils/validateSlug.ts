import { MAX_CHARACTERS_LENGTH } from 'constant'
import { SlugRule } from 'sanity'

export const validateSlug = (rule: SlugRule) => {
  return rule.required().custom((value) => {
    const currentSlug = value && value.current
    if (!currentSlug) {
      return true
    }

    if (currentSlug.length >= MAX_CHARACTERS_LENGTH) {
      return `Must be less than ${MAX_CHARACTERS_LENGTH} characters`
    }

    return true
  })
}
