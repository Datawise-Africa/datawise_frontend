export const stripHtmlTags = (str) => {
    if (str === null || str === undefined || str === "") return '';
    else str = str.toString();
    return str.replace(/<[^>]*>/g, "");
}