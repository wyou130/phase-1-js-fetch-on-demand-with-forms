const init = () => {
  const inputForm = document.querySelector('form')
  inputForm.addEventListener('submit', e => {
    e.preventDefault()
    const input = document.querySelector('input#searchByID')
    
    // console.log(input.value) // can access value by creating variable above and .value that directly
    // console.log(e.target.children[1].value) // can access value using DOM tree starting with e

    const title = document.querySelector('section#movieDetails h4')
    const summary = document.querySelector('section#movieDetails p') // can also put these under the fetch data; here they're accessible to more things

    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(resp => resp.json())
    .then(data => {
        title.innerText = data.title
        summary.innerText = data.summary
        }
    )
  })
}

document.addEventListener('DOMContentLoaded', init);