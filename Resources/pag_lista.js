
// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#FFF');

var win = Ti.UI.currentWindow;

/*
// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var pag_lista = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});

*/
var senadores = [
  {
    "Nombre Completo":"HON. EDUARDO BHATIA GAUTIER",
    "Partido Político":"Partido Popular Democrático",
    "Teléfonos":"787-724-2030 EXT: 3031, 3032, 3033",
    "Correo Electrónico":"ebhatia@senado.pr.gov"
  },
  {
    "Nombre Completo":"HON. JOSE L. DALMAU SANTIAGO",
    "Partido Político":"Partido Popular Democrático",
    "Teléfonos":"787-724-2030 EXT: 2356, 2357, 2359",
    "Correo Electrónico":"jldalmau@senado.pr.gov"
  },
  {
    "Nombre Completo":"HON. ANIBAL J. TORRES TORRES",
    "Partido Político":"Partido Popular Democrático",
    "Teléfonos":"787-724-2030 EXT: 2100, 2101",
    "Correo Electrónico":"ajtorres@senado.pr.gov"
  },
  {
    "Nombre Completo":"HON. ROSSANA LOPEZ LEON",
    "Partido Político":"Partido Popular Democrático",
    "Teléfonos":"787-724-2030 EXT: 1020, 1021,1022",
    "Correo Electrónico":"rolopez@senado.pr.gov"
  },
  {
    "Nombre Completo":"HON. ANTONIO J. FAS ALZAMORA",
    "Partido Político":"Partido Popular Democrático",
    "Teléfonos":"787-724-2030 EXT: 2022, 2454, 2734",
    "Correo Electrónico":"afas@senado.pr.gov"
  },
  {
    "Nombre Completo":"HON. MARIA T. GONZALEZ LOPEZ",
    "Partido Político":"Partido Popular Democrático",
    "Teléfonos":"787-724-2030 EXT: 2682, 2683, 2684 ",
    "Correo Electrónico":"mgonzalez@senado.pr.gov"
  },
  {
    "Nombre Completo":"HON. JOSE R. NADAL POWER",
    "Partido Político":"Partido Popular Democrático",
    "Teléfonos":"787-724-2030 EXT: 2000, 2396, 2877",
    "Correo Electrónico":"jnadal@senado.pr.gov"
  },
  {
    "Nombre Completo":"HON. RAMON L. NIEVES PEREZ",
    "Partido Político":"Partido Popular Democrático",
    "Teléfonos":"787-724-2030 EXT: 2207, 2017",
    "Correo Electrónico":"rnieves@senado.pr.gov"
  },
  {
    "Nombre Completo":"HON. MIGUEL A. PEREIRA CASTILLO",
    "Partido Político":"Partido Popular Democrático",
    "Teléfonos":"787-724-2030 EXT: 2504, 2238",
    "Correo Electrónico":"mpereira@senado.pr.gov"
  },
  {
    "Nombre Completo":"HON. LUIS D. RIVERA FILOMENO",
    "Partido Político":"Partido Popular Democrático",
    "Teléfonos":"787-724-2030 EXT. 2928, 2929, 2931",
    "Correo Electrónico":"ldrivera@senado.pr.gov"
  },
  {
    "Nombre Completo":"HON. PEDRO A. RODRIGUEZ GONZALEZ",
    "Partido Político":"Partido Popular Democrático",
    "Teléfonos":"787-724-2030 EXT: 2352, 2355, 2366",
    "Correo Electrónico":"prodriguez@senado.pr.gov"
  },
  {
    "Nombre Completo":"HON. ANGEL M. RODRIGUEZ OTERO",
    "Partido Político":"Partido Popular Democrático",
    "Teléfonos":"787-724-2030 EXT. 2752, 2757",
    "Correo Electrónico":"anrodriguez@senado.pr.gov"
  },
  {
    "Nombre Completo":"HON. GILBERTO RODRIGUEZ VALLE",
    "Partido Político":"Partido Popular Democrático",
    "Teléfonos":"787-724-2030 EXT: 2390, 2392",
    "Correo Electrónico":"girodriguez@senado.pr.gov"
  },
  {
    "Nombre Completo":"HON. ANGEL R. ROSA RODRIGUEZ",
    "Partido Político":"Partido Popular Democrático",
    "Teléfonos":"787-724-2030 EXT: 2006, 2400, 2401",
    "Correo Electrónico":"arosa@senado.pr.gov"
  },
  {
    "Nombre Completo":"HON. RAMON RUIZ NIEVES",
    "Partido Político":"Partido Popular Democrático",
    "Teléfonos":"787-724-2030 EXT: 2336, 2955,  2958",
    "Correo Electrónico":"rruiz@senado.pr.gov"
  },
  {
    "Nombre Completo":"HON. JORGE I. SUAREZ CACERES",
    "Partido Político":"Partido Popular Democrático",
    "Teléfonos":"787-724-2030 EXT: 2240, 2242,  2244",
    "Correo Electrónico":"jsuarez@senado.pr.gov"
  },
  {
    "Nombre Completo":"HON. CIRILO TIRADO RIVERA",
    "Partido Político":"Partido Popular Democrático",
    "Teléfonos":"787-724-2030 EXT: 2226, 2234",
    "Correo Electrónico":"ctirado@senado.pr.gov"
  },
  {
    "Nombre Completo":"HON. MARTIN VARGAS MORALES",
    "Partido Político":"Partido Popular Democrático",
    "Teléfonos":"787-724-2030 EXT: 2120, 2121",
    "Correo Electrónico":"mvargas@senado.pr.gov"
  }
];

var tableData = [];

var tableView = Titanium.UI.createTableView({
	top: '30%',
	left: '32%',
	right: '25%',
	bottom: '10%',
	backgroundColor: '#FFF'
});

for(var c = 0; c < senadores.length; c++) {
	var tableRow = Ti.UI.createTableViewRow( {
		title: senadores[c]["Nombre Completo"],
		partido: senadores[c]["Partido Político"],
		phone_no: senadores[c]["Teléfonos"],
		email: senadores[c]["Correo Electrónico"]
	});
	tableData.push(tableRow);
}

tableView.setData(tableData);

tableView.addEventListener('click',function(e)
{
	if(e.rowData.title)
	{
		var newWin = null;
		
		//alert("bong");
		
		newWin = Titanium.UI.createWindow({
			title: e.rowData.title,
			email: e.rowData.email,
			url:'pag_senador.js'
			
			
		});
		
		win.open(newWin,{animated:true});
	}
	
});

var banner = Ti.UI.createImageView({
  image:'http://senado.pr.gov/SiteCollectionImages/template/top2013_01.png',
  top: 0,
  //width: '100%'
});

var senator_title = Ti.UI.createLabel({
  //color:'blue',
  text: '<b><u>Lista de Senadores:</u></b>',
  textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
  font: {fontSize:20, fontWeight:'bold'},
  top: '20%',
  //right: 770,
  //width: 300, height: 200
});


win.add(banner);
win.add(tableView);
win.add(senator_title);

//pag_lista.open();
