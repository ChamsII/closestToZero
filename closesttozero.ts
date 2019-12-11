
/**
 * Closest to Zero :::
 * Return the closest number to zero
 * If the closest number in input could be either negative or positive, the function returns the positive one
 * If the input array is undefined or empty, the function returns 0
 * @param array_numbers 
 */
export const closestToZero = ( array_numbers ) => {
    return array_numbers.length == 0 ? 0 : array_numbers.reduce( ( previousValue, CurrentValue ) => {
        return ( 
            CurrentValue < Math.abs( previousValue ) ?
            Math.abs( CurrentValue ) == Math.abs( previousValue ) ?
            Math.abs( previousValue ) : CurrentValue : previousValue 
        )
    });
}


console.log( closestToZero( [8,2,3,-2] ) )
