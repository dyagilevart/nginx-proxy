import { useState } from "react";

export function SendReqBtn({url}: {url: string}) {

const [resp, setResp] = useState('еще не было запроса')

  const send = async () => {
    const response = await fetch(url);

    if (response.ok) { // если HTTP-статус в диапазоне 200-299
      // получаем тело ответа (см. про этот метод ниже)
      const json = await response.json();
      setResp("Ваш ip: " + json.ip );
    } else {
      setResp("Ошибка HTTP: " + response.status);
    } }

  return (<><span>{resp}</span><br /><button onClick={send}>Отправить</button></>
  );
}

export default SendReqBtn;
