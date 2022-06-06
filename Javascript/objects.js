// in js objects are basically key value pair

//to declare an object
//let obj={}// object declaration

//let person={
  //  name:'Mohit'
//}
//console.log(person)

//let person={
  //  name:'Mohit',
    //age:20,
    //phone:12345,
  //}
  //console.log(person)

 // let cap={
   //   firstName:'Steve',
     // lastName:'rogers',
      //friends:['Bucky','tony','dr banner'],
      //age:102,
      //address:{
        //  state:'manhattan',
          //city:'New york',
      //},
      //sayHi:function fn(){
      //console.log('captain says hi')
      //}
  //}
  //console.log(cap)//   output      {
    //firstName: 'Steve',
    //lastName: 'rogers',
    //friends: [ 'Bucky', 'tony', 'dr banner' ],
    //age: 102,
    //address: { state: 'manhattan', city: 'New york' },
    //sayHi: [Function: fn]
 // }
 //console.log(cap.firstNme)//steve      
 //acess the property of an object

 //console.log('My best freind is'captureEvents.freinds[0])//my best freind is bucky
 //console.lof(cap.addresss.city)//new york
 //cap.sayHi()//captain says hi


 //loop->for in loop
 //---------------------------------------------------------------------------------------------

 let cap={
      firstName:'Steve',
       lastName:'rogers',
       friends:['Bucky','tony','dr banner'],
       isAvenger:true,
       age:102,
       address:{
           state:'manhattan',
           city:'New york',
       },
       sayHi:function fn(){
       console.log('captain says hi')
       }
   }
   for(let key in cap){
       console.log('key:',key,'value:',cap[key])
   }
   //outpu;key: firstName value: Steve
//key: lastName value: rogers
//key: friends value: [ 'Bucky', 'tony', 'dr banner' ]
//key: age value: 102
//key: address value: { state: 'manhattan', city: 'New york' }
//key: sayHi value: [Function: fn]

//cap.isAvenger=false
//console.log(cap)
//OUTPUT->{
//  firstName: 'Steve',
  //lastName: 'rogers',
  //friends: [ 'Bucky', 'tony', 'dr banner' ],
  //isAvenger: false,
  //age: 102,
  //address: { state: 'manhattan', city: 'New york' },
  //sayHi: [Function: fn]
//}

//cap.movies=['Age of ultrons','first avenger']
//console.log(cap)
//output
//{
  //  firstName: 'Steve',
    //lastName: 'rogers',
    //friends: [ 'Bucky', 'tony', 'dr banner' ],
    //isAvenger: true,
    //age: 102,
    //address: { state: 'manhattan', city: 'New york' },
    //sayHi: [Function: fn],
    //movies: [ 'Age of ultrons', 'first avenger' ]
  //}

  //delete cap.age
  //console.log(cap)//{
    //firstName: 'Steve',
    //lastName: 'rogers',
    //friends: [ 'Bucky', 'tony', 'dr banner' ],
    //isAvenger: true,
    //address: { state: 'manhattan', city: 'New york' },
    //sayHi: [Function: fn]
  //}

 