function rectangle(widthAr, heightAr, colorAr) {

    let rectangle = {
        width: Number(widthAr),
        height: Number(heightAr),
        color: colorAr.charAt(0).toUpperCase() + colorAr.slice(1),
        calcArea() {
            return Number(this.width * this.height);
        }
        
    }
    

    

    return rectangle;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());