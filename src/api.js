export const fetchBrunchData = async () => {
  return await fetch("http://localhost:3001/api/v1/brunch");
}