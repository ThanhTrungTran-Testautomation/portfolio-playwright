#!/bin/sh

mkdir -p /queue

ls tests/*.spec.ts | sort > /queue/specs.txt

echo "Queue created"

cat /queue/specs.txt