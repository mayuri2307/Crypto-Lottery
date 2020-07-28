# Crypto-Lottery
The following steps are to be followed in order to run the code:


<h2>SECTION A: Getting the Backend Running</h2>
<ul>
<li>The folder containing the application is called Cryptolottery.</li>
<li>On the Command prompt change the directory to the one containing Cryptolottery and run the command: npm install.</li>
<li>In the same directory install truffle by running : npm install -g truffle.</li>
<li>Ganache AppImage also needs to be downloaded via https://www.trufflesuite.com/ganache.</li>
<li>Once downloaded, run Ganache AppImage. It must be running in the background while performing next steps.</li>
<li>In the command prompt, with the directory set as migrations, run the command: truffle compile.</li>
<li>After the command executes, run: truffle migrate.</li>
<li>Finally when the migrations complete successfully, run the server by executing the command: npm run dev.</li>
<li>The url to be run on the browser would look like:http://localhost:8080.</li>
</ul>


<h2>SECTION B: Deploying the Frontend of the Application</h2>
The front page of the application exists inside a folder labelled frontEnd.
<ul>
<li>The folder contains a sub-folder with the name: Login.</li>
<li>Run the login.html file from that folder and then login with the details in the folder.</li>
<li>The Homepage of our application gets opened wherein one can register for various games under the available games subheading. We have implemented the game labelled as “Lottery
Game” and by clicking on the same, it redirects the participant to the game dashboard.</li>
<li>For combined dashboard and simulation purpose, please refer to the steps listed from 6 in the section A.</li>
<li>There is a folder labelled screenshots that contains all the screenshots of the UI.</li>
</ul>
