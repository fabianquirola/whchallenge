'use strict';

/*
 * Complete the 'numPaths' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY warehouse as parameter.
 */

function numPaths(warehouse) {
    // Write your code here
    let count = 0;

    const n = warehouse.length;
    const m = warehouse[0].length;
    const M = 1000000007;

    let visitedWh = Array(n).fill().map(()=>Array(m).fill(false));

    count = counter(warehouse,0,0,visitedWh,count)
    
    return count%M;
}

function counter(warehouses,x,y,visitedWh,count){
    
    const n = warehouses.length;
    const m = warehouses[0].length;

    if(x===  n -1 && y === m-1){

        count ++;
        return count;
    }

    visitedWh[x][y]= true;

    if(isValidSquare(x,y,warehouses) && warehouses[x][y]===1){

        console.log
        if(x+1 < n && !visitedWh[x+1][y]){
            count = counter(warehouses,x+1,y,visitedWh,count);
        }/*
        if(x-1 >= 0 && !visitedWh[x-1][y]){
            count = counter(warehouses,x-1,y,visitedWh,count);
        }*/
        if(y+1 < m && !visitedWh[x][y+1]){
            count = counter(warehouses,x,y+1,visitedWh,count);
        }/*
        if(y-1 >= 0 && !visitedWh[x][y-1]){
            count = counter(warehouses,x,y-1,visitedWh,count);
        }*/
    }
    
    visitedWh[x][y]= false;
    
    return count;
}

function isValidSquare(x,y,warehouses){

  const n = warehouses.length;
    const m = warehouses[0].length;
    
    if( x < 0 || y<0 || x>= n || y >= m){
       return false;
    }
    return true;
}

let w = [[1,1,1,1],[1,1,1,1],[1,1,1,1]];

numPaths(w);