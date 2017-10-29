(() => {
	
	const companies = [
		{id: 1, name: 'Amazon', location: 'Seattle'},
		{id: 2, name: 'Apple', location: 'Cupertino'},
		{id: 3, name: 'Facebook', location: 'Menlo Park'},
		{id: 4, name: 'Google', location: 'Mountain View'},
		{id: 5, name: 'Leeroy', location: 'Sundsvall'},
		{id: 6, name: 'Tesla', location: 'Palo Alto'},
		{id: 7, name: 'SCA', location: 'Sundsvall'},
		{id: 8, name: 'Zillow', location: 'Seattle'},
		{id: 9, name: 'Starbucks', location: 'Seattle'}
	]
 
	// unique locations array for filter
	const unique = [...new Set(companies.map(item => item.location))];
  
	// filter selector
	var options = $("#options");
	
	// create options for the filter
	$.map(unique, function(company, idx) {
		 options.append($("<option/>").addClass('option').val(unique[idx]).text(unique[idx]));
	});

	// iteration
	var displayerFunc = function displayCompanies(company, idx) {
		
			// create new items
			var li = $('<li/>')
				.addClass('li-item center')
				.attr('id', company.location)
				.click(function() {
				$('#header-text').text(company.name);
				})
				.appendTo(listOfCompanies);
			var liText = $('</p>')
				.addClass('li-name')
				.attr('role', 'text')
				.text(company.name)
				.appendTo(li);
			var liText2 = $('</p>')
				.addClass('li-location')
				.attr('role', 'text')
				.text(company.location)
				.appendTo(li);
	}
	
	// unordered list	
	var listOfCompanies = $('ul#list')
			
	// Iterate through the companies with displayerFunc
	var worldsBestCompanies = $.map(companies, displayerFunc);
		  
	// filter button
    $("#filterBtn").click(function(){
		
			// get the selected options
			var getChoice = $("#options").val();
			// filter companies array
			var filteredArray = $.grep(companies, function(element) {
				return $.inArray(element.location, getChoice) >= 0;
			});
			// delete all previous items
			$("li").remove(".li-item");
					
			// Iterate again
			var worldsBestCompanies = $.map(filteredArray, displayerFunc);
		
    });		  
	
})()


