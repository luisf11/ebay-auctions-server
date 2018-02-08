# Ebay autions hunter

Node server that find autions items on ebay.

## Technologies

- node js
- cheerio
- express

## Instalation

1- Clone repository

```
git clone https://github.com/luisf11/ebay-auctions-server.git
```


2- Install Dependencies

go to the folder where you clone the repo and:
```
npm install
```
or
```
yarn install 
```
3- Run server

```
node server.js
```

## Usage

```
curl -d '{"item":"item you want to find"}' -H "Content-Type: application/json" -X POST http://localhost:3000/item
```

Thanks to [Alenkart Rodriguez][alenkart profile] for the idea and the scrapper.

[alenkart profile]:https://github.com/Alenkart/


