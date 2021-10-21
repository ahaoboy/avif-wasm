# fork from [avif.io](https://github.com/justinschmitz97/avif.io) and [libavif](https://github.com/AOMediaCodec/libavif)


# install
```
npm i avif-wasm 
```


# usage
```
import { encode, ConversionOptions, Subsampling } from 'avif-wasm'

const buf = readFileSync('test.png');
const options = new ConversionOptions(80, 80, Subsampling.YUV444, false)
const data = await encode(buf, options, (p: number) => {
    console.log('progress', p)
})
const file = new File(
    [data],
    `avif.avif`
)
download(file);
```