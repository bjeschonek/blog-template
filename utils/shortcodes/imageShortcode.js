import Image from '@11ty/eleventy-img';

export default async function imageShortcode(
    src,
    alt,
    className = undefined,
    widths = [400, 800, 1280],
    formats = ['avif', 'webp', 'jpg'],
    sizes = '100vw'
) {
    const imageMetadata = await Image(src, {
        widths: [...widths, null],
        formats: [...formats, null],
        outputDir: '_site/assets/images',
        urlPath: '/assets/images'
    });
}