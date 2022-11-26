// const API_URL = 'https://swapi.dev/api/'
// const API_PERSON = 'people'



export const getApiResource = async (url)=>{// асинхронный запрос на сервер
     try{ // метод try_catch
         const res = await fetch (url); /* создаем константу для отправления Fetch запроса на сервер через асинхронную
          функцию await */
         if (!res.ok){ /* условие, если запрос не верный для отлавливания ошибки и возвращения False что бы не искать
          далее сервер ответа*/
             console.error(res.status)
             return false
         }
         return await res.json(); /* Возврат ответа от сервера в формате JSON*/
     } catch (error) {
           console.error(error.message)
         return false
     }
}



// (async () =>{ /* Вызов асинхронной само вызывающей функции для вывода результата в обработку
// без нее не сможем использовать запрос при верстке */
//     const list = await getApiResource(API_URL + API_PERSON)
//     console.log(list)
// })() /*() - вызывает функцию из самой себя*/
// // getApiResource(API_URL + API_PERSON)
