    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();   
    });
        $( document ).on('click keyup change' ,function() {
            var cards = new Array;
            var amountxxx =new Array;
            $('.cards').each(function( index ){
               cards.push(parseInt($(this).val()));
            });
            $('.amount').each(function( index ){
               amountxxx.push(parseInt($(this).val()));
            });
            var sum = 0;
            for(var i=0; i< cards.length; i++) {
                sum += cards[i]*amountxxx[i];
            }
            var tdp = parseInt(sum) + parseInt($('#other').val()) + parseInt($('#harddriveo').val()) + parseInt($('#cpuo').val()) + parseInt($('#mainboardo').val());
            var perunit = $('#kafaiperunit').val();
            var perunit250 = $('#kafaiperunit250').val();
            var perunit400 = $('#kafaiperunit400').val();
            var hourperday = $('#hourperday').val();
            var amount = $('#amount').val();
            var fts = $('#ft').val();
            var ft = fts/100;
            var unitperday = tdp*hourperday/1000;
            var unitbase = $('#unitbase').val();
            var unitpermonthx = unitperday*30;
            var unitpermonth = parseInt(unitpermonthx) + parseInt(unitbase);
            var ftpermonth = ft*unitperday*30;
            $('#showtdp').text(tdp.toString().concat('วัตต์'));
            $('#showunitperday').text(unitperday.toString().concat('ยูนิต'));
            $('#showunitpermonth').text(unitpermonth.toString().concat('ยูนิต'));
            $('#showft').text(ftpermonth.toString().concat('บาท'));
            if(unitpermonth <= 150){
                $('#yesornot').text('ค่าไฟน้อยกว่า 150 ยูนิตต่อเดือน');
                var result = ((unitpermonth*perunit)-ft)*1.07;
                $('.result').text(parseFloat(result).toFixed(2));
                $('.resultperday').text(parseFloat(result/30).toFixed(2));
                $('.resultperweek').text(parseFloat(result/4.285714286).toFixed(2));
                $('.resultperyear').text(parseFloat(result*12).toFixed(2));
                $('#tax').text(parseFloat(((unitpermonth*perunit)-ft)*0.07).toFixed(2));
                
            }
            else if(unitpermonth >150 && unitpermonth <400){
                $('#yesornot').text('ค่าไฟมากกว่า 250 ยูนิตต่อเดือน');
                var result = ((unitpermonth*perunit)-ft)*1.07;
                var above150 = unitpermonth-150;
                var result = (150*perunit + 4.2218*above150) - ft;
                $('.result').text(parseFloat(result).toFixed(2));
                $('.resultperday').text(parseFloat(result/30).toFixed(2));
                $('.resultperweek').text(parseFloat(result/4.285714286).toFixed(2));
                $('.resultperyear').text(parseFloat(result*12).toFixed(2));
                $('#tax').text(parseFloat(((unitpermonth*perunit)-ft)*0.07).toFixed(2));
            }
            else if(unitpermonth >=400){
                $('#yesornot').text('ค่าไฟมากกว่า 400 ยูนิตต่อเดือน');
                var above400 = unitpermonth-400;
                var result = ((150*perunit + perunit250*250 + perunit400*above400) - ft)*1.07;
                console.log(perunit);
                console.log(perunit250);
                console.log(perunit400);
                console.log('above400'+above400);
                console.log('above150'+above150);
                $('.result').text(parseFloat(result).toFixed(2));
                $('.resultperday').text(parseFloat(result/30).toFixed(2));
                $('.resultperweek').text(parseFloat(result/4.285714286).toFixed(2));
                $('.resultperyear').text(parseFloat(result*12).toFixed(2));
                $('#tax').text(parseFloat(((150*perunit + perunit250*250 + perunit400*above400) - ft)*0.07).toFixed(2));
            }
            
            
        });
    $('#addappend').on('click', function(){
        var appendthisthing = ` 
                        <div class='addedappended'>
                        <div class='col-md-6'>
                        <select id='card' class='cards form-control' class="form-control">
                            <option disabled selected>รุ่นการ์ดจอ</option>
                            <option disabled>Nvidea</option>
                            <option value='90'>GeForce GTX 950</option>
                            <option value='120'>GeForce GTX 960</option>
                            <option value='145'>GeForce GTX 970</option>
                            <option value='165'>GeForce GTX 980</option>
                            <option value='250'>GeForce GTX 980 Ti</option>
                            <option value='250'>GeForce GTX Titan X</option>
                            <option disabled>AMD</option>
                            <option value='150'>Radeon R9 270</option>
                            <option value='180'>Radeon R9 270X</option>
                            <option value='250'>Radeon R9 280</option>
                            <option value='190'>Radeon R9 280X</option>
                            <option value='250'>Radeon R9 285</option>
                            <option value='250'>Radeon R9 290</option>
                            <option value='250'>Radeon R9 290X</option>
                            <option value='500'>Radeon R9 295X2</option>
                        </select>
                    </div>
                    <div class='col-md-6'>
                        <div class='form-group'>
                            <div class="input-group">
                                <input type="text" class="form-control amount" id="amount" placeholder="จำนวนการ์ดจอ">
                                <div class="input-group-addon">ใบ</div>
                                <div class="removeappend input-group-addon"><span class='glyphicon glyphicon-minus'></span></div>
                                
                            </div>

                        </div>
                    </div>
                </div>
                `
        $('.addtothis').append(appendthisthing);
    });


$( document).on("click", ".removeappend",function() {
      $(this).closest('.addedappended').remove();
});
