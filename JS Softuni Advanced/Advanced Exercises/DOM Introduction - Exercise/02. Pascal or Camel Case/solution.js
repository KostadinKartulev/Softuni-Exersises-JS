function solve() {
  let textToBeConvertedElement = document.getElementById('text');
  let namingConventionTextElement = document.getElementById('naming-convention');

  let textToBeConverted = textToBeConvertedElement.value.split(' ');

  let resultElement = document.getElementById('result');

  if (namingConventionTextElement.value === "Pascal Case") {
    textToBeConverted = textToBeConverted.map(x => {
      x=x[0].toLocaleUpperCase()+x.slice(1).toLocaleLowerCase();
      return x;
    });
  } else if (namingConventionTextElement.value === "Camel Case") {
    textToBeConverted = textToBeConverted.map((x, i) => {
      x = i==0? x.toLocaleLowerCase():x[0].toLocaleUpperCase() + x.slice(1).toLocaleLowerCase();
      return x;
    });

  } else {
    resultElement.textContent = "Error!";
    return;
  }

  resultElement.textContent = textToBeConverted.join('');
}