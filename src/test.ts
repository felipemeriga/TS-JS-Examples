// // Inline IF
//
// const vr1 = true
// const vr2 = false
//
// const vr3 = var1 && var2
//
//
// // List manipulation
//
//
// interface _Iterable extends Iterable<{}> {
//     lenght: number
// }
//
// class _Array<T> extends Array<T> {
//     static range(from: number, to: number, step: number): number[] {
//         return Array.from(
//             <_Iterable>{ length: Math.floor((to - from) / step) + 1 },
//             (v, k) => from + k * step
//         )
//     }
//
// }
//
// const list1 = _Array.range(0, 10, 1)
//
// const list2 = Array.from([1, 2, 3, 4, 5, 6, 7], (v,k) => k + 1).filter(((value, index) => value > 3))
//
//
// class Counter implements Iterator<number> {
//
//     private counter = 0;
//
//     constructor(public myList: number[]) {
//     }
//
//     next(): IteratorResult<number> {
//         const len = this.myList.length
//
//         if (this.counter + 1 > len) {
//             return {
//                 done: true,
//                 value: null
//             }
//         }
//         return {
//             done: false,
//             value: this.myList[this.counter++]
//         }
//     }
// }
//
// // Substring and reversing arrays
// const string1 = 'This is my string'
// const invertedString = string1.split('').reverse().join('')
// const reversedArray = [...list1].reverse()
//
// const stringWithNumbers = 'This2 is3 my9 str8ing'
// const stringWithoutNumbers = stringWithNumbers.split('').filter(value => isNaN(Number(value))).join('')
//
// // Different Types of For
// const list3 = _Array.range(0, 20, 1)
//
// for(let i = 0; i++; i < list3.length) {
//     console.log(list3[i])
// }
//
// for(let i in list3) {
//     console.log(forArray[i])
// }
//
// for(let i of list3) {
//     console.log(i)
// }
//
//




