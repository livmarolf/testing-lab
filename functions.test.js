// const { TestWatcher } = require('jest')
const {returnTwo, greeting, add, subtract, divide, multiply} = require('./functions')

test('Should return 2', () => {
    expect(returnTwo()).toEqual(2)
})

test('Should return Hello, James.', () => {
    expect(greeting('James')).toEqual('Hello, James.')

    expect(greeting('Jill')).toEqual('Hello, Jill.')
})

describe('Math functions', () => {
    test('Should return sum', () => {
        expect(add(1, 2)).toEqual(3)
        
        expect(add(5, 9)).toEqual(14)
    })

    test('Should return product', () => {
        expect(multiply(2, 4)).toEqual(8)
    })

    test('Should return quotient', () => {
        expect(divide(6, 2)).toEqual(3)
    })

    test('Should return difference', () => {
        expect(subtract(8, 4)).toEqual(4)
    })

})