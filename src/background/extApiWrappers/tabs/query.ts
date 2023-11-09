export type TabsQueryType = {
  tabId: number
  message: any
  options?: chrome.tabs.MessageSendOptions
}

export async function tabsQuery(query: chrome.tabs.QueryInfo) {
  return chrome.tabs.query(query)
}
