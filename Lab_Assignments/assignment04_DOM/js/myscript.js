/**
 * WEB222 – Assignment 4
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name: Dongchan Oh
 *      Student ID: 128975190
 *      Date: 2020-07-16
 *
 */

// All you JavaScript code for assignment 4 should be in this file
window.onload = function () {
  // add script to make possible to include and use country date (js/a4-country-data.js)
  var addScript = document.createElement("script");
  addScript.type = "text/javascript";
  addScript.src = "js/a4-country-data.js";
  document.getElementsByTagName("head").item(0).appendChild(addScript);

  // Select subtitle to change according to menu click
  var subTitle = document.querySelector("#subtitle");

  // Select table and add <tbody></tbody> script, finally select <tbody>
  var outTable = document.querySelector("#outputTable");
  var tbodyElement = document.createElement("tbody");
  outTable.appendChild(tbodyElement);
  var tableBody = document.querySelector("#outputTable > tbody");

  /********** The Country List item **********/
  var countryList = document.getElementById("menu_1");
  countryList.addEventListener("click", listingCountry); // When click the menu, call the "listingCountry" function
  var previousClickMenu = ""; // initialize variable which stores previous clicked menu
  function listingCountry(elem) {
    elem.stopPropagation();
    elem.preventDefault();
    // Change subtitle
    subTitle.innerHTML = "List of Countries and Dependencies";
    // Change table contents if a current clicked menu is not the same as a previous clicked menu
    if (this.innerText != previousClickMenu) {
      tableBody.innerHTML = ""; // Delete all of the previous table contents
      countries.forEach(function (e) {
        printTable(elem, e); // Call printTable function to print coutry data
      });
      previousClickMenu = this.innerText; // Update varibale previouseClieckMenu to current Clicked menu
    }
  }

  /*************** The By Population, “> 100,000,000” item ***************/
  var byPopulationGraterThan = document.getElementById("menu_21");
  byPopulationGraterThan.addEventListener(
    "click",
    listingCountrybyPopulationGraterThan
  );
  function listingCountrybyPopulationGraterThan(elem) {
    elem.stopPropagation();
    elem.preventDefault();

    subTitle.innerHTML =
      "List of Countries and Dependencies - Population greater than 100 million";
    if (this.innerText != previousClickMenu) {
      tableBody.innerHTML = "";

      let filteredCountries = countries.filter(function (e) {
        return e.Population > 100000000;
      });

      filteredCountries.forEach(function (e) {
        printTable(elem, e);
      });
      previousClickMenu = this.innerText;
    }
  }

  /*************** The By Population, “1 ~ 2 million” item ***************/
  var byPopulationBetween = document.getElementById("menu_22");
  byPopulationBetween.addEventListener(
    "click",
    listingCountrybyPopulationBetween
  );
  function listingCountrybyPopulationBetween(elem) {
    elem.stopPropagation();
    elem.preventDefault();

    subTitle.innerHTML =
      "List of Countries and Dependencies - Population between 1 and 2 million";
    if (this.innerText != previousClickMenu) {
      tableBody.innerHTML = "";

      let filteredCountries = countries.filter(function (e) {
        return e.Population >= 1000000 && e.Population <= 2000000;
      });

      filteredCountries.forEach(function (e) {
        printTable(elem, e);
      });
      previousClickMenu = this.innerText;
    }
  }

  /*************** The By Area & Continent, “1 million km2, Americas” item ***************/
  var byAreaContinentAmerica = document.getElementById("menu_31");
  byAreaContinentAmerica.addEventListener(
    "click",
    listingCountrybyAreaContinentAmerica
  );
  function listingCountrybyAreaContinentAmerica(elem) {
    elem.stopPropagation();
    elem.preventDefault();

    subTitle.innerHTML =
      "List of Countries and Dependencies - Area greater than 1 million Km" +
      "2".sup() +
      ", Americas";
    if (this.innerText != previousClickMenu) {
      tableBody.innerHTML = "";

      let filteredCountries = countries.filter(function (e) {
        return e.AreaInKm2 >= 1000000 && e.Continent == "Americas";
      });

      filteredCountries.forEach(function (e) {
        printTable(elem, e);
      });
      previousClickMenu = this.innerText;
    }
  }

  /*************** The By Area & Continent, “All size, Asia” item ***************/
  var byAreaContinentAsia = document.getElementById("menu_32");
  byAreaContinentAsia.addEventListener(
    "click",
    listingCountrybyAreaContinentAsia
  );
  function listingCountrybyAreaContinentAsia(elem) {
    elem.stopPropagation();
    elem.preventDefault();

    subTitle.innerHTML =
      "List of Countries and Dependencies - All countries in Asia";

    if (this.innerText != previousClickMenu) {
      tableBody.innerHTML = "";

      let filteredCountries = countries.filter(function (e) {
        return e.Continent == "Asia";
      });

      filteredCountries.forEach(function (e) {
        printTable(elem, e);
      });

      previousClickMenu = this.innerText;
    }
  }

  /*************** The Language, ? item ***************/
  var languageCountries;
  languageCountries = document
    .getElementById("menu_41")
    .addEventListener("click", clickFunc);
  languageCountries = document
    .getElementById("menu_42")
    .addEventListener("click", clickFunc);
  languageCountries = document
    .getElementById("menu_43")
    .addEventListener("click", clickFunc);
  languageCountries = document
    .getElementById("menu_44")
    .addEventListener("click", clickFunc);
  languageCountries = document
    .getElementById("menu_45")
    .addEventListener("click", clickFunc);
  languageCountries = document
    .getElementById("menu_46")
    .addEventListener("click", clickFunc);
  languageCountries = document
    .getElementById("menu_47")
    .addEventListener("click", clickFunc);
  languageCountries = document
    .getElementById("menu_48")
    .addEventListener("click", clickFunc);

  function clickFunc() {
    if (this.innerText != previousClickMenu) {
      tableBody.innerHTML = "";
      listingCountrybyLanguage(this);
      previousClickMenu = this.innerText;
    }
  }

  function listingCountrybyLanguage(elem) {
    subTitle.innerHTML =
      "List of Countries and Dependencies - Country / Dep. Name in " +
      elem.innerText;
    countries.forEach(function (e) {
      printTable(elem, e, elem);
    });
  }

  function printTable(elem, e) {
    var countryRow = tableBody.insertRow(-1); // insert new row at the end of table

    let countryFlag = countryRow.insertCell(0); // insert flags into the first column
    var img = document.createElement("img");
    img.src = `flags/${e.Code.toLowerCase()}.png`;
    img.onload = function () {
      countryFlag.appendChild(img);
    };

    let countryCode = countryRow.insertCell(1); // insert countryCode into the second column
    countryCode.innerHTML = e.Code;

    let countryName = countryRow.insertCell(2); // insert countryName into the third column
    if (elem.id != undefined && elem.id.substr(5, 1) == 4) {
      // if the selected menu is one of Language sub-menus
      if (elem.id == "menu_43") {
        countryName.innerHTML = e.Name.Chinese;
      } else if (
        elem.innerText == document.querySelector("#menu_44").innerText
      ) {
        countryName.innerHTML = e.Name.Franch;
      } else {
        countryName.innerHTML = e.Name[elem.innerText];
      }
    } else {
      countryName.innerHTML = e.Name.English; // if the selected menu is not one of Language sub-menus
    }

    let countryContinent = countryRow.insertCell(3); // insert countryContinent into the forth column
    countryContinent.innerHTML = e.Continent;

    let countryArea = countryRow.insertCell(4); // insert countryArea into the fifth column
    countryArea.innerHTML = e.AreaInKm2;

    let countryPopulation = countryRow.insertCell(5); // insert countryPopulation into the sixth column
    countryPopulation.innerHTML = e.Population;

    let countryCapital = countryRow.insertCell(6); // insert countryCapital into the seventh column
    countryCapital.innerHTML = e.Capital;
  }
};
