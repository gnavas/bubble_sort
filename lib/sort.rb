class Array

arr = [4, 5, 34, 72, 17, 2]

def swap arr
 count = 0
 while (count < arr.length - 1) do
   first = arr[count]
   second = arr[count + 1]
   if first > second
     arr[count + 1] = first
     arr[count] = second
     count += 1
   else
     count +=1
   end
 end
 arr
end

def bubble_sort arr
 counter = arr.length
 while (counter > 0) do
   swap arr
   counter -= 1
 end
 arr
end
end