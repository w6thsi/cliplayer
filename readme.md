# CLI Music Player

Node.js command line music player

## Setup

    npm install
    chmod u+x cliplayer.js
    
## Commands

### Playing: A user can play a song using the command: 
    ./cliplayer.js [username] play [song]
    
### Viewing: A user can view what another user listened to using the command: 
    ./cliplayer.js [username]
    
### Following: A user can follow other users using the commands: 
    ./cliplayer.js [username] follow [username]
    
### Activity: A user can view what other users listened to using the following command: 
    ./cliplayer.js [username] activity
    
    
## Running Tests
    npm install -g mocha #Only need to run this once
    mocha
