/**<aside>
💡  Given a sorted array of distinct integers and a target value,
 return the index if the target is found. 
 If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

**Example 1:**
Input: nums = [1,3,5,6], target = 5

Output: 2

</aside> */

var findData = function(nums,target){
    let s =0 ,e = nums.length -1;
    let ans = nums.length;

    while(s<=e){
        let mid = Math.floor((s +e)/2);
        if(nums[mid]== target){
            return mid;
        }
        else if (nums[mid]<target){
            s = mid+1
        }else{
            ans = mid;
            e = mid -1;
        }
    }
    return ans
}

nums = [1,3,5,6], target = 5
console.log(findData(nums,target));