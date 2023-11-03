let resultShow = document.getElementById("resultShow");

function display(num){
    resultShow.value+=num;
}

function calculate(){
    try{
        resultShow.value = eval(resultShow.value)
    }
    catch(err){
        alert("Invalid Input!")
        resultShow.value = "";
    }
}

function Clear(){
    resultShow.value = ""
}

function del(){
    resultShow.value = resultShow.value.slice(0,-1)
}
