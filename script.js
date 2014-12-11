// Code goes here

angular.module('wasntme',[]);
angular.module('wasntme').controller('Ctrl', function($scope){
  $scope.smallText = 'She even caught me on camera?';
  $scope.bigText = 'wasn\'tMeme!';
  $scope.img = '3.jpg';
  
  $scope.changeText = function(){
    
    var box = document.querySelector('#nome'),
        ctx = box.getContext('2d'),
        image = new Image();
    
    box.width = box.width;
    image.src = $scope.img;

    image.onload = function(){
        ctx.drawImage(image,0,0, box.width, box.height);
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        //ctx.fill();
        //ctx.stroke();
        ctx.strokeStyle = 'black';
        ctx.font = 'bold 69px impact';
        ctx.textAlign = 'center';
        ctx.lineWidth=5;
        ctx.strokeText($scope.bigText.toUpperCase(), 200, 300);
        ctx.font = '70px impact';
        ctx.fillText($scope.bigText.toUpperCase(), 200, 300);
        
        ctx.strokeStyle = 'black';
        ctx.font = 'bold 21px impact';
        ctx.textAlign = 'center';
        ctx.lineWidth=5;
        ctx.strokeText($scope.smallText.toUpperCase(), 200, 100);
        ctx.font = '20px impact';
        ctx.fillText($scope.smallText.toUpperCase(), 200, 100);

        ctx.getImageData(0,0,400,400);


    };
  };
  $scope.changeText();
});