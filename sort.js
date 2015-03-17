var arr =[5,7,2,4,9];
function bubbleSort(arr){
  for (var x = arr.length; x > 0; x--) {
    console.log(arr.length);
    for (var i = 0; i < arr.length - 1; i++) {
      if(arr[i] > arr[i+1]){
        console.log(arr[i])
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }else {
    };
  };
};
return arr
}

// do not touch this
module.exports = bubbleSort



// class Array

// arr = [4, 5, 34, 72, 17, 2]

// def swap arr
//  count = 0
//  while (count < arr.length - 1) do
//    first = arr[count]
//    second = arr[count + 1]
//    if first > second
//      arr[count + 1] = first
//      arr[count] = second
//      count += 1
//    else
//      count +=1
//    end
//  end
//  arr
// end

// def bubble_sort arr
//  counter = arr.length
//  while (counter > 0) do
//    swap arr
//    counter -= 1
//  end
//  arr
// end
// end
