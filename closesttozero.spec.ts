import { closestToZero } from './closesttozero';

import { expect } from 'chai';
import 'mocha';

describe('Closest To Zero function', () => {

    let closest_number_to_zero
    //let array_numbers = []
    //let array_numbers = [8,2,3,-2];
    //let array_numbers = [5,4,-9,6,-10,-1,8];
    let array_numbers = [8,5,10]
    //let array_numbers = [2, 30, 79, 100, 5, 8, 2, 800, 45, -400]

  it('should return 5', () => {
    closest_number_to_zero = closestToZero( array_numbers );
    expect(closest_number_to_zero).to.equal(5);
  });


});