var imageArr = new Array(
  "/alausaa",
  "/femii",
  "/kareemm",
  "/ikengaa",
)

var num = 0

function next(){
  num ++;
  if (num >= imageArr.length){
    num = 0;
  }

  document.getElementById("sliders").src = imageArr[num]
}

function automate(){
  window.setInterval(() => {
    next()
    
  }, 10000);
}


function activateSayduck(){
  document.getElementById("sayduck").style.zIndex = "30";
}

// Sofa sliders url

function ada(){
  document.getElementById("slider").src = "/Ada.jpg";
};

function alausa(){
  document.getElementById("slider").src = "/Alausa.jpg";
};

function amara(){
  document.getElementById("slider").src = "/Amara.jpg";
};

function aramide(){
  document.getElementById("slider").src = "/Aramide.jpg";
};

function efe(){
  document.getElementById("slider").src = "/Efe.jpg";
};

function esosa(){
  document.getElementById("slider").src = "/Esosa.jpg";
};

function ezinne(){
  document.getElementById("slider").src = "/Ezinne.jpg";
};

function kesandu(){
  document.getElementById("slider").src = "/Kesandu.jpg";
};

function kare(){
  document.getElementById("slider").src = "/Kare.jpg";
};

function longi(){
  document.getElementById("slider").src = "/Longi.jpg";
};

function nkem(){
  document.getElementById("slider").src = "/Nkem.jpg";
};

function obi(){
  document.getElementById("slider").src = "/Obi.jpg";
};

function osho(){
  document.getElementById("slider").src = "/Osho.jpg";
};

function amakisi(){
  document.getElementById("slider").src = "/Amakisi.jpg";
};

function tunde(){
  document.getElementById("slider").src = "/Tunde.jpg";
};


// Coffee table sliders url


function efe1(){
  document.getElementById("slider1").src = "/Efe-1.jpg";
};

function esosa1(){
  document.getElementById("slider1").src = "/Esosa1.jpg";
};

function kareem1(){
  document.getElementById("slider1").src = "/Kareem1.jpg";
};

function mensah1(){
  document.getElementById("slider1").src = "/Mensah-1.jpg";
};


// Chair sliders url


function bimbo2(){
  document.getElementById("slider2").src = "/bimbo.jpg";
};

function chimson2(){
  document.getElementById("slider2").src = "/chimson.jpg";
};

function fela2(){
  document.getElementById("slider2").src = "/fela.jpg";
};

function femi2(){
  document.getElementById("slider2").src = "/femi.jpg";
};

function ikenga2(){
  document.getElementById("slider2").src = "/ikenga.jpg";
};

function shobo2(){
  document.getElementById("slider2").src = "/shobo.jpg";
};

function taziya2(){
  document.getElementById("slider2").src = "/taziya.jpg";
};





// Table sliders url


function aliko3(){
  document.getElementById("slider3").src = "/aliko.jpg";
};

function amakisi3(){
  document.getElementById("slider3").src = "/amakisi.jpg";
};

function andy3(){
  document.getElementById("slider3").src = "/andy.jpg";
};

function ath3(){
  document.getElementById("slider3").src = "/ath.jpg";
};

function aziza3(){
  document.getElementById("slider3").src = "/aziza.jpg";
};

function muna3(){
  document.getElementById("slider3").src = "/muna.jpg";
};

function ngozi3(){
  document.getElementById("slider3").src = "/ngozi.jpg";
};

function randle(){
  document.getElementById("slider4").src = "/randle.jpg";
};



// Console sliders url


function akin5(){
  document.getElementById("slider5").src = "/Akin5.jpg";
};

function esoro5(){
  document.getElementById("slider5").src = "/Esoro5.jpg";
};

function kilema5(){
  document.getElementById("slider5").src = "/Kilema5.jpg";
};

function longi5(){
  document.getElementById("slider5").src = "/Longi5.jpg";
};


// Barstools sliders url


function bala(){
  document.getElementById("slider6").src = "/bala.jpg";
};

function gamba(){
  document.getElementById("slider6").src = "/gamba.jpg";
};

