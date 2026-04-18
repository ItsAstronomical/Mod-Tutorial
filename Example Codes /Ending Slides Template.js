// constructs endings based on header and pages
construct = (a = 1) => {
	
  e.page = e.page + a < e.pages.length ? e.page + a : 0
  let html = e.header;
  html += e.pages[e.page] + "<br>";
  if (e.page > 0) {
  
  html += `<button onclick='endingConstructor(a = -1)'>Back</button>`
  }
  if (e.page < e.pages.length - 1) {
  
  html += `<button onclick='endingConstructor(a = 1)'>Next</button>`
  }
  
  for (i in e.executable) {
  if (e.executable[i][0] == e.page) {
      e.executable[i][1]();
    
  }
  }
  
  if (e.image == true)
  setTimeout(()=>{
    candImg = $(".person_image")[0]
    if (candImg) {
      candImg.remove()
    console.log("TRYING");
      $("#final_results_description")[0].style = `
        text-align:left;
        width: 72%;
      height:71%;
        display: block;
        margin-left: auto;
        margin-right: auto;
      overflow: auto;
      `
     console.log("RESULTS UPDATED");
    }
  }, 10)
  else if (e.image)
  setTimeout(()=>{
    candImg = $(".person_image")[0];
    if (candImg) {
      candImg.src = e.image;
    console.log("TRYING");
      $("#final_results_description")[0].style = `
        text-align:left;
        width: 72%;
      height:71%;
        display: block;
        margin-left: auto;
        margin-right: auto;
      overflow: auto;
      `
     console.log("RESULTS UPDATED");
    }		
  }, 10)
  
  return html;
}
  
endingConstructor = (a = 1) => {
  $("#final_results_description")[0].innerHTML = construct(a);
}
  
// ENDINGS -- this is slightly more reliable than the ending code method
  
e.multiple_endings = true;
  
e.header = "<h1>error</h1>";
e.pages = ["<p>This is an error handler</p>"];
e.page = 0;

endingPicker = (out, totv, aa, quickstats) => {

// Your ending code should be put here!


// required to actually build the pages
return construct(0);
}
