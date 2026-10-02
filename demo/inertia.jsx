import React, { createContext, useContext, useEffect, useState } from 'react';
import { deleteSnippet, saveSnippet } from './store';

export const PageContext = createContext({ props: { auth: { user: null } } });
export const usePage = () => useContext(PageContext);
export function navigate(path) {
  const url = new URL(path, window.location.origin);
  if (url.origin !== window.location.origin) return;
  window.history.pushState({}, '', url.pathname + url.search);
  window.dispatchEvent(new Event('popstate'));
  window.scrollTo(0, 0);
}
export const router = {
  get: navigate,
  delete(path, options = {}) {
    try {
      deleteSnippet(localStorage, decodeURIComponent(path.split('/')[2]));
      navigate('/allsnippets');
      options.onSuccess?.();
    } catch { window.alert('Could not delete the snippet. Check that browser storage is available.'); }
  },
};
export function Head({ title, children }) {
  const childTitle = React.Children.toArray(children).find(c => c.type === 'title')?.props.children;
  useEffect(() => { document.title = `${title || childTitle || 'Demo'} — BitBin`; }, [title, childTitle]);
  return null;
}
export function Link({ href, children, ...props }) {
  return <a href={href} {...props} onClick={e => {
    if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) { e.preventDefault(); navigate(href); }
  }}>{children}</a>;
}
export function useForm(initial) {
  const [data, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);
  const setData = (key, value) => setValues(old => ({ ...old, [key]: value }));
  const submit = (path, options = {}, editing = false) => {
    setProcessing(true);
    try {
      const result = saveSnippet(localStorage, data, editing ? decodeURIComponent(path.split('/')[2]) : undefined);
      if (result.errors) {
        setErrors(result.errors);
        if (editing) window.alert(Object.values(result.errors).join('\n'));
      } else { navigate(`/snippets/${result.snippet.slug}`); options.onSuccess?.(); }
    } catch { window.alert('Could not save. Browser storage may be full or disabled. Your code is still in the editor; copy it before leaving.'); }
    finally { setProcessing(false); }
  };
  return { data, setData, errors, processing, post: submit, patch: (path, options) => submit(path, options, true) };
}
