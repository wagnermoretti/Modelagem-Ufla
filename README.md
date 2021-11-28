# ClimaBR
## Modelagem e Implementação de Software
### Wagner Junior Moretti Tome

**ClimaBR** é uma aplicação simples para consulta à previsão do tempo de cidades brasileiras.

Passos:
- Instale as dependências do projeto:
```
npm install
```

- Acesse o site https://openweathermap.org/api, faça seu cadastro e crie uma chave de API.

- Crie um arquivo chamado ```api-config.ts``` no diretório ```src/environment``` do projeto, contendo o conteúdo abaixo (não se esqueça de alterar a propriedade ```api_key``` para a sua chave de API):
```typescript
export const OPEN_WEATHER_CONFIG = {
  api_key: '<your-api-key>',
  api_url: 'https://api.openweathermap.org/data/2.5/onecall',
  api_icon_url: 'http://openweathermap.org/img/wn',
};
```

- Execute o Ionic
```
ionic serve
```
