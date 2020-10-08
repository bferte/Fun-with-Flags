export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }


  export function getRightAnswerInfos() {
  return new Promise((resolve, reject) => {
    window.fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(result => {
        console.log('Réponse API Countries Informations', 
        result)

        resolve(result)
    })
    .catch(error => {
        console.error(error)
        reject(error)
    })
  })
}




export function getfalseAnswerInfos() {
  return new Promise((resolve, reject) => {
    window.fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(result => {
        console.log('Réponse API Countries Informations',
        this.setState({falseInformations: result[getRandomInt(0,250)]}),
        console.log(this.state.falseInformations), 
        result)

        resolve(result)
    })
    .catch(error => {
        console.error(error)
        reject(error)
    })
  })
}

export function displayCorrect() {
  let correct = document.getElementById('correct')
  correct.style.display = "flex"
  let flag = document.getElementById('flag')
  flag.style.display = "none"
}

export function displayIncorrect() {
  let incorrect = document.getElementById('incorrect')
  incorrect.style.display = "flex"
  let flag = document.getElementById('flag')
  flag.style.display = "none"
  
}