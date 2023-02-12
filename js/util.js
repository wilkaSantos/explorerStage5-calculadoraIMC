
export function isANumber(number){
    return isNaN(number) || number == "";
}

export function imc(weight, height){
    return (weight / ((height / 100)**2)).toFixed(2);
}
