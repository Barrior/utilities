# 图片处理工具集

## loadImage

加载图片

```typescript
const image = await loadImage('https://a.com/test.jpg')
```

## getImageBlobURL

获取图片的 [blobURL](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL)，可用于前端图片下载

```jsx
try {
    const blobURL = await getImageBlobURL('https://a.com/test.jpg')
    // blob:https://a.com/56930513-ca71-44d3-92b0-7957a8391c9f
    setBlobURL(blobURL)
} catch (e) {
    console.error('图片加载失败', e)
}

...

<a href={blobURL} download="二维码.jpg">
    下载二维码
</a>
```