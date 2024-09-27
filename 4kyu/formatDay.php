<?php
function format_duration($seconds) {
    if ($seconds === 0) {
        return "now";
    }

    $timeUnits = [
        'year'   => 365 * 24 * 60 * 60,
        'day'    => 24 * 60 * 60,
        'hour'   => 60 * 60,
        'minute' => 60,
        'second' => 1
    ];

    $result = [];
    
    foreach ($timeUnits as $unit => $valueInSeconds) {
        if ($seconds >= $valueInSeconds) {
            $unitValue = floor($seconds / $valueInSeconds);
            $seconds -= $unitValue * $valueInSeconds;
            
            $result[] = $unitValue . ' ' . $unit . ($unitValue > 1 ? 's' : '');
        }
    }

    if (count($result) > 1) {
        return implode(', ', array_slice($result, 0, -1)) . ' and ' . end($result);
    } else {
        return $result[0];
    }
}
?>
