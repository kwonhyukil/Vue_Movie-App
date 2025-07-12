// function a() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("a");
//       resolve();
//     }, 1000);
//   });
// }
// function b() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("b");
//       resolve();
//     }, 1000);
//   });
// }
// function c() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("c");
//       resolve();
//     }, 1000);
//   });
// }
// function d() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("d");
//       resolve();
//     }, 1000);
//   });
// }
// function test() {
//   a()
//     .then(() => b())
//     .then(() => c())
//     .then(() => d())
//     .then(() => {
//       console.log("Done!");
//     });
// }
// test();

// function a(number) {
//   return new Promise((resolve, reject) => {
//     if (number > 4) {
//       reject(); // 거부
//       return;
//     }
//     setTimeout(() => {
//       console.log("a");
//       resolve(); // 이행
//     }, 1000);
//   });
// }
// async function test() {
//   //   a(7)
//   //     .then(() => {
//   //       console.log("Resolve!");
//   //     })
//   //     .catch(() => {
//   //       console.log("Reject!");
//   //     })
//   //     .finally(() => {
//   //       console.log("Finally!");
//   //     });
//   try {
//     await a(8);
//     console.log("Resolve");
//   } catch (error) {
//     console.log("Reject!");
//   } finally {
//     console.log("Done!");
//   }
// }
// test();

function fetchMovies(title) {
  // 대기(pending) : 이행하거나 거부되지 않은 초기 상태.
  const OMDB_API_KEY = "7035c60c1";
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(
        `https://omdbapi.com?apikey=${OMDB_API_KEY}&s=${title}`
      );
      // 이행(fulfilled): 연산이 성공적으로 완료됨.
      resolve(res);
    } catch (error) {
      console.log(error);
      // 거부(rejected) : 연산이 실패함
      reject("HEROPY?!");
    }
    // console.log(res);
  });
}

async function test() {
  try {
    const res = await fetchMovies("frozen");
    console.log(res);
  } catch (heropy) {
    console.log(heropy);
  }
}

test();

function hello() {
  fetchMovies("jobs")
    .then((res) => console.log(res))
    .catch((heropy) => {
      console.log(heropy);
    });
}
hello();
