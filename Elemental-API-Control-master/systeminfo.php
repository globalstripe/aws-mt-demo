<?php
         echo "Getting System Info:";
         $output = shell_exec('./systeminfo.sh');
         echo "<pre>$output</pre>";
?>
