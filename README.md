## Used packages.

```bash

 # internalization framework for js
npm install i18next

# package to allow auomatic language detection, better than using location, check the reason below.
npm install i18next-browser-languagedetector

# Provides react binding to i18next
npm install react-i18next

# This allow for loading  (several) translations (JSON files) via HTTP
npm install i18next-http-backend
```

## Why use i18next-browser-languagedetector over geolocations

- browser language detector is more accurate to user preference, geolocation may not accurately represent this
- browser language detector is easy to implement and does not require API keys and managing location base data
- browser language detector is more secure, the user is not needed to give explicit location consent and less instructive.

## Take aways

- If the browser detects a language that is not configure, the `fallbackLng` is used.
- The current language is persisited to the local storage with the key `i18nextLng` - remove the item when testing browser language detector.
- User [this](https://chromewebstore.google.com/detail/locale-switcher/kngfjpghaokedippaapkfihdlmmlafcc) (or similar) extensions to change change browser language.
- A language can have several variants, such as `ar` (Arabic) and `ar-EG` (Arabic as spoken in Egypt), allowing for region-specific translations, if `ar-EG` resources are unavailable, i18next falls back to the more general language code `ar`

## More resources

- [react-i18next step by step docs](https://react.i18next.com/latest/using-with-hooks)
