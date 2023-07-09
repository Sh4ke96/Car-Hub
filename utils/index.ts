export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "b52911eefbmsh3efaa8d643cda0cp1bcdc6jsn0ea47afef22a",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    { headers: headers }
  );
  const result = await response.json();
  return result;
}
