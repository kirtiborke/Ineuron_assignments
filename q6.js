/***<aside>
💡 d return false if every element is distinct.

**Example 1:**
Input: nums = [1,2,3,1]

Output: true

</aside> */

var dist = function(nums){
    const s = new Set(nums); 
    return s.size !== nums.length

}

console.log(dist([1,2,3,1]))