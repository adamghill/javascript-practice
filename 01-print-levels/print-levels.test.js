import test from 'ava'
import printsies from './print-levels.js'


test('printsies "o" three times', t => {
    let actual = printsies("o", 3);
    const expected = "o\noo\nooo\n";

    t.assert(expected === actual);
});

test('printsies "to" four times', t => {
    let actual = printsies("to", 4);
    const expected = "to\ntoto\ntototo\ntotototo\n";

    t.assert(expected === actual);
});
