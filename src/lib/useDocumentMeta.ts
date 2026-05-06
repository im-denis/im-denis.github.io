import { useEffect } from "react";

type MetaInput = {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
};

function setMeta(selector: string, attr: "name" | "property", key: string, content?: string) {
  if (!content) return;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function useDocumentMeta({ title, description, ogTitle, ogDescription }: MetaInput) {
  useEffect(() => {
    if (title) document.title = title;
    setMeta(`meta[name="description"]`, "name", "description", description);
    setMeta(`meta[property="og:title"]`, "property", "og:title", ogTitle ?? title);
    setMeta(
      `meta[property="og:description"]`,
      "property",
      "og:description",
      ogDescription ?? description,
    );
  }, [title, description, ogTitle, ogDescription]);
}
