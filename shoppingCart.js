var app = angular.module('myApp', [])
function CartControler($scope)  
{
    $scope.books = [
    {title: 'Absolute Java',    
        qty: 1, price: 114.95},
    {title: 'Pro HTML5',        
        qty: 1, price: 27.95},
    {title: 'Head First HTML5', 
        qty: 1, price: 27.89}
    ];
    $scope.total=0;

    $scope.removeBook = function(index) 
    {
        $scope.books.splice(index, 1);
    }

    $scope.count = 0;
    $scope.updateBookCount = function() {
        console.log("updateBookCount...");
        $scope.count = $scope.books.length;
    }
    $scope.dataLoad=function()
    {
    if(window.localStorage.length!=0){
        $scope.books=JSON.parse(window.localStorage.getItem("book"));
    }
    }
    $scope.addNew=function()
    {
        var newBook={title: 'New Book',
            qty: 1, price: 10.99};
        $scope.books.push(newBook);

    }
    $scope.save=function(){
        window.localStorage.setItem("book",JSON.stringify($scope.books));
    }
    $scope.updateTotal = function(totalValue) 
    {
        $scope.total=0;
        for(value in totalValue)
        {
            $scope.total+=totalValue[value].price*totalValue[value].qty;
        }
    }
    $scope.$watch('books', function() {
        $scope.updateBookCount();
        $scope.updateTotal($scope.books);
    }, true)
}
