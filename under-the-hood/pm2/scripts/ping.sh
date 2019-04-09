 #!/bin/bash
 
 for i in {0..1000}
    do
       curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://localhost:8008/api/samples
 done