export const manage = async (totabai) => {
  const den = await setTimeout(() => {
    console.log('first print!');
  }, 3000);
  console.log(den);
  const len = await totabai;
  console.log(len);
}