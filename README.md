# webserver-client-server
Communication between raspi and another raspi using websocket protocol. one raspi as a server and another raspi as a client.

=> Server Side
~ reqirements :
1. Install node js
$curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
$sudo apt-get install -y nodejs
$node -v 
$npm -v
2. Install socket.io
$npm install socket.io --save
3. Install file system module
$npm install file-system --save
~ Running : (add this file to raspi one)
$node server.js
  
=> Client side
~ requirements :
1. Install node js
2. Install socket.io client side
$npm install socket.io-client --save
3. Install another module such as on-off module to control i/o
~ Running : (add this file to another raspi)
$node client.js
