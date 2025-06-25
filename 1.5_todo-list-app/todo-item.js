const template = document.createElement('template')
template.innerHTML = `
<style>
        input:checked + span{
            text-decoration: line-through;
        }

    </style>
<div class="todo-item">
    <input type="checkbox">
      <span></span>
      <button></button>
</div>
`

class TodoItem extends HTMLElement{
    constructor(){
        super()
        this.text = this.getAttribute("text") ?? "Todo item"
        this.isChecked = this.hasAttribute("isChecked")
        this.buttonLabel = this.getAttribute('button-label') ?? 'Eliminar'

        this.attachShadow({mode:"open"})
    }

    connectedCallback(){
        const templateCopy = template.content.cloneNode(true)
        const checkbox = templateCopy.querySelector('input')
        const removeButtonon = templateCopy.querySelector('button')

        templateCopy.querySelector('span').textContent = this.text
        checkbox.checked = this.isChecked
        removeButtonon.textContent = this.buttonLabel
        removeButtonon.addEventListener('click', () => {
            const event = new CustomEvent('todo-item-remove')
            this.dispatchEvent(event)
            this.remove()
        })
        checkbox.addEventListener('change', () =>{
            const event = new CustomEvent('todo-item-status-update', {
                detail: {
                    isChecked: checkbox.checked
                }
            })
            this.dispatchEvent(event)
        })

        this.shadowRoot.appendChild(templateCopy)
    }
}

window.customElements.define('todo-item',TodoItem)