function checkeType(){
    if (document.getElementById("eType").value=='1'){
        alert("Please Choose Event Type");
        
    }
}
    function checkeTitle(){
        if(document.getElementById("ETitle").value==""){
            alert("Please Enter Title");
        }
    }
    function checkeDateStart(){
        if(document.getElementById("EDateStart").value==""){
            alert("Please Enter Start Date");
        }
    }
    function checkeDateEnd(){
        if(document.getElementById("EDateEnd").value==""){
            alert("Please Enter End Date");
        }
    }
    function checkePostDate(){
        if(document.getElementById("EPostDate").value==""){
            alert("Please Enter PostDate");
        }
    }


function checkforblank(){
    checkeType();
    checkeTitle();
    checkeDateStart();
    checkeDateEnd();
    checkePostDate();
}

