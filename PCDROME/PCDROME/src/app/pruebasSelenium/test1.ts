const {Builder, By} = require('selenium-webdriver');
require("chromedriver")

/*------------filtrar computadores con intel y 8gb de ram-----------------*/
async function filtrarIntel8gb() {
  let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('http://localhost:4200/');
  await driver.findElement(By.id('BtnRec')).click();
  await driver.findElement(By.id('tipoIntel')).click();
  await driver.findElement(By.id('tipo8gb')).click();
  await driver.findElement(By.id('BtnConfirmar')).click();

}
//filtrarIntel8gb();

//-----ingresar letras en el filtro de precios------------

async function ingresarLetrasCampoPrecio() {
  let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('http://localhost:4200/');
  await driver.findElement(By.id('BtnRec')).click();
  await driver.findElement(By.id('tipoPreMax')).sendKeys('cien');
  await driver.findElement(By.id('BtnConfirmar')).click();
}

//ingresarLetrasCampoPrecio();


//--------Colocar un precio negativo en los filtros de precio

async function precioNegativo(){
  let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('http://localhost:4200/');
  await driver.findElement(By.id('BtnRec')).click();
  await driver.findElement(By.id('tipoPreMax')).sendKeys('-50000');
  await driver.findElement(By.id('BtnConfirmar')).click();
}
//precioNegativo();

//-----utilizar los tres filtros de las recomendaciones

async function tresFiltros(){
  let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('http://localhost:4200/');
  await driver.findElement(By.id('BtnRec')).click();
  await driver.findElement(By.id('tipoIntel')).click();
  await driver.findElement(By.id('tipo8gb')).click();
  await driver.findElement(By.id('tipoPreMin')).sendKeys('2268000');
  await driver.findElement(By.id('tipoPreMax')).sendKeys('5000000');
  await driver.findElement(By.id('BtnConfirmar')).click();
}
//tresFiltros();

//----colocar solo el precio minimo-----

async function soloPrecioMinimo(){
  let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('http://localhost:4200/');
  await driver.findElement(By.id('BtnRec')).click();
  await driver.findElement(By.id('tipoIntel')).click();
  await driver.findElement(By.id('tipo8gb')).click();
  await driver.findElement(By.id('tipoPreMin')).sendKeys('2268000');
  await driver.findElement(By.id('BtnConfirmar')).click();
}
//soloPrecioMinimo();


//------------filtrar computadores con amd y 16gb de ram-----------------
async function filtrarAMD16gb() {
  let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('http://localhost:4200/');
  await driver.findElement(By.id('BtnRec')).click();
  await driver.findElement(By.id('amd')).click();
  await driver.findElement(By.id('tipo16gb')).click();
  await driver.findElement(By.id('BtnConfirmar')).click();

}
//filtrarAMD16gb();

/*---------------buscar componentes de la marca aerocool escribiendo "aerocool"-------*/

async function buscarAero(){
  let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('http://localhost:4200/');
  await driver.findElement(By.id('barraBusqueda')).sendKeys('aerocool');
  await driver.findElement(By.id('btnBuscar')).click();
}

//buscarAero();

//---------------buscar componentes de la marca samsung escribiendo "samg"-------
async function buscarSamsung(){
  let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('http://localhost:4200/');
  await driver.findElement(By.id('barraBusqueda')).sendKeys('samg');
  await driver.findElement(By.id('btnBuscar')).click();
}

//buscarSamsung();


//-------------iniciar sesion con la cuenta user1@gmail.com ---------

async function iniciarSesion1(){
  let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('http://localhost:4200/');
  await driver.findElement(By.id('ing')).click();
  await driver.findElement(By.id('textCorreo')).sendKeys('user1@gmail.com');
  await driver.findElement(By.id('textPassword')).sendKeys('1234567');
  await driver.findElement(By.id('btnIngresar')).click();
}

//---ingresar dos veces con la misma cuenta
//iniciarSesion1();
//iniciarSesion1();

//-----cerrar sesion en alguna de las sesiones
async function cerrarSesion(){
  let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('http://localhost:4200/');
  await driver.findElement(By.id('ing')).click();
  await driver.findElement(By.id('textCorreo')).sendKeys('user1@gmail.com');
  await driver.findElement(By.id('textPassword')).sendKeys('1234567');
  await driver.findElement(By.id('btnIngresar')).click();
  await driver.findElement(By.id('cerrarSesion')).click();
}

//iniciarSesion1();
//cerrarSesion();

//---------iniciar sesion con la contraseña incorrecta----
async function ingresarPassIncorrecto(){
  let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('http://localhost:4200/');
  await driver.findElement(By.id('ing')).click();
  await driver.findElement(By.id('textCorreo')).sendKeys('user1@gmail.com');
  await driver.findElement(By.id('textPassword')).sendKeys('contrasenia');
  await driver.findElement(By.id('btnIngresar')).click();
}
//ingresarPassIncorrecto();


async function calificarSinIniciar(){

  let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('http://localhost:4200/producto/CPU-1');
  await driver.manage().timeouts().implicitlyWait(10000);
  await driver.findElement(By.id('comentario')).sendKeys('un producto muy regular');
  await driver.findElement(By.id('btnComentar')).click();

}
//calificarSinIniciar();


//-----registrar sin nombre------------
async function registrarseSinNombre(){
  let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('http://localhost:4200/');
  await driver.findElement(By.id('ing')).click();
  await driver.findElement(By.id('btnRegister')).click();
  await driver.findElement(By.id('correo')).sendKeys('pruebaSel@hotmail.com');
  await driver.findElement(By.id('password')).sendKeys('contprueba');
  await driver.findElement(By.id('passwordC')).sendKeys('contprueba');
  await driver.findElement(By.id('numeroTel')).sendKeys('322135766');
  await driver.findElement(By.id('btnRegistrar')).click();
}
//registrarseSinNombre();

//---agregar una recomendación sin iniciar sesion
async function agregarSinIniciarSesion(){
  let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('http://localhost:4200/');
  await driver.manage().timeouts().implicitlyWait(5000);
  await driver.findElement(By.id('BtnRec')).click();
  await driver.findElement(By.id('agregarPc1')).click();
}

//agregarSinIniciarSesion();
