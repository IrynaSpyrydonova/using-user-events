function typeCastHandler(event) {
  // read & process user input
  const form = event.target.form;
  const intendedType = form.type.value;
  const newValue = form.value.value;

  // execute core logic
  const result = typeCaster(newValue, intendedType);
  
  // communicate result to user
  document.getElementById('casted-value').innerHTML = typeof result + ': ' + result;

  // log action for developers
  console.log('\n-- user action --');
  console.log('stringToCast:', '(' + typeof newValue + ')', newValue);
  console.log('intendedType:', '(' + typeof intendedType + ')', intendedType);
  console.log('newValue:', '(' + typeof newValue + ')', newValue);
}

