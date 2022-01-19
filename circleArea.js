//console.log("hello World");

const radius = process.argv.slice(2);

function showAreaOfCircle() {
    if(radius<0 || radius==0) {
        console.log("Pozitif Sayı Giriniz")
    }else if(radius>0){
    let piNumber = Math.PI;
    let area = piNumber*radius*radius;
    let newArea = area.toFixed(2);
    let printofArea = `Yarıçapı ${radius} cm Olan Dairenin Alanı: ${newArea} cm²' dir.`
    let perimeter = 2*piNumber*radius;
    let newPerimeter = perimeter.toFixed(2);
    let printOfPerimeter = `Yarıçapı ${radius} cm Olan Dairenin Çevresi: ${newPerimeter} cm' dir.`
    console.log(printofArea);
    console.log(printOfPerimeter);
    }
}

showAreaOfCircle(parseInt(radius[0]));


