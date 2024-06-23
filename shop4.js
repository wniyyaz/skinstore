var robinData = [
    {
        image_url: "https://images-na.ssl-images-amazon.com/images/I/71O0evfNqhL._SL1500_.jpg",
        name: "Body Wash",
        price: "32.00",

    },
    {
        image_url: "https://i5.walmartimages.com/asr/fd577548-7195-4228-a70e-e762411660e0.9b413e44b9f3e71bab096d39952bffef.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff",
        name: "Body Scrub",
        price: "38.00",

    },
    {
        image_url: "https://i5.walmartimages.com/asr/659f1808-6456-41ad-9d0a-60f3dc885455_1.f1b38832d37d4bda8efc5dd46072a955.jpeg",
        name: "Body Lotion",
        price: "30.00",

    },
    {
        image_url: "https://storage.sg.content-cdn.io/cdn-cgi/image/%7Bwidth%7D,%7Bheight%7D,quality=90,format=auto/in-resources/5ad7e6d1-20db-4623-b462-94e54806c8a7/Images/ProductImages/Source/26136249.jpg",
        name: "Shower Gel",
        price: "32.00",

    },
    {
        image_url: "https://th.bing.com/th/id/OIP.PXOerXpeykM9LAJPGSEcsAHaHa?rs=1&pid=ImgDetMain",
        name: "Body Scrub",
        price: "42.00",

    },
    {
        image_url: "https://storage.sg.content-cdn.io/cdn-cgi/image/%7Bwidth%7D,%7Bheight%7D,quality=90,format=auto/in-resources/5ad7e6d1-20db-4623-b462-94e54806c8a7/Images/ProductImages/Source/26139374.jpg",
        name: "Body Lotion",
        price: "95.00",

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