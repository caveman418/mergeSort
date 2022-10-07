const result = document.querySelector('.result');

const inputArr = [8, 9, 12, 12, 33, 35, 39, 45, 50, 9, 59, 61, 65, 66, 68, 69, 12, 80, 83, 99];

function mergeSort(input) {
    let arr1, arr2;

    if (input.length < 2) { //base case
        return input;
    } else {
        //first, split array in half and recursively call each half
        const half = Math.ceil(input.length/2);

        arr1 = mergeSort(input.slice(0, half));
        arr2 = mergeSort(input.slice(half));
    }

    //when arr1 and arr2 are returned from mergeSort(), merge them back together
    return merge(arr1, arr2);
}

function merge(arr1, arr2) { //compare first element of each input array, one by one, without re-using numbers
    let arr3 = [];

    const firstLength = arr1.length;
    const secondLength = arr2.length;

    let i = 0, j = 0, k = 0;

    while (i<firstLength || j<secondLength) {
        const one = (arr1[i]) ? arr1[i]:Infinity; //prevent returning 'undefined' when beyond array's final index
        const two = (arr2[j]) ? arr2[j]:Infinity;

        if (two < one) {
            arr3[k] = arr2[j];
            j++;
        }
        if (one < two) {
            arr3[k] = arr1[i];
            i++;
        }
        if (one == two) {
            arr3[k] = arr1[i];
            k++;
            arr3[k] = arr2[j];
            i++;
            j++;
        }

        k++;
    }

    return arr3;
}

result.textContent = mergeSort(inputArr);