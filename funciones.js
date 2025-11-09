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
function lanzamientoDados() {
    let dado1=Math.floor(Math.random()*6)+1;
    let dado2=Math.floor(Math.random()*6)+1;
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
    }
    setPrecio(nuevoPrecio) {
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
//12
class Producto {
    #nombre;
    #precio; 
    #stock;  
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio; 
        this.stock = stock;  
    }

    get precio() {
        if (typeof this.#precio === 'number') {
            return `$${this.#precio.toFixed(2)}`;
        }
        return "$0.00";
    }
    set precio(nuevoPrecio) {
        const valorNumerico = Number(nuevoPrecio);
        if (typeof valorNumerico === 'number' && valorNumerico > 0) {
            this.#precio = valorNumerico;
        } else {
            console.error(`ERROR: Precio "${nuevoPrecio}" no válido.`);
        }
    }
    get stock() {
        return this.#stock;
    }
    set stock(nuevoStock) {
        if (typeof nuevoStock === 'number' && nuevoStock >= 0) {
            this.#stock = nuevoStock;
        } else {
            console.error(`ERROR: Stock "${nuevoStock}" no válido.`);
        }
    }
    get nombre() { return this.#nombre; }
    set nombre(nuevoNombre) { this.#nombre = nuevoNombre; }
    vender(cantidad) {
        if (cantidad > 0 && typeof cantidad === 'number' && this.#stock >= cantidad) {
            this.#stock -= cantidad;
            console.log(`Venta exitosa. Stock restante: ${this.#stock}`);
            return true;
        } else {
            console.warn(`Venta fallida. Stock insuficiente (${this.#stock}) o cantidad inválida.`);
            return false;
        }
    }
}
//13
class Figura {
    #lados;
    #longitudLado;
    constructor(lados,longitudLado){
        this.lados=lados;
        this.longitudLado=longitudLado;
    }
    area(){
        return 0;
    }
    perimetro(){
        return 0;
    }
}
class Cuadrado extends Figura {
    constructor(longitudLado){
        super(4,longitudLado);
    }
    
    area(){
        return Math.pow(this.longitudLado,2);
    }
    perimetro(){
        return this.lados*this.longitudLado;
    }
}
class Triangulo extends Figura {
    constructor(longitudLado){
        super(3,longitudLado);
    }
    area(){
        let altura=(Math.sqrt(3)/2)*this.longitudLado;
        return (this.longitudLado*altura)/2;
    }
    perimetro(){
        return this.lados*this.longitudLado;
    }
}
//14
class Usuario{
    #nombre;
    #email;
    constructor(nombre,email){
        this.nombre=nombre;
        this.email=email;
    }
    mostrarInfo(){
        return `Nombre: ${this.nombre}, Email: ${this.email}`;
    }
}
class Cliente extends Usuario {
    #fidelidad;
    constructor(nombre,email,fidelidad){
        super(nombre,email);
        this.fidelidad=fidelidad;
    }
    mostrarInfo(){
        return `${super.mostrarInfo()}, Nivel de fidelidad: ${this.fidelidad}`;
}
}
class Administrador extends Usuario {
    constructor(nombre,email){
        super(nombre,email);
    }
    mostrarInfo(){
        return `${super.mostrarInfo()}`;
    }
    crearCuenta(nombre,email){
        return new Usuario(nombre,email);
    }
    editarCuenta(usuario,nuevoNombre,nuevoEmail){
        usuario.nombre=nuevoNombre;
        usuario.email=nuevoEmail;
    }
    eliminarCuenta(usuario){
        usuario=null;
    }
}
//15
const usuario1 = new Cliente("Ana López", "ana@cliente.com", 4);
const usuario2 = new Administrador("Javier Ruiz", "javi@admin.com", ["crear", "editar", "eliminar"]);
const usuario3 = new Cliente("Marta Gil", "marta@cliente.com", 5);
const usuario4 = new Usuario("Pedro Base", "pedro@base.com"); 
const listaUsuarios = [usuario1, usuario2, usuario3, usuario4];
listaUsuarios.forEach(usuario => {
   
    console.log(usuario.mostrarInfo());
});
//16
class Empleado {
    #nombre;
    #sueldobase;
    constructor(nombre, sueldoBase) {
        this.#nombre = nombre;
        this.#sueldobase = sueldoBase;
    }
    get sueldoBase() { 
        return this.#sueldobase;
    }
    calcularSueldo() {
        return this.#sueldobase; 
    }
}
class Programador extends Empleado {
    #lenguaje;
    constructor(nombre, sueldoBase, lenguaje) {
        super(nombre, sueldoBase);
        this.#lenguaje = lenguaje;
    }
    calcularSueldo() {
        return this.sueldoBase * 1.10;
    }
}

class ProgramadorSenior extends Programador {
    constructor(nombre, sueldoBase, lenguaje) {
        super(nombre, sueldoBase, lenguaje);
    }
    calcularSueldo() {
        return this.sueldoBase * 1.25;
    }
}
//17
class Cuenta {
    #saldo;
    constructor(saldoInicial) {
        this.saldo = saldoInicial;
    }
    getsaldo() {
        return this.#saldo;
    }
    setsaldo(nuevoSaldo) {
        this.#saldo = nuevoSaldo;
    }
    depositar(cantidad) {
        this.saldo = this.saldo + cantidad;   
    }
    retirar(cantidad) {
        this.saldo = this.saldo - cantidad;
        return true; 
    }
    transferir(cuentaDestino, cantidad) {
        if (this.retirar(cantidad)) { 
            cuentaDestino.depositar(cantidad);
            return true;
        }
        return false;
    }
}
class CuentaAhorro extends Cuenta {
    constructor(saldoInicial){
        super(saldoInicial);
    }
  depositar(cantidad){
       if(cantidad>0){
        super.depositar(cantidad);
       }
    }
    retirar(cantidad){
        if(cantidad>0 && cantidad<=this.saldo){
            super.retirar(cantidad);
        }
    }
}
class CuentaCorriente extends Cuenta {
    #limiteDescubierto;
    constructor(saldoInicial,limiteDescubierto){
        super(saldoInicial);
        this.limiteDescubierto=limiteDescubierto;
    }
    retirar(cantidad){
        if(cantidad>0 && cantidad<=(this.saldo+this.limiteDescubierto)){
            super.retirar(cantidad);
        }
    }
    depositar(cantidad){
        if(cantidad>0){
            super.depositar(cantidad);
        }
    }
}
//18
class Producto {
    #nombre;
    #precio;   
    constructor(nombre, precio) {
        this.#nombre = nombre;
        this.#precio = precio;
    } 
    getnombre() { return this.#nombre; }
    getprecioNumerico() { return this.#precio; }
    getprecioFormateado() { return `$${this.#precio.toFixed(2)}`; }
}
class Carrito {
    #productosCarrito;
    constructor() {
        this.#productosCarrito = [];
    }
    agregarProducto(producto, cantidad = 1) {
        const itemExistente = this.#productosCarrito.find(
            item => item.producto.nombre === producto.nombre
        );
        if (itemExistente) {
            itemExistente.cantidad += cantidad;
            console.log(`Aumentada la cantidad de ${producto.nombre} a ${itemExistente.cantidad}`);
        } else {
            this.#productosCarrito.push({ producto, cantidad });
            console.log(`Agregado: ${cantidad}x ${producto.nombre}`);
        }
    }
    calcularTotal() {
        let total = 0;  
        this.#productosCarrito.forEach(item => {
            total += item.producto.precioNumerico * item.cantidad;
        });       
        return total;
    }
    mostrarResumen() {
        let resumen = "Resumen del Carrito\n";
        
        this.#productosCarrito.forEach(item => {
            const subtotal = item.producto.precioNumerico * item.cantidad;
            resumen += `- ${item.producto.nombre}: ${item.cantidad} x ${item.producto.precioFormateado} = $${subtotal.toFixed(2)}\n`;
        });
        
        const totalPagar = this.calcularTotal();
        resumen += `Total a pagar: $${totalPagar.toFixed(2)}`;
        
        return resumen;
    }
}
//19
class Notificacion {
    constructor(destinatario) {
        this.destinatario = destinatario;
    }
    enviar() {
        console.warn(`[BASE] Enviando notificación genérica a: ${this.destinatario}`);
    }
}
class Email extends Notificacion {
    constructor(destinatario, asunto) {
        super(destinatario);
        this.asunto = asunto;
    }
    enviar() {
        console.log(` EMAIL enviado a ${this.destinatario}. Asunto: "${this.asunto}".`);
    }
}
class SMS extends Notificacion {
    constructor(destinatario, telefono) {
        super(destinatario);
        this.telefono = telefono;
    }
    enviar() {
        console.log(` SMS enviado al número ${this.telefono}.`);
    }
}
class Push extends Notificacion {
    constructor(destinatario, dispositivo) {
        super(destinatario);
        this.dispositivo = dispositivo;
    }
    enviar() {
        console.log(` PUSH enviado a ${this.destinatario} en dispositivo ${this.dispositivo}.`);
    }
}
