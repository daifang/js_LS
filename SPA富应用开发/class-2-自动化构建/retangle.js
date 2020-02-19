$(function(){
   var $width = $('#width');
   var $height = $('#height');
   var $btnCal = $('#calculate');
   var $perimeter = $('#perimeter');
   var $area = $('#area');

    $btnCal.click(function(){
        var w =($width.val()) ,
            h = ($height.val());
        var wLength = w.split('.')[1].length;
        var hLength = h.split('.')[1].length;
        var p = 2 * roundFractional(Number(w) + Number(h),wLength>hLength?wLength+1:hLength+1),
            a = roundFractional( Number(w) * Number(h),(wLength) + (hLength));
            $perimeter.val(p);
            $area.val(a);
    })

    function roundFractional(x, n) {
        return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
      }

})