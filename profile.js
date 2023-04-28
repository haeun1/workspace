const input = document.querySelector(".app-insert input"); //입력
const toDos = document.querySelector(".app-list"); //만들어진 박스

input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {//엔터키를 입력하면
        if (input.value !== "") { //빈칸이 아닌경우
            addTask(input.value); //값 추가
            input.value = "";
        }
    }
},false);

function addTask(task){ //task 추가
    var newTask = document.createElement("li"); // li 요소 생성
    newTask.setAttribute("class","task");//li 요소에 class 속성 추가
    newTask.innerHTML = task + '<a href="javascript:;" class="remove-task">remove</a>';
    
    var list = document.querySelector(".app-list ul"); // ul 요소 선택
    list.appendChild(newTask); //ul 요소에 li 요소 추가
}
