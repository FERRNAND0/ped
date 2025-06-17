class StaticViewSitemap(Sitemap):
    changefreq = "weekly"
    priority = 1.0

    def items(self):
        return ['index', 'about', 'contact', 'faq']  # удалили 'blog'

    def location(self, item):
        return reverse(item)
