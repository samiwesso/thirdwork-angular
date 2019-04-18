



   
       





     // $scope.namelist = namelist;
    //  $scope.rowLimits = "10 selected";
     // $scope.sortColumn = "productname";
     $(window).scroll(function() {
        let topPosition = $(this).scrollTop();

        console.log(topPosition);

        if(topPosition > 100) {
            $(".scrollTop").css("opacity","1");
        } else {
            $(".scrollTop").css("opacity","0");
        }
    })
