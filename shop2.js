var robinData = [
    {
        image_url: "https://down-my.img.susercontent.com/file/sg-11134201-22100-ce2pxgymsrivb4",
        name: "Hair Scalp Tonic",
        MSRP: "53",
        price: "39",

    },
    {
        image_url: "https://cf.shopee.com.my/file/6c90ab0ed2a918c49b5347ef7cbbca8a",
        name: "Hair Mask",
        MSRP: "50",
        price: "38",

    },
    {
        image_url: "https://cf.shopee.com.my/file/fc3c215c5aaef24b5f4d9cdd61e7353a",
        name: "Hair Shampoo",
        MSRP: "40",
        price: "39",

    },
    {
        image_url: "https://api.watsons.com.sg/medias/zoom-front-91875.jpg?context=bWFzdGVyfGZyb250L3pvb218NDU3MTh8aW1hZ2UvanBlZ3xmcm9udC96b29tL2hjOC9oODMvOTEzMjgyMTcwODgzMC5qcGd8MTFkZjZhN2Q5YmRkNzU2NDVmMjAyODJhNGQ1MjEwYzI3NDA1Njg3MmFjMzg3N2NlY2FmMGY4MDc4MTI0YjNmZA",
        name: "Olive Oil Moisturising Hair",
        MSRP: "45",
        price: "40",

    },


    {
        image_url: "https://images.summitmedia-digital.com/sap/images/2017/12/04/cosmo_watsNat3-inserts120117.jpg",
        name: "Shampoo",
        MSRP: "45",
        price: "40",

    },

    {
        image_url: "https://th.bing.com/th/id/OIP.PjGvDC09bLq2a3qfsKaOzQHaHa?rs=1&pid=ImgDetMain",
        name: "Styling Gel",
        MSRP: "45",
        price: "40",

    },


];


// var cartArray = JSON.parse(localStorage.getItem("cartItems")) || [];
// var wishArray = JSON.parse(localStorage.getItem("wishItems")) || [];
reLoadM(robinData);

function reLoadM(robinData) {





    // DATA

    displayDatas(robinData);
    function displayDatas(robinData) {
        document.querySelector("#container").textContent = "";
        robinData.map(function (data) {
            var div = document.createElement("div")
            document.querySelector("#container").append(div)

            // inside div creating image and  image_url
            var image = document.createElement("img");
            image.setAttribute("src", data.image_url);
            div.append(image);


            var name = document.createElement("p");
            name.style.height = "35px"
            name.textContent = data.name;
            name.style.marginTop = "3%"
            div.append(name);


            var p2 = document.createElement("p")
            p2.textContent = `RM${data.price}`;
            p2.style.marginTop = "3%"
            p2.style.fontSize = "24px"
            p2.style.fontWeight = "bold"
            div.append(p2)



            var btn1 = document.createElement("button")
            btn1.setAttribute("id", "btnwish")
            btn1.textContent = "Wish"
            btn1.style.display = "block"
            btn1.addEventListener("click", function () {
                wishlistAdd(data);
            })
            div.append(btn1)


            var btn2 = document.createElement("button")
            btn2.setAttribute("id", "btnbuy");
            btn2.textContent = "QUICK BUY"
            btn2.addEventListener("click", function () {
                cartAdd(data);
            })

            div.append(btn2);



        })

    }


    var cartThings = JSON.parse(localStorage.getItem("cartthings")) || [];
    var cartArray = JSON.parse(localStorage.getItem("quickbuy1")) || [];
    function wishlistAdd(data) {
        cartArray.push(data);
        cartThings.push(data);
        localStorage.setItem("quickbuy1", JSON.stringify(cartArray));
        localStorage.setItem("cartthings", JSON.stringify(cartThings));
        alert("Item Added");
        reLoadM(robinData);

    }


    function cartAdd(data) {

        cartThings.push(data);

        localStorage.setItem("cartthings", JSON.stringify(cartThings));
        alert("added to cart");
        reLoadM(robinData);

    }





    // console.log(cartArray);
    // console.log(cartArray);



    // Read More Drop Down Function




    // ==============================================================================================================================================


    var cartLength = JSON.parse(localStorage.getItem("cartthings"))
    document.querySelector("#cardAval").innerHTML = `There are currently ${cartLength.length} items in your cart.`;
    document.querySelector("#cartLen").innerHTML = `${cartLength.length}`;




}









function navSlideOut() {
    document.querySelector("#nav-link").style.left = "-16px"
}
function navSlideIn() {
    document.querySelector("#nav-link").style.left = "-2000px"
}




function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function Tsort() {
    var valT = document.querySelector("#sortT").value
    console.log(valT)
    if (valT == "") {
        reLoadM(robinData);
    } else if (valT == "high") {
        robinData.sort(function (a, b) {
            return (Number(b.price) - Number(a.price))
        })
        reLoadM(robinData);

    } else {
        robinData.sort(function (a, b) {
            return (Number(a.price) - Number(b.price))
        })
        reLoadM(robinData);
    }
}  