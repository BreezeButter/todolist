const jobs = [
  { id: 1, title: "Learn HTML", done: false },
  { id: 2, title: "Learn CSS", done: false },
  { id: 3, title: "Learn Javascript", done: false },
  { id: 4, title: "Learn DOM", done: false },
  { id: 5, title: "Learn React", done: false },
  { id: 6, title: "Learn Node.js", done: false },
//   { id: last + 1, title: 'inp.value, done: false '}
];

/// Edit declaration new varable//////

let editI = -1
let replaceTitle = ''

///DoM/////
function render(){
    const allJobItems = jobs.map((el,i) => {
        if(editI !== i){
            return `
            <div class="job-item">
                    <input type="text" readonly value="${el.title}" 
                    class=${el.done? 'done': 'undone'}
                    onclick="changeStatus(${el.id})"
                    />
                    <button onclick="setEdit(${el.id})">Edit</button>
                    <button onclick="deleteJob(${el.id})" >Delete</button>
            </div>
          `;
          ///edit component///
        }else{
            return `
            <div class="job-item">
                    <input type="text" value="${el.title}" 
                    onkeyup="setReplaceTitle(event)"
                    class="editmode"
                    />
                    <button onclick="changeTitle(${el.id})">Save</button>
                    <button onclick="deleteJob(${el.id})" >Delete</button>
            </div>
          `;
        }
      });
      let jobsList = document.querySelector(".job-list");
      jobsList.innerHTML = allJobItems.join('')
}
render()

///add////
let jobForm = document.querySelector('.job-form')
jobForm.onsubmit = function(event){
    event.preventDefault()
    let newTitle = event.target.elements[0].value
    // alert(newTitle)
    let newId = jobs[jobs.length-1].id + 1
    // alert(newId)
    let done = false
    let newJob ={
        id: newId,
        title: newTitle,
        done: done
    }

    console.log(newJob)
    jobs.push(newJob)
    render()
    
}

///Delete/////
function deleteJob(id){
    let i = jobs.findIndex(el => el.id === id)
    jobs.splice(i,1)
    render()
}

///Done/////
function changeStatus(id){
    let i =jobs.findIndex(el =>el.id === id)
    jobs[i].done = !jobs[i].done
    render()

}

///Update + Get ID to Change EditI/////

function setEdit(id){
    let i =jobs.findIndex(el =>el.id === id)
    editI = i
    replaceTitle = jobs[i].title
    render()
}


///onkeyup/////
function setReplaceTitle(e){
    replaceTitle = e.target.value
    console.log(replaceTitle)

    }

function changeTitle(id){
    let i =jobs.findIndex(el =>el.id === id)
    jobs[i].title = replaceTitle
    editI = -1
    render()
}


