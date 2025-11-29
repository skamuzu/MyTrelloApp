export default async function getImages() {
    const res = await fetch(`https://api.unsplash.com/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&per_page=12&query=wallpaper`,
        {next : {
            revalidate: 60 * 60 * 24
        }}
    )
    return res.json();
}