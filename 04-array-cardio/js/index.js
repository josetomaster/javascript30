const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];
    
    const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];


    //1.-Filter the list of inventors for those who were born in the 1500
    const inventorsBornIn1500 = 
        inventors.filter(inventor => {
            let year = inventor.year;
            if(year >= 1500 && year < 1600){
                return true;
            }
            return false;
    });
    
    console.log("1.- inventors filtered with those who were born in 1500",inventorsBornIn1500);

    //2.- Give us an array of the inventory first and last names

    const firstAndLastName = inventors.map(inventor => Array.of(inventor.first,inventor.last));

    console.log('2.- array of the inventor first and last names',firstAndLastName);
    
    //3.- sort the inventors by birthdate, oldest to youngest
    const inventorsOrderedByBirthdateDescendent = inventors.sort((inventorA,inventorB) => inventorB.year - inventorA.year);
    
    console.log('3.- inventors sorted by birthdate, oldest to youngest',inventorsOrderedByBirthdateDescendent);
   
    //4.- how many years did all the inventors live?
    const yearsLivedByAllInventors = inventors
        .map(inventor => inventor.passed - inventor.year)
        .reduce((acumulator, currentValue) => acumulator + currentValue);
    
    console.log('4.- total of years lived by all inventors: ', yearsLivedByAllInventors);

    //5.- sort the inventors by years lived

    const inventorsSortedByYearsLived = inventors
        .sort((inventorA,inventorB) => {
            let yearsLivedInventorA = inventorA.passed - inventorA.year;
            let yearsLivedInventorB = inventorB.passed - inventorB.year;
            return yearsLivedInventorA - yearsLivedInventorB;
        });

    console.log('5.- inventors sorted by years lived', inventorsSortedByYearsLived);

    //6.- sort exercise
    // sort the people alphabetically by last name
    const peopleSortedByLastName = people
        .sort((fullName1, fullName2) => {
            let [lastName1]  = fullName1.split(', ');
            let [lastName2]  = fullName2.split(', ');
            return lastName1 > lastName2;
        })
    console.log('6.- people names sorted by last name',peopleSortedByLastName);
    
    //7.- sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
    const objectWithSumOfInstances = data
        .reduce((obj,car) => {
            if(car in obj){
                obj[car]++;
            }
            return obj;
        },{
            car:0,
            truck:0,
            bike:0,
            walk:0,
            van:0
        });
    console.log('7.- sum of instances of data (means of transportation)',objectWithSumOfInstances);