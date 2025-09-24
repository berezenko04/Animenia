export const getYoutubeVideoId = (url: string) => {
    const urlObject = new URL(url);
    return urlObject.searchParams.get('v') || "";
}