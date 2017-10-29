(() => {
	
  const companies = [
    {id: 1, name: 'Amazon', location: 'Seattle'},
    {id: 2, name: 'Apple', location: 'Cupertino'},
    {id: 3, name: 'Facebook', location: 'Menlo Park'},
    {id: 4, name: 'Google', location: 'Mountain View'},
    {id: 5, name: 'Leeroy', location: 'Sundsvall'},
    {id: 6, name: 'Tesla', location: 'Palo Alto'}
  ]

	var comp = companies[0].name;
	var loc = companies[0].location;
				
	var listOfCompanies = $('ul#list')
	$.each(companies, function(i)
	{
		var li = $('<li/>')
			.addClass('li-item')
			.attr('role', 'listitem')
			.appendTo(listOfCompanies);
		var liText = $('</p>')
			.addClass('li-name')
			.attr('role', 'text')
			.text(companies[i].name + " - " + companies[i].location)
			.appendTo(li);
	});

})()