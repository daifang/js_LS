(function(w,d){
    function main(id,time){
        this.id = id;
        this.time = time;
    }
    var ul = d.getElementById('itemlist');
    main.prototype.lunBo = function(){
        
        console.log(ul);
        // for(var i = 0;i<liArray.length;i++)
        // {
        //     (function(j){
        //         liArray[i].onmouseover = function(){
        //             liArray[i].className = 'active';
        //         }
        //     })(i) 
        // }
    }
    w.main = main;
})(window,document)

var lunBo = new window.main();
lunBo.lunBo();