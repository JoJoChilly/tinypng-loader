# tinypng-loader-webpack

Thanks for [tinypng-loader](https://github.com/jf3096/tinypng-loader), it's a really great project.
However, gulp is no longer popular, and some of the project dependencies is deprecated, so I forked it and made it better.
And I kept the former description in salute.

PNG is useful because it's the only widely supported format that can store partially transparent images.
When app moves to production stage, image compression is essential. However, according to my experience using
such as gulp-image, imagemin-webpack, most of them relied on optipng plugin. This compression algorithm only help reduce
around 5%-10%. [tinypng.com](https://tinypng.com) uses smart lossy compression techniques to reduce the file size of PNG/JP(E)G files
with around <b>60%-70%</b> file size reduction.

Here is a [command line way](https://github.com/jf3096/tinypng-loader-cli) if you just want to quickly use it without any coding.

### Advantage

By compare to other tinypng library, this library use a tinypng "loophole" API to compress images.
Support popular build tools webpack so that developers can easily used this in and <b>only in Production stage</b> (Since this library rely on tinypng web api which require network accesss)

### Compatible Image

-   PNG
-   JP(E)G

### Get Started

```bash
npm install tinypng-loader-webpack --save-dev
```

### Support

-   Webpack

### Language

-   Typescript
-   Javascript

### Webpack

```javascript
    ...
    module:{
        ... //webpack loader starts from here
        {
           test: /\.(png|jpe?g)(\?.*)?$/,
           loader: 'file!tinypng'
        },
        ... //end of webpack loader
    }
```

```javascript
    ...
    {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/media/[name].[hash:8].[ext]',
                }
            },
            {
                loader: 'tinypng-loader-loader',
                options: {
                    test: /\.(png|jpe?g)(\?.*)?$/
                },
            }
        ]
    }
    ...
```

Since such operation requires communication with tinypng.com, therefore I would suggest to use [cache-loader](https://github.com/webpack-contrib/cache-loader)
which allows to use MD5 to cache the result accordingly.

```javascript
    ...
        {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            use: [
                {
                    loader: require.resolve('cache-loader'),
                    options: {
                        cacheDirectory: path.resolve('node_modules/.cache-images')
                    }
                },
                {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'static/media/[name].[hash:8].[ext]',
                    }
                },
                {
                    loader: 'tinypng-loader-loader',
                    options: {
                        test: /\.(png|jpe?g)(\?.*)?$/
                    },
                }
            ]
        }
    ...
```

### Screenshot

Here is a normal case if you use this library correctly
![alt tag](./git-img/success.png)

Any errors occured will be logged in console
![alt tag](./git-img/error.png)

### ChangeLog

## 2.0.2 (2019-02-26)

-   fix: include dependency vinyl

## 2.0.0 (2019-02-22)

-   feat: fork from tinypng-loader and update test, some packages, together with remove gulp configs
