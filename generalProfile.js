

    const loadDatabaseGeneralProfile = function (localStorageKeyGeneralProfile) {
    // Get the string version of the database
    const databaseStringGeneralProfile = localStorage.getItem(localStorageKeyGeneralProfile)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseStringGeneralProfile)
  }
  let arrayPros = loadDatabaseGeneralProfile("GeneralProfilePros")
  let arrayCons = loadDatabaseGeneralProfile("GeneralProfileCons")

  console.log(arrayPros)
  console.log(arrayCons)

  const container = document.querySelector(".page-container");

// PROS TO THE DOM
  function addpros(prosArguement) {
    for (let i = 0; i < prosArguement.length; i++) {
      console.log(prosArguement)
      container.innerHTML +=
        `<div class="prosCSS">
          <div class="newsDetails">
              <h3>${prosArguement[i].statement}</h3>
              <p>${prosArguement[i].why1}</p>
              <p>${prosArguement[i].why2}</p>
              <p>${prosArguement[i].why3}</p>

            </div>
          </div>`
    }
  }
  addpros(arrayPros);


//   CONS TO THE DOM
  function addcons(consArguement) {
    for (let i = 0; i < consArguement.length; i++) {
      console.log(consArguement)
      container.innerHTML +=
        `<div class="prosCSS">
          <div class="newsDetails">
              <h3>${consArguement[i].statement}</h3>
              <p>${consArguement[i].why1}</p>
              <p>${consArguement[i].why2}</p>
              <p>${consArguement[i].why3}</p>

            </div>
          </div>`
    }
  }
  addpros(arrayCons);
