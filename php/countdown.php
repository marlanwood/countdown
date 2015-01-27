<?php

if (PHP_SAPI !== 'cli') {
    die (PHP_EOL.'Please run '.__FILE__.' from the command-line.'.PHP_EOL.PHP_EOL);
}

function countdown($seconds)
{
    // ...
	if ($seconds > 0) {
		echo $seconds . "\n";;
		usleep(1000000);
		$seconds = $seconds - 1;
		countdown($seconds);
	}
}

countdown(5);

die('0 All done...');