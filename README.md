# Автоматическая сборка clockbox

Смирнова А.М.

Приложение выводит `Hello World` по адресу http://127.0.0.1:4000.

```powershell
npm ci
npm test
npm start
```

Запуск в Docker:

```powershell
docker build -t smirnova-clockbox:local .
docker run -d --name SmirnovaClockbox -p 127.0.0.1:4000:4000 smirnova-clockbox:local
```

В репозитории GitHub нужно добавить Actions secrets:

- `DOCKERHUB_USERNAME`: логин выбранного аккаунта Docker Hub.
- `DOCKERHUB_TOKEN`: токен с правом записи в репозиторий `clockbox`.

Workflow запускает тесты, собирает образ и публикует теги `latest` и SHA коммита
при отправке изменений в `main`. Для pull request выполняется только проверка.
