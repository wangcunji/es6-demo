/**
 * 1024. 视频拼接
 * https://leetcode-cn.com/problems/video-stitching/
 */
/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
var videoStitching = function(clips, T) {
    let result = 0;
    const helper = (base, clips) => {
        let len = clips.length;
        let index = 0;
        let max = 0;
        for (let i = 0; i < len; i++) {
            let clip = clips[i];
            if (clip[0] <= base && clip[1] > base) {
                max = Math.max(max, clip[1]);
                max === clip[1] ? index = i : '';
            }
        }
        result++;
        if (max === T) {
            return;
        }
        clips.splice(index, 1);
        helper(max, clips);
    }
    let maxNum = 0;
    let base = 0;
    for (let j = 0; j < clips.length; j++) {
        let clip = clips[j];
        if (clip[0] === 0) {
            base = clip[1];
        }
        maxNum = Math.max(maxNum, clip[1]);
    }
    if (maxNum < T) {
        return -1;
    }
    helper(base, clips);
    return result;
};
