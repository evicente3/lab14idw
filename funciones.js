//3
function redondeo(numero){
    let redondeoabajo=Math.floor(numero);
    let redondeoarriba=Math.ceil(numero);
    let redondeonormal=Math.round(numero);
    return `Redondeo hacia abajo: ${redondeoabajo}, Redondeo hacia arriba: ${redondeoarriba}, Redondeo normal: ${redondeonormal}`;
}
//4
function numeroAleatorio(min,max){
    let aleatorio=Math.random() * (max - min) + min;
    return aleatorio;
}
//5
function lanzamientoDados(){
    let dado1=Math.floor(Math.random()*6)+1;
    let dado2=Math.floor(Math.randomj()*6)+1;
    let suma=dado1+dado2;
    return `Dado 1: ${dado1}, Dado 2: ${dado2}, Suma: ${suma}`;
}
//6
function calculoPotenciasYRaices(numero){
    let cuadrado=Math.pow(numero,2);
    let cubo=Math.pow(numero,3);
    let raizCuadrada=Math.sqrt(numero);
    return `Cuadrado: ${cuadrado}, Cubo: ${cubo}, Raíz cuadrada: ${raizCuadrada}`;
}   
//7
function gradosARadianes(grados){
    let radianes=grados*(Math.PI/180);
    return radianes;
}
function radianesAGrados(radianes){
    let grados=radianes*(180/Math.PI);
    return grados;
}
//8
function contraseñasNuméricas(){
    let contraseña="";
    for (let i=0;i<6;i++){
        let digito=Math.floor(Math.random()*10);
        contraseña+=digito;
    }
    return contraseña;
}
//9
function distanciaPuntos(x1,y1,x2,y2){
    let distancia=Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
    return distancia;
}
//10
function normalizarNotas(...notas){
    let maxNota=Math.max(...notas);
    let notasNormalizadas=notas.map(nota =>{
        const valorNormalizado = nota / maxNota;
        return valorNormalizado.toFixed(2);
});
    return notasNormalizadas;
}
//11
class Producto {
    #nombre;
    #precio;
    #stock;
    constructor(nombre,precio,stock){
        this.nombre=nombre;
        this.precio=precio;
        this.stock=stock;
    }
    getPrecio(){
        return this.precio;
    }
    getStock(){
        return this.stock;
    }
    setStock(cantidad){
        if (cantidad>0){
        this.stock=cantidad;
    }
    setPrecio(nuevoPrecio){
        if (nuevoPrecio>0){
        this.precio=nuevoPrecio;
    }
    }
    vender(cantidad){
        if(cantidad>0 && cantidad<=this.stock){
            this.stock-=cantidad;   
             return stock;     
        }
       
    }
}
}
