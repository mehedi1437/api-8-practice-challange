// API all data are start from here 

const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
      {
        name: {
          common: "John",
          fullName: ["John", "Doe"]
        },
        age: 32,
        isMale: false,
        address: {
          street: "13/A St Joseph",
          house: 10,
        },
      },
      {
        name: {
          common: "Humayoun",
          fullName: ["Humayoun", "Kabir"]
        },
        age: 33,
        isMale: false,
        address: {
          street: "13/A St Lucia",
          house: 11,
        },
      },
    ]
  };



const displayUsers = () => {
    const mainContainer = document.getElementById('main-container');
    console.log(person.result);
    const h1 = document.createElement('h1');
    h1.innerText = ` ${person.message} `;
    h1.classList.add('text-center');
    mainContainer.appendChild(h1);
    person.result.forEach(element => {
        console.log(element.name.common);
        
        const personDiv = document.createElement('div');
        personDiv.classList.add('col-sm-6');
        personDiv.innerHTML = `
          
        
        
        <div class="card mt-5">
          <div class="card-body">
            <h5 class="card-title border border-5">${element.name.common}</h5>
            <p class="card-text">Street :${element.address.street}, House :${element.address.house}</p>
            <p>age:${element.age} </P>
          
          </div>
        </div>
      
        `;
     
        mainContainer.appendChild(personDiv);
       
    });
}

displayUsers();


