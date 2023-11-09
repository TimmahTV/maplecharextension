export function getMessage(key: string) {
  return chrome.i18n.getMessage(key) || key
}
