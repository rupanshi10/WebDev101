function addElement() {
    // Create a paragraph element
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "BREAKING NEWS!!   Bronny James, LeBron James' Son, Loses First Los Angeles Lakers Match. The 19-year-old managed just four points in a summer league contest for prospects and newcomers.";


    // Create a button element
    const newButton = document.createElement("button");
    newButton.textContent = "DID YOU KNOW!!";
  
    // Add click event listener to the button (optional)
    newButton.addEventListener("click", function() {
      alert("Button clicked!");
    });
  
    // Target the existing element to append to (replace with your element's id)
    const targetElement = document.getElementById("content-area");
  
    // Append the paragraph and button to the target element
    targetElement.appendChild(newParagraph);
    targetElement.appendChild(newButton);
  }