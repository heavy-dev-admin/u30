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

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCallTime = 0

  return function (...args: Parameters<T>) {
    const now = Date.now()

    if (now - lastCallTime >= delay) {
      lastCallTime = now
      func.apply(this, args)
    }
  }
}
