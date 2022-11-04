# News app

Приложение показывает последние новости. Для запроса новостей используется
[api](https://currentsapi.services/en/docs/endpoint). Есть возможность фильтрации и поиска, 
выбор по категориям, регионам и языкам (Не на всех языках доступны новости в данный момент, 
но все языки, которые присутствуют в приложении, поддерживаются). При поиске новости в поле 'search'
осуществляется подсветка слов. Много методов для работы с массивами и строками.

#### Иногда приходится очень долго ждать ответ от сервера!
#### используемые технологии:

- [Redux](https://redux.js.org)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [axios](https://axios-http.com/ru/)
- [html-react-parser](https://www.npmjs.com/package/html-react-parser)
- [react-hook-form](https://react-hook-form.com)
- [react-paginate](https://github.com/AdeleD/react-paginate#readme)

#### для удобства написания кода использовались:
- [prettier](https://prettier.io)
- [esLint](https://eslint.org)

Что бы запустить приложение, пропишите:

### `yarn start`

Запускает приложение в режиме разработки
Откройте в браузере [http://localhost:3000](http://localhost:3000).

Страница перезагрузится, если вы внесете изменения.\
Вы также увидите любые ошибки lint в консоли

