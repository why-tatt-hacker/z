#!/opt/homebrew/bin/node



        let pow = Math.pow
        let sqrt = Math.sqrt
        let log = Math.log
        let pi = Math.PI
        let cos = Math.cos
        let tan = Math.tan
        let sin = Math.sin
        let arcsin = Math.asin
        let arctan = Math.atan
        let arccos = Math.acos
        let asin = Math.asin
        let atan = Math.atan
        let acos = Math.acos

        let epsilon = Number.EPSILON

        let logn = function(x, y) {
            return Math.log(y) / Math.log(x);
        }

        
        function sort2dByFirstElementFunction(a, b) {
            if (a[0] === b[0]) {
                return 0;
            }
            else {
                return (a[0] < b[0]) ? -1 : 1;
            }
        }
    
        // now get gradient using least-squares-method:
        function leastSquareMethodGradient(array2d) {
            let sumX = (function(arr){
                var sum = 0;
                for(var i=0; i<arr.length; i++)
                    sum += arr[i][0];
                return sum;
            }(array2d))

            let sumY = (function(arr){
                var sum = 0;
                for(var i=0; i<arr.length; i++)
                    sum += arr[i][1];
                return sum;
            }(array2d))

            let sumXY = (function(arr){
                var sum = 0;
                for(var i=0; i<arr.length; i++)
                    sum += arr[i][0] * arr[i][1];
                return sum;
            }(array2d))

            let sumXSquare = (function(arr){
                var sum = 0;
                for(var i=0; i<arr.length; i++)
                    sum += Math.pow(arr[i][0], 2);
                return sum;
            }(array2d))
            //debug: console.log([sumX, sumY, sumXY, sumXSquare, Math.pow(sumX, 2)])
            return (array2d.length * sumXY - sumX * sumY) / (array2d.length * sumXSquare - Math.pow(sumX, 2));
        }

        function leastSquareMethodB(gradient, array2d) {
            let sumX = (function(arr){
                var sum = 0;
                for(var i=0; i<arr.length; i++)
                    sum += arr[i][0];
                return sum;
            }(array2d))

            let sumY = (function(arr){
                var sum = 0;
                for(var i=0; i<arr.length; i++)
                    sum += arr[i][1];
                return sum;
            }(array2d))
            return (sumY - gradient * (sumX)) / array2d.length;
        }

        function leastSquareFunction(array2dDataset) {
            // sort 2d array by first element of the second layer:
            let sorted2dDataset = array2dDataset.sort(sort2dByFirstElementFunction);
        
            let gradient = leastSquareMethodGradient(sorted2dDataset);
            let b = leastSquareMethodB(gradient, sorted2dDataset);
            return "y = " + gradient + "x + " + b;
        }
    
    
        function correlationCoefficient(array2dDataset) {
            // 1d array: [x,y,z, a, b, c ...]
        
            let sorted2dDataset = array2dDataset.sort(sort2dByFirstElementFunction);
        
            let sumX = (function(arr){
                var sum = 0;
                for(var i=0; i<arr.length; i++)
                    sum += arr[i][0];
                return sum;
            }(sorted2dDataset))
        
            let sumY = (function(arr){
                var sum = 0;
                for(var i=0; i<arr.length; i++)
                    sum += arr[i][1];
                return sum;
            }(sorted2dDataset))
        
            let averageX = sumX / sorted2dDataset.length;
            let averageY = sumY / sorted2dDataset.length;
        
            // The actual calculations:
        
            let sumXMinusXAverageTimesYMinusYAverage = (function(arr, aveX, aveY){
                var sum = 0;
                for(var i=0; i<arr.length; i++)
                    sum += (arr[i][0] - aveX) * (arr[i][1] - aveY);
                return sum;
            }(sorted2dDataset, averageX, averageY))
        
            let sumXMinusXAverageSquare = (function(arr, ave){
                var sum = 0;
                for(var i=0; i<arr.length; i++)
                    sum += Math.pow(arr[i][0] - ave, 2);
                return sum;
            }(sorted2dDataset, averageX))
        
            let sumYMinusYAverageSquare = (function(arr, ave){
                var sum = 0;
                for(var i=0; i<arr.length; i++)
                    sum += Math.pow(arr[i][1] - ave, 2);
                return sum;
            }(sorted2dDataset, averageY))
        
            let result = sumXMinusXAverageTimesYMinusYAverage / Math.sqrt(sumXMinusXAverageSquare * sumYMinusYAverageSquare);
        
            let absRes = Math.abs(result);
            let stringInfo = absRes < 0.2 ? "Very weak" : absRes < 0.4 ? "Weak" : absRes < 0.6 ? "Moderate" : absRes < 0.8 ? "Strong" : absRes <= 1.0 ? "Very strong" : "No correlation";
            //+ " [r < 0.2 VERY WEAK, r < 0.4 WEAK, r < 0.6 MODERATE, r < 0.8 STRONG, r <= 1 VERY STRONG]"
        
            return (result) + " " + stringInfo + " correlation";
        }
    
    
        function standardDeviation(array2dDataset) {

            let sorted2dDataset = array2dDataset.sort(sort2dByFirstElementFunction);
        
            let sumX = (function(arr){
                var sum = 0;
                for(var i=0; i<arr.length; i++)
                    sum += arr[i][0];
                return sum;
            }(sorted2dDataset))
        
            let sumY = (function(arr){
                var sum = 0;
                for(var i=0; i<arr.length; i++)
                    sum += arr[i][1];
                return sum;
            }(sorted2dDataset))
        
            let averageX = sumX / sorted2dDataset.length;
            let averageY = sumY / sorted2dDataset.length;
            let n = sorted2dDataset.length;
        
            let sumXMinusAverageSquared = (function(arr, ave){
                var sum = 0;
                for(var i=0; i<arr.length; i++)
                    sum += Math.pow(arr[i][0] - ave, 2);
                return sum;
            }(sorted2dDataset, averageX))
        
            let sumYMinusAverageSquared = (function(arr, ave){
                var sum = 0;
                for(var i=0; i<arr.length; i++)
                    sum += Math.pow(arr[i][1] - ave, 2);
                return sum;
            }(sorted2dDataset, averageY))
        
            return "SD for X: " + Math.sqrt(sumXMinusAverageSquared / n) + " || SD for Y: " + Math.sqrt(sumYMinusAverageSquared / n);
        }
    
    
        function quadraticEquation(a, b, c) {
            if (!a && !b && !c) {
                return "ERROR: NO ARGS PARSED: run like: quadraticFunction(a, b, c)";
            }
        
            let ansPlus = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
            let ansMinus = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
        
            return "-: " + ansMinus + " || +: " + ansPlus;
        }
    
    
        function rationalise(floatNum) {
            for (let i = 1; i <= 100; i++) {
                for (let j = 0; j <= 100 ; j++) {
                        // console.log(j / i, j % i)
                    if (j / i == floatNum) {
                        return (j + "/" + i);
                    }
                }
            }
            return "NOT FOUND"//floatNum;// else not found the rational for it
        }
    
    
console.log(undefined)
