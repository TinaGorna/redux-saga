function* someGenerator() {
    yield 1;
    yield 3;
    yield 4;
    yield 5;
}
const generator = someGenerator();

console.log(generator.next()) //1
console.log(generator.next()) //3
console.log(generator.next()) //4
console.log(generator.next()) //5
console.log(generator.next()) //undefined