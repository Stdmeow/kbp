<?php
function sum_intervals($intervals) {
    usort($intervals, function($a, $b) {
        return $a[0] - $b[0];
    });

    $mergedIntervals = [];
    
    foreach ($intervals as $interval) {
        if (empty($mergedIntervals) || $mergedIntervals[count($mergedIntervals) - 1][1] < $interval[0]) {
            $mergedIntervals[] = $interval;
        } else {
            $mergedIntervals[count($mergedIntervals) - 1][1] = max($mergedIntervals[count($mergedIntervals) - 1][1], $interval[1]);
        }
    }

    $totalLength = 0;
    foreach ($mergedIntervals as $mergedInterval) {
        $totalLength += $mergedInterval[1] - $mergedInterval[0];
    }

    return $totalLength;
}
?>
