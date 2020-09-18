export const getPreviousWeek = () => {
  const date = new Date()
  // const today = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()
  let previousWeek = []
  for (let i = 0; i < 7; i++) {
     // const day = new Date(date.getFullYear(), date.getMonth(), date.getDate() - i)
     const day = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+(date.getDate() - i)
     previousWeek.push(day)
  }
  return previousWeek
}

// do set timeout
