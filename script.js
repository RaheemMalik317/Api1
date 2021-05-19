const baseURL = 'https://ghibliapi.herokuapp.com/films/'
const searchTerm = document.querySelector('.search');// defining a variable to store the  class
const searchForm = document.querySelector('form');//defining a variable to store the tag
//const submitBtn = document.querySelector('.submit');// defining a variable to store the class
const section = document.querySelector('section');
const list = document.querySelector('ul')


 searchForm.addEventListener('submit', fetchResults);


function fetchResults() {
          //   event.preventDefault();
         
         fetch(baseURL)
             .then(results => {
                 console.log(results);
                return results.json();
             })
             .then(json => {
             console.log(json);
    
                
            displayResults(json);
             })
   
             .catch(err => console.log(err))
    
        } 
    
        fetchResults();

        function displayResults(data) {
            data.forEach((j) => {
                let boxOne = document.createElement('div')
                boxOne.setAttribute ('class', 'box')
                section.appendChild (boxOne)
                let header = document.createElement ('h2')
                boxOne.appendChild (header)
                let para = document.createElement ('p')
                boxOne.appendChild (para)
                header.innerHTML = j.title
                para.innerText = j.description
            })
        }


    //    function displayResults(title) {
    //        console.log('Api:', title[0].title);

    //         title.forEach((m) => {
    //            let item = document.createElement('li')
    //            list.appendChild (item)
    //            item.innerText = m.title, m.description
    //          })
    //     }

   

       