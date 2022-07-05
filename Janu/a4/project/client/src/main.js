export async function fetchData(route = '', data = {}, methodType) {
    console.log(data)
  let options = {
    method: methodType,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  if (methodType == 'POST') {
    options['body'] = JSON.stringify(data);
  }
  const response = await fetch(`http://localhost:8080${route}`, options);
  if (response.ok) {
    return await response.json();
  } else {
    throw await response.json();
  }
}
