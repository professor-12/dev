class Events {


    click() {
         var side_bar = document.querySelector('#side-bar');
         let content = document.querySelector('#info')
         content.style.height = '2%'
        side_bar.style.left = '-3%'

}
    close() {
        var side_bar = document.querySelector('#side-bar');
        if (side_bar.style.left <= '65%')
            side_bar.style.left = '-100%';

    }


    
}



callevent = new Events()



