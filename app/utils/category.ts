export function formatCategory(category: string): string {
  return category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
}
