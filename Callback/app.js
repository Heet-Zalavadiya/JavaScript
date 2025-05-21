// function hello() {
//     console.log("hello");
// }

// setTimeout(hello, 2000);//timeout       



// // Asyncrous Programing

// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("hello");
// }, 1000);// timeout

// console.log("three");
// console.log("four");



// //Callback 

// function sum(a, b) {
//     console.log(a + b);
// }

// function calculator(a, b, sumCallback) {
//     sumCallback(a, b);
// }

// calculator(1, 2, sum);




// Async-Await

// async function hello(){
//     console.log("hello");
// }


function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 2000);

    });
}

async function getWeatherData() {
    await api(); // 1st call
    await api(); // 2nd call
}



// function getData(dataId, getNextData) { // 2s
//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }

function getData(dataId){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        },2000);
    });
}

async function getAllData() {
    console.log("getting data1 ....");
    await getData(1);
    console.log("getting data2 .....");
    await getData(2);
    console.log("getting data3 .....");
    await getData(3);
}


(async function () {
    console.log("getting data1 ....");
    await getData(1);
    console.log("getting data2 .....");
    await getData(2);
    console.log("getting data3 .....");
    await getData(3);
})();



// Promise Chain

// getData(1).then((res) =>{
//     console.log(res);
//     getData(2).then(() => {
//         console.log(res);
//     });
// });

// console.log("getting data 1 ..........");
// getData(1)
//     .then((res) => {
//         console.log("getting data 2 ..........");
//         return getData(2);
//     })
//     .then((res) => {
//         console.log("getting data 3 ..........");
//         return getData(3);
//     }).then((res) => {
//         console.log(res);
//     })

// // callback hell is nested callback

// getData(1, () => {
//     console.log("getting data 2 .....");
//     getData(2, () => {
//         console.log("getting data 3 .....");
//         getData(3);
//     });
// });

// //data1
// //data2
// //data3




// // promises

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     // resolve("success");
//     reject("some error occurred");
// });

// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         getTimeout(() => {
//             // console.log("data" , dataId);
//             // resolve("success");
//             reject("error");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 5000);
//     });
// }


// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         // resolve("success");
//         reject("network error");
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled",res);
// });

// promise.catch((err) =>{
//     console.log("rejected",err);
// });


// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         }, 4000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         }, 6000);
//     });
// }

// // console.log("fetching data1 .....");
// // let p1 = asyncFunc1();
// // p1.then((res) => {
// //     console.log(res);
// // });

// // console.log("fetching data2 .....");
// // let p2 = asyncFunc2();
// // p2.then((res) => {
// //     console.log(res);
// // });

// console.log("fetching data1 ......");
// let p1 = asyncFunc1();
// p1.then((res) =>{
//     console.log("fecthing data2 ......");
//     let p2 = asyncFunc2();
//     p2.then((res) =>{});
// });