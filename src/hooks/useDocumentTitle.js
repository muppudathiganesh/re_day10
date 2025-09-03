import { useEffect } from "react";

export default function useDocumentTitle(title) {
  useEffect(() => {
    const previous = document.title;
    document.title = title ?? "";
    return () => {
      // restore previous title when the component using this hook unmounts
      document.title = previous;
    };
  }, [title]);
}
