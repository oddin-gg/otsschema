### Basic OTS Java client example

This example connects to OTS server and consumes incoming messages and prints them into standard output plus every
10 seconds send keep-alive message to server. Also every 30 seconds it creates and sends new ticket request.

##### How to run it
- install Java (min. Java 8) and Git to your local machine.
- ```../../java/gradlew clean publishToMavenLocal -p ../../java/```
- ```./gradlew clean build```
- Write your `OTS server url` (will be given to you) into environment property ODDIN_GG_OTS_CLIENT_URL
- Write your `token` into env. property ODDIN_GG_OTS_CLIENT_TOKEN
- Write `selection id` into env. property ODDIN_GG_OTS_CLIENT_NEW_TICKET_SELECTION_ID (e.g. "od:match:115901/37/6?side=home")
- Write `selection odds` value into env. property ODDIN_GG_OTS_CLIENT_NEW_TICKET_ODDS_VALUE (e.g. "1.5")
- Write `stake value` into env. property ODDIN_GG_OTS_CLIENT_NEW_TICKET_STAKE_VALUE (e.g. "10")
- ```./gradlew run```
- enjoy :)
