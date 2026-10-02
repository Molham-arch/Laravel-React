export const STORAGE_KEY = 'bitbin-portfolio-demo-v1';
export const examples = [
  { id: 'welcome-js', slug: 'welcome-js', title: 'Hello from BitBin', CodingLanguage: 'JavaScript', content: "const greet = (name) => `Hello, ${name}!`;\n\nconsole.log(greet('BitBin'));", description: 'Try editing this example, or create your own snippet. Changes stay in this browser.', visibility: 1 },
  { id: 'python-example', slug: 'python-example', title: 'A little Python', CodingLanguage: 'Python', content: 'def fibonacci(count):\n    a, b = 0, 1\n    for _ in range(count):\n        yield a\n        a, b = b, a + b\n\nprint(list(fibonacci(10)))', description: 'A generator for the Fibonacci sequence.', visibility: 1 },
];
export function validateSnippet(data) {
  const errors = {};
  if (!data.title?.trim()) errors.title = 'Please enter a title.';
  else if (data.title.length > 255) errors.title = 'Use 255 characters or fewer.';
  if (!data.content?.trim()) errors.content = 'Please paste some code.';
  else if (data.content.length > 100000) errors.content = 'Use 100,000 characters or fewer.';
  if ((data.description?.length ?? 0) > 5000) errors.description = 'Use 5,000 characters or fewer.';
  if ((data.CodingLanguage?.length ?? 0) > 50) errors.CodingLanguage = 'Use 50 characters or fewer.';
  if (![1, 2, 3].includes(Number(data.visibility))) errors.visibility = 'Select a visibility option.';
  return errors;
}
export function readSnippets(storage) {
  const raw = storage.getItem(STORAGE_KEY);
  if (raw === null) return structuredClone(examples);
  const data = JSON.parse(raw);
  if (!Array.isArray(data) || !data.every(s => s && typeof s.slug === 'string' && typeof s.title === 'string' && typeof s.content === 'string' && typeof s.CodingLanguage === 'string')) {
    throw new Error('Saved demo data is invalid. Export any available snippets before clearing this site’s storage.');
  }
  return data;
}
export function saveSnippet(storage, data, slug) {
  const snippets = readSnippets(storage);
  const previous = slug ? snippets.find(s => s.slug === slug) : null;
  if (slug && !previous) throw new Error('Snippet not found in this browser.');
  const values = { ...previous, ...data, visibility: Number(data.visibility ?? previous?.visibility ?? 1) };
  const errors = validateSnippet(values);
  if (Object.keys(errors).length) return { errors };
  const id = slug || crypto.randomUUID();
  const snippet = { ...values, id: previous?.id || id, slug: id, CodingLanguage: values.CodingLanguage || 'Text' };
  storage.setItem(STORAGE_KEY, JSON.stringify(slug ? snippets.map(s => s.slug === slug ? snippet : s) : [snippet, ...snippets]));
  return { snippet };
}
export function deleteSnippet(storage, slug) {
  storage.setItem(STORAGE_KEY, JSON.stringify(readSnippets(storage).filter(s => s.slug !== slug)));
}
