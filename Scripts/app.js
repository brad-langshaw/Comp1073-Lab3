/* custom javascript */
"use strict";

$(document).ready(function(){
		console.log("Contact Page");
});
	
$("#form_submit").click(function(){
	var contactname = $("#contactname").val();
	var emailadress = $("#emailadress").val();
	var subject = $("#subject").val();
	var email = $("#email").val();

	console.log("contactname:" + contactname);
	console.log("emailadress:" + emailadress);
	console.log("subject:" + subject);
	console.log("email:" + email);
});

function replaceContent() {
		console.log("inside replaceContent function");
		var firstParagraph;
		var contactMe;
		var project1;
		var project2;
		var project3;
		
		firstParagraph = document.getElementById("firstParagraph");
		
		if (firstParagraph != null ){
			 firstParagraph.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp; My name is John Bradley Langshaw, but my friends call me Brad. I am a Web Designer and Developer based out of Barrie Ontario. I understand HTML5 and CSS quite well. <br /> I am not only well rounded in technology and coding I have also taken 2 other College programs with success. In April 2015, I completed a Diploma in Travel and Tourism and I completed a 1 year Business Fundamentals Certificate, all completed at Georgian College. I am very hard working and task oriented. <br /> Besides schooling I have worked a few different jobs including Lifeguarding, which requires quite a bit of certification, also I moved west to the Rockies at Kanaskis Country Golf Course and had been flooded out back to Ontario Where I continued my schooling.<br/> Do not be afraid to Contact Me on the Contact Me page, as well as veiw my previous projects I have taken on at school on the My Projects page";
			 }
		if (firstParagraph == null){
		
			contactMe = document.getElementById("contactMe");
		
	   if (contactMe != null) {
				contactMe.innerHTML = "I'll get back to you as soon as possible! <br /> brad.langshaw@live.ca";
			}
    	if (contactMe == null) {
					project1 = document.getElementById("project1");
                    
                    if (project1 != null) {	
					project1.innerHTML = "Through out school we have worked on many major projects so far. I have only made one fully working mock website that demo's my understanding of html and css."	 ;
                    }
                    if (project1 == null) {
					project2 = document.getElementById("project2");
                        if (project2 != null) { 
					       project2.innerHTML = "That assignment was based on an old failed Nintendo console from the early 90's. <br /> I created this next program using php to calculate a weekly workout program for 7 weeks to increase a persons main powerlifting exercises - the deadlift bench and squat"
                           }
					     if (project2 == null) {
                             project3 = document.getElementById("project3");
					         project3.innerHTML = "The assignment below was to learn about different typefaces and their history as well as learn how to choose a typeface appropiate to a project,<br/> Ubuntu Typeface is a free google font and I even used it in my portfolio page"
			};
		};
		
		
	};
        };
};
	
replaceContent();

