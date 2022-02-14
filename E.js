
const wrapper = document.querySelector('.sliderWrapper');
const menuitems = document.querySelectorAll(".menuitem");

const products = [

    {
        id: 1,
        title: "Air Force",
        Price:120,
        colors: [
            {
            code: "black",
            img: "./img/shoe1.png",
        },
        {
          code: "darkblue",
          img: "./img/shoe2.png",
        },
        ],
    },
    
    {
        id: 1,
        title: "Hippie",
        Price:110,
        colors: [
            {
            code: "cyan",
            img: "./img/shoe10.png",
        },
        {
          code: "lemon",
          img: "./img/shoe6.png",
        },
        ],
    },
    
    {
        id: 1,
        title: "Jorden",
        Price:100,
        colors: [
            {
            code: "lemon",
            img: "./img/shoe3.png",
        },
        {
          code: "blue",
          img: "./img/shoe7.png",
        },
        ],
    },
    
    {
        id: 1,
        title: "Blazer",
        Price:90,
        colors: [
            {
            code: "Blue",
            img: "./img/shoe4.png",
        },
        {
          code: "green",
          img: "./img/shoe8.png",
        },
        ],
    },
    
    {
        id: 1,
        title: "Crater",
        Price:80,
        colors: [
            {
            code: "Pink",
            img: "./img/shoe6.png",
        },
        {
          code: "black",
          img: "./img/shoe2.png",
        },
        ],
    },
    
]


  let choosenproduct = products[0]

   const currentproductimg = document.querySelector(".productimg");
   const currentProducttitle = document.querySelector(".Producttitle");
   const currentProductprice = document.querySelector(".Productprice");
   const currentcolors = document.querySelectorAll(".color");
   const currentsize = document.querySelectorAll(".size");

menuitems.forEach((item, index ) =>{
    item.addEventListener("click", ()  =>{
     wrapper.style.transform = `translateX(${-100 * index}vw)`;

      choosenproduct = products[index]

      currentProducttitle.textContent = choosenproduct.title;
      currentProductprice.textContent = "$" + choosenproduct.Price;
      currentproductimg.src = choosenproduct.colors[0].img;

      currentcolors.forEach((color,index) =>{
          color.style.backgroundColor = choosenproduct.colors[index].code;
      })

    });
});

  currentcolors.forEach((color,index) =>{
      color.addEventListener( "click" ,() =>{
        currentproductimg.src = choosenproduct.colors[index].img;

      });
  });

   currentsize.forEach((size, index) =>{
       size.addEventListener("click", () =>{
        currentsize.forEach((size) =>{
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
       })
   })


   const buybutton = document.querySelector(".buybutton");
   const payment =  document.querySelector(".payment");
   const close =  document.querySelector(".close");


buybutton.addEventListener( "click" , () =>{
 
 payment.style.display = "flex" 

})

 close.addEventListener( "click" , () =>{
 
    payment.style.display = "none" 
   
   })