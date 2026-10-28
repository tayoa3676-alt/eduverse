const programYears = document.querySelectorAll(".program-year span")
// console.log(programYears)

const programCards = document.querySelectorAll(".sub-program-card")
// console.log(programCards)

programYears.forEach(year =>{
    year.addEventListener("click", ()=>{
        const yearValue = year.dataset.year
        console.log(yearValue)

        programCards.forEach(card => {
            const cardCategory = card.dataset.program
            if(cardCategory === yearValue){
                card.style.display = "block"
            }else {
                card.style.display = "none"
            }
        })
    })
})