// Based on https://www.codebyamir.com/blog/populate-a-select-dropdown-list-with-json

let dropdown = document.getElementById('name');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = '';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = 'https://api.punkapi.com/v2/beers';

fetch(url, {
    method: 'GET'
  })
  .then(res => res.json())
  .then(jsonData => {
    let option;
    let temp = [];
    for (let i = 0; i < jsonData.length; i++) {
      if (!(temp.includes(jsonData[i].LCD_Name))){
        option = document.createElement('option');
        option.text = jsonData[i].LCD_Name;
        dropdown.add(option);
        temp.push(jsonData[i].LCD_Name);
      }
    }
    console.log('From fill-dropdown: ', temp);
  })
  .catch(function(err) {
    console.log('Fetch Error -', err);
  });
