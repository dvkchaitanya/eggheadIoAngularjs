angular.module('invoice1',[])
.controller('InvoiceController',function(){
	this.qty=1;
	this.price=2;
	this.inCurr="EUR";
	this.currencies = ["USD","EUR","IND" ];
	this.usdToForeignCurrency = {
		USD:1,
EUR: 0.74,
IND: 62.04
	}
	this.total=function total(outCurr){
		return this.convertToForeignCurrency(this.qty * this.price,this.inCurr,outCurr);
	};
	this.convertToForeignCurrency = function convertToForeignCurrency(quantity,inCurr,outCurr){
		return quantity * this.usdToForeignCurrency[outCurr]/this.usdToForeignCurrency[inCurr];
	}
});

