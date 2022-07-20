let section_card = document.querySelectorAll(".section_card");
for(let i = 0; i < section_card.length; i++) {
    if(section_card[i].childNodes[1].height < 300) {
        section_card[i].classList.add("long");
    } else {
        section_card[i].classList.remove("long");
    }
    
}
console.log(section_card)