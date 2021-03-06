# ๐ Bmart

![version](https://img.shields.io/github/v/release/woowa-techcamp-2020/bmart-6?include_prereleases&sort=semver&label=version)

## ์๊ฐ
[Bmart](http://3.35.66.51) ํ๋ก์ ํธ๋ ๋ฐฐ๋ฌ์ ๋ฏผ์กฑ์ Bmart ๋ชจ๋ฐ์ผ ์ฑ ์๋น์ค๋ฅผ ๋ฐ์ํ ๋ชจ๋ฐ์ผ ์น์ผ๋ก ํด๋ก ํ๋ฉด์ **์ฌ์ฉ์์๊ฒ ์ฑ๊ณผ ์ ์ฌํ ๊ฒฝํ์ ์ ๊ณต**ํ๋ฉฐ **์ฌ์ฌ์ฉ์ฑ์ด ๋์ ์ปดํฌ๋ํธ**์ **์์ ์ ์ธ ์ํ ๊ด๋ฆฌ๋ฅผ ๋ชฉํ**๋ก ํ๊ณ  ์์ต๋๋ค.

## ๋ฐฐํฌ
[๋ฐฐํฌ ๋งํฌ](http://3.35.66.51)

<br/>

## ํ๋ก์ ํธ ๊ตฌ์กฐ
```bash
|-- github
    |-- workflows // github actions
|-- client
    |-- public
        |-- aseets // images
        index.html
    |-- src
        |-- apis
        |-- commons
            constants.ts
            svgs.tsx
        |-- components // UI Components
            |-- large
            |-- medium
            |-- small
        |-- contexts
            |-- user // user context
        |-- hooks // custom hooks
        |-- libs // libraries
        |-- pages // page components
        |-- styles // common & global styles
        |-- tyles // common types
        |-- utils // util functions..
	App.tsx
|-- scripts // deploy scripts
|-- server
    |-- bin // www
    |-- controllers
    |-- lib
    |-- middlewares // express middlewares
    |-- models // sequelize models
    |-- routes // routing
    |-- seeder // dummy data
    |-- utils // constants & utils functions
    app.js
 
```

<br/>

## ์ฌ์ฌ์ฉ์ฑ ๋์ UI ์ปดํฌ๋ํธ
![UI ์ปดํฌ๋ํธ ๊ตฌ์กฐ](https://user-images.githubusercontent.com/36878344/91496983-15976c00-e8f8-11ea-8551-e5a1bcc2d067.png)

**Atomic Design Pattern**์ ์ฐธ๊ณ ํ์ฌ ์ง๊ธ ํ๋ก์ ํธ์์์ ์ฌ์ฌ์ฉ์ฑ์ ์ด์ ์ ๋ 3๊ฐ์ ๊ณ์ธต์ ๊ฐ์ง ์ปดํฌ๋ํธ ๊ตฌ์กฐ๋ฅผ ๋ง๋ค์์ต๋๋ค. 

>* small: ํ์์ ์๋ ์ปดํฌ๋ํธ๊ฐ ํ์ฌ ํ๋ก์ ํธ์์ ์ฌ์ฌ์ฉ๋  ์ฌ์ง๊ฐ ์๋ ์ปดํฌ๋ํธ
>* medium: small ํน์ medium ์ปดํฌ๋ํธ๋ฅผ ์กฐํฉํ ์ปดํฌ๋ํธ
>* large: small, medium์ ์กฐํฉํด์ ๋ง๋  ์ปดํฌ๋ํธ

<br/>

## ํ์ด์ง ๋จ์ ์ํ ๊ด๋ฆฌ ๋ฐ ์ํ ๊ด๋ฆฌ CustomHook

๊ฐ ํ์ด์ง์ ํ์ํ ๋ฐ์ดํฐ์ ์ํ ๊ด๋ฆฌ๋ page์์ ์ด๋ฃจ์ด์ง๊ณ  ์ปดํฌ๋ํธ๋ ๋ฐ์ ๋ฐ์ดํฐ๋ฅผ ๋ ๋๋งํ๋ ์ญํ ์ ์ํํฉ๋๋ค.
ํนํ ํ์ด์ง๋ง๋ค ๋ค๋ฅธ ์ข๋ฅ์ ์ํ ๋ฆฌ์คํธ๊ฐ ํ์ํ๊ธฐ ๋๋ฌธ์ ์ด๋ฅผ ์์ฒญํ๊ณ  ๊ด๋ฆฌํ  ์ ์๋ `useProducts` customHook์ ๊ตฌํํ์ฌ ๊ฐ ํ์ด์ง์์ ์ฌ์ฉํ์ต๋๋ค.

```js
  const [{ products, status }, productDispatch] = useProducts({ categoryId: params.categoryId });
```

<br/>

## ์ค์น ๊ฐ์ด๋

### ํ๋ก์ ํธ ๊ฐ์ ธ์ค๊ธฐ
```
git clone https://github.com/woowa-techcamp-2020/bmart-6.git
```
### ํด๋ผ์ด์ธํธ ์ฝ๋ ๋น๋ํ๊ธฐ
```
cd client
npm install
npm run build
```
### ์๋ฒ ์ฝ๋ ์คํํ๊ธฐ

> โ ๏ธ `server/.env`์ ๋ค์ ํ๊ฒฝ ๋ณ์๊ฐ ๋ฑ๋ก๋์ด์ผ ํฉ๋๋ค.  
> IS_DEMO๋ฅผ true๋ก ์ค์ ํ๋ฉด ์คํํ  ๋ ๋ง๋ค ํ์ดํฐ๋ฒ ์ด์ค๊ฐ ์ด๊ธฐํ๋๊ณ  ์ค๋น๋ ๋ฐ์ดํฐ๊ฐ ์ถ๊ฐ๋ฉ๋๋ค.

```
PORT=3000
IS_DEMO=true
DB_HOST={๋ฐ์ดํฐ๋ฒ ์ด์ค ์ฃผ์}
DB_USER={๋ฐ์ดํฐ๋ฒ ์ด์ค ์ฌ์ฉ์}
DB_PW={๋ฐ์ดํฐ๋ฒ ์ด์ค ์ฌ์ฉ์ ๋น๋ฐ๋ฒํธ}
DB_NAME={๋ฐ์ดํฐ๋ฒ ์ด์ค ์ด๋ฆ}
JWT_SECRET={์์์ JWT SECRET KEY}
```

```
cd server
npm install
npm start
```

์๋ฒ๊ฐ ์คํ๋๋ค๋ฉด http://localhost:3000 ์์ ํ์ธํ์ค ์ ์์ต๋๋ค.

<br/>

## ํ์ ๋ด์ฉ

> ๋ค์๊ณผ ๊ฐ์ ๊ท์น๊ณผ ๋์์ธ์ ๋ฐ๋ผ ํ์์ ์งํํ์ต๋๋ค.

- [Ground Rule](https://github.com/woowa-techcamp-2020/bmart-6/wiki/Ground-Rule)
- [Convention](https://github.com/woowa-techcamp-2020/bmart-6/wiki/Convetion)

- [ERD](https://github.com/woowa-techcamp-2020/bmart-6/wiki/ERD)
- [API Documentation](https://github.com/woowa-techcamp-2020/bmart-6/wiki/API-Documentation)
- [Component Name](https://github.com/woowa-techcamp-2020/bmart-6/wiki/Component-Name)
- [Design](https://www.figma.com/file/8PheL4eBFXz8IEEgtjZsR2/%EC%9A%B0%EC%95%84%ED%95%9C%ED%85%8C%ED%81%AC%EC%BA%A0%ED%94%843%EA%B8%B0-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?node-id=171%3A78)

<br/>

## ํ์

- ์ด๊ดํ [@wudys](https://github.com/wudys)
- ์ ์งํ [@zoomkoding](https://github.com/zoomKoding)
- ํ๋์ฑ [@doonguk](https://github.com/doonguk)
