
const template = document.createElement('template')
template.innerHTML = `
<div class="todo-list">
    <input-action></input-action>
</div>
<div class="todo-items-wrapper"></div>
`


class TodoList extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }

    connectedCallback(){
        const templateCopy = template.content.cloneNode(true)
        // const classTodoItem = templateCopy.querySelector('.todo-items-wrapper')
        const inputActionComponent = templateCopy.querySelector('input-action')
        inputActionComponent.addEventListener('input-action-submit', (event) =>{
            const text = event.detail
            const newTodoItem = document.createElement('todo-item')
            
            this.shadowRoot.querySelector('.todo-items-wrapper').appendChild(newTodoItem)
            newTodoItem.setAttribute('text', text)
            
        })
        
        this.shadowRoot.appendChild(templateCopy)
    }
    
}

window.customElements.define('todo-list',TodoList)