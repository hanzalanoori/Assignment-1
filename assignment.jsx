// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
    
   
    const Emp = [{
        id : 1,
        name : 'Hadi Swaleh',
        designation : 'Team Lead'
    },{
        id : 2,
        name : 'Hanzala',
        designation : 'Team Lead'
    },{
        id : 3,
        name : 'Aamir Rauf',
        designation : 'Team Lead'
    },{
        id : 4,
        name : 'Hunaina Akhai',
        designation : 'Team Lead'
    },{
        id : 5,
        name : 'Asim Fareed',
        designation : 'Director IT'
    },]
    
     
   // with map function
    let resultkey = Emp.map(function(x , Index){
        return Index
    })
    let result = Emp.map(function(x){
        return x.name
    })
    
    
    // with forEach function
     let xa = [];
     let result12 = Emp.forEach(function(key , Index){
        xa.push(Index)
     })
     
      let ba = [];
     let result13 = Emp.forEach(function(key , Index){
        ba.push(key.name)
     })
    
    //map
    console.log(resultkey)
    console.log(result)
    
    // foreach
    console.log(xa);
    console.log(ba);
    

    
