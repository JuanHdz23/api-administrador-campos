# Api Administrador de Campos

This project was generated with [Node.js](https://nodejs.org/en/) version 16.14.0.

## Init Project

Run `npm install` with Node Version 16.14.0.

## Development server

Run `tsc -w` for generate the TypeScript build. Then run `node dist/app.js` to start the server to `http://localhost:3000`.

## Test server

Navigate to `http://localhost:3000/api/test`. If you can see the response your server will be running correctly.

## DB Information

The database is created in POSTGRESQL, you can recreate it with the following queries:

- CREATE TABLE client (ID int, CLIENT varchar, NAME varchar, LOCATION varchar, POLYGON geometry, active char);
- CREATE EXTENSION postgis;
- INSERT INTO client VALUES
	(1, '00001', 'Predio 1', 'Mesa de Seri - Maleza', 'POLYGON((29.108564 -110.853055, 29.110177 -110.851016, 29.113617 -110.851209, 29.114582 -110.853452, 29.111470 -110.855501, 29.111489 -110.855511, 29.108564 -110.853055))', '1'),
	(2, '00001', 'Predio 2', 'Mesa de Seri - Maleza', 'POLYGON((29.113887 -110.843460, 29.114861 -110.842557, 29.115714 -110.844317, 29.115001 -110.844896, 29.113887 -110.843460))', '1'),
  (3, '00001', 'Predio 3', 'Mesa de Seri - Hermosillo', 'POLYGON((29.114720 -110.842268, 29.115470 -110.839897, 29.118038 -110.844682, 29.116604 -110.845862, 29.114720 -110.842268))', '1');
