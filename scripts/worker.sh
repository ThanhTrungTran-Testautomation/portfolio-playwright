#!/bin/sh

QUEUE=/queue/specs.txt

while true
do

SPEC=$(flock -x $QUEUE sh -c "head -n 1 $QUEUE && sed -i '1d' $QUEUE")

if [ -z "$SPEC" ]; then
  echo "No more tests"
  exit 0
fi

echo "Running $SPEC"

npx playwright test $SPEC

done