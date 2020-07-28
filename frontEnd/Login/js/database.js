let gfg = new Array(3);

// Loop to create 2D array using 1D array 
for (var i = 0; i < gfg.length; i++) { 
    gfg[i] = new Array(3); 
}
let cnt=0; 

function saveData(){
	console.log(cnt);
	const nameOfUser = document.getElementById('namE').value;
    const email = document.getElementById('userName').value;
    const password = document.getElementById('passWord').value;
    var dum =[nameOfUser,email, password];
    console.log(dum[0]);
    var i;
    for (i=0;i<gfg.length;i++){
    	console.log(dum[i]);
    	gfg[cnt][i]=dum[i];
    }
    	console.log(gfg);
    cnt++;
}
let arr = [["Arjit","am791@snu.edu.in","1234"],["Deepa","rd321@snu.edu.in","123"],["Mayuri","mg123@snu.edu.in","123"]];

function loadData(username,passw){
	//const arr = [[Arjit,am791@snu.edu.in,1234],[Deepa,rd321@snu.edu.in,123],[Mayuri,mg123@snu.edu.in,123]];
	//var arr=gfg;
	console.log(username);
	console.log(passw);
	console.log(cnt);
	console.log(arr);
	for(var i=0;i<arr.length;i++){
		if (username==arr[i][1] && passw==arr[i][2]){
			console.log("true");
			window.location.href = "../mainPage/index.html";
			break;
		}
	}
	console.log("false");
	window.location.href = "../login/login.html";
	


}