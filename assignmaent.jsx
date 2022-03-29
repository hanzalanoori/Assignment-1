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
    let result = Emp.map(function(x){
        return x.name
    })
    
    
    // with forEach function
     let xa = [];
     let result12 = Emp.forEach(function(key , Index){
        xa.push(key.id)
     })
    
    console.log(xa);
    console.log(result)

    