function izu(){
  document.getElementById("slider6").src = "/izu.jpg";
};

function kubrah(){
  document.getElementById("slider6").src = "/kubrah.jpg";
};

function mast(){
  document.getElementById("slider6").src = "/mast.jpg";
};

function sule(){
  document.getElementById("slider6").src = "/sule.jpg";
};

function zigi(){
  document.getElementById("slider6").src = "/zigi.jpg";
};





function openShop() {
  document.getElementById("shopid").style.width = "97%";
  document.getElementById("shopid").style.display = "flex";
}

function closeShop() {
  document.getElementById("shopid").style.width = "0%";
  document.getElementById("shopid").style.display = "none";
};


function openSofa() {
  document.getElementById("sofaid").style.width = "94%";
  document.getElementById("sofaid").style.display = "flex";
  document.getElementById("coffeeid").style.width = "0%";
  document.getElementById("coffeeid").style.display = "none";
  document.getElementById("chairid").style.width = "0%";
  document.getElementById("chairid").style.display = "none";
  document.getElementById("tableid").style.width = "0%";
  document.getElementById("tableid").style.display = "none";
  document.getElementById("sideid").style.width = "0%";
  document.getElementById("sideid").style.display = "none";
  document.getElementById("consoleid").style.width = "0%";
  document.getElementById("consoleid").style.display = "none";
  document.getElementById("barid").style.width = "0%";
  document.getElementById("barid").style.display = "none"; 
}

function openCoffee() {
  document.getElementById("coffeeid").style.width = "100%";
  document.getElementById("coffeeid").style.display = "flex";
  document.getElementById("sofaid").style.width = "0%";
  document.getElementById("sofaid").style.display = "none";
  document.getElementById("chairid").style.width = "0%";
  document.getElementById("chairid").style.display = "none";
  document.getElementById("tableid").style.width = "0%";
  document.getElementById("tableid").style.display = "none";
  document.getElementById("sideid").style.width = "0%";
  document.getElementById("sideid").style.display = "none";
  document.getElementById("consoleid").style.width = "0%";
  document.getElementById("consoleid").style.display = "none";
  document.getElementById("barid").style.width = "0%";
  document.getElementById("barid").style.display = "none"; 
}

function openChair() {
  document.getElementById("chairid").style.width = "100%";
  document.getElementById("chairid").style.display = "flex";
  document.getElementById("sofaid").style.width = "0%";
  document.getElementById("sofaid").style.display = "none";
  document.getElementById("coffeeid").style.width = "0%";
  document.getElementById("coffeeid").style.display = "none";
  document.getElementById("tableid").style.width = "0%";
  document.getElementById("tableid").style.display = "none";
  document.getElementById("sideid").style.width = "0%";
  document.getElementById("sideid").style.display = "none";
  document.getElementById("consoleid").style.width = "0%";
  document.getElementById("consoleid").style.display = "none";
  document.getElementById("barid").style.width = "0%";
  document.getElementById("barid").style.display = "none"; 
}

function openTable() {
  document.getElementById("tableid").style.width = "100%";
  document.getElementById("tableid").style.display = "flex";
  document.getElementById("sofaid").style.width = "0%";
  document.getElementById("sofaid").style.display = "none";
  document.getElementById("coffeeid").style.width = "0%";
  document.getElementById("coffeeid").style.display = "none";
  document.getElementById("chairid").style.width = "0%";
  document.getElementById("chairid").style.display = "none";
  document.getElementById("sideid").style.width = "0%";
  document.getElementById("sideid").style.display = "none";
  document.getElementById("consoleid").style.width = "0%";
  document.getElementById("consoleid").style.display = "none";
  document.getElementById("barid").style.width = "0%";
  document.getElementById("barid").style.display = "none"; 
}

