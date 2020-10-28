import { getCurrencySymbol,getFormData } from './utility';
import { DisplayJobs } from './formatJob';

export class FetchJobs {

    constructor(searchFormSelector,resultsSelector)
    {
        this.searchForm=document.querySelector(searchFormSelector);
        this.resultsContainer=document.querySelector(resultsSelector);
    }

 


    setCountryCode(){
        //In case the IP Address API fails, default would be set to India.
        this.countryCode='in';
        this.setCurrencyCode();
        const endpoint='http://ip-api.com/json';

        
        fetch(endpoint)
            //.then(data => console.log(data))
            .then(data => data.json())
            //.then(console.log('Is it still not working?'))
            .then(data => { 
                
            this.countryCode = data.countryCode.toLowerCase();
            this.setCurrencyCode();
            });
    }

    setCurrencyCode(){
        //console.log('The');
        this.currencySymbol=getCurrencySymbol(this.countryCode);
    }


    GetForm(){
        this.searchForm.addEventListener('submit', (e) => {
            e.preventDefault();          // prevents from submitting the form
            this.resultsContainer.innerHTML='';
            console.log('Query accepted');
            const {search, location } = getFormData(this.searchForm);
            console.log(search);
            const endpoint2=`http://localhost:3000/?search=${search}&location=${location}&country=${this.countryCode}`;
            console.log(endpoint2)
            fetch(endpoint2)   //hard-coded local address
            .then(response => response.json())
            .then(({ results }) => {
            
              return results
                .map(job => DisplayJobs(job, this.currencySymbol))
                .join('');
            })
            .then(jobs => this.resultsContainer.innerHTML = jobs)
        });
    }

}


