#!/bin/bash
npm run start --prefix frontend & cd './backend'; mvn spring-boot:run & wait
