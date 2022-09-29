    function counter() {
    var counter = 0;
    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
    }
var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());




let count = 0;
 function func()
 { if (count === 0)
     { let count = 1; 
        console.log(count);
     }
    }
    func();





    for (var i = 0; i < 3; i++)
     { setTimeout
        (function log() 
        { console.log(i);  }, 1000); }





        function rect(length)
        {
          let l = 20;
          function area(breadth){
            let b = 30;
            console.log(l*b)  
          }area(30)
        }
        rect(20)
        




        function count1(){
            let count1 = 0;
            function execute(){
              return count = count+1
            }
            return execute;
          }
          count1 = count1();
          console.log(count1())
          console.log(count1())
          console.log(count1())
          console.log(count1())
          console.log(count1())




           var a = 12;
            function my() 
            { alert(a); 
            }
            my();




            var a = 10;
             var x = (function ()
              { var a = 12;
                 return function () 
                 { alert(a); };
                 })
                 ();
                x();





        var globalVar = "xyz";
         (function outerFunc(outerArg)
          { var outerVar = 'a';
           (function innerFunc(innerArg)
           { var innerVar = 'b';
            console.log( "outerArg = " + outerArg + "\n" + "innerArg = " + innerArg + "\n" + "outerVar = " + outerVar + "\n" + "innerVar = " + innerVar + "\n" + "globalVar = " + globalVar);
         })
         (456); 
        })
        (123);

