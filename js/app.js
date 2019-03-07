'use strict';

var allImg = [];
var votes = [];
var numberOfClicks = [];

var firstImg = document.getElementById('firstimage');
var secondImg = document.getElementById('secondimage');
var thirdImg = document.getElementById('thirdimage');
var resultsTable = document.getElementById('resultsTable');

function BusMallAdvertisements(product, imgpath) {
  this.product = product;
  this.imgpath = imgpath;
}