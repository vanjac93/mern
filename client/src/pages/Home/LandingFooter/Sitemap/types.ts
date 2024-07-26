export interface SitemapGroupProps {
  title: string
  links: SitemapLinkType[]
}

export interface SitemapLinkType {
  to: string
  text: string
}
