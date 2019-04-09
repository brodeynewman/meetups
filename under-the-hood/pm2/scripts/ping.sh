 #!/bin/bash
 
 for i in {0..100}
    do
       curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://localhost:8008/api/samples
 done