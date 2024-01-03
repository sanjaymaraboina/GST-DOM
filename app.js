function calculate() {
  let biryani = document.getElementById("biryani").value;
  let manchuriyan = document.getElementById("manchurian").value;
  let chickenwings = document.getElementById("chickenWings").value;
  let tandoori = document.getElementById("tandoori").value;
  let vegbiryani = document.getElementById("veg").value;
  let vegmanch = document.getElementById("vegmanch").value;
  let vegMeals = document.getElementById("vegMeals").value;
  let gst = document.getElementById("gst").value;

  let payment = document.getElementById("payment");

  let arrayOfItems = [
    parseInt(biryani),
    parseInt(manchuriyan),
    parseInt(chickenwings),
    parseInt(tandoori),
    parseInt(vegbiryani),
    parseInt(vegmanch),
    parseInt(vegMeals),
  ];

  let sum = 0;
  for (let i = 0; i <= arrayOfItems.length - 1; i++) {
    sum = sum + arrayOfItems[i];
  }

  console.log("sum of all items: ", sum);

  let gstValue = sum * (gst / 100);
  console.log("gst value :", gstValue);

  let totalValue = gstValue + sum;
  console.log("total value :", totalValue);

  let name = document.getElementById("userName").value;
  let email = document.getElementById("userEmail").value;
  let phoneNumber = document.getElementById("userNumber").value;

  document.getElementById("bill").innerHTML = `Name : ${name} </br>
                                                 Email : ${email} </br> 
                                                 PhoneNumber : ${phoneNumber} </br>
                                                 Total Amount : ${sum}</br>
                                                 Total Payment With GST ${gst}%: ${totalValue}
                                                  `;

  document.getElementById("para").innerHTML = `with tip 100/-: ${totalValue + 100}`;

}
calculate();

function navSlide(){
  const nav = document.querySelector(".navbar");
  const menu = document.querySelector(".mainMenu");
  const burger = document.querySelector(".burger");


  burger.addEventListener("click",()=>{
    menu.classList.toggle("nav-active");


    burger.classList.toggle("toggle")
  })
}

navSlide();




