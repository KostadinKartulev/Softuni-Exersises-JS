function smallestTwoNumbers(nums) {
    
    nums.sort((a,b)=>a-b);
    console.log(nums[0],nums[1]);
}
smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);
