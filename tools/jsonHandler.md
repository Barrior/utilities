# 安全的 JSON 解析与序列化

## jsonParse

```typescript
import { jsonParse } from './jsonHandler'

const data = {
    key: jsonParse('{"a":0,"b":1}')
}
```

## jsonStringify

```typescript
import { jsonParse } from './jsonHandler'

const data = {
    key: jsonStringify({ a: 0, b: 1 })
}
```