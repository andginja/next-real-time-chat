export function generateRandom32() {
  let result = "";
  for (let i = 0; i < 32; i++) result += Math.floor(Math.random() * 10); // generates a random digit 0-9
  return result;
}
