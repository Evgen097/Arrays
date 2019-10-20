/* eslint-disable */
'use strict';

const path = require('path');
const fileName = path.basename(__filename).replace('-Spec', '');

const { removeElement } = require(path.resolve(__dirname, fileName));

describe('1-remove', () => {
  const cases = [
    [ [], 1, [] ],
    [ [1, 2, 3], 2, [1, 3] ],
    [ [1, 2, 3], 4, [1, 2, 3] ],
    [ ['a', 'b', 'c'], 'a', ['b', 'c'] ]
  ];
  it('should remove element from array', () => {
    for (const item of cases){
      removeElement(item[0], item[1]);
      expect(item[0]).toEqual(item[2])
    }
  });

})









