//alert("Hellow");

var win = Ti.UI.currentWindow;
var billName = "";
/*
var pag_senador = Ti.UI.createWindow({
  backgroundColor: 'white',
  exitOnClose: true,
  fullscreen: false,
  layout: 'vertical',
  title: 'Senador Info'
});
*/
win.backgroundColor = 'white';
win.exitOnClose = true;
win.fullscreen = false;
win.layout = 'vertical';
//win.title = 'Senador Info';

var pag_pregunta = Titanium.UI.createWindow({  
    title:'<b>Preguntas al senador</b>',
    barColor:'#696969',
    backgroundColor:'#fff'
});

var nombre_senador = Ti.UI.createLabel({
  color: '#900',
  font: { fontSize:48 },
  text: 'Hon. Eduardo Bhatia',
  textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
  top: 10,
  left: 300,
  width: Ti.UI.SIZE, height: Ti.UI.SIZE
});

var foto_senador = Ti.UI.createImageView({
  image:'http://static.openstates.org/photos/small/PRL000008.jpg',
  top: 100,
  left: 300
});

var banner = Ti.UI.createImageView({
  image:'http://senado.pr.gov/SiteCollectionImages/template/top2013_01.png',
  top: 0,
  //width: '100%'
});
     
      
var info_senador = Ti.UI.createLabel({
  color:'black',
  text: '<b><u>Información Senador:</u></b>\nOFICINA DEL CAPITOLIO:\n none\n Phone: 787-724-2030 EXT: 3031, 3032, 3033\nEmail: ebhatia@senado.pr.gov',
  textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  top: 50,
  left: 500,
  width: 300, height: 200
});

var upcoming_bills = Ti.UI.createLabel({
  //color:'blue',
  text: '<b><u>Proyectos de leyes pendientes:</u></b>',
  textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
  top: 230,
  left: 250,
  width: 300, height: 200
});

var info_bill = Ti.UI.createLabel({
  //color:'blue',
  text: 'Para enmendar el Artículo 12 del Plan de Reorganización Número 2 del Departamento de Corrección y Rehabilitación a los fines de extender la aplicación de las bonificaciones por estudio y trabajo a los convictos y sentenciados bajo el Código Penal vigente al momento de los hechos; enmendar el Artículo 16 para establecer las personas que serán elegibles a programas de desvío del Departamento de Corrección y para otros fines.',
  textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  font: {fontSize:14, fontWeight:'bold'},
  top: 405,
  left: 320,
  width: 300, height: 200
});

var sponsored_bills = Ti.UI.createLabel({
  //color:'blue',
  text: '<b>Proyectos de leyes</b>',
  textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
  top: 500,
  right: 700,
  width: 300, height: 200
});

var bill = Ti.UI.createButton({
  color:'blue',
  title: 'PS 948',
  textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
  top: 350,
  left: 308,
  width: 100, height: 50
});

bill.addEventListener('click',function(e){
	
   billName = bill.title;
   //pag_pregunta.add(billName); 
   pag_pregunta.add(banner);
   pag_pregunta.add(yes_checkbox);
   pag_pregunta.add(no_checkbox);
   pag_pregunta.add(textArea);
   pag_pregunta.add(someter);
   pag_pregunta.open();
	
});

var button = Titanium.UI.createButton({
   title: 'Preguntame',
   top: 240,
   width: 100,
   height: 50,
   left: 500
});

var scrollView = Ti.UI.createScrollView({
  contentWidth: 'auto',
  contentHeight: 'auto',
  showVerticalScrollIndicator: true,
  showHorizontalScrollIndicator: true,
  height: '100%',
  width: '100%'
});
 
var view = Ti.UI.createView({
  //backgroundColor:'#336699',
  borderRadius: 10,
  top: 'auto',
  height: 'auto',
  width: 'auto'
});

// Creating two checkBoxes
var yes_checkbox= Ti.UI.createButton({
    title: 'A favor',
    width: 80,
    height: 30,
    top:330,
  // right:600,
    borderColor: '#666',
    borderWidth: 2,
    borderRadius: 3,
    backgroundColor: '#aaa',
    backgroundImage: 'none',
    color: '#fff',
    font:{fontSize: 25, fontWeight: 'bold'},
    value: false //value is a custom property in this casehere.
});
 
//Attach some simple on/off actions
yes_checkbox.on = function() {
    this.backgroundColor = '#007690';
    this.title='\u2713';
    this.value = true;
};
 
yes_checkbox.off = function() {
    this.backgroundColor = '#aaa';
    this.title='A favor';
    this.value = false;
};

var no_checkbox = Ti.UI.createButton({
    title: 'En contra',
    width: 80,
    height: 30,
    top:400,
   // right:600,
    borderColor: '#666',
    borderWidth: 2,
    borderRadius: 3,
    backgroundColor: '#aaa',
    backgroundImage: 'none',
    color: '#fff',
    font:{fontSize: 25, fontWeight: 'bold'},
    value: false //value is a custom property in this casehere.
});
 
//Attach some simple on/off actions
no_checkbox.on = function() {
    this.backgroundColor = '#007690';
    this.title='\u2713';
    this.value = true;
};
 
no_checkbox.off = function() {
    this.backgroundColor = '#aaa';
    this.title='En contra';
    this.value = false;
};
 
no_checkbox.addEventListener('click', function(i) {
    if(false == i.source.value) {
        i.source.on();
        yes_checkbox.off();
    } else {
        i.source.off();
    }
});

yes_checkbox.addEventListener('click', function(e) {
    if(false == e.source.value) {
        e.source.on();
        no_checkbox.off();
    } else {
        e.source.off();
    }
});

var textArea = Ti.UI.createTextArea({
  borderWidth: 4,
  borderColor: '#000000',
  borderRadius: 5,
  color: '#888',
  font: {fontSize:20, fontWeight:'bold'},
  keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
  returnKeyType: Ti.UI.RETURNKEY_GO,
  textAlign: 'left',
  value: 'Escriba su pregunta...',
  top: 120,
  width: 500, height : 200
});

textArea.addEventListener('click',function(e)
{
   //alert(textArea.value);
   if (textArea.value == 'Escriba su pregunta...'){
    textArea.value = "",
    textArea.color='#000000'; 
   }
   
});


var someter = Titanium.UI.createButton({
   title: 'Someter información',
   width: 200,
   height: 30,
   bottom:20
});

someter.addEventListener('click',function(e)
{
   
   //alert(textArea.value);
   // EMAIL DIALOG
   var emailDialog = Ti.UI.createEmailDialog();
   emailDialog.subject = billName;
   emailDialog.toRecipients = ['ebhatia@senado.pr.gov'];
   emailDialog.messageBody = textArea.value;
   //var f = Ti.Filesystem.getFile('cricket.wav');
   //emailDialog.addAttachment(f);
   emailDialog.open();
});

// BOTON DE PREGUNTA
button.addEventListener('click',function(e)
{
   pag_pregunta.add(banner);
   //pag_pregunta.add(yes_checkbox);
   //pag_pregunta.add(no_checkbox);
   pag_pregunta.add(textArea);
   pag_pregunta.add(someter);
   billName = 'Pregunta General';
   //pag_pregunta.add(billName); 
   pag_pregunta.open();
});


scrollView.add(view);

scrollView.add(nombre_senador);
scrollView.add(foto_senador);
scrollView.add(info_senador);
scrollView.add(button);
scrollView.add(upcoming_bills);
scrollView.add(bill);
scrollView.add(info_bill);
//scrollView.add(sponsored_bills);
win.add(banner);
win.add(scrollView);
win.open();