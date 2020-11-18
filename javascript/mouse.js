// console.log('hello');
const presentation = document.querySelector('.presentation');
const text = document.querySelector('h1');
const walk = 100; // 100px

const shadow = (e) => {
  const {offsetWidth: width, offsetHeight: height} = presentation;
  let {offsetX: x, offsetY:y} = e;

  if (this != e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = (x / width * walk) - (walk / 2);
  const yWalk = (y / height * walk) - (walk / 2);

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(0,0,0,.3)
    `;
}

// presentation.addEventListener('mousemove', shadow)