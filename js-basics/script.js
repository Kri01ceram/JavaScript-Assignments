// q1

// function getOutput(data) {
//     const result = {};
//     for(let category in data) {
//        const len = data[category].length;
//        for(let i=0; i<len; i++) {
//            if(!result[category]) {
//                result[category] = 0;
//            }   
//            result[category] += data[category][i];
//        }
//     }
//     return result;
// }
// const input = { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] };
// const ans = getOutput(input);
// console.log(ans)

// q2
// const input = ["apple", "banana", "apple", "orange", "banana", "apple"];

// function getFrequency(arr) {
//     const frequency = {};
//     for (let i = 0; i < arr.length; i++) {
//         const item = arr[i];
//         if (frequency[item]) {
//             frequency[item] += 1;
//         } else {
//             frequency[item] = 1;
//         }
//     }
//     return frequency;   
// }
// const ans = getFrequency(input);
// console.log(ans);

// q3
// const input = { a: "x", b: "y", c: "z" };
// function swapKeyValue(obj) {
//     const swapper = {}
//     for(let key in obj){
//         const val = obj[key];
//         swapper[val] = key;
//     }
//     return swapper
// }
// const ans = swapKeyValue(input);
// console.log(ans);

// q4
// const input = { a: 10, b: 50, c: 20 }
// function getMax(input){
//         let Largest = -Infinity;
//         for(let key in input){
//             if(input[key] > Largest){
//                 Largest = input[key];
//             }
//         }
//         return Largest;
//     }
// const ans = getMax(input);
// console.log(ans);

// q5
// const input = { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }
// function flattenObject(obj){ 
//      const result = [];
//         for(let key in obj){
//             const arr = obj[key];
//             for(let i=0; i<arr.length; i++){
//                 result.push(arr[i]);
//             }
//         }
//         return result;
// }
// const ans = flattenObject(input);   
// console.log(ans);

// q6
// const input = [
//   { name: "A", city: "Delhi" },
//   { name: "B", city: "Mumbai" },
//   { name: "C", city: "Delhi" }
// ]
// function groupByCity(arr){
//     const result = {}
//     for(let key in arr){
//         const p = arr[key]
//         const city = p.city
//         const name = p.name
//         if(!result[city]){
//             result[city] = []
//         }
//         result[city].push(name)
//     }
//     return result;
// }
// const ans = groupByCity(input);
// console.log(ans);

// q7
// const input = { a: 20, b: 60, c: 40, d: 90 }
// function printGRValue(data,threshold){
//     const result = {}
//     for(let key in data){
//         if(data[key] > threshold){
//             result[key] = data[key];
//         }
//     }
//     return result;
// }
// const ans = printGRValue(input,50);
// console.log(ans);

// q8
// const input = { A: [80, 90], B: [70, 75, 85] }
// function highestAverage(data){
//     let highestAvg = -Infinity;
//     let topCategory = "";
//     for(let category in data){
//         const scores = data[category];
//         const total = scores.reduce((acc, curr) => acc + curr, 0);
//         const avg = total / scores.length;
//         if(avg > highestAvg){
//             highestAvg = avg;
//             topCategory = category;
//         }
//     }
//     return topCategory; 
// }
// const ans = highestAverage(input);
// console.log(ans);

// // q9
// const input = { x: [1,2,3], y: [2,3,4], z: [4,5] }
// function UniqueValues(data){
//     const uniqueSet = new Set();
//     for(let key in data){
//         const values = data[key];
//         for(let i=0; i<values.length; i++){
//             uniqueSet.add(values[i]);
//         }
//     }
//     return Array.from(uniqueSet);
// }
// const ans = UniqueValues(input);
// console.log(ans);

// q10 //++++++
// const input = { name: "Rahul", age: 23, city: "Noida" } 
// const input2 = ["name","city"]
// function filterObject(data, keys){
//     const result = {};
//     for(let i=0; i<keys.length; i++){
//         const key = keys[i];
//         if(data.hasOwnProperty(key)){
//             result[key] = data[key];
//         }
//     }
//     return result;
// }
// const ans = filterObject(input, input2);
// console.log(ans);