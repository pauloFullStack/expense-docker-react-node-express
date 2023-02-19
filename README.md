## Criar a imagen node - docker

```
sudo docker build -t client . 
```

## Execute o contêiner do Docker

```
sudo docker-compose up -d
```

## Instalar as dependências

```
npm install
```
```
cd client
```
```
npm install
```

## Start projeto 
### Comando abaixo start react e node
### "dev":"concurrently \"npm run server\" \"npm run client\""

```
npm run dev
```