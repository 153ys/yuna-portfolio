/// <reference types="vite/client" />

interface Window {
  dataLayer?: IArguments[];
  gtag?: (...args: unknown[]) => void;
}
