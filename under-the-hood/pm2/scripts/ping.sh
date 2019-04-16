 #!/bin/bash
 
function ping {
      for i in {0..100}
      do
            curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://localhost:8008/api/samples
      done
}

function flood {
      for i in {0..1000}
      do
            curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://localhost:8008/api/samples/flood
      done
}

case $1 in 
      ping)
            ping;;
      flood)
            flood;;
      *)
            echo $1;
esac
