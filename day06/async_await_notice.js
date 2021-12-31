async function func() {
  let data1 = await new Promise((resolve, reject) => {
    resolve(1234);
  });
  console.log(data1);
  //data1 相当于: new Promise( (resolve, reject) => {resolve(123)} )

  return data1;
}
let ret = func();

console.log(ret);
