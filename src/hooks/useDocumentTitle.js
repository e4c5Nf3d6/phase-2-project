import { useEffect } from "react"

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = `Card Collection | ${title}`
  }, [title]);
}

export default useDocumentTitle