function openSide() {
  document.getElementById("sideid").style.width = "100%";
  document.getElementById("sideid").style.display = "flex";
  document.getElementById("sofaid").style.width = "0%";
  document.getElementById("sofaid").style.display = "none";
  document.getElementById("coffeeid").style.width = "0%";
  document.getElementById("coffeeid").style.display = "none";
  document.getElementById("chairid").style.width = "0%";
  document.getElementById("chairid").style.display = "none";
  document.getElementById("tableid").style.width = "0%";
  document.getElementById("tableid").style.display = "none";
  document.getElementById("consoleid").style.width = "0%";
  document.getElementById("consoleid").style.display = "none";
  document.getElementById("barid").style.width = "0%";
  document.getElementById("barid").style.display = "none"; 
}

function openConsole() {
  document.getElementById("consoleid").style.width = "100%";
  document.getElementById("consoleid").style.display = "flex";
  document.getElementById("sofaid").style.width = "0%";
  document.getElementById("sofaid").style.display = "none";
  document.getElementById("coffeeid").style.width = "0%";
  document.getElementById("coffeeid").style.display = "none";
  document.getElementById("chairid").style.width = "0%";
  document.getElementById("chairid").style.display = "none";
  document.getElementById("tableid").style.width = "0%";
  document.getElementById("tableid").style.display = "none";
  document.getElementById("sideid").style.width = "0%";
  document.getElementById("sideid").style.display = "none";
  document.getElementById("barid").style.width = "0%";
  document.getElementById("barid").style.display = "none"; 
}

function openBar() {
  document.getElementById("barid").style.width = "100%";
  document.getElementById("barid").style.display = "flex";
  document.getElementById("sofaid").style.width = "0%";
  document.getElementById("sofaid").style.display = "none";
  document.getElementById("coffeeid").style.width = "0%";
  document.getElementById("coffeeid").style.display = "none";
  document.getElementById("chairid").style.width = "0%";
  document.getElementById("chairid").style.display = "none";
  document.getElementById("tableid").style.width = "0%";
  document.getElementById("tableid").style.display = "none";
  document.getElementById("sideid").style.width = "0%";
  document.getElementById("sideid").style.display = "none";
  document.getElementById("consoleid").style.width = "0%";
  document.getElementById("consoleid").style.display = "none"; 
}

function closeAll(){
  document.getElementById("coffeeid").style.width = "0%";
  document.getElementById("coffeeid").style.display = "none";
  document.getElementById("sofaid").style.width = "0%";
  document.getElementById("sofaid").style.display = "none";
  document.getElementById("chairid").style.width = "0%";
  document.getElementById("chairid").style.display = "none";
  document.getElementById("tableid").style.width = "0%";
  document.getElementById("tableid").style.display = "none";
  document.getElementById("sideid").style.width = "0%";
  document.getElementById("sideid").style.display = "none";
  document.getElementById("consoleid").style.width = "0%";
  document.getElementById("consoleid").style.display = "none";
  document.getElementById("barid").style.width = "0%";
  document.getElementById("barid").style.display = "none"; 
}



/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "360px";
  document.getElementById("nav-bottom").style.width = "100%";
  document.getElementById("nav-bottom").style.display = "flex";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementById("nav-bottom").style.width = "0";
  document.getElementById("nav-bottom").style.display = "none";
};









