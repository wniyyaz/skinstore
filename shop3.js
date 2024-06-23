var robinData = [
    {
        image_url: "https://cutish.pk/wp-content/uploads/2020/07/Huda-Beauty-Foundation-1.jpg",
        name: "Foundation",
        MSRP: "150",
        price: "75",

    },
    {
        image_url: "https://img.makeupalley.com/1/1/8/1/3457126.JPG",
        name: "Loose Powder",
        MSRP: "100",
        price: "75",

    },
    {
        image_url: "https://th.bing.com/th/id/OIP.s68TvldjxpJKAK1bC8PP5gHaIa?rs=1&pid=ImgDetMain",
        name: "Blush powder",
        MSRP: "60",
        price: "48",

    },
    {
        image_url: "https://ba.fimgs.net/system/pics/18810/original/1-Huda-Beauty-Demi-Matte-Lipstick.jpg",
        name: "Matte Lipstick",
        MSRP: "345",
        price: "240",

    },
    {
        image_url: "https://images-na.ssl-images-amazon.com/images/I/71OjqEd6ugL._AC_SL1224_.jpg",
        name: "Eyeshadow Pallete",
        MSRP: "55",
        price: "40",

    },
    {
        image_url: "https://kosmetista.in/wp-content/uploads/2020/11/LIFELINER-2.jpg",
        name: "Eyeliner",
        MSRP: "45",
        price: "30",

    },




];

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