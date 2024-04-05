Cài đặt TypeScript:

```
npm install typescript -g
```

Để chạy được TypeScript, sử dụng lệnh `tsc -w` để build JS mỗi khi lưu.

Cài đặt uglify-js để minify JS:

```
npm install uglify-js -g
```

Sau khi cài đặt xong tiến hành tạo folder `build` trong folder `js` và chạy lệnh dưới đây để minify JS:

```
uglifyjs js/src/main.js -o js/build/main.min.js --compress --mangle
```
