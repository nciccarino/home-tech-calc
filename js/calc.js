		$(document).ready(function() { 

			function handleDrop() {
				var cat = $("#catSelect").val();
				var typ = $("#typeSelect").val();

				console.log(cat)

				if (cat == 2 || cat == 4) {
					$("#CabBudget").val(30);
					$("#FloorBudget").val(8);
					$("#CounterBudget").val(10);
					$("#AppBudget").val(25);
					$("#LightingBudget").val(8);
					$("#WallBudget").val(3);
					$("#LaborBudget").val(15);
					$("#MiscBudget").val(1);
					if (typ == 0) {
						$("#PercentHome").val(7);
					}
					if (typ == 1) {
						$("#PercentHome").val(9);
					}
				} 
				if (cat == 0) {
					$("#CabBudget").val(40);
					$("#FloorBudget").val(7);
					$("#CounterBudget").val(12);
					$("#AppBudget").val(8);
					$("#LightingBudget").val(4);
					$("#WallBudget").val(3);
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
					// document.getElementById('budget').value = TotalBudget
				}

				var Cabinet = TotalBudget * (document.getElementById('CabBudget').value / 100)
				var Flooring = TotalBudget * (document.getElementById('FloorBudget').value / 100)
				var Counter = TotalBudget * (document.getElementById('CounterBudget').value / 100)
				var Appliance = TotalBudget * (document.getElementById('AppBudget').value / 100)
				var Lighting = TotalBudget * (document.getElementById('LightingBudget').value / 100)
				var Wall = TotalBudget * (document.getElementById('WallBudget').value / 100)
				var Labor = TotalBudget * (document.getElementById('LaborBudget').value / 100)
				var Misc = TotalBudget * (document.getElementById('MiscBudget').value / 100)

				$("#cabinetCalc").html("$ " + Cabinet.toFixed(2).toLocaleString());
				$("#flooringCalc").html("$ " + Flooring.toFixed(2).toLocaleString());
				$("#counterCalc").html("$ " + Counter.toFixed(2).toLocaleString());
				$("#applCalc").html("$ " + Appliance.toFixed(2).toLocaleString());
				$("#lightCalc").html("$ " + Lighting.toFixed(2).toLocaleString());
				$("#wallCalc").html("$ " + Wall.toFixed(2).toLocaleString());
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
				}

				$("#roiCalc").html("<b>$ " + netVal.toFixed(2).toLocaleString() + "</b>")

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

		})