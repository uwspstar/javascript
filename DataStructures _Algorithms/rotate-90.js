/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/*
 * clockwise rotate
 * first reverse up to down, then swap the symmetry 
 * 1 2 3     7 8 9     7 4 1
 * 4 5 6  => 4 5 6  => 8 5 2
 * 7 8 9     1 2 3     9 6 3
*/

const matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
const matrix1 =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
]

var rotate = function(matrix) {

    const len = matrix.length;

    for(let i = 0; i<len/2 ;i++){

      const temp = matrix[i];
      const temp2 = matrix[len-1-i];

      matrix[i] = temp2;
      matrix[len-1-i] = temp;
    }

    //console.log(matrix);

    for(let i = 0; i<len ;i++){
      for(let j = 0; j<len ;j++){
        if(i<j){
          const temp = matrix[i][j];
          const temp90 = matrix[j][i];
          matrix[i][j] = temp90;
          matrix[j][i] = temp;
        }
      }
    }

    console.log(matrix);

};

console.log(rotate(matrix));
console.log(rotate(matrix1));


/*
48. Rotate Image
Medium

1464

143

Favorite

Share
You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Note:

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example 1:

Given input matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
-- [0][0],[0][1],[0][2]
-- [1][0],[1][1],[1][2]
-- [2][0],[2][1],[2][2]


rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
Example 2:

Given input matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

rotate the input matrix in-place such that it becomes:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
*/
