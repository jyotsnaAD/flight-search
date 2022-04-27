"use strict";

function createView( divbox,innerData,outerContainer){
    console.log(JSON.stringify(innerData));
    var headerDiv = document.createElement('div');
    var titleTag = document.createElement('p');
    var departSpan = document.createElement('span');
    var returnSpan = document.createElement('span');
    if(innerData.isReturn){
        titleTag.innerHTML = innerData.originCity +'>' + innerData.destinationCity + '>' + innerData.originCity ;
        returnSpan.innerHTML = 'Return : ' + innerData.returnDate;
    }
    else{
        titleTag.innerHTML = innerData.originCity +'>' + innerData.destinationCity;
    }
    departSpan.innerHTML = 'Depart : ' + innerData.departDate;
    headerDiv.appendChild(titleTag);
    headerDiv.appendChild(departSpan);
    headerDiv.appendChild(returnSpan);
    divbox.appendChild(headerDiv);
    outerContainer.appendChild(divbox);

    /*
    var spanArray =[];
    var ptitleTag = document.createElement('p');
    ptitleTag.innerHTML= title;
    var pdescriptionTag = document.createElement('p');
    pdescriptionTag.innerHTML= description;
    for (var i=0; i<attributes.length; i++){
        spanArray[i] = "<span>" + attributes[i] + "</span>";
    }
    var attributesDiv = document.createElement('p');
    attributesDiv.innerHTML = spanArray.join("");
    divbox.appendChild(ptitleTag);
    divbox.appendChild(pdescriptionTag);
    divbox.appendChild(pdescriptionTag);
    divbox.appendChild(attributesDiv);
    outerContainer.appendChild(divbox);
    */
}
function toggleDiv(originCity, departureCity, oneWayDate, returnDate){
  console.log(arguments);
  /*
    var spanSelector = '';
    switch(parent.id.toString()){
        case "category" : 
            spanSelector = 0;
            break;
        case "price" : 
            spanSelector = 1;
            break;
        case "departureDate" : 
            spanSelector = 2;
            break;
        case "returnDate" : 
            spanSelector = 3;
            break;
        case "passengerCount" : 
            spanSelector = 4;
            break;									
    }
    var divs= document.getElementById('right-side').getElementsByTagName('div');
    for (var i = 0, len = divs.length; i < len; ++i) {
        if (document.getElementById('right-side').getElementsByTagName('div')[i].getElementsByTagName('p')[2].getElementsByTagName('span')[spanSelector].innerHTML.includes(value)){
               document.getElementById('right-side').getElementsByTagName('div')[i].setAttribute( "class", "showClass" );
        }
        else{
            document.getElementById('right-side').getElementsByTagName('div')[i].setAttribute( "class", "hideClass" );
        }
    }
    */
}
function getData() {
    var dataSet = [
    {
        "originCity" :"Pune",
        "destinationCity":"Delhi",
        "isReturn":true,
        "departDate":"1st Jan 2012",
        "returnDate":"10 Jan 2012",
        "amount":"Rs.9,500.00",
        "oneWayCode":"AI-202",
        "returnWayCode":"AI-203",
        "originCityCode":"PNQ",
        "destinationCityCode":"DEL",
        "onewayDepartTime":"10.00 AM",
        "onewayArriveTime":"12.00 PM",
        "returnDepartTime":"08.00 PM",
        "returnArrivalTime":"11.00 PM"
    },
    {
        "originCity" :"Pune",
        "destinationCity":"Delhi",
        "isReturn":true,
        "departDate":"1st Jan 2012",
        "returnDate":"10 Jan 2012",
        "amount":"Rs.9,500.00",
        "oneWayCode":"AI-202",
        "returnWayCode":"AI-203",
        "originCityCode":"PNQ",
        "destinationCityCode":"DEL",
        "onewayDepartTime":"10.00 AM",
        "onewayArriveTime":"12.00 PM",
        "returnDepartTime":"08.00 PM",
        "returnArrivalTime":"11.00 PM"
    },
    {
        "originCity" :"Pune",
        "destinationCity":"Delhi",
        "isReturn":true,
        "departDate":"1st Jan 2012",
        "returnDate":"10 Jan 2012",
        "amount":"Rs.9,500.00",
        "oneWayCode":"AI-202",
        "returnWayCode":"AI-203",
        "originCityCode":"PNQ",
        "destinationCityCode":"DEL",
        "onewayDepartTime":"10.00 AM",
        "onewayArriveTime":"12.00 PM",
        "returnDepartTime":"08.00 PM",
        "returnArrivalTime":"11.00 PM"
    },
    {
        "originCity" :"Pune",
        "destinationCity":"Delhi",
        "isReturn":true,
        "departDate":"1st Jan 2012",
        "returnDate":"10 Jan 2012",
        "amount":"Rs.9,500.00",
        "oneWayCode":"AI-202",
        "returnWayCode":"AI-203",
        "originCityCode":"PNQ",
        "destinationCityCode":"DEL",
        "onewayDepartTime":"10.00 AM",
        "onewayArriveTime":"12.00 PM",
        "returnDepartTime":"08.00 PM",
        "returnArrivalTime":"11.00 PM"
    },
    {
        "originCity" :"Pune",
        "destinationCity":"Delhi",
        "isReturn":true,
        "departDate":"1st Jan 2012",
        "returnDate":"10 Jan 2012",
        "amount":"Rs.9,500.00",
        "oneWayCode":"AI-202",
        "returnWayCode":"AI-203",
        "originCityCode":"PNQ",
        "destinationCityCode":"DEL",
        "onewayDepartTime":"10.00 AM",
        "onewayArriveTime":"12.00 PM",
        "returnDepartTime":"08.00 PM",
        "returnArrivalTime":"11.00 PM"
    },
    {
        "originCity" :"Pune",
        "destinationCity":"Delhi",
        "isReturn":false,
        "departDate":"1st Jan 2012",
        "amount":"Rs.9,500.00",
        "oneWayCode":"AI-202",
        "originCityCode":"PNQ",
        "destinationCityCode":"DEL",
        "onewayDepartTime":"10.00 AM",
        "onewayArriveTime":"12.00 PM",
    },
    { 
        "originCity" :"Pune",
        "destinationCity":"Delhi",
        "isReturn":true,
        "departDate":"1st Jan 2012",
        "returnDate":"10 Jan 2012",
        "amount":"Rs.9,500.00",
        "oneWayCode":"AI-202",
        "returnWayCode":"AI-203",
        "originCityCode":"PNQ",
        "destinationCityCode":"DEL",
        "onewayDepartTime":"10.00 AM",
        "onewayArriveTime":"12.00 PM",
        "returnDepartTime":"08.00 PM",
        "returnArrivalTime":"11.00 PM"
    },
    {
        "originCity" :"Pune",
        "destinationCity":"Delhi",
        "isReturn":true,
        "departDate":"1st Jan 2012",
        "returnDate":"10 Jan 2012",
        "amount":"Rs.9,500.00",
        "oneWayCode":"AI-202",
        "returnWayCode":"AI-203",
        "originCityCode":"PNQ",
        "destinationCityCode":"DEL",
        "onewayDepartTime":"10.00 AM",
        "onewayArriveTime":"12.00 PM",
        "returnDepartTime":"08.00 PM",
        "returnArrivalTime":"11.00 PM"
    },
    {
        "originCity" :"Pune",
        "destinationCity":"Delhi",
        "isReturn":true,
        "departDate":"1st Jan 2012",
        "returnDate":"10 Jan 2012",
        "amount":"Rs.9,500.00",
        "oneWayCode":"AI-202",
        "returnWayCode":"AI-203",
        "originCityCode":"PNQ",
        "destinationCityCode":"DEL",
        "onewayDepartTime":"10.00 AM",
        "onewayArriveTime":"12.00 PM",
        "returnDepartTime":"08.00 PM",
        "returnArrivalTime":"11.00 PM"
    },
    {
        "originCity" :"Pune",
        "destinationCity":"Delhi",
        "isReturn":true,
        "departDate":"1st Jan 2012",
        "returnDate":"10 Jan 2012",
        "amount":"Rs.9,500.00",
        "oneWayCode":"AI-202",
        "returnWayCode":"AI-203",
        "originCityCode":"PNQ",
        "destinationCityCode":"DEL",
        "onewayDepartTime":"10.00 AM",
        "onewayArriveTime":"12.00 PM",
        "returnDepartTime":"08.00 PM",
        "returnArrivalTime":"11.00 PM"
    }];
    return dataSet;
}
function getOptions(dataSet, searchList){

    //callfillterDataSet(dataSet,"category", "category");
    //callfillterDataSet(dataSet,"price", "price");
    //callfillterDataSet(dataSet,"departureDate", "departureDate");
    //callfillterDataSet(dataSet,"returnDate", "returnDate");
    //callfillterDataSet(dataSet,"passengerCount", "passengerCount");
    for (var i=0; i < dataSet.length ; i++){
        var innerData;
        var innerDiv = document.createElement('div');
        innerDiv.id = 'block' + i;
        innerDiv.className = 'block' + i;
        innerData ={
            'originCity': dataSet[i]['originCity'],
            'destinationCity': dataSet[i]['destinationCity'],
            'isReturn': dataSet[i]['isReturn'],
            'departDate': dataSet[i]['departDate'],
            'returnDate': dataSet[i]['returnDate'],
            'amount': dataSet[i]['amount'],
            'oneWayCode': dataSet[i]['oneWayCode'],
            'returnWayCode': dataSet[i]['returnWayCode'],
            'originCityCode': dataSet[i]['originCityCode'],
            'destinationCityCode': dataSet[i]['destinationCityCode'],
            'onewayDepartTime': dataSet[i]['onewayDepartTime'],
            'onewayArriveTime': dataSet[i]['onewayArriveTime'],
            'returnDepartTime': dataSet[i]['returnDepartTime'],
            'returnArrivalTime': dataSet[i]['returnArrivalTime']
        }
     
           createView(innerDiv,innerData,document.getElementById('right-side') );
        }
        /*
    function callfillterDataSet(arr, prop, firstOption){
        var resultData = nonDuplicate(arr,prop);
        for (var i=0; i < resultData.length;++i){   
            addOption(document.getElementById(prop), resultData[i][prop], resultData[i][prop], firstOption);
        }
    }
    */
    /*
    function nonDuplicate(arr, prop){
          var obj = {};
          for ( var i = 0, len = arr.length; i < len; i++ ){
            if(!obj[arr[i][prop]]) obj[arr[i][prop]] = arr[i];
          }
          var newArr = [];
          for ( var key in obj ) newArr.push(obj[key]);
          return newArr;
    }	
    */	
}
function getSliderRange(){
    var rangeslider = window.document.getElementById("sliderRange");
    var output = document.getElementById("demo");
    output.innerHTML = rangeslider.value;
    rangeslider.oninput = function() {
      output.innerHTML = this.value;
    }
}
function showSearchList(event){
    let originCityName = event.target.parentElement.children[1].children[0].value;
    let destinationCityName = event.target.parentElement.children[2].children[0].value;
    let departDate = event.target.parentElement.children[3].children[0].value;
    let arrivalDate = event.target.parentElement.children[4].children[0].value;
    toggleDiv(originCityName,destinationCityName,departDate,arrivalDate);
//getOptions(getData());

}


