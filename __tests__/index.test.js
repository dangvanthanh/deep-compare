import deepCompare from '../'

test('Two objects are the same', () => {
  expect(deepCompare({ name: 'Dang Thanh' }, { name: 'Dang Thanh' })).toBe(true)
	expect(deepCompare({city: 'Ho Chi Minh', population: 8000000}, {city: 'Ho Chi Minh', population: 8000000})).toBe(true)
})

test('Two objects are the different', () => {
	expect(deepCompare({name: 'Dang Van Thanh'}, {name: 'Dang Thanh'})).toBe(false)
	expect(deepCompare({city: 'Ha Noi', population: 7500000}, {city: 'Ho Chi Minh', population: 8000000})).toBe(false)
})

test('First or second argument is a not object', () => {
	expect(deepCompare(1, {age: 1})).toBe(false)
	expect(deepCompare({age: 25}, ['age', 25])).toBe(false)
})
