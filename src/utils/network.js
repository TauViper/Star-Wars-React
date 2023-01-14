export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(res.status);
      return false;
    }
    return await res.json();
  } catch (error) {
    console.error(error.message);
    return false;
  }
};
/**
 *
 * @param url - запрос по ссылке
 * @returns {Promise<Awaited<response>[array]>} - при асинхронном запросе на полученный url, ожидаем получения массива
 * всех адресов Url в запросе (await Promise.all), после проходим через массив методом map и на каждой итерации
 * получаем отдельный url из массива.
 * полученный url из итерации (res) применяем запрос fetch(res) и then получаем данные из url в список json()
 * результат запроса по url помещается в константу film
 * conCurrentFilms - получает результат возврата константы film
 */
export const conCurrentFilms = async (url) => {
  const film = await Promise.all(
    url.map((res) => fetch(res).then((res) => res.json()))
  );
  return film;
};
