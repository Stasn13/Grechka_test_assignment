export function formatTextHtml (string: string) {

    return string.replace(/(?!(\<br\>|\<br\s\/\>))<\/?[^>]+>/g, '');
}