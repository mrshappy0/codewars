var Sudoku = function (data) {
    return {
      isValid: function () {
        let i = 0,j = 0,end;

        //    check rows
        while (i < data.length) {
          let arr = [...new Set(data[i])];
          arr.filter((el) => el <= data.length && el > 0);
          (data.length === arr.length && arr[0] !== "" && arr[0] !== true) ? end = true : end = false
          i++;
        }
        i = 0;

        //    check columns
        while (i < data.length && end) {
          let set = new Set(),arr = [];
          while (j < data.length) {
            if (data[j][i] <= data.length && data[j][i] > 0) set.add(data[j][i]);
            j++;
          }
          arr = [...set];
          (data.length === arr.length && arr[0] !== "" && arr[0] !== true) ? end = true : end = false
          j = 0;
          i++;
        }

        //    little squares check
        if (data.length === 9 && end) {
          recursiveBoi = (someData) => {
            someData = someData.filter((el) => el != null && el != "");
            if (!someData[0]) {
              return true;
            } else {
              let arr = [],set = new Set();
              for (let i = 0; i < 3; i++) {
                arr.push(...someData[i].splice(0, 3));
              }
              arr = [...new Set(arr)];
              arr.filter((el) => el <= data.length && el > 0);
              (data.length === arr.length && arr[0] !== "" && arr[0] !== true) ? recursiveBoi(someData) : end = false
            }
          }
          recursiveBoi(data);
        }

        return end;
      },
    };
  };