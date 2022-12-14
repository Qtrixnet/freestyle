class Api {
  constructor() {
    this._sendCommentsUrl = 'https://script.google.com/macros/s/AKfycbw7YL6sy-5sPUEjOHWlFHy3AchsShKaxuKcr1YJBe8Z5YTvIhwgNq5HQ5Ol0CBdCLWkEg/exec';
    this._getCommentsUrl = 'https://docs.google.com/spreadsheets/d/1UGRpxd9Do4AsvpPgBT5amv9PP4Q3HkqBarsO-dm7p90/gviz/tq?&sheet=responses';
    this._reminderUrl = 'https://script.google.com/macros/s/AKfycbyPeCGdBhB8boBDI7_3qgKDdTDYpTy4IAF0Baja3Yow2o_FVIWlPCGGbAxA1AI9dwc6/exec';
  }

  //* Проверка статуса запроса
  _requestResult(res) {
    if (res.ok) {
      return res.text();
    } else {
      return Promise.reject(
        `Что-то пошло не так: Ошибка ${res.status} - ${res.statusText}`
      );
    }
  }

  sendReminder(value) {
    const formData = new FormData();

    formData.append('Email', value);
    return fetch(this._reminderUrl, {
      method: 'POST',
      body: formData,
    })
      .then((res) => this._requestResult(res))
  }

  sendComment({name, phone, message}) {
    const formData = new FormData();

    formData.append('phone', phone);
    formData.append('name', name);
    formData.append('comment', message);
    formData.append('approve', 'no');

    return fetch(this._sendCommentsUrl, {
      method: 'POST',
      body: formData,
    })
      .then((res) => this._requestResult(res))
  }

  getComments() {
    return fetch(this._getCommentsUrl)
      .then((res) => this._requestResult(res))
      .then((text) => {
        //* Убираем лишние символы их строки
        const json = JSON.parse(text.substr(47).slice(0, -2));

        //* Получаем заголовки
        const labels = json.table.cols.map((title) => title.label !== "" ? title.label : "Техническое поле");

        //* Получаем строки
        const rows = json.table.rows;

        //* Объединяем заголовки и строки в одну таблицу
        const createPureArr = (rows, labels) => {
          return rows.map((item) => {
            return Object.assign(
              ...labels.map((n, i) => ({
                [n]: item.c[i] ? item.c[i].v : false,
              }))
            );
          });
        };

        //* Получаем целую таблицу и убираем 1й элемент (это техническая строка без данных)
        const comments = createPureArr(rows, labels);

        comments.shift();
        console.log(comments)

        //* Возвращаем только одобренные комментарии
        return comments.filter(point => point?.approve.trim() === 'yes')
      })
  }
}

const api = new Api();

export default api;
