// ritrovo la griglia all'interno dell'html

const grigliaHtml = document.querySelector('.griglia')
console.log(grigliaHtml)
grigliaHtml.innerHTML = ''

// creo il ciclo 

for ( let x = 1; x <= 100; x++) {
  console.log(x)
  const divElement = document.createElement('div')
  divElement.classList.add('cell')
  console.log(divElement)
  


  // creo le condizioni per il contenuto delle celle
  if(x % 5 === 0 && x % 3 === 0) {
    console.log(x, 'il numero e un multiplo di 3 e di 5')
    divElement.classList.add('fizzbuzz')
    divElement.append('fizzbuzz')
    
    
    

  } else if (x % 5 === 0){
    console.log(x, 'il numero e un multiplo di 5')
    divElement.classList.add('buzz')
    divElement.append('buzz')
    
  } else if (x % 3 === 0) {
    console.log(x, 'il numero e un multiplo di 3')
    divElement.classList.add('fizz')
    divElement.append('fizz')
    
  } else{
    divElement.classList.add('regular-number')
    divElement.append(x)
    
  }
  
  // inserisco le cell nella griglia
  grigliaHtml.append(divElement)
  

}