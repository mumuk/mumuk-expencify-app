const promise = new Promise((res, rej) => {
  setTimeout(() => {
    res('This my resolve')
  }, 1500);

});

promise.then((data) => {
  console.log(data);
});