const form = document.getElementById ("car-form");
const titleElement = document.querySelector ("#title");
const priceElement = document.querySelector ("#price");
const urlElement = document.querySelector ("#url");

 
// UI Objesini Başlatma
 
const ui = new UI();
 
// Tüm eventleri Yükleme 
 
events ();
 
function events () {
    form.addEventListener ("submit",addCar);
}
 
function addCar(e){
    // bunu başa yazcan
    e.preventDefault();
 
    const title = titleElement.value;
    const price = priceElement.value;
    const url = urlElement.value;
    
    if (title === "" || price === "" || url === ""){
        console.log("Hatalı");
    }
    else{
        
        // Yeni araç
        const newCar = new Car (title,price,url);
        ui.addCarToUI (newCar); // arayüze araç ekleme
    }

    ui.clearInputs(titleElement,priceElement,urlElement);
    e.preventDefault(); 
}   