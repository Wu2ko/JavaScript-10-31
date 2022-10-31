const task = document.querySelector('input');
const addTask = document.querySelector('button');
addTask.addEventListener('click',()=>{
    const tasksList = document.querySelector('ul'); //task list in ul
    let li = document.createElement('li'); //create li element
    li.textContent = task.value; //assign content to li
    tasksList.appendChild(li); //add content to li
})
document.querySelector('.delete').addEventListener('click',()=>{
    let tasksList = document.querySelector('ul');
    let li = document.querySelector('li:last-child');
    tasksList.removeChild(li)
})
*/


/*HTMLTableSectionElement.prototype.sort = function (cb) {
    Array.from(this.rows)
        .sort(cb)
        .forEach((e) => this.appendChild(this.removeChild(e)));
};

document
.querySelector("table")
.tBodies[0].sort((a, b) => a.textContent.localeCompare(b.textContent));
*/

const Rows = document.querySelector('input.rows')
const addRows = document.querySelector('button')
addRows.addEventListener('click',()=>{
    const rowNum = document.querySelector('table')
    let td = document.querySelector('ul');

})


<tr>
    <td>7</td>
    <td>7</td>
</tr>