function openNav1() {
  document.getElementById("myNav1").style.width = "100%";
  document.getElementById("myNav1").style.left = "0"
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav1() {
  document.getElementById("myNav1").style.left = "100%"
  document.getElementById("myNav1").style.width = "0%";
};

function openNav2() {
  document.getElementById("myNav2").style.width = "100%";
  document.getElementById("myNav2").style.left = "0"
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav2() {
  document.getElementById("myNav2").style.left = "100%"
  document.getElementById("myNav2").style.width = "0%";
};

function openNav3() {
  document.getElementById("myNav3").style.width = "100%";
  document.getElementById("myNav3").style.left = "0"
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav3() {
  document.getElementById("myNav3").style.left = "100%"
  document.getElementById("myNav3").style.width = "0%";
};

function openNav4() {
  document.getElementById("myNav4").style.width = "100%";
  document.getElementById("myNav4").style.left = "0"
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav4() {
  document.getElementById("myNav4").style.left = "100%"
  document.getElementById("myNav4").style.width = "0%";
};

function openNav5() {
  document.getElementById("myNav5").style.width = "100%";
  document.getElementById("myNav5").style.left = "0"
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav5() {
  document.getElementById("myNav5").style.left = "100%"
  document.getElementById("myNav5").style.width = "0%";
};

function openNav6() {
  document.getElementById("myNav6").style.width = "100%";
  document.getElementById("myNav6").style.left = "0"
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav6() {
  document.getElementById("myNav6").style.left = "100%"
  document.getElementById("myNav6").style.width = "0%";
};

function openNav7() {
  document.getElementById("myNav7").style.width = "100%";
  document.getElementById("myNav7").style.left = "0"
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav7() {
  document.getElementById("myNav7").style.left = "100%"
  document.getElementById("myNav7").style.width = "0%";
};

function openNav8() {
  document.getElementById("myNav8").style.width = "100%";
  document.getElementById("myNav8").style.left = "0"
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav8() {
  document.getElementById("myNav8").style.left = "100%"
  document.getElementById("myNav8").style.width = "0%";
};















function openShopmb() {
  document.getElementById("shopidmb").style.width = "100%";
  document.getElementById("shopidmb").style.display = "flex";
}


function closeShopmb() {
  
  document.getElementById("shopidmb").style.display = "none";
};

function openOne() {
  document.getElementById("one").style.display = "block";
  document.getElementById("one1").style.display = "block";
  document.getElementById("one2").style.display = "block";
  document.getElementById("one3").style.display = "block";
  document.getElementById("one4").style.display = "block";
  document.getElementById("one5").style.display = "block";
}


function closeOne() {
  document.getElementById("one").style.display = "none";
  document.getElementById("one1").style.display = "none";
  document.getElementById("one2").style.display = "none";
  document.getElementById("one3").style.display = "none";
  document.getElementById("one4").style.display = "none";
  document.getElementById("one5").style.display = "none";
};

function openTwo() {
  document.getElementById("two").style.display = "block";
  document.getElementById("two1").style.display = "block";
  document.getElementById("two2").style.display = "block";
  document.getElementById("two3").style.display = "block";
  document.getElementById("two4").style.display = "block";
  document.getElementById("two5").style.display = "block";
}


function closeTwo() {
  document.getElementById("two").style.display = "none";
  document.getElementById("two1").style.display = "none";
  document.getElementById("two2").style.display = "none";
  document.getElementById("two3").style.display = "none";
  document.getElementById("two4").style.display = "none";
  document.getElementById("two5").style.display = "none";
};

function openThree() {
  document.getElementById("three").style.display = "block";
  document.getElementById("three1").style.display = "block";
  document.getElementById("three2").style.display = "block";
  document.getElementById("three3").style.display = "block";
  
}


function closeThree() {
  document.getElementById("three").style.display = "none";
  document.getElementById("three1").style.display = "none";
  document.getElementById("three2").style.display = "none";
  document.getElementById("three3").style.display = "none";

};

function openFour() {
  document.getElementById("four").style.display = "block";
  document.getElementById("four1").style.display = "block";
  document.getElementById("four2").style.display = "block";
  document.getElementById("four3").style.display = "block";
  document.getElementById("four4").style.display = "block";
  document.getElementById("four5").style.display = "block";
}


function closeFour() {
  document.getElementById("four").style.display = "none";
  document.getElementById("four1").style.display = "none";
  document.getElementById("four2").style.display = "none";
  document.getElementById("four3").style.display = "none";
  document.getElementById("four4").style.display = "none";
  document.getElementById("four5").style.display = "none";
};

function openFive() {
  document.getElementById("five").style.display = "block";
  document.getElementById("five1").style.display = "block";
  document.getElementById("five2").style.display = "block";
  document.getElementById("five3").style.display = "block";
  document.getElementById("five4").style.display = "block";
 
}


function closeFive() {
  document.getElementById("five").style.display = "none";
  document.getElementById("five1").style.display = "none";
  document.getElementById("five2").style.display = "none";
  document.getElementById("five3").style.display = "none";
  document.getElementById("five4").style.display = "none";
 
};

