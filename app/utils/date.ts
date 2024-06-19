export function formatDate(date: string | Date): string {
  if (typeof date === 'string')
    date = new Date(date)

  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}
