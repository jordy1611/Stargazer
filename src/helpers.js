export const getPreviousWeek = (date) => {
  let previousWeek = []
  for (let i = 1; i < 7; i++) {
     // const day = new Date(date.getFullYear(), date.getMonth(), date.getDate() - i)
     const day = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+(date.getDate() - i)
     previousWeek.push(day)
  }
  return previousWeek
}
