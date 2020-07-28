let gfg = new Array(3);
//global  arr;

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
    var i;
    for (i=0;i<gfg.length;i++){
    	gfg[cnt][i]=dum[i];
    }
    	console.log(gfg);
    	let data = new Array(3);
    	for(var j=0;j<cnt+1;j++){
    		data[j]= 
            gfg[j][0] + ','+gfg[j][1] +','+gfg[j][2];

    	}
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = 'formData.txt';
        let newLink = document.createElement("a");
        newLink.download = sFileName;
        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click();
    cnt++;
    //arr= gfg;
}

function validate(){
                            var username = document.getElementById("usernames").value;
                            var password = document.getElementById("passwords").value;

                            let arr = [["Arjit","am791@snu.edu.in","1234"],["Deepa","rd321@snu.edu.in","123"],["Mayuri","mg123@snu.edu.in","123"]];
                            

                            if ( username == "is328@snu.edu.in" && password == "illisha123"){
                                window.location = "../mainPageAdmin/index.html"; // Redirecting to other page.
                            }
                            else if (username == "am791@snu.edu.in" && password == "arjit123"){ 
                                
                                window.location.href = "../mainPage/index.html" 
                            }
                            else if (username == "rd321@snu.edu.in" && password == "deepa123"){ 
                               
                                window.location.href = "../mainPage/index.html" 
                            }
                            else if (username == "mg123@snu.edu.in" && password == "mayuri123"){ 
                               
                                window.location.href = "../mainPage/index.html" 
                            }
                            else
                                window.location.href = ""

                        }