<?php
         echo "Running Start All";
         echo "Running Start vc1-a";
         sleep(3);
         exec('./startall.sh vc1-a.xml > status.dat');
         sleep(3);
         echo "Running Start vc1-b";
         exec('./startall.sh vc1-b.xml > status.dat');
         sleep(3);
         echo "Running Start vc1-c";
         exec('./startall.sh vc1-c.xml > status.dat');
         sleep(3);
         echo "Running Start vc1-d";
         exec('./startall.sh vc1-d.xml > status.dat');
         sleep(3);
?>
