import { useEffect } from "react";

const SITE_URL = "https://denissimon.de";
const SITE_NAME = "Denis Simon";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

type MetaInput = {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
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

function setLinkCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function getCanonicalUrl() {
  const url = new URL(window.location.href);
  url.hash = "";
  return url.href;
}

export function useDocumentMeta({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
}: MetaInput) {
  useEffect(() => {
    const canonical = getCanonicalUrl();
    if (title) document.title = title;
    setMeta(`meta[name="description"]`, "name", "description", description);
    setMeta(`meta[property="og:title"]`, "property", "og:title", ogTitle ?? title);
    setMeta(
      `meta[property="og:description"]`,
      "property",
      "og:description",
      ogDescription ?? description,
    );
    setMeta(`meta[property="og:url"]`, "property", "og:url", canonical);
    setMeta(`meta[property="og:image"]`, "property", "og:image", ogImage ?? DEFAULT_OG_IMAGE);
    setMeta(`meta[property="og:site_name"]`, "property", "og:site_name", SITE_NAME);
    setMeta(`meta[property="og:locale"]`, "property", "og:locale", "de_DE");
    setLinkCanonical(canonical);
  }, [title, description, ogTitle, ogDescription, ogImage]);
}
