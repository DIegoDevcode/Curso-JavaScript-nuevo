const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let operationSucces = true;
    },) 
    if (operationSucces) {
      resolve('Operation success');
    } else {
      reject('Operation failed');
    } 2000;
});