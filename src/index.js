
function component() {
  const element = document.createElement('div');

  const testImage = require('!file-loader!./images/test-image.png');
  const testIcon = require('!html-loader!image-webpack-loader!./images/test-icon.svg');
  
  console.log('> testImage', testImage);
  console.log('> testIcon', testIcon);
  
  element.innerHTML = `
    image: ${testImage.default}
    <br>
    <br>
    icon: ${testIcon.default}
  `;

  return element;
}

document.body.appendChild(component());
