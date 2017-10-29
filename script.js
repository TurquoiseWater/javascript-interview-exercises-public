(() => {
	
  const companies = [
    {id: 1, name: 'Amazon', location: 'Seattle'},
    {id: 2, name: 'Apple', location: 'Cupertino'},
    {id: 3, name: 'Facebook', location: 'Menlo Park'},
    {id: 4, name: 'Google', location: 'Mountain View'},
    {id: 5, name: 'Leeroy', location: 'Sundsvall'},
    {id: 6, name: 'Tesla', location: 'Palo Alto'}
  ]
 
  var listOfCompanies = $('ul#list')
    
  // iterate through the companies
  var worldsBestCompanies = $.map(companies, function(company, idx) {
	  
			var li = $('<li/>')
				.addClass('li-item')
				.attr('role', 'listitem')
				.appendTo(listOfCompanies);
			var liText = $('</p>')
				.addClass('li-name')
				.attr('role', 'text')
				.text(companies[idx].name + ", " + company.location)
				// This works for 100 000 items as well.
				.click(function() {
				 alert("You clicked on: " + company.name);
				})
				.appendTo(li);

  });

	/*
	I would probably use ajax and let the client request parts of the 100 000 records with the help of a filter.
	Better to let servers do the heavy stuff. Too much calculation in a mobile browsers might not be ideal. 
	The user will hardly ever read all the 100,000 records and data transfer should stay as low as possible.
	*/
	
})()



