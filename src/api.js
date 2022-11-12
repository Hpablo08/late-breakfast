export const fetchBrunchData = async () => {
  return await fetch("https://late-breakfast-api.vercel.app/api/v1/brunch");
}
