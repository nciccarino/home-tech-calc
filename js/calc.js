		$(document).ready(function() { 

			var typeTab = 1; 

			var yr = new Date().getFullYear()
			console.log(yr); 
			$("#year").html(yr); 

			function handleDrop() {
				var cat = $("#catSelect").val();
				var typ = $("#typeSelect").val();

				console.log(cat)

				if (cat == 2 || cat == 4) {
					$(".shower").css("display", "table-cell");
					$("#walls").html("Painting"); 
					$("#floor").html("Tile (Floor + Bath Surround)")
					$("#plumb").html("Plumbing Fixtures"); 

					$("#CabBudget").val(17);
					$("#FloorBudget").val(26);
					$("#CounterBudget").val(9);
					$("#AppBudget").val(15);
					$("#LightingBudget").val(10);
					$("#WallBudget").val(5);
					$("#GlassBudget").val(7);
					$("#LaborBudget").val(10);
					$("#MiscBudget").val(1);
					if (typ == 0) {
						$("#PercentHome").val(7);
					}
					if (typ == 1) {
						$("#PercentHome").val(9);
					}
				} 
				if (cat == 0) {
					$(".shower").css("display", "none");
					$("#walls").html("Wall Covering");
					$("#floor").html("Flooring"); 
					$("#plumb").html("Appliances");

					$("#CabBudget").val(40);
					$("#FloorBudget").val(7);
					$("#CounterBudget").val(12);
					$("#AppBudget").val(8);
					$("#LightingBudget").val(4);
					$("#WallBudget").val(3);
					$("#GlassBudget").val(0);
					$("#LaborBudget").val(25);
					$("#MiscBudget").val(1);
					// $("#PercentHome").val(12);
					if (typ == 0) {
						$("#PercentHome").val(11);
					}
					if (typ == 1) {
						$("#PercentHome").val(13);
					}
				}
			}

			function TotalCostKitchen() { 

				var roiArr = [42, 39, 40, 42, 60, 47, 59, 59, 52, 52, 61, 54, 49, 50, 39, 36, 40, 75] //2018

				var loc = $("#locSelect").val();
				var cat = $("#catSelect").val();
				var type = $("#typeSelect").val(); 

				console.log(loc + " - " + cat + " - " + type)  

				var roiArr2 = roiArr.slice(loc)
				var roiArr3 = roiArr2.slice(cat)
				var roiArr4 = roiArr3.slice(type)

				var roi = (roiArr4[0] / 100); 

				console.log(roi)

				var TotalBudget = 0

				var homeStr = document.getElementById('HomeValue').value; 
				var valHome = Number(homeStr)
				console.log(valHome)

				var ProjBudget = ((document.getElementById('HomeValue').value)*((document.getElementById('PercentHome').value)/100))
				if (document.getElementById('budget').value > 0) {
					TotalBudget = (document.getElementById('budget').value)
				} else {
					TotalBudget = ProjBudget
				}

				// if(typeTab = 0) {
				// 	TotalBudget = ProjBudget
				// }
				// if(typeTab = 1) {
				// 	TotalBudget = (document.getElementById('budget').value)
				// }

				var Cabinet = TotalBudget * (document.getElementById('CabBudget').value / 100);
				var Flooring = TotalBudget * (document.getElementById('FloorBudget').value / 100);
				var Counter = TotalBudget * (document.getElementById('CounterBudget').value / 100);
				var Appliance = TotalBudget * (document.getElementById('AppBudget').value / 100);
				var Lighting = TotalBudget * (document.getElementById('LightingBudget').value / 100);
				var Wall = TotalBudget * (document.getElementById('WallBudget').value / 100);
				var Glass = TotalBudget * (document.getElementById('GlassBudget').value / 100);
				var Labor = TotalBudget * (document.getElementById('LaborBudget').value / 100);
				var Misc = TotalBudget * (document.getElementById('MiscBudget').value / 100);

				$("#cabinetCalc").html("$ " + Cabinet.toFixed(2).toLocaleString());
				$("#flooringCalc").html("$ " + Flooring.toFixed(2).toLocaleString());
				$("#counterCalc").html("$ " + Counter.toFixed(2).toLocaleString());
				$("#applCalc").html("$ " + Appliance.toFixed(2).toLocaleString());
				$("#lightCalc").html("$ " + Lighting.toFixed(2).toLocaleString());
				$("#wallCalc").html("$ " + Wall.toFixed(2).toLocaleString());
				$("#glassCalc").html("$ " + Glass.toFixed(2).toLocaleString()); 
				$("#laborCalc").html("$ " + Labor.toFixed(2).toLocaleString());
				$("#miscCalc").html("$ " + Misc.toFixed(2).toLocaleString());

				if (valHome != null && valHome != 0 && valHome != NaN) {

					var pleaseWork = $('<th>Total Budget</th><td>$ <input id="budget" type="number" size="5" name="budget" value="' + ProjBudget + '"/></td>')
					$("#theBudget").html(pleaseWork);
					$("#totalCalc").html("<b>$ " + ProjBudget.toFixed(2).toLocaleString() + "</b>")

					var netVal = ProjBudget * roi; 
					var newHome = valHome + netVal; 
					console.log(newHome)
					$("#homeCalc").html("<b>$ " + newHome.toFixed(2).toLocaleString() + "</b>")

					$("#roiCalc").html("<b>$ " + netVal.toFixed(2).toLocaleString() + "</b>")
				}

				var location = $("#locSelect").find(":selected").text(); 
				var projTypee = $("#catSelect").val(); 
				var projType = $("#catSelect").find(":selected").text();
				var qual = $("#typeSelect").find(":selected").text();

				$(".callButtonKitchen").css("display", "none");
				$("#resetCalc").css("display", "block");

				var parKitchen = "The kitchen is the entertainment center of any home. Therefore, it is consistently one of the most satisfying return on investments in a home improvement. An investment that adds appreciating value to your home and quality of living. The kitchen is one of the top considerations for home buyers when considering a home purchase. 3 out of 4 potential home buyers will purchase a home with a newer kitchen over a home without an updated kitchen.";
				var parBath = "Homeowners regularly use bathroom more than any other room. Most homeowners do not take long baths, and opt for a large multi-function shower environment.	Master baths are truly created around very personal aesthetics and truly become a sanctuary of admiration and pleasure. They are one of the top return on investments you can make in your home. Improve water pressure and showering experience with upgraded shower fixtures. High quality tile, stone, and fixtures have enduring value and reflect desirable factors when time to sell… Make your bath a vacation!";

				if (projTypee == 2 || projTypee == 4) { 
					$(".paragraph").html(parBath);
				}
				if (projTypee == 0) {
					$(".paragraph").html(parKitchen);
				}

				var res = "Based on your budget of <span><b>$" + ProjBudget.toFixed(2).toLocaleString() + "</b></span>, a new <span><b>" + projType + "</b></span> in <span><b>" + location + "</b></span> with custom <span><b>" + qual + "</b></span> features will have an estimated return on investment of <span><b>$" + netVal.toFixed(2).toLocaleString() + "</b></span>, increasing your home value to <span><b>$" + newHome.toFixed(2).toLocaleString() + "</b></span>!";

				$(".rescalc").html(res);

			}

			function handleTotal() {
				var thisInput = this;
				var validate = [];

				var thisVal = $(thisInput).val()
				console.log(thisVal)

				$(".breakdown").each(function(){
					var num = $(this).val();
					var numb = Number(num)
					validate.push(numb)
				})

				console.log(validate)

				const reducer = (accumulator, currentValue) => accumulator + currentValue;
				var reduced = validate.reduce(reducer);
				console.log(reduced);

				if(reduced > 100) {
					var rem = reduced - 100; 
					console.log(rem);
					var fix = thisVal - rem;
					console.log(thisVal)
					console.log(fix); 
					$(thisInput).val(fix)
				}
				if(reduced <= 100) {
					$("#totalCalc").html(reduced + " %")
				}
			}

			$(document.body).on("click", '.callButtonKitchen', TotalCostKitchen);
			$(document.body).on("click", ".breakdown", handleTotal); 
			$(document.body).on("click", ".dropSelect", handleDrop);

			$("#home-tab").on("click", function(){
				$("#budgetTable").css("display", "none");
				$("#homeValueTable").css("display", "block");
				typeTab = 0;
			});

			$("#profile-tab").on("click", function(){
				$("#budgetTable").css("display", "block")
				$("#homeValueTable").css("display", "none");
				typeTab = 1; 
			});

			$("#resetCalc").on("click", function(){
				window.location.reload()
			})

		});