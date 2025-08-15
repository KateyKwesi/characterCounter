 let textArea = document.querySelector(`#text-input`)  

  let charCount = document.querySelector(`#char-count`)
  let maxlength = textArea.maxLength


  


function charLength (char){
let charTrimmed = char.substring(0,maxlength)

if(charTrimmed.length >= maxlength){
  charCount.style.color = `red`
} else{
  charCount.style.color = ``
}
return charTrimmed
}


textArea.addEventListener(`input`, (e)=>{
let trimmed = charLength(e.target.value)

textArea.value = trimmed
charCount.innerHTML = `<p id="char-count">Character Count: ${trimmed.length}/${maxlength}</p>`
  
})   