
const button = document.getElementById('button')
const cadastro = document.getElementById('cadastro')
const form = document.getElementById('form')

form.addEventListener('submit',(ev) => {
    ev.preventDefault()

    button.addEventListener('click', (ev) =>{
        ev.preventDefault()

        const bloco = document.createElement('div')
        const br = document.createElement('br')
        const br1 = document.createElement('br')
        const br2 = document.createElement('br')
        const br3 = document.createElement('br')
        const br4 = document.createElement('br')
        const br5 = document.createElement('br')

        const label_Tecnologia = document.createElement('label')
        label_Tecnologia.innerText = 'Nome da tecnologia'
        label_Tecnologia.setAttribute('for','tecnologias') 

        const input_tecnologias = document.createElement('input')
        input_tecnologias.type = 'text'
        input_tecnologias.name = 'tecnologias'
        input_tecnologias.id = 'tecnologias'
        input_tecnologias.placeholder = 'Digite o nome da Tecnologia'

        const subTitulo = document.createElement('label')
        subTitulo.innerText = 'Tempo de experiência'
        subTitulo.for= 'input_time'

        const input_time1 = document.createElement('input')
        input_time1.type = 'radio'
        input_time1.name = 'input_time'
        input_time1.id ='input_time1'
        input_time1.value = '0-2 anos'

        const label_time1 = document.createElement('label')
        label_time1.innerText = '0-2 anos'
        label_time1.setAttribute('for', 'input_time1')

        const input_time2 = document.createElement('input')
        input_time2.type = 'radio'
        input_time2.name = 'input_time'
        input_time2.id ='input_time2'
        input_time2.value = '3-4 anos'

        const label_time2 = document.createElement('label')
        label_time2.innerText = '3-4 anos'
        label_time2.setAttribute('for', 'input_time2')

        const input_time3 = document.createElement('input')
        input_time3.type = 'radio'
        input_time3.name = 'input_time'
        input_time3.id ='input_time3'
        input_time3.value = '5+ anos'

        const label_time3 = document.createElement('label')
        label_time3.innerText = '5+ anos'
        label_time3.setAttribute('for', 'input_time3')

        const remove = document.createElement('button')
        remove.innerText = 'remover tecnologia'

        form.appendChild(bloco)
        bloco.append(label_Tecnologia,br,input_tecnologias,br1,subTitulo,br2,input_time1,label_time1,br3,input_time2,label_time2,br4,input_time3,label_time3,br5,remove)

        remove.addEventListener('click',(ev) =>{
            ev.preventDefault()

            form.removeChild(bloco)

        })
    })

    cadastro.addEventListener('click', (ev) =>{
        ev.preventDefault()
        
        const tecnologia = document.getElementById('tecnologias')

        const name = document.getElementById('name')

        let experiencia = ''

        document.querySelectorAll('input[name="input_time"]:checked').forEach(function (item){experiencia += ' - ' + item.value + '\n'})

        console.log({name, tecnologia, experiencia})

        alert(
            "Conta Cadastrada!" +
            "\nNome do cliente: " + name.value +
            "\nNome da Tecnologia: " + tecnologia.value +
            "\nTempo de Experiência:" + experiencia
        )
    })

})