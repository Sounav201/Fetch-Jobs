
export const  getCurrencySymbol= countryCode => {
const currencydb= {
    in:'₹',
    us:'$',
    au:'$',
    ca:'$',
    gb:'£',
    fr:'€',
    de:'€',
};
    return currencydb[countryCode];
};


export const getFormData= form => Array
    .from(form.elements)
    .reduce((acc, { id, value }) => ({ [id]: value, ...acc }), {});  //from Mdn docs
    console.log("In getform");


