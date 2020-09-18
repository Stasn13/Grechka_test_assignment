export function formatDate (unformattedDate: string) {
    const date = new Date(unformattedDate);

    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString()
}