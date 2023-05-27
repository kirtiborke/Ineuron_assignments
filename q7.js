/**<aside>
💡 Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.

Note that you must do this in-place without making a copy of the array.

</aside> */

var decr = function(nums){
    let j =0;
    for(let i = 0;i<nums.length;i++)
        {
            if(nums[i]!= 0){
                nums[j++]=nums[i];
            }
        }
    while(j<nums.length)
        {
            nums[j++]=0
        }
        
        console.log(nums)
}
nums = [7,9,0,0,8,0];



