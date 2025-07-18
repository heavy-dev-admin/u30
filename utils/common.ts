export function debounce<T extends (...args: any[]) => any>(func: T, wait: number) {
  let timeoutId: ReturnType<typeof setTimeout> | null

  return function (...args: Parameters<T>) {
    if (timeoutId !== null) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      func(...args)
    }, wait)
  }
}
