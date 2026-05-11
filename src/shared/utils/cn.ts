type ClassValue = string | undefined | null | false | ClassValue[]

export function cn(...classes: ClassValue[]): string {
  const result: string[] = []
  ;(function collect(arr: ClassValue[]) {
    for (const c of arr) {
      if (Array.isArray(c)) collect(c)
      else if (c) result.push(c)
    }
  })(classes)
  return result.join(' ')
}
