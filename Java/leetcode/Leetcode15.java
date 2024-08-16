package leetcode;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * Leetcode15
 */
public class Leetcode15 {
    public static List<List<Integer>> threeSum(int[] nums) {
        if (nums.length == 3) {
            Integer sum = (nums[0] + nums[1] + nums[2]);
            if (sum == 0) {
                List<List<Integer>> result = new ArrayList<>();
                result.add(Arrays.asList(nums[0], nums[1], nums[2]));
                return result;
            }
            return new ArrayList<>();
        }
        Arrays.sort(nums);
        Set<List<Integer>> result = new HashSet<>();

        for (Integer i = 0; i < nums.length; i++) {
            Integer l = i + 1;
            Integer r = nums.length - 1;

            while (l < r) {
                Integer sum = nums[i] + nums[l] + nums[r];
                if (sum == 0) {
                    result.add(Arrays.asList(nums[i], nums[l], nums[r]));
                    l++;
                    r--;
                    continue;
                }
                if (sum > 0) {
                    r--;
                    continue;
                }
                if (sum < 0) {
                    l++;
                    continue;
                }
            }
        }
        List<List<Integer>> output = new ArrayList<>();
        output.addAll(result);
        return output;
    }

    public static void main(String[] args) {
        int[] input = { -1, 0, 1, 2, -1, -4 };
        List<List<Integer>> result = threeSum(input);
        System.out.println(result);
    }
}