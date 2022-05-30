
//event loop

 export const name = () => console.log('xyz')

const age = () => console.log(22);

const info = () => {
  console.log('info..')
  name();
  age();
}

info();

