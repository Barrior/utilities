export function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image()

    image.addEventListener('load', () => {
      resolve(image)
    })

    image.addEventListener('error', reject)

    image.crossOrigin = 'Anonymous'
    image.src = url
  })
}

export async function getImageBlobURL(url: string): Promise<string> {
  return new Promise(async (resolve) => {
    const image = await loadImage(url)
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')!

    canvas.width = image.width
    canvas.height = image.height
    context.drawImage(image, 0, 0, image.width, image.height)
    canvas.toBlob((blob) => {
      resolve(URL.createObjectURL(blob!))
    })
  })
}
