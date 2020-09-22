export const getPreviousWeek = () => {
  const date = new Date()
  let previousWeek = []
  for (let i = 0; i < 7; i++) {
     const day = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+(date.getDate() - i)
     previousWeek.push(day)
  }
  return previousWeek
}
