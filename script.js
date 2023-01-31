let array = [5,8,10,23,48,60]
for(ei of array){
    console.log(ei/5)
}
for(ei of array){
    if(ei%2==0){
        console.log(`%c Liczba ${ei} jest parzysta`,"background: red")
    }
    else{
        console.log(`%c Liczba ${ei} jest nieparzysta`, 'background: green')
    }
}