# Sample Server

This is a sample server that we built for the purpose of the demo. A lot of the "magic" is hidden so that we can focus on understanding concepts.

Remember a server needs an Environment for it to run. For that we will use NodeJs (a JavaScript base server library)

[Download it here](https://nodejs.org/en/), and install it in your computer.

A lot of programming will use the `terminal` or `command prompt`, so we need to get familiar with it. Open either `terminal` or `command prompt` on your computer.

type this in the terminal
```
node -v
```

a number like v14.16.0 sould appear, indicating that we have installed Node.

Now lets see if we can find your folder. use the command `cd` to move in an out of folders.

```
cd /folder_name
```
will put you into that folder
```
cd ...
```
will make you go one directory up from a folder.

Hopefully you can find your way to the project file, shoudl look something like
```
C:\Development\MIMPI\PersonalWebsite\server
```
Once you are inside the server folder, type
```
npm install
```
and it will automagically install everything you need for a server. Then type
```
npx sls offile
```
and you can see your server running at [http://localhost:3000]