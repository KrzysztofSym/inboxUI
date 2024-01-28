

let product = document.querySelector(".wrapper");
const currentTime = new Date().toLocaleTimeString([], {month: 'short', day: 'numeric',  hour: '2-digit', minute: "2-digit" });

const nancy = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThrwlp407M0hPVw5P3c-VD1MqnfHHE7-AoJw&usqp=CAU";
const ashley = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQygJs7PHSpVDdaM-WeU6_0FUxn_GAD5tw-2A&usqp=CAU";
const frank = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxbp3Tq1WMheQ_g_A-kESO_EWN4M5VoyFkZw&usqp=CAU";
const rafel = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThyKF34PuyDqsfH55lZ7lPssIdgTGY3JmFSErf_YOOE6UmoGdfl58UsV_aDdtZ51HOySU&usqp=CAU";



  let productList = [
    {
        id: 1,
        name: 'Nancy Meyer',
        message: '"I trust you\'re doing fine."',
        currentPic: nancy,
    },
    {
        id: 2,
        name: 'Frank Johnson',
        message: '"How did the journey go?"',
        currentPic: frank,
    },
    {
        id: 3,
        name: 'Ashley Pierce',
        message: '"I hope everything is going smoothly."',
        currentPic: ashley,
    },
    {
        id: 4,
        name: 'Rafel Jay',
        message: '"I hope everything is going smoothly."',
        currentPic: rafel,
},
    
]

function initApp() {
    const product = document.querySelector(".wrapper");
    console.log("test");
    
    const randomIndex = Math.floor(Math.random() * productList.length);
    const randomProduct = productList[randomIndex]; 

    let newDiv = document.createElement('div');
    newDiv.classList.add('item');

          newDiv.innerHTML = `
          <img src="${randomProduct.currentPic}">
          <div class="status"></div>
          <div class="info">
              <div class="nameWrap">
                  <p class="name">${randomProduct.name}</p>
                  <span class="time">${currentTime}</span>
              </div>
              <p class="msg">${randomProduct.message}</p>
          </div>
    
                        
              `;

          let firstChild = product.firstChild;

          product.insertBefore(newDiv, firstChild);

  }

  document.querySelector(".btn").addEventListener("click", function() {
    initApp();
});

  