function toggleMode() {
    const html = document.documentElement

    // Mudar tema do site

    // if ( html.classList.contains('light') ) {
    //     html.classList.remove('light')
    // }   
    
    // else {
    //     html.classList.add('light')
    // }

    html.classList.toggle('light')

    // const html - Definindo nome de shortcut para document.documentElement (document = arquivo html | document.Element = tag <html>)
    // classList = nome da classe




    // Mudar foto profile

    const img = document.querySelector("#profile img")
    
    if ( html.classList.contains('light') ) {

        img.setAttribute("src", "./Rocketseat/Assets/LKD3.jpg")
    }

    else {

        img.setAttribute("src", "./Rocketseat/Assets/LKD2.jpg")
    }
    

    // query.Selector = seletor de texto, número, elemento dentro da tag
    // #profile img = selecionando a tag 'img' dentro da tag de id 'profile'
    // setAttribute = define o valor do atributo selecionado (src) com o valor especificado (./assets/LKD2.jpg)


}

