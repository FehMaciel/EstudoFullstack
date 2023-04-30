for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // sai completamente do loop
  }
  if (i === 3) {
    continue; // pula para a próxima iteração do loop
  }
  console.log(i);
}
