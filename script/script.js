let im = document.createElement('img');
im.src = 'https://pbs.twimg.com/media/EDsthEeXsAAywSO.jpg';
im.width = "909";
im.height = "612"
let im1 = document.createElement("div");
im1.append(im);
document.body.append(im1);

let = todo_list = [img]
const input_elem = document.getElementById('input');
const btn_elem = document.getElementById('btn');
const output_elem = document.getElementById('output');
const form_elem = document.getElementById('form_data')


function render(){
    output_elem.innerText = '';
    todo_list.forEach(elem=>{
        const li_elem = document.createElement('li');
        li_elem.classList.add('elem');
        li_elem.innerText = elem;
        output_elem.appendChild(li_elem);
        li_elem.addEventListener('click', ()=>{
            const elems = document.getElementsByClassName('elem');
            li_elem.classList.add('active');
            [...elems].forEach(item=>item.classList.remove('active'));
            li_elem.classList.add('active');
        })
    })
}

render()


form_elem.addEventListener('submit', event=>{
    event.preventDefault();
    const value = input_elem.value;
    input_elem.value = '';
    todo_list.push(value);
    render();
})