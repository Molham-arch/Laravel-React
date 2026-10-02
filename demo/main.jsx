import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import '../resources/css/app.scss';
import './style.css';
import Welcome from '../resources/js/Pages/Welcome';
import AllSnippets from '../resources/js/Pages/AllSnippets';
import Show from '../resources/js/Pages/Show';
import EditSnippet from '../resources/js/Pages/EditSnippet';
import GetCode from '../resources/js/Pages/GetCode';
import Layout from './Layout';
import { PageContext } from './inertia';
import { readSnippets } from './store';
import { route } from './routes';

// The Laravel app exposes Ziggy's route helper globally to the existing edit page.
window.route = route;
function App() {
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    const update = () => setPath(window.location.pathname);
    window.addEventListener('popstate', update);
    return () => window.removeEventListener('popstate', update);
  }, []);
  let snippets = [], storageError = '';
  try { snippets = readSnippets(localStorage); } catch (error) { storageError = error.message; }
  const match = path.match(/^\/snippets\/([^/]+)(\/edit)?\/?$/);
  const snippet = match ? snippets.find(s => encodeURIComponent(s.slug) === match[1]) : null;
  let page;
  if (path === '/' || path === '/snippets/create') page = <Welcome />;
  else if (path === '/allsnippets') page = <><AllSnippets />{!snippets.length && <p className="text-center text-white">No snippets yet. <a href="/">Create your first snippet.</a></p>}</>;
  else if (path === '/getcode') page = <GetCode />;
  else if (path === '/faq') page = <Layout><article className="container py-5 text-white" style={{ minHeight: '65vh', maxWidth: 820 }}>
    <h1>About this demo</h1><p>BitBin is Molham’s Laravel and React code-sharing project. This interactive demo reuses its original React pages and runs entirely in your browser.</p>
    <h2 className="h4 mt-4">What can I try?</h2><p>Create a snippet, choose syntax highlighting, edit it, copy the code, download it, or delete it. Two example snippets are included to get you started.</p>
    <h2 className="h4 mt-4">Where is my code saved?</h2><p>Only in local storage on this browser and device. Your code is not uploaded to a database. Clearing this site’s browser data removes your snippets. Snippet URLs only work in the browser where they were created.</p>
    <h2 className="h4 mt-4">What do the visibility options do?</h2><p>Public, Unlisted, and Private are interface previews here. All demo snippets are local and shown in your All snippets list. These labels do not provide authentication or access control.</p>
    <p><a className="text-decoration-underline" href="https://github.com/Molham-arch/Laravel-React">Explore the Laravel source and local setup instructions ↗</a></p>
  </article></Layout>;
  else if (snippet) page = match[2] ? <EditSnippet key={path} snippet={snippet} /> : <Show key={path} />;
  else page = <Layout><div className="container py-5 text-white" style={{ minHeight: '65vh' }}><h1>Snippet or page not found</h1><p>Demo snippets are available only in the browser where they were saved.</p><a href="/allsnippets" className="btn btn-primary">Browse local snippets</a></div></Layout>;
  return <PageContext.Provider value={{ props: { snippet, snippets, auth: { user: null } } }}>
    {storageError && <div role="alert" className="alert alert-warning m-3">Browser storage is unavailable: {storageError}</div>}{page}
  </PageContext.Provider>;
}
createRoot(document.getElementById('root')).render(<App />);
