<?php
function snail($array) {
    $result = [];
    
    while (count($array) > 0) {
        $result = array_merge($result, array_shift($array));
        
        foreach ($array as &$row) {
            if (count($row) > 0) {
                $result[] = array_pop($row);
            }
        }
        
        if (count($array) > 0) {
            $result = array_merge($result, array_reverse(array_pop($array)));
        }
        
        for ($i = count($array) - 1; $i >= 0; $i--) {
            if (count($array[$i]) > 0) {
                $result[] = array_shift($array[$i]);
            }
        }
    }
    
    return $result;
}

$array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

print_r(snail($array));
?>
