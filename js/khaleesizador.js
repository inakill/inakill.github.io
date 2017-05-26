function validateForm() {
				var str = document.forms["khaleesizador"]["inputa"].value;
				if (str == "") {
					alert("Pero escribe algo primero, retarded!");
					
				} else {
					var output = str.replace(/[aeiou]/gi, 'i');

					document.getElementById("result").innerHTML  = "<p>" + output + "</p>";
					document.getElementById("emilia").src="img/mimimi.jpg";
				}
			}