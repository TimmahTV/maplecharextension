export type TabsSendMessageType = {
  tabId: number
  message: any
  options?: chrome.tabs.MessageSendOptions
}

export async function tabsSendMessage(item: TabsSendMessageType) {
  const {tabId, message, options} = item
  if (options) {
    return chrome.tabs.sendMessage(tabId, message, options)
  } else {
    return chrome.tabs.sendMessage(tabId, message)
  }
}
