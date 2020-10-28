class UI{
    constructor() {
        this.display= document.getElementById('displayRow');
        this.notify = document.getElementById('alerts');


    }
    showResults(data){
        const results = data.airports;
        console.log(results);
        
        let output = '';
        for (let index = 0; index < results.length; index++) {
            output += "<tr>";
            output += "<td>"+results[index].name+ "</td>";
            output += "<td>"+results[index].iata+ "</td>";
            output += "<td>"+results[index].state.type+ "</td>";
            output += "<td>"+results[index].city+ "</td>";
            output += "<td>"+results[index].state.name+ "</td>";
            output += "<td>"+results[index].country.name+ "</td>";
            output += "</tr>";
        }

        this.notify.innerHTML = `
        <article class="message is-primary">
            <div class= "message-body">
            Showing <span class = "tag is-success">${results.length}</span>
            Results For ${data.term.toUpperCase()}
            </div>
        </article>`

        // pass the output to the html
        this.display.innerHTML =output;
    }
    showAlert(data){
        console.log(data);
        this.notify.innerHTML = `
        <article class="message is-danger">
            <div class= "message-body">
                ${data}
            </div>
        </article>`
        //  so as to disapper after some seconds
        
        setTimeout(() => {
            this.clearAlert();
        }, 5000);
    }
    // the actual  clearing of the alert
    clearAlert(){
       const currentAlert= document.querySelector('.is-danger')
       if (currentAlert) {
           currentAlert.remove();
       }
    }

    inputSpinner(){
        const spinner = document.getElementById('loading')
        spinner.classList.add('is-loading');
        setTimeout(() =>{
            spinner.classList.remove('is-loading')
        }, 2000 )
    }
}

export const ui = new UI();