/**
 *
 * @param key - ключ персонажа
 * localStorage.getItem(key) - в локальном хранилище получаем персонажа по ключу
 * @returns {{}|any} - парсим в json полученные данные
 * if (data !== null) - проверка на наличие данных в локальном хранилище
 * return {} - возвращает пустой объект если в локальном хранилище нет данных
 */
export const getLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  if (data !== null) {
    return JSON.parse(data);
  }
  return {};
};

/**
 *
 * @param key - ключ по каторому задается персонаж
 * @param data - данные персонажа
 * localStorage.setItem(key, JSON.stringify(data)); - в локальное хранилище localStorage берется персонаж setItem (ключ,
 * вывод Data в формате JSON)
 */
export const setLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
