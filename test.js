import test from 'ava';
import fn from './';

test('Two objects are the same', t => {
	t.is(fn({name: 'Dang Thanh'}, {name: 'Dang Thanh'}), true);
	t.is(fn({city: 'Ho Chi Minh', population: 8000000}, {city: 'Ho Chi Minh', population: 8000000}), true);
});

test('Two objects are the different', t => {
	t.is(fn({name: 'Dang Van Thanh'}, {name: 'Dang Thanh'}), false);
	t.is(fn({city: 'Ha Noi', population: 7500000}, {city: 'Ho Chi Minh', population: 8000000}), false);
});

test('First or second Argument is a not object', t => {
	t.is(fn(1, {age: 1}), false);
	t.is(fn({age: 25}, ['age', 25]), false);
});
