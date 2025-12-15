import { exData } from '../data/my-extension-data.js';

const sections_Wrapper = document.getElementById('sections_Wrapper');
console.log('JavaScrip connected');
console.log(exData);
console.log(sections_Wrapper);

// Now i will try to render function

function renderEx() {
    const cardsArray = exData.map((singleEx, index) => {
        const   { exName, exSummary } = singleEx;

        // now i will build image path
        const imageFileNames = [
  'logo-devlens.svg',
  'logo-style-spy.svg',
  'logo-speed-boost.svg',
  'logo-json-wizard.svg',
  'logo-tab-master-pro.svg',
  'logo-viewport-buddy.svg',
  'logo-markup-notes.svg',
  'logo-grid-guides.svg',
  'logo-palette-picker.svg',
  'logo-link-checker.svg',
  'logo-dom-snapshot.svg',
  'logo-console-plus.svg',
];

    const imageUrl = `assets/images/${imageFileNames[index]}`;

   /* return '
    <section class="section4">
        <div class="text-image1">
            <img src="${imageUrl}" alt = "${exName} image" class="img">
        <p class="p1">
            <span class="text1"> ${exName}</span><br>
            ${exSummary}
        </p>
        </div>
        <div class="container2">
          <section class="box box3-1">
            <h3>Remove</h3>
          </section>
        </div>
    </section>
    ';
    });
}*/
return `
      <section class="section4">
    <div class="text-image1">
      <img src="${imageUrl}" alt="${exName} image" class="img">
      <p class="p1">
        <span class="text1">${exName}</span><br>
        ${exSummary}
      </p>
    </div>
    <div class="container2">
      <section class="box box3-1">
        <h3>Remove</h3>
      </section>
    </div>
  </section>

    `;
  });
  sections_Wrapper.innerHTML = cardsArray.join('');

}
// Now we call the function so it runs
renderEx();