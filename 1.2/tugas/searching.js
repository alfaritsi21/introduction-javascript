// TUGAS 2

const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'
  ]
  
  function searchName (value, limit, callback) {
      return name.filter(function(element) {
        return callback(element, value)
    }).slice(0, limit)
  }

  function checkString(string, value){
    return string.toLowerCase().indexOf(value.toLowerCase()) !== -1
  }
  
  console.log(searchName('an', 3, checkString)) 