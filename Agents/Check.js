async function runDetection() {
 
  const model = await cocoSsd.load( );


  const img = document.getElementById('dog.png');

 
  if (!img.complete) {
    await new Promise(res => img.onload = res);
  }

 
  const predictions = await model.detect(img);

  
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = '<h2>Detection Results:</h2>';

  predictions.forEach(({ class: className, score }) => {
    outputDiv.innerHTML +=
      `<p>Class: <strong>${className}</strong> |
       Score: <strong>${(score * 100).toFixed(2)}%</strong></p>`;
  });
}


window.onload = runDetection;
