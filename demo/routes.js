export function route(name, params) {
  const slug = encodeURIComponent(typeof params === 'string' ? params : params?.slug ?? '');
  const routes = {
    'welcome': '/', 'snippets.index': '/allsnippets', 'snippets.create': '/',
    'snippets.find': '/getcode', 'snippets.store': '/snippets',
    'snippets.show': `/snippets/${slug}`, 'snippets.edit': `/snippets/${slug}/edit`,
    'snippets.update': `/snippets/${slug}`, 'snippets.destroy': `/snippets/${slug}`,
  };
  if (!(name in routes)) throw new Error('This route is not available in the demo.');
  return routes[name];
}
